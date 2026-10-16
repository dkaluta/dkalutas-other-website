# Answers

Answer the questions below in this file, under each question. Put screenshots in
a `screenshots/` folder and link them from your answers.

## 1. Challenges and dilemmas

List at list 2 challenges or dilemmas that you faced while building the design in Part 1,
and how you decided to solve them?

**Answer:**

1. I did not realize `display: none;` exists, and I was confused whether the mobile menu bar should be the same (how do we get the title centered?) or a new bar (duplicate code?). Eventually I found out the functionality
2. Was confused how to check for mobile from JavaScript, then I found out that media queries can also be checked from there.

## 2. Box model

Build the `.hello-world` example from the lesson 1 "CSS Box Model" slides, exactly as it appears
there, on a new page of your website. This page is only for answering questions
2 and 4, so it can be a temporary file, and you don't need to submit it.

Inspect the element with your browser's devtools.
Enable and disable `box-sizing: border-box;` and inspect the size of the element.
What is the total width, and why? Explain in detail.

**Answer:**
WITH BORDER BOX: Width is 100px. Plain width of the div is 100px, and padding / border is ignored.
WITHOUT BORDER BOX: Width is 110px, the setting to show the border is not toggled, and it is just `blue` rather than `solid blue`. If it were that way, the width would be 114px.

## 3. The viewport

Open the website on a mobile browser, or in the mobile view of Chrome's
devtools, then delete this line from the `<head>` of `index.html`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

What happens to your page? What does
this line tell the browser, and why does removing it affect your mobile design?

**Answer:**
To my page, upon deleting this line on both desktop Safari and Chrome (with phone-shaped scaling), removal of this 
line results in nothing. However, modifying the initial scale makes all contents of the website bigger (or smaller),
while the modification of width seems to make the width of the content bigger (or smaller), sometimes requiring scrollover.