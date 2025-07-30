import threexpl from './assets/3xpl.com.svg'
import blockchair from './assets/blockchair.com.svg'
import budgetday from './assets/budget.day.webp'
import wowcash from './assets/wow.cash.svg'

/**
 * @param mountID {string} Mount point ID
 * @param sectionTitleHeading {'h2' | 'h3' | 'h4' | 'h5'}
 * @param anchorTitleHeading {'h3' | 'h4' | 'h5' | 'h6'}
 * @param fontFamilyTitle {string} Font family for title
 * @param fontFamilyDescription {string} Font family for description
 */
function inject (
	mountID,
	sectionTitleHeading = 'h2',
	anchorTitleHeading = 'h3',
	fontFamilyTitle = 'sans-serif',
	fontFamilyDescription = 'sans-serif',
)
{
	const el = document.getElementById(mountID)
	if (!el) {
		throw new Error(`No element with id '${mountID}' present on a page.`)
	}

	const hostname = window.location.hostname
	const utmParams = new URLSearchParams()
	utmParams.append('from', hostname)
	utmParams.append('utm_source', hostname)
	utmParams.append('utm_content', 'injected_product_gallery')
	const query = utmParams.toString()

	const content = [{
		title: 'Blockchair',
		description: 'Blockchain explorer, analytics and web services',
		url: 'https://blockchair.com',
		background: 'linear-gradient(90deg, #FF0078 0%, #A42EFF 100%)',
		foreground: 'white',
		icon: blockchair,
	}, {
		title: '3xpl.com',
		description: 'Fastest universal block explorer',
		url: 'https://3xpl.com',
		background: 'linear-gradient(90deg, #6C0 0%, #59B200 100%)',
		foreground: 'white',
		icon: threexpl,
	}, {
		title: 'wow.cash',
		description: 'Watch-only wallet to track assets without risk',
		url: 'https://wow.cash',
		background: 'linear-gradient(90deg, #2170FF 0%, #1E65E5 100%)',
		foreground: 'white',
		icon: wowcash,
	}, {
		title: 'budget.day',
		url: 'https://budget.day',
		description: 'Bitcoin’s security budget issue',
		background: 'linear-gradient(270deg, #E55C2E 0%, #E5A82E 100%)',
		foreground: 'white',
		icon: budgetday,
	}]

	const section = document.createElement('section')
	section.style = 'width:100%;height:max-content;overflow:hidden;'

	const sectionTitle = document.createElement('h2')
	sectionTitle.innerHTML = 'Blockchair Product Gallery'
	sectionTitle.style.position = 'absolute'
	sectionTitle.style.width = '1px'
	sectionTitle.style.height = '1px'
	sectionTitle.style.padding = '0'
	sectionTitle.style.margin = '-1px'
	sectionTitle.style.overflow = 'hidden'
	sectionTitle.style.clip = 'rect(0,0,0,0)'
	sectionTitle.style.whiteSpace = 'nowrap'
	sectionTitle.style.borderWidth = '0'
	section.append(sectionTitle)

	const list = document.createElement('ul')
	list.style = 'padding:0;margin:0;list-style:none;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;'

	content.forEach((item) =>
	{
		const url = new URL(item.url)
		if (url.hostname !== hostname) {
			const li = document.createElement('li')
			li.style = `box-sizing:border-box;flex:1 1 21.25rem;`

			const a = document.createElement('a')
			a.href = url.href + '?' + query
			a.target = '_blank'
			a.setAttribute('aria-label', item.title)
			a.style =
				`appearance:none;text-decoration:none;color:${item.foreground};box-sizing:border-box;padding:0.75rem 1.5rem;display:flex;flex-direction:column;gap:0.25rem;transition:transform .15s ease-in-out;`
			a.style.background = item.background

			const head = document.createElement('div')
			head.style = 'display:flex;flex-direction:row;align-items:center;gap:0.5rem;white-space:nowrap;overflow:hidden;'

			const img = document.createElement('img')
			img.src = item.icon
			img.alt = item.title + ' logo'
			img.loading = 'lazy'
			img.decoding = 'async'
			img.fetchPriority = 'low'
			img.width = 24
			img.height = 24
			img.style = 'padding:0;margin:0;flex-shrink:0;height:1.5rem;width:auto;'

			const title = document.createElement('h3')
			title.innerHTML = item.title
			title.style =
				`padding:0;margin:0;flex-shrink:0;font-size:1.25rem;font-weight:500;line-height:1.5;font-family:${fontFamilyTitle};`

			head.append(img, title)

			const description = document.createElement('p')
			description.innerText = item.description
			description.style =
				`padding:0;margin:0;font-size:0.8125rem;font-weight:500;line-height:1.5;font-family:${fontFamilyDescription};`

			a.append(head, description)

			li.appendChild(a)

			list.appendChild(li)
		}
	})
	section.append(list)
	el.append(section)
}

export default inject