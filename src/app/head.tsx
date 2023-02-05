export default function Head() {
  return (
    <>
      <title>OnePot</title>
      <meta name="description" content="Ask AI what should you cook today." />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />

      {/* OG */}
      <meta property="og:url" content="https://www.onepot.app/" />
      <meta property="og:title" content="OnePot" />
      <meta
        property="og:description"
        content="Ask AI what should you cook today."
      />
      <meta property="og:image" content="/logo.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@yhakamay" />
      <meta name="twitter:creator" content="@yhakamay" />
    </>
  );
}
