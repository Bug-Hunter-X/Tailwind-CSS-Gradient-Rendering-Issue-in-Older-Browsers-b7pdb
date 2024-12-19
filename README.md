# Tailwind CSS Gradient Rendering Issue

This repository demonstrates a common issue when using Tailwind CSS gradients in older browsers or those with limited CSS support. The gradient might not render correctly, resulting in unexpected visuals. This repository provides a simple example of the problem and a solution to mitigate it.

## Problem

The `linear-gradient` function used by Tailwind CSS gradients might not be supported by all browsers, leading to the gradient not rendering as intended.  This results in either a fallback color (often default) or broken display.

## Solution

The solution involves providing a fallback for unsupported `linear-gradient` scenarios, such as by using a solid background color.