function imgFallback(img) {
  const box = document.createElement('div');
  box.className = 'img-placeholder';
  box.textContent = img.alt || img.getAttribute('src').split('/').pop();
  img.replaceWith(box);
}