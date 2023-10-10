---
title: "Colour Image Quantization"
date: 2023-10-10T14:59:49+10:00
draft: false
---

I recently started a project doing Colour Image Quantization using K-means clustering. I think clustering algorithms, in general, are interesting, and they happen to be a great way to learn about parallel computing and high-performance computing in general.

Colour quantization is quantization (compressing a range of values) applied to colour spaces, typically of images or video. In practice, this means taking an image, sampling its colour palette, and producing a smaller colour palette that maintains the detail and brightness of the original image.

This is typically achieved using a clustering algorithm. The colours in the colour palette are treated as vectors in 3D space, often represented in the RGB colour space (although there are other colour spaces better suited for this purpose), and the problem is solved using a clustering algorithm. For this project, I've opted for the straightforward 'Naive K-means' clustering algorithm.

In K-means clustering, we initialize a set of points as means, and then for each point in our colour space, we determine the closest mean and associate it with that mean. Subsequently, we calculate the average of all the points belonging to a mean, which serves as the new mean for that cluster.

By repeating this process until the algorithm converges, we can obtain a refined representation of the colour space using a significantly reduced palette.

Naturally, the algorithm's performance is quite sensitive to initial conditions. And so there are several methods you can use to initialize these cluster means. Of course, you could just randomly generate them, but this tends to not work out so well. In practice, the most commonly used methods are the "Forgy" method and "random" partitioning of the dataset.

The "Forgy" method randomly selects points from the dataset as cluster means, whereas the random method randomly assigns tags to each dataset point and then computes initial cluster means based on the averages of these tag sets, effectively starting the algorithm halfway through.

Both of these methods typically yield satisfactory results, but fine-tuning is often necessary to achieve the desired outcome. Moreover, there are numerous variations of the algorithm to consider, depending on factors such as the dataset, hardware capabilities, and more.

For my project, I am focusing on implementing the naive K-means algorithm because it's relatively simple to implement and easy to modify. The primary goal of this project is to explore using SIMD, as well as OpenMP and MPI, to speed up compute-heavy programs. (I'd also like to look at using CUDA to implement the algorithm, but that might end up being more of a stretch goal).

Currently, I have a basic implementation in C++, using the STB family of header libraries to handle image manipulation, and I'm looking at adding command-line arguments to make the program a bit more usable before I continue with the performance tuning. In the future, I'd also like to look at adding a graphical interface to the program, as it would make working with different image files a lot more convenient.