---
title: Formatting
---
## Generating Fumen Images
Insert a fumen code into Rith's custom \<fumen> tags as you would in standard HTML. Images will be rendered in-site through JavaScript.

Changing the name of the tag from \<fumen> to \<figfumen> will generate its inner comment as a fig caption.
___
### \<fumen> tag attributes:
**Height**: number of rows to render (starting from the bottom). Default is 5, max is 23.
<div style="display: flex; justify-content: space-around;">
\<fumen src="v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH" height = '15'>
<fumen src="v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH" height = '15'>
</div>

**Width**: number of columns to render (starting from the left). Default and maximum is 10.
<div style="display: flex; justify-content: space-around;">
\<fumen src="v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH" width = '4'>
<fumen src="v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH" width = '4'>
</div>

**Size**: pixel dimensions of a single mino. Default is 22.
<div style="display: flex; justify-content: space-around;">
\<fumen src="v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH" size = '23'\>
<fumen src="v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH" size = '23'>
</div>

**Grid**: hex code color of grid. If unspecified, no grid is rendered.
<div style="display: flex; justify-content: space-around;">
\<fumen src="v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH" grid = '#00FFFF'\>
<fumen src="v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH" grid = '#00FFFF'>
</div>

**Background**: hex code color of background. If unspecified, background is transparent.
<div style="display: flex; justify-content: space-around;">
\<fumen src="v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH" background = '#00FFFF'>
<fumen src="v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH" background = '#00FFFF'>
</div>

___
## Rotation States
The "90" and "180" button just hides and shows two elements with the class "Rot90" and "Rot180" alternately.
<div style="display: flex; justify-content: space-around;">
\<span class="Rot180">Text for 180</span>\<span class="Rot90">Text for 90</span>

<span class="Rot180">Text for 180</span>
<span class="Rot90">Text for 90</span>
</div>

___
## Mirrored States
Fumens within \<fumen> tags are automatically mirrored. The only consideration for writing is almost the same as [[#Rotation States]]. Two elements with the classes "Unmirrored" and "Mirrored".

<div style="display: flex; justify-content: space-around;">
	<figure><br>
		<fumen src="v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH"><br>
		<figcaption><br>
			<span class="Unmirrored">Unmirrored Text</span><span class="Mirrored">txeT derorriM</span><br>
		</figcaption><br>
	</figure>
	<figure>
		<fumen src="v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH">
		<figcaption>
			<span class="Unmirrored">Unmirrored Text</span><span class="Mirrored">txeT derorriM</span>
		</figcaption>
	</figure>
</div>

___
## Other Site Bits
1. **Title for Percentages**: it'd be cool if we had proper titles for percentages as fractions.
	- \<span class="Rot180" title="30/210">14.286%\</span>
2. **Precision**: two decimals