# Information Retrieval using TF-IDF in NLP

This Python program demonstrates the use of the Term Frequency-Inverse Document Frequency (TF-IDF) method in natural language processing (NLP) for information retrieval. The program uses the `nltk` library to tokenize and analyze text data.

## What is TF-IDF?

TF-IDF is a numerical statistic that is used to reflect the importance of a word in a document relative to a collection of documents, known as a corpus. The TF-IDF value of a word increases with the number of times it appears in a document and is offset by the number of documents in the corpus containing the word. The method is commonly used in information retrieval, text mining, and document classification tasks.

## Program Overview

The program takes a directory of text files as input and allows users to enter a query. It then uses the TF-IDF method to identify the most relevant documents and sentences related to the query.

The `load_files()` function is used to read the content of each file in the provided directory and store them in a dictionary. The `tokenize()` function preprocesses the text data by converting it to lowercase, tokenizing it into words, and removing punctuation and stopwords.

The `compute_idfs()` function calculates the Inverse Document Frequency (IDF) values for each word across all documents. It first populates a dictionary with the number of times each word occurs in the corpus and then calculates the IDF values using the formula:

$$ IDF(t, D) = \log\frac{N}{|\{d \in D : t \in d\}|} $$

The `top_files()` function computes the TF-IDF scores for each document by multiplying the term frequency of each word in the query with its corresponding IDF value. The documents are then ranked based on their TF-IDF scores, and the top `n` documents are returned.

The `top_sentences()` function extracts sentences from the top documents and computes the IDF values across these sentences. It ranks the sentences based on the sum of the IDF values of the words in the query present in the sentence and the query term density (i.e., the proportion of query words in the sentence). The top `n` sentences are then returned as the final result.

## TF-IDF in NLP

TF-IDF is a powerful method in NLP used to measure the relevance of documents to a specific query. It helps in filtering out irrelevant documents and prioritizes the ones containing the most relevant information. This technique is widely used in search engines, document classification, and clustering tasks.
