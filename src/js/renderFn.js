export default function renderMarkup(data) {
  return data.reduce(
    (markup, { alt_description, urls: { small } }) =>
      markup +
      `   <li class="gallery-item">
            <img src="${small}" alt="${alt_description}" class="gallery-img" />
          </li>
      `,
    ''
  );
}
