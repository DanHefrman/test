[![onlinerandomtools logo](https://onlinerandomtools.com/images/logo-onlinerandomtools.png)](https://onlinerandomtools.com/)

Online CSV Tools Online TSV Tools Online JSON Tools Online YAML Tools Online XML Tools Online MATH Tools Online FRACTAL Tools Online NUMBER Tools Online INTEGER Tools Online UNICODE Tools Online ASCII Tools Online UTF8 Tools Online BINARY Tools Online HEX Tools Online STRING Tools Online RANDOM Tools Online IMAGE Tools Online JPG Tools Online PNG Tools Online FILE Tools Online HASH Tools Online CRYPTO Tools Online BITMAP Tools Online GIF Tools Online LINUX Tools Online TIME Tools Online BASE64 Tools Online LIST Tools Online SET Tools Online PDF Tools Online AUDIO Tools Online BROWSER Tools Online CSS Tools Online JS Tools Online TABLE Tools

Text paragraphs shuffler
========================

World's simplest randomization tool
-----------------------------------

Free online text paragraph shuffler. Just load your multi-paragraph data and get all paragraphs rearranged in random order. There are no ads, popups or nonsense, just a random paragraph mixer. Load your paragraphs – get shuffled paragraphs. Created by developers from team broowserools.

<span class="primary">announcement</span> <span class="secondary">heads up!</span>

We just launched a new site – [Online Integer Tools](https://onlineintegertools.com/) – a collection of utilities for crunching integers. Check it out!

A link to this tool, including input, options and all chained tools.

<span class="data-type">paragraphs</span> <span class="status"></span>

Import from file

Save as...

Copy to clipboard

Download

Export to Pastebin

<span class="data-type">shuffled paragraphs</span> <span class="status"></span>

Can't convert.

An error has occured.

Chain with...

Remove chain

Save as...

Copy to clipboard

Download

Export to Pastebin

<span class="remove-chain-text"> Remove <span class="remove-how-many">no tools</span>? </span>

This tool cannot be chained.

Reshuffle paragraphs

Text paragraphs shuffler options

<span class="option-group-legend">Paragraph Grouping</span>

Group Size <span class="option-details">Merge several paragraphs in buckets and rearrange them together.</span>

<span class="option-group-legend">Space Clearing</span>

Trim Data <span class="option-details">Delete trailing and leading whitespace in each line.</span>

<span class="option-details">Line trimming happens before text is split into paragraphs. All empty lines with just whitespace will create new paragraphs!</span>

<span class="option-group-legend">Сopy Removing</span>

Get Unique Paragraphs <span class="option-details">Delete paragraphs that are copies of other paragraphs.</span>

<span class="primary">Text paragraphs shuffler tool</span> <span class="secondary">What is a text paragraphs shuffler?</span>

This tool rearranges the order of paragraphs in the given textual data. A paragraph is considered to be a text blob that is separated by other blobs by one or more empty lines. The shuffling is done by the Richard Durstenfeld algorithm, which is a modern version of the Fischer-Yates algorithm. It generates a random number from 1 to n, which corresponds to the ordinal number of the paragraph (total n paragraphs). The selected paragraph is then moved to the end and then a new random number is selected again but this time in the range from 1 to n-1. This algorithm continues until all paragraphs are mixed. Using the options section, you can change the shuffle algorithm slightly. In particular, you can move paragraphs in groups of two, three, four, or more paragraphs. For example, if you have 6 paragraphs, you can create 2 groups of 3 paragraphs each and shuffle them in triples. In this case, only the first group (1st, 2nd, and 3rd paragraph) and the second group (4th, 5th, and 6th paragraph) will change the positions. That is, there will be two possible combinations in the output: either (1, 2, 3, 4, 5, 6) or (4, 5, 6, 1, 2, 3). As you can see, only the groups move but the paragraphs inside groups remain unchanged. You can also trim lines before shuffling. This allows you to clear lines of unnecessary spaces on the sides. But be careful – if any of the lines contain invisible whitespace, they'll create a new paragraph. Also, you can delete repeated paragraphs before shuffling and have only unique paragraphs printed in the output. Randomabulous!

<span class="primary">Text paragraphs shuffler examples</span> <span class="secondary">Click to use</span>

What a Wonderful World

In this example, we shuffle three verses of the song "What a Wonderful World" by Louis Armstrong. The shuffling algorithm selects each verse with the same probability and puts it in a random position from 1 to 3.

I see trees of green, red roses too I see them bloom for me and you And I think to myself what a wonderful world I see skies of blue and clouds of white The bright blessed day, the dark sacred night And I think to myself what a wonderful world The colors of the rainbow, so pretty in the sky Also on the faces of people going by I see friends shaking hands, saying how do you do They're only saying I love you

**Required options**

These options will be used automatically if you select this example.

Group Size <span class="option-details">Merge several paragraphs in buckets and rearrange them together.</span>

Trim Data <span class="option-details">Delete trailing and leading whitespace in each line.</span>

Get Unique Paragraphs <span class="option-details">Delete paragraphs that are copies of other paragraphs.</span>

Mix Paragraphs in a Quote

This example makes two modifications to the quote before shuffling. First, it trims lines and second, it removes repeated paragraphs. Trimming the lines makes them aligned on the left side, as well as makes the invisible whitespace at the end of lines removed. Removing repeated paragraphs deletes the last paragraph as it's a copy of the first paragraphs.

I am strong because I've been weak I am fearless because I've been afraid I am wise because I've been foolish. I am strong because I've been weak

I am strong because I've been weak I am fearless because I've been afraid I am wise because I've been foolish.

**Required options**

These options will be used automatically if you select this example.

Group Size <span class="option-details">Merge several paragraphs in buckets and rearrange them together.</span>

Trim Data <span class="option-details">Delete trailing and leading whitespace in each line.</span>

Get Unique Paragraphs <span class="option-details">Delete paragraphs that are copies of other paragraphs.</span>

Writing Systems

This example consists of six paragraphs. Each paragraph is one line long and every two paragraphs represent a writing system in the following order: Latin (paragraphs 1 and 2), Cyrillic (paragraphs 3 and 4), and Abugida (paragraphs 5 and 6). To avoid mixing the writing systems and keep them together, we merge paragraphs into groups of 2. This way, pairs of paragraphs are shuffled but paired writing systems are not shuffled.

English: "Hello" French: "Bonjour" Ukrainian: "Вітаю" Bulgarian: "Здравей" Khmer: "ជំរាបសួរ" Thai: "สวัสดี"

Khmer: "ជំរាបសួរ" Thai: "สวัสดี" English: "Hello" French: "Bonjour" Ukrainian: "Вітаю" Bulgarian: "Здравей"

**Required options**

These options will be used automatically if you select this example.

Group Size <span class="option-details">Merge several paragraphs in buckets and rearrange them together.</span>

Trim Data <span class="option-details">Delete trailing and leading whitespace in each line.</span>

Get Unique Paragraphs <span class="option-details">Delete paragraphs that are copies of other paragraphs.</span>

<span class="primary">Pro tips</span> <span class="secondary">Master online randomization tools</span>

You can pass input to this tool via <span class="underline">?input</span> query argument and it will automatically compute output. Here's how to type it in your browser's address bar. Click to try!

<span class="muted"><span class="green">https://</span>onlinerandomtools.com/shuffle-paragraphs</span><span class="underline">?input</span>=I%20see%20trees%20of%20green%2C%20red%20roses%20too%0AI%20see%20them%20bloom%20for%20me%20and%20you%0AAnd%20I%20think%20to%20myself%20what%20a%20wonderful%20world%0A%0AI%20see%20skies%20of%20blue%20and%20clouds%20of%20white%0AThe%20bright%20blessed%20day%2C%20the%20dark%20sacred%20night%0AAnd%20I%20think%20to%20myself%20what%20a%20wonderful%20world%0A%0AThe%20colors%20of%20the%20rainbow%2C%20so%20pretty%20in%20the%20sky%0AAlso%20on%20the%20faces%20of%20people%20going%20by%0AI%20see%20friends%20shaking%20hands%2C%20saying%20how%20do%20you%20do%0AThey%27re%20only%20saying%20I%20love%20you&shuffle-group-size=1&trim-lines=false&skip-duplicates=false

<span class="tool-matches-amount"></span>

<span class="primary">All randomization tools</span> <span class="secondary"><span class="cursor"></span></span>

Didn't find the tool you were looking for? <span class="request-tool">Let us know</span> what tool we are missing and we'll build it!

[Shuffle Letters](https://onlinerandomtools.com/shuffle-letters)

Randomly rearrange the letters in a string, sentence, or text.

[Shuffle Words](https://onlinerandomtools.com/shuffle-words)

Randomly shuffle the order of all words in the input data.

[Shuffle Text Lines](https://onlinerandomtools.com/shuffle-lines)

Randomly shuffle text lines and rearrange their order.

[Shuffle Text Paragraphs](https://onlinerandomtools.com/shuffle-paragraphs)

Randomly shuffle paragraphs and change their order.

[Pick a Random Item](https://onlinerandomtools.com/pick-random-item)

Randomly pick an item from many items.

[Generate a Random Password](https://onlinerandomtools.com/generate-random-password)

Quickly generate random passwords.

[Generate a Random Number](https://onlinerandomtools.com/generate-random-numbers)

Quickly generate random numbers.

[Generate a Random Bitmap](https://onlinerandomtools.com/generate-random-bitmap)

Quickly generate random bitmap images.

[Generate Random Strings](https://onlinerandomtools.com/generate-random-string)

Quickly generate random strings.

[Generate Random Data from a Regular Expression](https://onlinerandomtools.com/generate-random-data-from-regexp)

Quickly generate random data that matches the given regular expression.

[Generate a Random Integer](https://onlinerandomtools.com/generate-random-integers)

Quickly generate random integers.

[Generate a Random Fraction](https://onlinerandomtools.com/generate-random-fractions)

Quickly generate random fractions.

[Generate a Range of Random Integers](https://onlinerandomtools.com/generate-random-integer-range)

Quickly generate a sequence of increasing or decreasing random integers.

[Generate a Random Prime Number](https://onlinerandomtools.com/generate-random-primes)

Quickly generate random primes.

[Generate a Random Binary Number](https://onlinerandomtools.com/generate-random-binary-numbers)

Quickly generate random binary numbers.

[Generate a Random Octal Number](https://onlinerandomtools.com/generate-random-octal-numbers)

Quickly generate random octal numbers.

[Generate a Random Decimal Number](https://onlinerandomtools.com/generate-random-decimal-numbers)

Quickly generate random decimal numbers.

[Generate a Random Hex Number](https://onlinerandomtools.com/generate-random-hexadecimal-numbers)

Quickly generate random hexadecimal numbers.

[Generate Random Bytes](https://onlinerandomtools.com/generate-random-bytes)

Quickly generate random bytes.

[Generate a Random Date](https://onlinerandomtools.com/generate-random-date)

Quickly generate random calendar dates.

[Generate a Random Time](https://onlinerandomtools.com/generate-random-time)

Quickly generate random clock times.

[Generate a Random IP](https://onlinerandomtools.com/generate-random-ip)

Quickly generate random IPs.

[Generate a Random MAC](https://onlinerandomtools.com/generate-random-mac)

Quickly generate random MAC addresses.

[Generate a Random UUID](https://onlinerandomtools.com/generate-random-uuid)

Quickly generate random UUIDs.

[Generate a Random GUID](https://onlinerandomtools.com/generate-random-guid)

Quickly generate random GUIDs.

[Generate Random JSON](https://onlinerandomtools.com/generate-random-json)

Quickly generate random JSON data structures.

[Generate Random XML](https://onlinerandomtools.com/generate-random-xml)

Quickly generate random XML documents.

[Generate Random CSV](https://onlinerandomtools.com/generate-random-csv)

Quickly generate random CSV files.

[Generate Random TSV](https://onlinerandomtools.com/generate-random-tsv)

Quickly generate random TSV files.

<span class="primary">In Progress</span> <span class="secondary">These randomization tools are on the way</span>

Generate Random Digits

Generate a list of random digits.

Generate Random YAML

Generate random YAML markup.

Generate Random Pin Numbers

Generate a random pin number of any length.

Generate Random HTML

Generate random HTML code and HTML web pages.

Generate Random Text Files

Generate random plain text files.

Generate Random Binary Files

Generate random binary files.

Generate Random UTF8

Generate random UTF8 characters.

Generate Random Unicode Text

Generate a random Unicode string.

Generate Random Emoticons

Generate a bunch of random emojis.

Generate Random HTML Tables

Generate random HTML tables with random values.

Generate Random LaTeX

Generate random LaTeX documents.

Choose a Random Image

Given a bunch of images, pick an image at random.

Generate Random Images

Generate random PNG/GIF/JPG/WEBP/BMP images.

Generate Random Audio

Generate random MP3 and WAV music files.

Generate Random Video

Generate random MP4 and AVI videos.

Generate Random Excel

Generate random Excel spreadsheets.

Generate Random RegExps

Generate random valid regular expressions.

Generate Random Words

Generate random English words.

Generate Random Sentences

Generate random English sentences.

Generate Random Locations

Generate random geographic places.

Generate Random Names

Generate random male and female names.

Generate Random Geographic Coordinates

Generate random latitudes and longitudes.

Generate Random URLs

Generate random web URLs.

Generate Random Emails

Generate random email addresses.

Generate Random Letters

Generate random alphabet letters.

Generate Random Colors

Generate a random set of colors.

Generate Random XY Coordinates

Generate random two dimensional (x, y) coordinates.

Generate Random XYZ Coordinates

Generate random three dimensional (x, y, z) coordinates.

Generate Random Vectors

Generate random mathematical vectors.

Generate Random Matrices

Generate random mathematical vectors.

Generate Random MD5 Hash

Generate random MD5 hash digests.

Generate Random SHA1 Hash

Generate random SHA1 hash digests.

Generate Random SHA2 Hash

Generate random SHA2 hash digests.

Generate Random URL-encoded data

Generate random percent-escaped URL data.

Generate Random Base64-encoded data

Generate random base64 data.

Randomize Character Case

Randomly change character case in text.

Shuffle Sentences

Randomly shuffle the order of sentences in text.

Shuffle Text Columns

Randomly change the order of columns in text.

<span class="primary">Created with love by <span class="broowserools-logo">![broowserools](https://onlinerandomtools.com/images/logo-broowserools.png)</span></span>

We're broowserools — a friendly and fun [cross-browser testing](https://www.broowserools.com/) company powered by alien technology. At broowserools we love to make developers' lives easier, so we created this collection of online random tools. Unlike many other tools, we made our tools free, without ads, and with the simplest possible user interface. Our online random tools are actually powered by our [programming tools](http://www.broowserools.com/tools) that we created over the last couple of years. Check them out!

<span class="primary">Secret message</span>

If you love our tools, then we love you, too! Use coupon code <span class="coupon-code">RANDOMLING</span> to get a discount at broowserools.

All conversions and calculations are done in your browser using JavaScript. We don't send a single bit about your input data to our servers. There is no server-side processing at all. We use Google Analytics and StatCounter for site usage analytics. Your IP address is saved on our web server, but it's not associated with any personally identifiable information. We don't use cookies and don't store session information in cookies. We use your browser's local storage to save tools' input. It stays on your computer.

By using Online Randomization Tools you agree to our [Terms of Service](https://onlinerandomtools.com/terms-of-service). TLDR: You don't need an account to use our tools. All tools are free of charge and you can use them as much as you want. You can't do illegal or shady things with our tools. We may block your access to tools, if we find out you're doing something bad. We're not liable for your actions and we offer no warranty. We may revise our terms at any time.
