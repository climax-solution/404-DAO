// @ts-nocheck

import escapeHTML from 'escape-html';
import { Text } from 'slate';

export type RichTextType = {
	children: {
		text: string;
	}[];
	type: string | null;
};

export const serialize = (children: any[]) =>
	children
		.map((node, i) => {
			if (Text.isText(node)) {
				let text = `<span>${escapeHTML(node.text)}</span>`;

				if (node.bold) {
					text = `<strong>
          ${text}
        </strong>`;
				}

				if (node.code) {
					text = `<code>
          ${text}
        </code>`;
				}

				if (node.italic) {
					text = `<em>
          ${text}
        </em>`;
				}

				// Handle other leaf types here...

				// return <Fragment key={i}>{text}</Fragment>;
				return `${text}`;
			}

			if (!node) {
				return null;
			}

			switch (node.type) {
				case 'h1':
					return `<h1 data-aos="fade-up" data-aos-duration="2000">${serialize(node.children)}</h1>`;
				case 'h2':
					return `<h2 data-aos="fade-up" data-aos-duration="2000">${serialize(node.children)}</h2>`;
				case 'h3':
					return `<h3 data-aos="fade-up" data-aos-duration="2000">${serialize(node.children)}</h3>`;
				case 'h4':
					return `<h4 data-aos="fade-up" data-aos-duration="2000">${serialize(node.children)}</h4>`;
				case 'h5':
					return `<h5 data-aos="fade-up" data-aos-duration="2000">${serialize(node.children)}</h5>`;
				case 'h6':
					return `<h6 data-aos="fade-up" data-aos-duration="2000">${serialize(node.children)}</h6>`;
				case 'quote':
					return `<blockquote>${serialize(node.children)}</blockquote>`;
				case 'ul':
					return `<ul>${serialize(node.children)}</ul>`;
				case 'ol':
					return `<ol>${serialize(node.children)}</ol>`;
				case 'li':
					return `<li>${serialize(node.children)}</li>`;
				case 'link':
					return `<a href={escapeHTML(node.url)} key={i}>
						${serialize(node.children)}
					</a>`;

				default:
					return `<p data-aos="fade-up" data-aos-duration="2000">${serialize(node.children)}</p>`;
			}
		})
		.join('');
