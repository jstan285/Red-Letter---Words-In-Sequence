# Red Letter — Words in Sequence

A quiet, mobile-friendly reader for the words of Jesus, in biblical order.

All 2,059 entries from the World English Bible red-letter table are included, from Matthew 3:15 through Revelation 22:20. Repetitions remain, and nothing is regrouped by subject.

## Reading

- Jesus’ words are the focal point, with verse references on the left and full-verse access on the right.
- Search the marked words or complete verses, or choose a book, chapter, and verse.
- Follow connections and use **Back to reading** to return to your departure point.
- Bookmark passages and choose text size and warm, light, or dark backgrounds.
- Your place and preferences are saved in this browser on this device. They do not sync between devices or transfer from a different website address.

## Publish through GitHub Pages

1. The reader files are in this repository’s `docs` directory.
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select **main** and **/docs**, and save.
4. Open the published address shown by GitHub Pages after deployment finishes.

Repository: https://github.com/jstan285/Red-Letter---Words-In-Sequence

The GitHub Pages project address, once enabled, is https://jstan285.github.io/Red-Letter---Words-In-Sequence/

No build step, API key, server, subscription, or sign-in is required by the reader. The site and text are publicly accessible when published through standard GitHub Pages.

## Add to iPhone Home Screen

Open the published site in Safari. Choose **Share → Add to Home Screen**, enable **Open as Web App** if offered, and tap **Add**.

Open **Display** and wait for **Available offline** before relying on offline access. The first connected visit saves the application and complete verse dataset. An interrupted download will not be reported as ready. Browser storage management can remove saved files, bookmarks, and progress.

## Updates

Edit the files in `docs`. Increment `VERSION` in `docs/sw.js` whenever any cached file changes. Publish the changed files together. The browser installs the new complete cache when connected; close and reopen the reader to use the updated version.

All asset paths and the service-worker scope are relative, so the reader works under a GitHub Pages repository subdirectory.

## Text source

World English Bible, American English / Protestant edition, from eBible.org:

- https://ebible.org/details.php?id=engwebp
- https://ebible.org/Scriptures/engwebp_usfx.zip

The text was extracted using the official `wj` (words-of-Jesus) markings on November 16, 2026, and carried over unchanged from the verified spreadsheet. Footnotes are omitted and whitespace is normalized. Verse order and repetitions are preserved. Editorial red-letter boundaries may differ from other editions. A spaced dot separator indicates intervening verses without marked words.

The World English Bible text is in the public domain. “World English Bible” is a trademark of eBible.org, used here to identify the source translation. No doctrinal commentary or automatic cross-reference interpretation is added.
