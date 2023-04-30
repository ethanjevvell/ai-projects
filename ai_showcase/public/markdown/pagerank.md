The challenge for this project was to find the “pagerank” for each page in a corpus of websites. In short, the pagerank for a website is a proxy for how important that page is, based on how many other websites link to that website. (If you’re curious, Larry Page and Sergey Brin invented the algorithm that accomplishes this in 1996, and it formed the basis of Google’s search functionality for a while).

There are two approaches that CS50 asks students to implement: the “Random Surfer” and “iterative” algorithms.

### Random Surfer

The Random Surfer approach asks the following: How likely is a user to be on a given webpage at any moment in time? The intuitive answer is that a user is more likely to be on a website if it is often linked to by other sites. By clicking through sites link-by-link (where each link is chosen with equal probability as all other links on a given site), and counting how many times one arrives at each site in the corpus, we can approximate each site’s pagerank based on the proportion of times it appeared in our samples. Mathematically:

.

$$ PR(p*i) = \frac{1-d}{N} + d \sum*{p_j \in L(p_i)} \frac{PR(p_j)}{C(p_j)} + \frac{d}{N} $$

.

Simply put, one is likely to arrive at certain websites more often than others if links are “surfed” through randomly.

In code:

```python
def sample_pagerank(corpus, damping_factor, n):

    page_rank = {name: 0 for name in corpus}
    page = random.choice(list(corpus.keys()))

    while n > 0:
        page_rank[page] += 1
        dist = transition_model(corpus, page, damping_factor)
        keys = list(dist.keys())
        values = list(dist.values())
        page = random.choices(keys, weights=values, k=1)[0]
        n -= 1

    page_rank_sum = sum(page_rank.values())
    return {p: page_rank[p] / page_rank_sum for p in page_rank}

```

The transition_model function returns a probability distribution for how likely the user is to click on each given link. Here’s that function:

```python
def transition_model(corpus, page, damping_factor):

    pages = corpus[page]

    # If there are no links on the target page, the surfer is likely to end up anywhere in the corpus with equal probability
    if not pages:
        probability = 1 / len(corpus)
        return {page: probability for page in corpus}

    uniform_probability = (1 - damping_factor) / len(corpus)
    initial_probability = (1 / len(pages))

    probabilities = {p: (initial_probability * damping_factor) for p in pages}
    probabilities[page] = 0

    return {p: probabilities[p] + uniform_probability for p in probabilities}
```

This function is worth explaining more in detail. To ensure the algorithm does not crash when the user arrives at a page with no links, we return a probability distribution such that the surfer lands on any page in the corpus with equal probability.

Second, we introduce a damping factor. This variable, if set to 0.85, means that 85% of the time, the user will click on a link present on the current page. On the other hand, the user may decide to visit a website not linked to on the current site 15% of the time. This prevents the algorithm from getting stuck in an infinite loop if website A only links to website B, and vice versa.

We then create a dictionary of probabilities and populate it with 1) the name of the page, p, and 2) the initial probability of the user clicking the link. The initial probability is multiplied by the damping factor because 85% of the time the user will visit one of the links on the current site. Note that the initial probability was set to exactly 1 / len(pages), which means on a site with four links, each link has exactly a 25% chance of being selected. We multiply 0.25, therefore, by the damping factor to calculate the chances of the link being clicked.

We then add the current page to the current probabilities distribution with a value of 0. This will make more sense momentarily.

Finally, a “uniform probability” is applied, which accounts for the 15% of the time the user decides to visit any page in the corpus, including the current page (again). In the event the user decides to visit any page in the corpus, again each page in the corpus has an equal chance of being selected. Thus, the chance of selected is `(1 — d) / len(corpus)`.

We add the uniform probability to each item in our probabilities dictionary to arrive at the solution.

### Iterative Algorithm

The iterative algorithm is a bit harder to wrap one’s head around, but it produces consistent results down to whatever degree of accuracy we want.

We know that there are two ways one ends up on a webpage: 1) they clicked on a link, which brought them to the site; or 2) they chose the site randomly (again, with a probability of 1-d).

Thus, the probability one ends up on a site could be the odds of the random case and the sum of the pageranks of all sites that link to our given page. Mathematically:

$$PR(p_i) = \frac{1-d}{N} + d \sum_{p_j \in M(p_i)} \frac{PR(p_j)}{L(p_j)}$$

The first term represents the case that the user randomly selects our page p. The second term represents the sum of the pageranks of all pages i that link to page p, where each of pageranks for page i are divided by the number of links on page i. Finally, multiply that sum by our damping factor and add it to the first term to get the pagerank of i.

This process is repeated over and over until the pagerank for each site stops changing by a given margin (which we define in our code) — otherwise, it will continue ad infinitum.

Overall, the two different approaches clearly have different strengths. The Random Surfer approach is simpler (in my mind) and can likely be used to approximate complex probabilities relatively quickly, given N is sufficiently large.

Meanwhile, the iterative approach produces consistent results, but may prove untenable for larger datasets.
