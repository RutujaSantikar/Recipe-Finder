import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  recipes =[

    {
     id:1,
     title:'Capsicum Corn Pizza',
     img:' https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/country-feast-cheese-maxx.01396975bebd766302f117884bbb9304.1.jpg',
     ratings:4.2,
     servings:4,
     cooking_time:'15 minutes',
     prepration_time:'20 minutes',
     ingredients:[
        '2 readymade pizza base',
      '1 medium onion ( finely chopped)',
      '1 medium tomato (finely chopped)',
    ' 2 tbs garlic ( finely chopped)',
    ' 2 tbs butter',
    ' 1 tsp chilli flakes',
    '  1 tsp oregano seasoning',
    ' 2 tbs tomato ketchup',
    ' 2 tbs oil',
      '1 capsicum ( cut into strips)',
    ' 1/2 cup boiled sweet corn',
    ' Mozarella or processed cheese'
  ],
     instructions:[
    {
       display_text:'In a pan heat oil and add garlic. Saute till it gives a nice aroma. Add the onions and saute till soft.'
    },
    {
       display_text:'Add the tomatoes, chilli flakes, and oregano seasoning and cook till tomatoes are soft.'
    },
    {
       display_text:'Cool and grind to a paste.'
    },
     {
       display_text:'Add the tomato ketchup to this paste and mix well.'
    },
   {
       display_text:'Take a pizza base and spread the sauce on the base.'
    },
   {
       display_text:'Put the pizza toppings of corn and capsicum. Grate cheese on top.'
    
    },
    {
       display_text:'Heat a flat bottomed pan or tava and put 1 tbs of butter. When butter melts place the prepared pizza on it and cover with a lid.'
    
    },
    {
       display_text:'Heat on slow flame till cheese melts and base turns a little crisp.'
    
    },
    ]
    },
    {
     id:2,
     title:'Paneer Pizza',
     img:' https://product-assets.faasos.io/production/product/image_es_1608634656049_Picante%20Paneer%20Cheese%20Burst%20Pizza.jpg',
     ratings:4.5,
     servings:4,
     cooking_time:'20 minutes',
     prepration_time:'30 minutes',
     ingredients:[
       '2 readymade pizza base',
       '100 gm paneer',
      '1 medium onion ( finely chopped)',
      '1 medium tomato (finely chopped)',
    ' 2 tbs garlic ( finely chopped)',
    ' 2 tbs butter',
    ' 1 tsp chilli flakes',
    '  1 tsp oregano seasoning',
    ' 2 tbs tomato ketchup',
    ' 2 tbs oil',
      '1 capsicum ( cut into strips)',
    ' 1/2 cup boiled sweet corn',
    ' Mozarella or processed cheese'
  ],
     instructions:[
    {
       display_text:'In a pan heat oil and add garlic. Saute till it gives a nice aroma. Add the onions and saute till soft.'
    },
    {
       display_text:'Add the tomatoes, chilli flakes, and oregano seasoning and cook till tomatoes are soft.'
    },
    {
       display_text:'Cool and grind to a paste.'
    },
     {
       display_text:'Add the tomato ketchup to this paste and mix well.'
    },
   {
       display_text:'Take a pizza base and spread the sauce on the base.'
    },
   {
       display_text:'Put the pizza toppings of corn and capsicum and paneer. Grate cheese on top.'
    
    },
    {
       display_text:'Heat a flat bottomed pan or tava and put 1 tbs of butter. When butter melts place the prepared pizza on it and cover with a lid.'
    
    },
    {
       display_text:'Heat on slow flame till cheese melts and base turns a little crisp.'
    
    },
    ]
    },
    {
     id:3,
     title:'Margherita Pizza',
     img:' https://previews.123rf.com/images/mizina/mizina1704/mizina170400133/76090138-people-hand-taking-slice-of-pizza-margherita-pizza-margarita-and-child-hand-close-up.jpg',
     ratings:4.1,
     servings:4,
     cooking_time:'15 minutes',
     prepration_time:'20 minutes',
     ingredients:[
       '2 readymade pizza base',
       'Margherita cheese',
      '1 medium onion ( finely chopped)',
      '1 medium tomato (finely chopped)',
    ' 2 tbs garlic ( finely chopped)',
    ' 2 tbs butter',
    ' 1 tsp chilli flakes',
    '  1 tsp oregano seasoning',
    ' 2 tbs tomato ketchup',
    ' 2 tbs oil',
      '1 capsicum ( cut into strips)',
    ' 1/2 cup boiled sweet corn',
    ' Mozarella or processed cheese'
  ],
     instructions:[
    {
       display_text:'In a pan heat oil and add garlic. Saute till it gives a nice aroma. Add the onions and saute till soft.'
    },
    {
       display_text:'Add the tomatoes, chilli flakes, and oregano seasoning and cook till tomatoes are soft.'
    },
    {
       display_text:'Cool and grind to a paste.'
    },
     {
       display_text:'Add the tomato ketchup to this paste and mix well.'
    },
   {
       display_text:'Take a pizza base and spread the sauce on the base.'
    },
   {
       display_text:'Put the pizza toppings of corn and capsicum and paneer. Grate cheese on top.'
    
    },
    {
       display_text:'Heat a flat bottomed pan or tava and put 1 tbs of butter. When butter melts place the prepared pizza on it and cover with a lid.'
    
    },
    {
       display_text:'Heat on slow flame till cheese melts and base turns a little crisp.'
    
    },
    ]
    },
    {
     id:4,
     title:'Cheese Pizza',
     img:'  https://img.freepik.com/premium-photo/slice-hot-italian-pizza-with-stretching-cheese-pizza-four-cheeses-with-basil_79782-3174.jpg',
     ratings:3.9,
     servings:4,
     cooking_time:'15 minutes',
     prepration_time:'20 minutes',
     ingredients:[
       '2 readymade pizza base',
       'Mozrella cheese',
      '1 medium onion ( finely chopped)',
      '1 medium tomato (finely chopped)',
    ' 2 tbs garlic ( finely chopped)',
    ' 2 tbs butter',
    ' 1 tsp chilli flakes',
    '  1 tsp oregano seasoning',
    ' 2 tbs tomato ketchup',
    ' 2 tbs oil',
      '1 capsicum ( cut into strips)',
    ' 1/2 cup boiled sweet corn',
    ' Mozarella or processed cheese'
  ],
     instructions:[
    {
       display_text:'In a pan heat oil and add garlic. Saute till it gives a nice aroma. Add the onions and saute till soft.'
    },
    {
       display_text:'Add the tomatoes, chilli flakes, and oregano seasoning and cook till tomatoes are soft.'
    },
    {
       display_text:'Cool and grind to a paste.'
    },
     {
       display_text:'Add the tomato ketchup to this paste and mix well.'
    },
   {
       display_text:'Take a pizza base and spread the sauce on the base.'
    },
   {
       display_text:'Put the pizza toppings of corn and capsicum and paneer. Grate cheese on top.'
    
    },
    {
       display_text:'Heat a flat bottomed pan or tava and put 1 tbs of butter. When butter melts place the prepared pizza on it and cover with a lid.'
    
    },
    {
       display_text:'Heat on slow flame till cheese melts and base turns a little crisp.'
    
    },
    ]
    },
    {
     id:5,
     title:'Vegie Pizza',
     img:'https://cookingteach.com/media/posts/10/Veggie-Pizza-cooking-teach.jpg',
     ratings:5.1,
     servings:4,
     cooking_time:'15 minutes',
     prepration_time:'20 minutes',
     ingredients:[
       '2 readymade pizza base',
       'Mozrella cheese',
      '1 medium onion ( finely chopped)',
      '1 medium tomato (finely chopped)',
    ' 2 tbs garlic ( finely chopped)',
    ' 2 tbs butter',
    ' 1 tsp chilli flakes',
    '  1 tsp oregano seasoning',
    ' 2 tbs tomato ketchup',
    ' 2 tbs oil',
      '1 capsicum ( cut into strips)',
    ' 1/2 cup boiled sweet corn',
    ' Mozarella or processed cheese'
  ],
     instructions:[
    {
       display_text:'In a pan heat oil and add garlic. Saute till it gives a nice aroma. Add the onions and saute till soft.'
    },
    {
       display_text:'Add the tomatoes, chilli flakes, and oregano seasoning and cook till tomatoes are soft.'
    },
    {
       display_text:'Cool and grind to a paste.'
    },
     {
       display_text:'Add the tomato ketchup to this paste and mix well.'
    },
   {
       display_text:'Take a pizza base and spread the sauce on the base.'
    },
   {
       display_text:'Put the pizza toppings of corn and capsicum and paneer. Grate cheese on top.'
    
    },
    {
       display_text:'Heat a flat bottomed pan or tava and put 1 tbs of butter. When butter melts place the prepared pizza on it and cover with a lid.'
    
    },
    {
       display_text:'Heat on slow flame till cheese melts and base turns a little crisp.'
    
    },
    ]
    },
    {
     id:6,
     title:'Rajma Patty Burger',
     img:'https://i1.wp.com/wp-backend.thefearlesscooking.com/wp-content/uploads/2021/04/DSC01126-01.jpeg',
     ratings:5.1,
     servings:2,
     cooking_time:'10 minutes',
     prepration_time:'20 minutes',
     ingredients:[
      ' 1 Bread bun',
   '  1 boiled potato',
    ' 1 / 2 boiled rajma',
    ' 1 / 2 peas',
  '   1 / 2 red chilli powder',
   '  1 / 2 tsp Piri Piri powder',
  '   1 / 2 tsp pepper',
  '  Salt as per taste',
   '  1 onion and tomato, sliced',
    ' 5 corn flour slurry',
    ' Breadcrumbs'
  ],
     instructions:[
    {
       display_text:'Take the boiled rajma, potatoes, peas and small bread pieces. Combine this with masalas and mix.'
    },
    {
       display_text:'Give it the shape of Tikki and dip the Tikki in cornflour slurry and bread crumbs. Pan fry this till golden brown.'
    },
    {
       display_text:'Then take the buns and lightly toast them with butter on a pan. Take it out and assemble your burger'
    },
     {
       display_text:'Now first, add a layer of tomato ketchup on one side of the burger, then place the patty, cheese, sliced onion and tomato.'
    },
   {
       display_text:'From the top, add sauces like mustard sauce, mayonnaise, or any other sauce of your choice.'
    },
   {
       display_text:'Finally, close the bun, serve it with fries and enjoy!.'
    
    },
   
    ]
    },
    {
     id:7,
     title:'Potato Corn Burger',
     img:'https://www.cooking4allseasons.com/wp-content/uploads/2014/10/PotatoandSweetCornSliders.jpg',
     ratings:5.1,
     servings:2,
     cooking_time:'15 minutes',
     prepration_time:'35 minutes',
     ingredients:[
  '      4 Tbsp Olive oil',
 ' 1 / 2 Leek',
'  1 / 3 cup Celery, chopped',
'  1 / 2 Onion, chopped',
'  1 cup Corn kernels(frozen)',
 ' Few sprigs Thyme',
'  Few Coriander leaves',
 ' 2 large Potatoes(peeled)',
     '   roasted5 - 6 pieces Jalapenos(pickled)',
       ' 1 tsp Garlic chives, chopped',
       ' 75 gram Feta cheese',
       ' 1 tbsp Corn flour',
       ' 2 tbsp Milk',
       ' 1 cup Bread crumbs',
       ' 4 - 5 tbsp Oil(for frying)',
    '  1 Tomato',
     ' 1 Lettuce leaf',
    '  Few Gherkins',
      '3- 4 Tomatoes'
  ],
     instructions:[
    {
       display_text:'Heat up 2 tbsp of olive oil in a hot pan; add the onions, leeks, celery and the corn and season with salt and thyme and sauté for 5 minutes'
    },
    {
       display_text:'Peel the cooked potatoes, grate or mash the potatoes in a bowl.'
    },
    {
       display_text:'Mix the potatoes with the corn, onion, leeks, celery.'
    },
     {
       display_text:'Add the jalapenos, a large handful of coriander and crumble the feta cheese into the mixture.'
    },
   {
       display_text:'Mix all the ingredients really well and season to taste.'
    },
   {
       display_text:'Put the bread crumbs in a plate,Shape the burger patties into with a cutter or mould.'
    
       },
     {
       display_text:'Dip the patty in the batter and cover with breadcrumbs,Heat up 2 tbsp oil in pan and shallow fry until nice and brown.'
    
       },
       {
       display_text:'Slice up some tomatoes and put it in a lettuce leaf for the garnish along with some gherkins.'
    
       },
         {
       display_text:'Heat the buns in the oven.'
    
       },
           {
       display_text:'Put the lettuce, tomatoes and gherkins inside the bun along with the patty and serve with chips on the side.'
    
    },
   
    ]
    },
    {
     id:8,
     title:'Paneer and Green Peas Burger',
     img:'https://img.freepik.com/premium-photo/homemade-vegan-burgers-with-chickpea-pattie-green-peas-beetroot-hummus_128659-346.jpg',
     ratings:5.5,
     servings:2,
     cooking_time:'15 minutes',
     prepration_time:'25 minutes',
     ingredients:[
      ' 1 Bread bun',
   '  1 cup paneer',
    ' 1 / 2 boiled rajma',
    ' 1 / 2 peas',
  '   1 / 2 red chilli powder',
   '  1 / 2 tsp Piri Piri powder',
  '   1 / 2 tsp pepper',
  '  Salt as per taste',
   '  1 onion and tomato, sliced',
    ' 5 corn flour slurry',
    ' Breadcrumbs'
  ],
     instructions:[
    {
       display_text:'Take the boiled rajma, potatoes, peas and small bread pieces. Combine this with masalas and mix.'
    },
    {
       display_text:'Give it the shape of Tikki and dip the Tikki in cornflour slurry and bread crumbs. Pan fry this till golden brown.'
    },
    {
       display_text:'Then take the buns and lightly toast them with butter on a pan. Take it out and assemble your burger'
    },
     {
       display_text:'Now first, add a layer of tomato ketchup on one side of the burger, then place the patty, cheese, sliced onion and tomato.'
    },
   {
       display_text:'From the top, add sauces like mustard sauce, mayonnaise, or any other sauce of your choice.'
    },
   {
       display_text:'Finally, close the bun, serve it with fries and enjoy!.'
    
    },
   
    ]
    },
    {
     id:9,
     title:'Vegie Burger',
     img:'https://st2.depositphotos.com/1290614/6909/i/450/depositphotos_69091113-stock-photo-quinoa-burger-with-avocado.jpg',
     ratings:5.5,
     servings:2,
     cooking_time:'15 minutes',
     prepration_time:'25 minutes',
     ingredients:[
      ' 1 Bread bun',
   '  1 cup paneer',
    ' 1 / 2 boiled rajma',
    ' 1 / 2 peas',
  '   1 / 2 red chilli powder',
   '  1 / 2 tsp Piri Piri powder',
  '   1 / 2 tsp pepper',
  '  Salt as per taste',
   '  1 onion and tomato, sliced',
    ' 5 corn flour slurry',
    ' Breadcrumbs'
  ],
     instructions:[
    {
       display_text:'Take the boiled rajma, potatoes, peas and small bread pieces. Combine this with masalas and mix.'
    },
    {
       display_text:'Give it the shape of Tikki and dip the Tikki in cornflour slurry and bread crumbs. Pan fry this till golden brown.'
    },
    {
       display_text:'Then take the buns and lightly toast them with butter on a pan. Take it out and assemble your burger'
    },
     {
       display_text:'Now first, add a layer of tomato ketchup on one side of the burger, then place the patty, cheese, sliced onion and tomato.'
    },
   {
       display_text:'From the top, add sauces like mustard sauce, mayonnaise, or any other sauce of your choice.'
    },
   {
       display_text:'Finally, close the bun, serve it with fries and enjoy!.'
    
    },
   
    ]
    },
    {
     id:10,
     title:'Lamb and Tomato Burger',
     img:'https://i.pinimg.com/originals/c0/ba/34/c0ba34dc7e051cc9411093744dfa7327.jpg',
     ratings:5.5,
     servings:2,
     cooking_time:'15 minutes',
     prepration_time:'25 minutes',
     ingredients:[
      ' 1 Bread bun',
   '  1 cup paneer',
    ' 1 / 2 boiled rajma',
    ' 1 / 2 peas',
  '   1 / 2 red chilli powder',
   '  1 / 2 tsp Piri Piri powder',
  '   1 / 2 tsp pepper',
  '  Salt as per taste',
   '  1 onion and tomato, sliced',
    ' 5 corn flour slurry',
    ' Breadcrumbs'
  ],
     instructions:[
    {
       display_text:'Take the boiled rajma, potatoes, peas and small bread pieces. Combine this with masalas and mix.'
    },
    {
       display_text:'Give it the shape of Tikki and dip the Tikki in cornflour slurry and bread crumbs. Pan fry this till golden brown.'
    },
    {
       display_text:'Then take the buns and lightly toast them with butter on a pan. Take it out and assemble your burger'
    },
     {
       display_text:'Now first, add a layer of tomato ketchup on one side of the burger, then place the patty, cheese, sliced onion and tomato.'
    },
   {
       display_text:'From the top, add sauces like mustard sauce, mayonnaise, or any other sauce of your choice.'
    },
   {
       display_text:'Finally, close the bun, serve it with fries and enjoy!.'
    
    },
   
    ]
    },
    {
     id:11,
     title:'Veg Sandwich',
     img:'https://st.depositphotos.com/1010050/2506/i/950/depositphotos_25069951-stock-photo-vegetable-sandwiches.jpg',
     ratings:5.5,
     servings:4,
     cooking_time:'15 minutes',
     prepration_time:'25 minutes',
     ingredients:[
    
'onions		2 tbsp',
'capscium		2 tbsp',
'tomatoes		2 tbsp',
'boiled potato		2 tbsp',
'green chillies		2',
'coriander leaves		1 tbsp',
'chaat masala		¼ tsp',
'black pepper powder		¼ tsp',
'mayonnaise		1 ½ tbsp',
'bread		4 slices',
'cheese slices		2',
'butter		1 tsp',
'Salt		as per your taste'

  ],
     instructions:[
    {
       display_text:'In a large mixing bowl add the onions, capsicum, tomatoes, green chillies, coriander leaves, boiled and mashed potato, salt, chaat masala and black pepper powder and mix well.'
    },
    {
       display_text:'Once mixed add the mayonnaise and mix the stuffing well.'
    },
    {
       display_text:'Take 2 slices of bread and generously apply the stuffing on both the slices of bread evenly.'
    },
     {
       display_text:'Place 1 cheese slice on top of one of the stuffing and land the other bread with the stuffing on, on top of the cheese slice.'
    },
   {
       display_text:'Now apply butter on the top side of the bread ,Land the buttered side bread on the pan and cook till it turns golden brown in colour.'
    },
   {
       display_text:'Then apply butter on the other slice of bread and cook this side as well till it turns golden in colour.'
    
       },
    {
       display_text:'Once both sides are grilled then remove them on a plate and cut diagonally and enjoy while it’s hot with some tomato ketchup or some spicy green chutney.'
    
    },
   
    ]
    },
    {
     id:12,
     title:'Veg Cheese Sandwich',
     img:'https://img-global.cpcdn.com/recipes/f7da3dff291206ab/1200x630cq70/photo.jpg',
     ratings:4.3,
     servings:2,
     cooking_time:'15 minutes',
     prepration_time:'25 minutes',
     ingredients:[
    
'onions		2 tbsp',
'capscium		2 tbsp',
'tomatoes		2 tbsp',
'boiled potato		2 tbsp',
'green chillies		2',
'coriander leaves		1 tbsp',
'chaat masala		¼ tsp',
'black pepper powder		¼ tsp',
'mayonnaise		1 ½ tbsp',
'bread		4 slices',
'cheese slices		2',
'butter		1 tsp',
'Salt		as per your taste'

  ],
     instructions:[
    {
       display_text:'In a large mixing bowl add the onions, capsicum, tomatoes, green chillies, coriander leaves, boiled and mashed potato, salt, chaat masala and black pepper powder and mix well.'
    },
    {
       display_text:'Once mixed add the mayonnaise and mix the stuffing well.'
    },
    {
       display_text:'Take 2 slices of bread and generously apply the stuffing on both the slices of bread evenly.'
    },
     {
       display_text:'Place 1 cheese slice on top of one of the stuffing and land the other bread with the stuffing on, on top of the cheese slice.'
    },
   {
       display_text:'Now apply butter on the top side of the bread ,Land the buttered side bread on the pan and cook till it turns golden brown in colour.'
    },
   {
       display_text:'Then apply butter on the other slice of bread and cook this side as well till it turns golden in colour.'
    
       },
    {
       display_text:'Once both sides are grilled then remove them on a plate and cut diagonally and enjoy while it’s hot with some tomato ketchup or some spicy green chutney.'
    
    },
   
    ]
    },
    {
     id:13,
     title:'Paneer Sandwich',
     img:'https://img.freepik.com/premium-photo/paneer-bhurji-sandwich-is-tasty-paneer-based-dish-made-with-cottage-cheese-served-with-fresh-tomato-ketchup-green-mint-chutney-selective-focus_466689-30307.jpg',
     ratings:5.3,
     servings:2,
     cooking_time:'20 minutes',
     prepration_time:'25 minutes',
     ingredients:[
   'paneer 2 cups', 
'onions		2 tbsp',
'capscium		2 tbsp',
'tomatoes		2 tbsp',
'boiled potato		2 tbsp',
'green chillies		2',
'coriander leaves		1 tbsp',
'chaat masala		¼ tsp',
'black pepper powder		¼ tsp',
'mayonnaise		1 ½ tbsp',
'bread		4 slices',
'cheese slices		2',
'butter		1 tsp',
'Salt		as per your taste'

  ],
     instructions:[
    {
       display_text:'In a large mixing bowl add the onions, capsicum, tomatoes, green chillies, coriander leaves, boiled and mashed potato, salt, chaat masala and black pepper powder and mix well.'
    },
    {
       display_text:'Once mixed add the mayonnaise and mix the stuffing well.'
    },
    {
       display_text:'Take 2 slices of bread and generously apply the stuffing on both the slices of bread evenly.'
    },
     {
       display_text:'Place 1 cheese slice on top of one of the stuffing and land the other bread with the stuffing on, on top of the cheese slice.'
    },
   {
       display_text:'Now apply butter on the top side of the bread ,Land the buttered side bread on the pan and cook till it turns golden brown in colour.'
    },
   {
       display_text:'Then apply butter on the other slice of bread and cook this side as well till it turns golden in colour.'
    
       },
    {
       display_text:'Once both sides are grilled then remove them on a plate and cut diagonally and enjoy while it’s hot with some tomato ketchup or some spicy green chutney.'
    
    },
   
    ]
    },
    {
     id:14,
     title:'Spinach and Corn Sandwich',
     img:'https://www.ruchikrandhap.com/wp-content/uploads/2017/09/Paneer-Corn-Spinach-Sandwich-4-1-1024x643.jpg',
     ratings:5.3,
     servings:2,
     cooking_time:'20 minutes',
     prepration_time:'25 minutes',
     ingredients:[
       'chopped spinach 2 cups', 
       'boiled corn 1 cup',
'onions		2 tbsp',
'capscium		2 tbsp',
'tomatoes		2 tbsp',
'boiled potato		2 tbsp',
'green chillies		2',
'coriander leaves		1 tbsp',
'chaat masala		¼ tsp',
'black pepper powder		¼ tsp',
'mayonnaise		1 ½ tbsp',
'bread		4 slices',
'cheese slices		2',
'butter		1 tsp',
'Salt		as per your taste'

  ],
     instructions:[
    {
       display_text:'In a large mixing bowl add the onions, capsicum, tomatoes, green chillies, coriander leaves, boiled and mashed potato, salt, chaat masala and black pepper powder and mix well.'
    },
    {
       display_text:'Once mixed add the mayonnaise and mix the stuffing well.'
    },
    {
       display_text:'Take 2 slices of bread and generously apply the stuffing on both the slices of bread evenly.'
    },
     {
       display_text:'Place 1 cheese slice on top of one of the stuffing and land the other bread with the stuffing on, on top of the cheese slice.'
    },
   {
       display_text:'Now apply butter on the top side of the bread ,Land the buttered side bread on the pan and cook till it turns golden brown in colour.'
    },
   {
       display_text:'Then apply butter on the other slice of bread and cook this side as well till it turns golden in colour.'
    
       },
    {
       display_text:'Once both sides are grilled then remove them on a plate and cut diagonally and enjoy while it’s hot with some tomato ketchup or some spicy green chutney.'
    
    },
   
    ]
    },
    {
     id:15,
     title:'Egg Sandwich',
     img:'https://us.123rf.com/450wm/sonyakamoz/sonyakamoz1710/sonyakamoz171000238/88437886-healthy-breakfast-sandwiches-bread-toasts-with-fried-eggs-and-fresh-vegetables-on-wooden-board-over.jpg',
     ratings:5.3,
     servings:2,
     cooking_time:'20 minutes',
     prepration_time:'25 minutes',
     ingredients:[
    
       'boiled eggs 2',
'onions		2 tbsp',
'capscium		2 tbsp',
'tomatoes		2 tbsp',
'boiled potato		2 tbsp',
'green chillies		2',
'coriander leaves		1 tbsp',
'chaat masala		¼ tsp',
'black pepper powder		¼ tsp',
'mayonnaise		1 ½ tbsp',
'bread		4 slices',
'cheese slices		2',
'butter		1 tsp',
'Salt		as per your taste'

  ],
     instructions:[
    {
       display_text:'In a large mixing bowl add the onions, capsicum, tomatoes, green chillies, coriander leaves, boiled and mashed potato, salt, chaat masala and black pepper powder and mix well.'
    },
    {
       display_text:'Once mixed add the mayonnaise and mix the stuffing well.'
    },
    {
       display_text:'Take 2 slices of bread and generously apply the stuffing on both the slices of bread evenly.'
    },
     {
       display_text:'Place 1 cheese slice on top of one of the stuffing and land the other bread with the stuffing on, on top of the cheese slice.'
    },
   {
       display_text:'Now apply butter on the top side of the bread ,Land the buttered side bread on the pan and cook till it turns golden brown in colour.'
    },
   {
       display_text:'Then apply butter on the other slice of bread and cook this side as well till it turns golden in colour.'
    
       },
    {
       display_text:'Once both sides are grilled then remove them on a plate and cut diagonally and enjoy while it’s hot with some tomato ketchup or some spicy green chutney.'
    
    },
   
    ]
    },
    {
     id:16,
     title:'Black Forest Cake',
     img:'https://d33wubrfki0l68.cloudfront.net/cc8d307e0d502686770f2aec6fd0c57cd58982f3/1bfd0/images/uploads/2018_08_26_black_forest_cake_0.jpg',
     ratings:5.5,
     servings:12,
     cooking_time:'170 minutes',
     prepration_time:'35 minutes',
     ingredients:[
'    2 ⅛ cups all-purpose flour',

'2 cups white sugar'
,
'¾ cup unsweetened cocoa powder',

'1 ½ teaspoons baking powder',

'¾ teaspoon baking soda',

'¾ teaspoon salt'
,
'3 eggs',

'1 cup milk',

'½ cup vegetable oil',
  '1 tablespoon vanilla extract',

  ],
     instructions:[
    {
       display_text:'Preheat the oven to 350 degrees F (175 degrees C). Grease and flour two 9-inch round cake pans; line bottoms with parchment paper. Place a medium bowl in the refrigerator to chill.'
    },
    {
       display_text:'Whisk flour, sugar, cocoa, baking powder, baking soda, and salt together in a large bowl. Add eggs, milk, oil, and vanilla; beat until combined. Pour cake batter into the prepared pans.'
    },
    {
       display_text:'Bake in the preheated oven until a toothpick inserted in the centers comes out clean, about 35 minutes. Cool layers in pans on wire racks for 10 minutes. Run a paring knife around edges to loosen and invert carefully onto racks to cool completely, 1 to 2 hours.'
    },
     {
       display_text:'While cake layers bake, drain cherries for topping, reserving 1/2 cup juice. Combine reserved juice, cherries, sugar, and cornstarch in a 2-quart saucepan. Cook, stirring constantly, over low heat until thickened. Stir in vanilla. Let cool at room temperature for 30 minutes. Transfer to the refrigerator to cool completely before assembling cake.'
    },
   {
       display_text:'Now apply butter on the top side of the bread ,Land the buttered side bread on the pan and cook till it turns golden brown in colour.'
    },
   {
       display_text:'Combine whipping cream and confectioners  sugar for frosting in the chilled medium bowl. Beat with an electric mixer at high speed until stiff peaks form..'
    
       },
    {
       display_text:'Split each cake layer in half horizontally using a long serrated knife. Tear one layer into crumbs; set aside. Gently brush loose crumbs off top and sides of remaining layers using a pastry brush or your hands. Reserve 1 1/2 cups frosting for piping decorations on cake; set aside.'
    
       },
     {
       display_text:'To assemble, place one cake layer on a cake plate. Spread with 1 cup frosting; top with 3/4 cup cherry topping. Top with second cake layer; repeat layers of frosting and cherry topping. Top with third cake layer and frost sides of cake.'
    
       },
       {
       display_text:'Pat reserved cake crumbs onto sides of cake. Spoon reserved 1 1/2 cups frosting into a pastry bag fitted with a star decorator tip. Pipe around top and bottom edges of cake. Spoon remaining cherry topping on top of cake.'
    
    },
          {
       display_text:'Store covered in the refrigerator until ready to serve.'
    },
   
    ]
    },
     {
     id:17,
     title:'Red Velvet Cake',
     img:'https://img.freepik.com/premium-photo/red-velvet-cake-wooden-board_34439-725.jpg',
     ratings:5.5,
     servings:12,
     cooking_time:'170 minutes',
     prepration_time:'35 minutes',
     ingredients:[
'    2 ⅛ cups all-purpose flour',

'2 cups white sugar'
,
'¾ cup unsweetened cocoa powder',

'1 ½ teaspoons baking powder',

'¾ teaspoon baking soda',

'¾ teaspoon salt'
,
'3 eggs',

'1 cup milk',

'½ cup vegetable oil',
  '1 tablespoon vanilla extract',

  ],
     instructions:[
    {
       display_text:'Preheat the oven to 350 degrees F (175 degrees C). Grease and flour two 9-inch round cake pans; line bottoms with parchment paper. Place a medium bowl in the refrigerator to chill.'
    },
    {
       display_text:'Whisk flour, sugar, cocoa, baking powder, baking soda, and salt together in a large bowl. Add eggs, milk, oil, and vanilla; beat until combined. Pour cake batter into the prepared pans.'
    },
    {
       display_text:'Bake in the preheated oven until a toothpick inserted in the centers comes out clean, about 35 minutes. Cool layers in pans on wire racks for 10 minutes. Run a paring knife around edges to loosen and invert carefully onto racks to cool completely, 1 to 2 hours.'
    },
     {
       display_text:'While cake layers bake, drain cherries for topping, reserving 1/2 cup juice. Combine reserved juice, cherries, sugar, and cornstarch in a 2-quart saucepan. Cook, stirring constantly, over low heat until thickened. Stir in vanilla. Let cool at room temperature for 30 minutes. Transfer to the refrigerator to cool completely before assembling cake.'
    },
   {
       display_text:'Now apply butter on the top side of the bread ,Land the buttered side bread on the pan and cook till it turns golden brown in colour.'
    },
   {
       display_text:'Combine whipping cream and confectioners  sugar for frosting in the chilled medium bowl. Beat with an electric mixer at high speed until stiff peaks form..'
    
       },
    {
       display_text:'Split each cake layer in half horizontally using a long serrated knife. Tear one layer into crumbs; set aside. Gently brush loose crumbs off top and sides of remaining layers using a pastry brush or your hands. Reserve 1 1/2 cups frosting for piping decorations on cake; set aside.'
    
       },
     {
       display_text:'To assemble, place one cake layer on a cake plate. Spread with 1 cup frosting; top with 3/4 cup cherry topping. Top with second cake layer; repeat layers of frosting and cherry topping. Top with third cake layer and frost sides of cake.'
    
       },
       {
       display_text:'Pat reserved cake crumbs onto sides of cake. Spoon reserved 1 1/2 cups frosting into a pastry bag fitted with a star decorator tip. Pipe around top and bottom edges of cake. Spoon remaining cherry topping on top of cake.'
    
    },
          {
       display_text:'Store covered in the refrigerator until ready to serve.'
    },
   
    ]
    },
    {
     id:18,
     title:'Coffee Cake',
     img:'https://thecafesucrefarine.com/wp-content/uploads/2016/11/Easy-Overnight-Coffee-Cake-4.jpg',
     ratings:5.5,
     servings:12,
     cooking_time:'170 minutes',
     prepration_time:'35 minutes',
     ingredients:[
'    2 ⅛ cups all-purpose flour',

'2 cups white sugar'
,
'¾ cup unsweetened cocoa powder',

'1 ½ teaspoons baking powder',

'¾ teaspoon baking soda',

'¾ teaspoon salt'
,
'3 eggs',

'1 cup milk',

'½ cup vegetable oil',
  '1 tablespoon vanilla extract',

  ],
     instructions:[
    {
       display_text:'Preheat the oven to 350 degrees F (175 degrees C). Grease and flour two 9-inch round cake pans; line bottoms with parchment paper. Place a medium bowl in the refrigerator to chill.'
    },
    {
       display_text:'Whisk flour, sugar, cocoa, baking powder, baking soda, and salt together in a large bowl. Add eggs, milk, oil, and vanilla; beat until combined. Pour cake batter into the prepared pans.'
    },
    {
       display_text:'Bake in the preheated oven until a toothpick inserted in the centers comes out clean, about 35 minutes. Cool layers in pans on wire racks for 10 minutes. Run a paring knife around edges to loosen and invert carefully onto racks to cool completely, 1 to 2 hours.'
    },
     {
       display_text:'While cake layers bake, drain cherries for topping, reserving 1/2 cup juice. Combine reserved juice, cherries, sugar, and cornstarch in a 2-quart saucepan. Cook, stirring constantly, over low heat until thickened. Stir in vanilla. Let cool at room temperature for 30 minutes. Transfer to the refrigerator to cool completely before assembling cake.'
    },
   {
       display_text:'Now apply butter on the top side of the bread ,Land the buttered side bread on the pan and cook till it turns golden brown in colour.'
    },
   {
       display_text:'Combine whipping cream and confectioners  sugar for frosting in the chilled medium bowl. Beat with an electric mixer at high speed until stiff peaks form..'
    
       },
    {
       display_text:'Split each cake layer in half horizontally using a long serrated knife. Tear one layer into crumbs; set aside. Gently brush loose crumbs off top and sides of remaining layers using a pastry brush or your hands. Reserve 1 1/2 cups frosting for piping decorations on cake; set aside.'
    
       },
     {
       display_text:'To assemble, place one cake layer on a cake plate. Spread with 1 cup frosting; top with 3/4 cup cherry topping. Top with second cake layer; repeat layers of frosting and cherry topping. Top with third cake layer and frost sides of cake.'
    
       },
       {
       display_text:'Pat reserved cake crumbs onto sides of cake. Spoon reserved 1 1/2 cups frosting into a pastry bag fitted with a star decorator tip. Pipe around top and bottom edges of cake. Spoon remaining cherry topping on top of cake.'
    
    },
          {
       display_text:'Store covered in the refrigerator until ready to serve.'
    },
   
    ]
    },
    {
     id:19,
     title:'Mango Cup Cake',
     img:'https://i.pinimg.com/564x/59/96/fa/5996fa7262f20043fedbf482fbda5f72.jpg',
     ratings:5.5,
     servings:12,
     cooking_time:'170 minutes',
     prepration_time:'35 minutes',
     ingredients:[
'    2 ⅛ cups all-purpose flour',

'2 cups white sugar'
,
'¾ cup unsweetened cocoa powder',

'1 ½ teaspoons baking powder',

'¾ teaspoon baking soda',

'¾ teaspoon salt'
,
'3 eggs',

'1 cup milk',

'½ cup vegetable oil',
  '1 tablespoon vanilla extract',

  ],
     instructions:[
    {
       display_text:'Preheat the oven to 350 degrees F (175 degrees C). Grease and flour two 9-inch round cake pans; line bottoms with parchment paper. Place a medium bowl in the refrigerator to chill.'
    },
    {
       display_text:'Whisk flour, sugar, cocoa, baking powder, baking soda, and salt together in a large bowl. Add eggs, milk, oil, and vanilla; beat until combined. Pour cake batter into the prepared pans.'
    },
    {
       display_text:'Bake in the preheated oven until a toothpick inserted in the centers comes out clean, about 35 minutes. Cool layers in pans on wire racks for 10 minutes. Run a paring knife around edges to loosen and invert carefully onto racks to cool completely, 1 to 2 hours.'
    },
     {
       display_text:'While cake layers bake, drain cherries for topping, reserving 1/2 cup juice. Combine reserved juice, cherries, sugar, and cornstarch in a 2-quart saucepan. Cook, stirring constantly, over low heat until thickened. Stir in vanilla. Let cool at room temperature for 30 minutes. Transfer to the refrigerator to cool completely before assembling cake.'
    },
   {
       display_text:'Now apply butter on the top side of the bread ,Land the buttered side bread on the pan and cook till it turns golden brown in colour.'
    },
   {
       display_text:'Combine whipping cream and confectioners  sugar for frosting in the chilled medium bowl. Beat with an electric mixer at high speed until stiff peaks form..'
    
       },
    {
       display_text:'Split each cake layer in half horizontally using a long serrated knife. Tear one layer into crumbs; set aside. Gently brush loose crumbs off top and sides of remaining layers using a pastry brush or your hands. Reserve 1 1/2 cups frosting for piping decorations on cake; set aside.'
    
       },
     {
       display_text:'To assemble, place one cake layer on a cake plate. Spread with 1 cup frosting; top with 3/4 cup cherry topping. Top with second cake layer; repeat layers of frosting and cherry topping. Top with third cake layer and frost sides of cake.'
    
       },
       {
       display_text:'Pat reserved cake crumbs onto sides of cake. Spoon reserved 1 1/2 cups frosting into a pastry bag fitted with a star decorator tip. Pipe around top and bottom edges of cake. Spoon remaining cherry topping on top of cake.'
    
    },
          {
       display_text:'Store covered in the refrigerator until ready to serve.'
    },
   
    ]
    },
    {
     id:20,
     title:'Choco Cup Cake',
     img:'https://st2.depositphotos.com/1773130/7992/i/450/depositphotos_79925368-stock-photo-chocolate-cupcakes-with-a-cup.jpg',
     ratings:5.5,
     servings:12,
     cooking_time:'170 minutes',
     prepration_time:'35 minutes',
     ingredients:[
'    2 ⅛ cups all-purpose flour',

'2 cups white sugar'
,
'¾ cup unsweetened cocoa powder',

'1 ½ teaspoons baking powder',

'¾ teaspoon baking soda',

'¾ teaspoon salt'
,
'3 eggs',

'1 cup milk',

'½ cup vegetable oil',
  '1 tablespoon vanilla extract',

  ],
     instructions:[
    {
       display_text:'Preheat the oven to 350 degrees F (175 degrees C). Grease and flour two 9-inch round cake pans; line bottoms with parchment paper. Place a medium bowl in the refrigerator to chill.'
    },
    {
       display_text:'Whisk flour, sugar, cocoa, baking powder, baking soda, and salt together in a large bowl. Add eggs, milk, oil, and vanilla; beat until combined. Pour cake batter into the prepared pans.'
    },
    {
       display_text:'Bake in the preheated oven until a toothpick inserted in the centers comes out clean, about 35 minutes. Cool layers in pans on wire racks for 10 minutes. Run a paring knife around edges to loosen and invert carefully onto racks to cool completely, 1 to 2 hours.'
    },
     {
       display_text:'While cake layers bake, drain cherries for topping, reserving 1/2 cup juice. Combine reserved juice, cherries, sugar, and cornstarch in a 2-quart saucepan. Cook, stirring constantly, over low heat until thickened. Stir in vanilla. Let cool at room temperature for 30 minutes. Transfer to the refrigerator to cool completely before assembling cake.'
    },
   {
       display_text:'Now apply butter on the top side of the bread ,Land the buttered side bread on the pan and cook till it turns golden brown in colour.'
    },
   {
       display_text:'Combine whipping cream and confectioners  sugar for frosting in the chilled medium bowl. Beat with an electric mixer at high speed until stiff peaks form..'
    
       },
    {
       display_text:'Split each cake layer in half horizontally using a long serrated knife. Tear one layer into crumbs; set aside. Gently brush loose crumbs off top and sides of remaining layers using a pastry brush or your hands. Reserve 1 1/2 cups frosting for piping decorations on cake; set aside.'
    
       },
     {
       display_text:'To assemble, place one cake layer on a cake plate. Spread with 1 cup frosting; top with 3/4 cup cherry topping. Top with second cake layer; repeat layers of frosting and cherry topping. Top with third cake layer and frost sides of cake.'
    
       },
       {
       display_text:'Pat reserved cake crumbs onto sides of cake. Spoon reserved 1 1/2 cups frosting into a pastry bag fitted with a star decorator tip. Pipe around top and bottom edges of cake. Spoon remaining cherry topping on top of cake.'
    
    },
          {
       display_text:'Store covered in the refrigerator until ready to serve.'
    },
   
    ]
    },
    {
     id:21,
     title:'Mango Icecream',
     img:'https://img.freepik.com/premium-photo/homemade-mango-ice-cream-bowls-with-fresh-fruits-dark-gray_186277-2005.jpg',
     ratings:5.5,
     servings:12,
     cooking_time:'170 minutes',
     prepration_time:'35 minutes',
     ingredients:[

'2 + ¼ cup milk',
'½ cup sugar',
'8-10 saffron strands',
'or ½ cup store bought condensed milk',
'1 cup mango puree',
'1 cup whipping cream',
'½ cup fresh mango chunks'
  ],
     instructions:[
    {
       display_text:'In a non-stick saucepan, set over a medium heat; add milk and sugar. Give it a mix and let it come to a simmer..'
    },
    {
       display_text:'Add saffron strands and give it a mix.'
    },
    {
       display_text:'Keep stirring the mixture till it thickens and reduces to ⅓ of its original quantity. Take it off the heat but keep stirring for another 2 minutes. Let it cool and transfer it into a bowl.'
    },
     {
       display_text:'Add mango puree to it and give it a good mix. Keep it aside.'
    },
   {
       display_text:'You can also use ½ cup store bought condensed milk instead of the one we made.'
    },
   {
       display_text:'In another bowl, whip the whipping cream till soft peaks.'
    
       },
    {
       display_text:'Fold the whipped cream with the mango mixture and mix them gently.'
    
       },
     {
       display_text:'Fold the mango chunks into it and pour the mixture into a container or a loaf pan like me.'
    
       },
       {
       display_text:'Cling wrap the container properly and freeze it for 6-8 hours; dig in and enjoy!.'
    
    },

   
    ]
    },
     {
     id:22,
     title:'Mango Icecream',
     img:' https://st2.depositphotos.com/1692343/7371/i/600/depositphotos_73719939-stock-photo-homemade-organic-vanilla-ice-cream.jpg',
     ratings:5.5,
     servings:12,
     cooking_time:'170 minutes',
     prepration_time:'35 minutes',
     ingredients:[
 '2 tbsp vanila extract',
'2 + ¼ cup milk',
'½ cup sugar',
'8-10 saffron strands',
'or ½ cup store bought condensed milk',
'1 cup mango puree',
'1 cup whipping cream',
'½ cup fresh mango chunks'
  ],
     instructions:[
    {
       display_text:'In a non-stick saucepan, set over a medium heat; add milk and sugar. Give it a mix and let it come to a simmer..'
    },
    {
       display_text:'Add saffron strands and give it a mix.'
    },
    {
       display_text:'Keep stirring the mixture till it thickens and reduces to ⅓ of its original quantity. Take it off the heat but keep stirring for another 2 minutes. Let it cool and transfer it into a bowl.'
    },
     {
       display_text:'Add mango puree to it and give it a good mix. Keep it aside.'
    },
   {
       display_text:'You can also use ½ cup store bought condensed milk instead of the one we made.'
    },
   {
       display_text:'In another bowl, whip the whipping cream till soft peaks.'
    
       },
    {
       display_text:'Fold the whipped cream with the mango mixture and mix them gently.'
    
       },
     {
       display_text:'Fold the mango chunks into it and pour the mixture into a container or a loaf pan like me.'
    
       },
       {
       display_text:'Cling wrap the container properly and freeze it for 6-8 hours; dig in and enjoy!.'
    
    },

   
    ]
    },
    {
     id:23,
     title:'Choco Icecream',
     img:' https://previews.123rf.com/images/tobi/tobi1412/tobi141200033/34439224-scoops-of-dark-chocolate-ice-cream.jpg',
     ratings:5.5,
     servings:12,
     cooking_time:'170 minutes',
     prepration_time:'35 minutes',
     ingredients:[
 '2 tbsp vanila extract',
'2 + ¼ cup milk',
'½ cup sugar',
'8-10 saffron strands',
'or ½ cup store bought condensed milk',
'1 cup mango puree',
'1 cup whipping cream',
'½ cup fresh mango chunks'
  ],
     instructions:[
    {
       display_text:'In a non-stick saucepan, set over a medium heat; add milk and sugar. Give it a mix and let it come to a simmer..'
    },
    {
       display_text:'Add saffron strands and give it a mix.'
    },
    {
       display_text:'Keep stirring the mixture till it thickens and reduces to ⅓ of its original quantity. Take it off the heat but keep stirring for another 2 minutes. Let it cool and transfer it into a bowl.'
    },
     {
       display_text:'Add mango puree to it and give it a good mix. Keep it aside.'
    },
   {
       display_text:'You can also use ½ cup store bought condensed milk instead of the one we made.'
    },
   {
       display_text:'In another bowl, whip the whipping cream till soft peaks.'
    
       },
    {
       display_text:'Fold the whipped cream with the mango mixture and mix them gently.'
    
       },
     {
       display_text:'Fold the mango chunks into it and pour the mixture into a container or a loaf pan like me.'
    
       },
       {
       display_text:'Cling wrap the container properly and freeze it for 6-8 hours; dig in and enjoy!.'
    
    },

   
    ]
    },
    {
     id:24,
     title:'Rose and Tender Coconut Icecream',
     img:'  https://blog.cruisefashion.com/image.axd?picture=/cocorose2.jpg',
     ratings:5.5,
     servings:12,
     cooking_time:'170 minutes',
     prepration_time:'35 minutes',
     ingredients:[
 '2 tbsp vanila extract',
'2 + ¼ cup milk',
'½ cup sugar',
'8-10 saffron strands',
'or ½ cup store bought condensed milk',
'1 cup mango puree',
'1 cup whipping cream',
'½ cup fresh mango chunks'
  ],
     instructions:[
    {
       display_text:'In a non-stick saucepan, set over a medium heat; add milk and sugar. Give it a mix and let it come to a simmer..'
    },
    {
       display_text:'Add saffron strands and give it a mix.'
    },
    {
       display_text:'Keep stirring the mixture till it thickens and reduces to ⅓ of its original quantity. Take it off the heat but keep stirring for another 2 minutes. Let it cool and transfer it into a bowl.'
    },
     {
       display_text:'Add mango puree to it and give it a good mix. Keep it aside.'
    },
   {
       display_text:'You can also use ½ cup store bought condensed milk instead of the one we made.'
    },
   {
       display_text:'In another bowl, whip the whipping cream till soft peaks.'
    
       },
    {
       display_text:'Fold the whipped cream with the mango mixture and mix them gently.'
    
       },
     {
       display_text:'Fold the mango chunks into it and pour the mixture into a container or a loaf pan like me.'
    
       },
       {
       display_text:'Cling wrap the container properly and freeze it for 6-8 hours; dig in and enjoy!.'
    
    },

   
    ]
    },
    {
     id:25,
     title:'Coffee Icecream',
     img:' https://st3.depositphotos.com/1027198/14795/i/600/depositphotos_147957555-stock-photo-coffee-ice-cream.jpg',
     ratings:5.5,
     servings:12,
     cooking_time:'170 minutes',
     prepration_time:'35 minutes',
     ingredients:[
 '2 tbsp vanila extract',
'2 + ¼ cup milk',
'½ cup sugar',
'8-10 saffron strands',
'or ½ cup store bought condensed milk',
'1 cup mango puree',
'1 cup whipping cream',
'½ cup fresh mango chunks'
  ],
     instructions:[
    {
       display_text:'In a non-stick saucepan, set over a medium heat; add milk and sugar. Give it a mix and let it come to a simmer..'
    },
    {
       display_text:'Add saffron strands and give it a mix.'
    },
    {
       display_text:'Keep stirring the mixture till it thickens and reduces to ⅓ of its original quantity. Take it off the heat but keep stirring for another 2 minutes. Let it cool and transfer it into a bowl.'
    },
     {
       display_text:'Add mango puree to it and give it a good mix. Keep it aside.'
    },
   {
       display_text:'You can also use ½ cup store bought condensed milk instead of the one we made.'
    },
   {
       display_text:'In another bowl, whip the whipping cream till soft peaks.'
    
       },
    {
       display_text:'Fold the whipped cream with the mango mixture and mix them gently.'
    
       },
     {
       display_text:'Fold the mango chunks into it and pour the mixture into a container or a loaf pan like me.'
    
       },
       {
       display_text:'Cling wrap the container properly and freeze it for 6-8 hours; dig in and enjoy!.'
    
    },

   
    ]
    },
    
    
    
  
 ]
   
}
