fetch('https://topaitechnologies.in/1-2')
  .then(res => res.text())
  .then(text => {
    const urls = text.match(/https?:\/\/[^\s"'()<>]+?\.(?:jpg|jpeg|png|webp)/gi);
    if (urls) {
      const unique = [...new Set(urls)];
      console.log(unique.join('\n'));
    } else {
      console.log('No images found');
    }
  });
