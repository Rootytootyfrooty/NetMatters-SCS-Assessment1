<b>Nav bar:</b> 
	I can't figure out how to apply the larger ::after triangle only to the first tab (con-dev) on hover for the md breakpoint.
	Failed attempts can be seen in the nav-bar partial.
  -Also the list items in the banners that appear on hover aren't layed out right, I'm having trouble centring all the text in relation to the icon.
	
<b>Checkbox/consent/contact:</b>
	The notes mentioned styling a checkbox, I can't seem to find one on the target NetMatters site.
	Ditto for the Manage Consent and contact icon; I can't see any on the target site.

<b>Our services:</b>
	The spacing between the Our Services h2 and the View Our Work anchor is kind of botched.
	The target site isn't perfectly aligned on the y axis.
	I used margin-bottom: -50px; ...at least it looks...okay.
 > at ~1855px screen width, the view all button ends up beside the our services grid.
	I added a div box at the LG breakpoint and removed the bottom margin for the our services/view all text.
	
<b>Welcome section:</b>
	At LG and MD breakpoints, the buttons aren't aligned with each other at the bottom of the section.
	
<b>Footer:</b>
	LG breakpoint- ULs are not as wide as the target site, and I can't seem to change it.
	
<b>View all buttons mobile:</b>
	Mobile viewport 'view all' buttons don't extend the underline on hover to the arrow, it only underlines the word.
	I'm in process of changing the imgs to svgs and getting the styling uniform on the arrows.

<b>Icons:</b>
	The site needs to be viewed on a live server or the icons won't load, apparently a limitation of the clean code
	you get from using icomoon? It's also why there's a chunk of javascript in the project.

<b>News Section:</b>
	The articles are now in HTML instead of just being images. I need more time/to do more work to refine the layout

<b>The Case Studies Section</b>
	This part is really bad! I definitely need more time to work on this.
	> The popups aren't fully visible while overflow:hidden is applied to the carousel-3.
	If overflow is not hidden it results in a horizontal scroll bar.
	I can't seem to find a solution to this that doesn't involve: moving the popups outside the carousel
	and using JS; some sort of mask or filter; some other method of hiding the carousel overflows.
	None of my attempts at the latter 2 were successful.