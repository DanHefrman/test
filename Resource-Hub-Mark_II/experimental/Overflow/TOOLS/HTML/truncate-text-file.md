[![onlinefiletools logo](images/logo-onlinefiletools.png)](index.html)

Online CSV Tools Online TSV Tools Online JSON Tools Online YAML Tools Online XML Tools Online MATH Tools Online FRACTAL Tools Online NUMBER Tools Online INTEGER Tools Online UNICODE Tools Online ASCII Tools Online UTF8 Tools Online BINARY Tools Online HEX Tools Online STRING Tools Online RANDOM Tools Online IMAGE Tools Online JPG Tools Online PNG Tools Online FILE Tools Online HASH Tools Online CRYPTO Tools Online BITMAP Tools Online GIF Tools Online LINUX Tools Online TIME Tools Online BASE64 Tools Online LIST Tools Online SET Tools Online PDF Tools Online AUDIO Tools Online BROWSER Tools Online CSS Tools Online JS Tools Online TABLE Tools

Text file truncator
===================

World's simplest file tool
--------------------------

This is a free browser-based utility that truncates textual files. You can specify the number of characters (truncate by character count option) or the number of bytes (truncate by file size option) to be left in the file, and the program will truncate the file to this value. You can also choose the side of truncation, truncate several lines of the file at once, and add an indicator mark at the truncation point. Created by computer geeks at team broowserools.

<span class="primary">sneak preview</span> <span class="secondary">sssshhhhh!</span>

We just started working on a new site – [Online GIF Tools](https://onlinegiftools.com/) – utilities for working with GIFs. Check it out!

A link to this tool, including input, options and all chained tools.

<span class="data-type">text file</span> <span class="status"></span>

Import from file

Save as...

Copy to clipboard

Download

Export to Pastebin

<span class="data-type">truncated text file</span> <span class="status"></span>

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

Text file truncator options

<span class="option-group-legend">Truncation Method</span>

Truncate by Character Count

Length <span class="option-details">Truncate text file to this number of symbols.</span>

Truncate by File Size

File Size <span class="option-details">Truncate text file to this size. (Examples: 64b, 256k, 16m)</span>

<span class="option-group-legend">Truncation Position</span>

Truncate from End <span class="option-details">Drop characters (bytes) from the end of the file.</span>

Truncate from Start <span class="option-details">Drop characters (bytes) from the beginning of the file.</span>

<span class="option-group-legend">Multiline and Mark</span>

Separate Line Truncation <span class="option-details">In the case of a multiline file, truncate each line individually. (In this case, each line will have the specified number of characters/bytes.)</span>

Mark Truncation

Mark Symbol <span class="option-details">Insert this symbol (truncation mark) at the truncation point. (Truncation mark length is included in the total length.)</span>

<span class="primary">Text file truncator tool</span> <span class="secondary">What is a text file truncator?</span>

This online program shortens files containing text data to the specified symbol length or byte count. If you select the symbol count truncation mode, then the input data will be split into individual Unicode symbols (also known as glyphs or graphemes) and the exact number of symbols will be returned in the output data. If you select the file size truncation mode, then you can specify the exact file length in bytes. For example, "123" or "123b" will leave precisely 123 bytes in the file, "100k" will leave precisely 100 kilobytes (100×1024 bytes), and "2mb" will leave precisely 2 megabytes (2×1024×1024 bytes). If we compare both truncation methods, then the first method will most likely produce a bigger text file with more bytes in it. This is because each Unicode character can be single-byte (in case of plain ASCII data) or multi-byte (in case of UTF8 data), and if there is at least one complex multi-byte character in the input, then the size of the output file in bytes will be greater than the total number of symbols in the input. For example, Unicode characters π and © take two bytes in UTF8 encoding, characters ✓ and € take three bytes, and characters 𝕭 and 🦇 take four bytes. If the output file has to be reduced in size, then the multi-byte character on the truncation boundary is split into bytes, and the leftover bytes are printed as corresponding extended ASCII characters. For both file truncation modes, you can select the truncation side – it can be the start of the file or the end of the file. To indicate where the truncation happened, you can mark it with a prefix or suffix truncation mark character (the size of the mark is included in the final length). Also, when working with multi-line textual files, you can use the separate line-truncation option. In this case, the length/size and all other properties above will be applied to each line of the file individually. Filabulous!

<span class="primary">Text file truncator examples</span> <span class="secondary">Click to use</span>

James Allen Quote

This example truncates a textual file that contains a James Allen quote to just sixty symbols. The characters are counted from the beginning of the file. Wide characters that are made from multiple bytes (such as ” and ©) are counted as one character. The truncated output file consists of exactly 60 characters but because of wide characters in it, the size is slightly larger (64 bytes).

“Calmness of mind is one of the beautiful jewels of wisdom.” © James Allen

“Calmness of mind is one of the beautiful jewels of wisdom.”

**Required options**

These options will be used automatically if you select this example.

Truncate by Character Count

Length <span class="option-details">Truncate text file to this number of symbols.</span>

Truncate from End <span class="option-details">Drop characters (bytes) from the end of the file.</span>

Separate Line Truncation <span class="option-details">In the case of a multiline file, truncate each line individually. (In this case, each line will have the specified number of characters/bytes.)</span>

Mark Truncation

Truncate Text to 1 Kilobyte

In this example, we needed to truncate the file to precisely one kilobyte. To do this, we switched on the truncate-by-size mode and entered the value 1k in the size field (1k = 1 kilobyte = 1024 bytes). The text file uses letters written in a bold Unicode font and each letter is four bytes long. As the last Unicode letter doesn't fit in the required 1024 bytes, it's broken into UTF8 bytes and they are output as-is and displayed as two Latin-1 supplementary characters.

𝐏𝐨𝐥𝐚𝐫 𝐛𝐞𝐚𝐫𝐬 𝐚𝐫𝐞 𝐧𝐞𝐚𝐫𝐥𝐲 𝐮𝐧𝐝𝐞𝐭𝐞𝐜𝐭𝐚𝐛𝐥𝐞 𝐛𝐲 𝐢𝐧𝐟𝐫𝐚𝐫𝐞𝐝 𝐜𝐚𝐦𝐞𝐫𝐚𝐬 𝐓𝐡𝐞𝐫𝐦𝐚𝐥 𝐜𝐚𝐦𝐞𝐫𝐚𝐬 𝐝𝐞𝐭𝐞𝐜𝐭 𝐭𝐡𝐞 𝐡𝐞𝐚𝐭 𝐥𝐨𝐬𝐭 𝐛𝐲 𝐚 𝐬𝐮𝐛𝐣𝐞𝐜𝐭 𝐚𝐬 𝐢𝐧𝐟𝐫𝐚𝐫𝐞𝐝, 𝐛𝐮𝐭 𝐩𝐨𝐥𝐚𝐫 𝐛𝐞𝐚𝐫𝐬 𝐚𝐫𝐞 𝐞𝐱𝐩𝐞𝐫𝐭𝐬 𝐚𝐭 𝐜𝐨𝐧𝐬𝐞𝐫𝐯𝐢𝐧𝐠 𝐡𝐞𝐚𝐭. 𝐓𝐡𝐞 𝐛𝐞𝐚𝐫𝐬 𝐤𝐞𝐞𝐩 𝐰𝐚𝐫𝐦 𝐝𝐮𝐞 𝐭𝐨 𝐚 𝐭𝐡𝐢𝐜𝐤 𝐥𝐚𝐲𝐞𝐫 𝐨𝐟 𝐛𝐥𝐮𝐛𝐛𝐞𝐫 𝐮𝐧𝐝𝐞𝐫 𝐭𝐡𝐞 𝐬𝐤𝐢𝐧. 𝐀𝐝𝐝 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐚 𝐝𝐞𝐧𝐬𝐞 𝐟𝐮𝐫 𝐜𝐨𝐚𝐭 𝐚𝐧𝐝 𝐭𝐡𝐞𝐲 𝐜𝐚𝐧 𝐞𝐧𝐝𝐮𝐫𝐞 𝐭𝐡𝐞 𝐜𝐡𝐢𝐥𝐥𝐢𝐞𝐬𝐭 𝐀𝐫𝐜𝐭𝐢𝐜 𝐝𝐚𝐲.

𝐏𝐨𝐥𝐚𝐫 𝐛𝐞𝐚𝐫𝐬 𝐚𝐫𝐞 𝐧𝐞𝐚𝐫𝐥𝐲 𝐮𝐧𝐝𝐞𝐭𝐞𝐜𝐭𝐚𝐛𝐥𝐞 𝐛𝐲 𝐢𝐧𝐟𝐫𝐚𝐫𝐞𝐝 𝐜𝐚𝐦𝐞𝐫𝐚𝐬 𝐓𝐡𝐞𝐫𝐦𝐚𝐥 𝐜𝐚𝐦𝐞𝐫𝐚𝐬 𝐝𝐞𝐭𝐞𝐜𝐭 𝐭𝐡𝐞 𝐡𝐞𝐚𝐭 𝐥𝐨𝐬𝐭 𝐛𝐲 𝐚 𝐬𝐮𝐛𝐣𝐞𝐜𝐭 𝐚𝐬 𝐢𝐧𝐟𝐫𝐚𝐫𝐞𝐝, 𝐛𝐮𝐭 𝐩𝐨𝐥𝐚𝐫 𝐛𝐞𝐚𝐫𝐬 𝐚𝐫𝐞 𝐞𝐱𝐩𝐞𝐫𝐭𝐬 𝐚𝐭 𝐜𝐨𝐧𝐬𝐞𝐫𝐯𝐢𝐧𝐠 𝐡𝐞𝐚𝐭. 𝐓𝐡𝐞 𝐛𝐞𝐚𝐫𝐬 𝐤𝐞𝐞𝐩 𝐰𝐚𝐫𝐦 𝐝𝐮𝐞 𝐭𝐨 𝐚 𝐭𝐡𝐢𝐜𝐤 𝐥𝐚𝐲𝐞𝐫 𝐨𝐟 𝐛𝐥𝐮𝐛𝐛𝐞𝐫 𝐮𝐧𝐝𝐞𝐫 𝐭𝐡𝐞 𝐬𝐤𝐢𝐧. 𝐀𝐝𝐝 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐚 𝐝𝐞𝐧𝐬𝐞 𝐟𝐮𝐫 𝐜𝐨𝐚𝐭 𝐚𝐧𝐝 𝐭𝐡𝐞𝐲 𝐜𝐚𝐧 𝐞𝐧𝐝𝐮𝐫𝐞 𝐭𝐡𝐞 𝐜𝐡𝐢𝐥𝐥𝐢𝐞𝐬𝐭 ð?

**Required options**

These options will be used automatically if you select this example.

Truncate by File Size

File Size <span class="option-details">Truncate text file to this size. (Examples: 64b, 256k, 16m)</span>

Truncate from End <span class="option-details">Drop characters (bytes) from the end of the file.</span>

Separate Line Truncation <span class="option-details">In the case of a multiline file, truncate each line individually. (In this case, each line will have the specified number of characters/bytes.)</span>

Mark Truncation

World Chess Champions

In this example, we load a multi-line file with a list of chess championship winners from the years 1993 to 2006 and we want to reduce the file size without losing the names of champions. To do this, we enable individual line truncation mode, select the "Truncate from the Beginning" option, and shrink each string to 23 bytes. Also, to mark the place of truncation, we add an arrow symbol on the left side (the size of which is taken into account in the total file size). Thus, from six strings on six lines, we get a file of size 6×23 + 5 newlines = 143 bytes.

1993–1999 years – Russia – Anatoly Karpov 1999–2000 years – Russia – Alexander Khalifman 2000–2002 years – India – Viswanathan Anand 2002–2004 years – Ukraine – Ruslan Ponomariov 2004–2005 years – Uzbekistan – Rustam Kasimdzhanov 2005–2006 years – Bulgaria – Veselin Topalov

⟹ Anatoly Karpov ⟹ Alexander Khalifman ⟹ Viswanathan Anand ⟹ Ruslan Ponomariov ⟹ Rustam Kasimdzhanov ⟹ Veselin Topalov

**Required options**

These options will be used automatically if you select this example.

Truncate by File Size

File Size <span class="option-details">Truncate text file to this size. (Examples: 64b, 256k, 16m)</span>

Truncate from Start <span class="option-details">Drop characters (bytes) from the beginning of the file.</span>

Separate Line Truncation <span class="option-details">In the case of a multiline file, truncate each line individually. (In this case, each line will have the specified number of characters/bytes.)</span>

Mark Truncation

Mark Symbol <span class="option-details">Insert this symbol (truncation mark) at the truncation point. (Truncation mark length is included in the total length.)</span>

<span class="primary">Pro tips</span> <span class="secondary">Master online file tools</span>

You can pass input to this tool via <span class="underline">?input</span> query argument and it will automatically compute output. Here's how to type it in your browser's address bar. Click to try!

<span class="muted"><span class="green">https://</span>onlinefiletools.com/truncate-text-file</span><span class="underline">?input</span>=%E2%80%9CCalmness%20of%20mind%20is%20one%20of%20the%20beautiful%20jewels%20of%20wisdom.%E2%80%9D%20%C2%A9%20James%20Allen&truncate-by-count=true&length=60&truncate-right=true&multi-line=false&use-postfix=false

<span class="tool-matches-amount"></span>

<span class="primary">All file tools</span> <span class="secondary"><span class="cursor"></span></span>

Didn't find the tool you were looking for? <span class="request-tool">Let us know</span> what tool we are missing and we'll build it!

[Create a Random Text File](generate-random-text-file.html)

Quickly generate a random text file of any size.

[Generate a Random Binary File](generate-random-binary-file.html)

Quickly generate a random binary file of arbitrary size.

[Generate an Empty File](generate-empty-file.html)

Quickly generate an empty file with any extension.

[Truncate a Text File](truncate-text-file.html)

Quickly shorten a text file to the given number of bytes.

<span class="primary">In Progress</span> <span class="secondary">These file tools are on the way</span>

Extract a File Fragment

Extract a byte range between start and end positions.

Randomly Flip Bits in a File

Corrupt data by flipping one or more bits in the given file.

Zip Compress a File

Compress a file using the zip compression algorithm.

Uncompress a Zip File

Unzip a .zip file and extract its content.

RAR Compress a File

Compress a file using the RAR compression algorithm.

Uncompress a RAR File

Unrar a .rar file and extract its content.

Gzip Compress a File

Compress a file using the gzip compression algorithm.

Gunzip a File

Uncompress a .gz file and extract its content.

Bzip2 Compress a File

Compress a file using the bzip2 compression algorithm.

Bunzip2 a File

Uncompress an .bz file and extract its content.

Xz Compress a File

Compress a file using the xz compression algorithm.

Unxz a File

Uncompress an .xz file and extract its content.

Tar a File

Create a tarball with the given files.

Untar a File

Extract the contents of a .tar archive.

Base32 Encode a File

Convert a file to base32 encoding.

Base32 Decode a File

Create a file from base32 encoding.

Base64 Encode a File

Convert a file to base64 encoding.

Base64 Decode a File

Create a file from base64 encoding.

Convert a File to HTML Entities

Encode a file to HTML.

Convert HTML Entities to a File

Create a file from HTML entities.

Merge Files

Merge multiple files together.

Generate a Small File

Create a relatively tiny binary or text file (useful for testing).

Generate a Big File

Create a relatively large binary or text file (useful for testing).

Generate a Single Byte File

Create a file with any extension that contains just one byte.

Split a File

Split a file in chunks of certain size.

Slice a File

Extract a fragment of certain size from a file.

Reverse a File

Reverse the order of bytes in a file.

Randomly Replace Bytes in a File

Corrupt a file by randomly replacing byte values in a file.

Randomly Delete Bytes From a File

Corrupt a file by removing one or more bytes at random positions.

Remove Bytes From a File

Delete certain bytes from a file.

Change Bytes in a File

Replace bytes in a file.

Create Random Bytes

Generate a list of random bytes.

Analyze a File

Print information about a file.

Zalgo a File

Let Zalgo destroy your file.

<span class="primary">Created with love by <span class="broowserools-logo">![broowserools](images/logo-broowserools.png)</span></span>

We're broowserools — a friendly and fun [cross-browser testing](https://www.broowserools.com/) company powered by alien technology. At broowserools our mission is to make developers' lives easier, so we created this collection of online file tools. Unlike many other tools, we made our tools free, without ads, and with the simplest possible user interface. Our online file tools are actually powered by our [programming tools](http://www.broowserools.com/tools) that we created over the last couple of years. Check them out!

<span class="primary">Secret message</span>

If you love our tools, then we love you, too! Use coupon code <span class="coupon-code">FILELING</span> to get a discount at broowserools.

All conversions and calculations are done in your browser using JavaScript. We don't send a single bit about your input data to our servers. There is no server-side processing at all. We use Google Analytics and StatCounter for site usage analytics. Your IP address is saved on our web server, but it's not associated with any personally identifiable information. We don't use cookies and don't store session information in cookies. We use your browser's local storage to save tools' input. It stays on your computer.

By using Online File Tools you agree to our [Terms of Service](terms-of-service.html). TLDR: You don't need an account to use our tools. All tools are free of charge and you can use them as much as you want. You can't do illegal or shady things with our tools. We may block your access to tools, if we find out you're doing something bad. We're not liable for your actions and we offer no warranty. We may revise our terms at any time.
