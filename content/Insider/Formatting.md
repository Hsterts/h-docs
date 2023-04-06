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
	<fumen height = '15'>v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH</fumen>
</div>

**Width**: number of columns to render (starting from the left). Default and maximum is 10.
<div style="display: flex; justify-content: space-around;">
	<fumen width = '4'>v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH</fumen>
</div>

**Size**: pixel dimensions of a single mino. Default is 22.
<div style="display: flex; justify-content: space-around;">
	<fumen size = '23'>v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH</fumen>
</div>

**Grid**: hex code color of grid. If unspecified, no grid is rendered.
<div style="display: flex; justify-content: space-around;">
	<fumen grid = '#00FFFF'>v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH</fumen>
</div>

**Background**: hex code color of background. If unspecified, background is transparent.
<div style="display: flex; justify-content: space-around;">
	<fumen background = '#00FFFF'>v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH</fumen>
</div>

___
## Rotation States
The "90" and "180" button just hides and shows two elements with the class "with180" and "no180" alternately.
<div style="display: flex; justify-content: space-around;">
	<span class="with180">Text for 180</span>
	<span class="no180">Text for 90</span>
</div>

___
## Mirrored States
Fumens within \<fumen> tags are automatically mirrored. The only consideration for writing is almost the same as [[#Rotation States]]. Two elements with the classes "Unmirrored" and "Mirrored".

<div style="display: flex; justify-content: space-around;">
	<figure><br>
		<fumen>v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH</fumen><br>
		<figcaption><br>
			<span class="Unmirrored">Unmirrored Text</span><span class="Mirrored">txeT derorriM</span><br>
		</figcaption><br>
	</figure>
	<figure>
		<fumen>v115@9gBtDewhilwwBtCewhglRpxwR4Bewhg0RpwwR4Cewh?i0JeAgH</fumen>
		<figcaption>
			<span class="Unmirrored">Unmirrored Text</span><span class="Mirrored">txeT derorriM</span>
		</figcaption>
	</figure>
</div>

___
## Other Site Bits
1. **Title for Percentages**: it'd be cool if we had proper titles for percentages as fractions.
	- \<span class="with180" title="30/210">14.286%\</span>
2. **Precision**: two decimals