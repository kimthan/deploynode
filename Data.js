const imgFolder = 'images/'
let id = 0

const data = [
    {Id:id++, name:'Ägg', category:'protein', position:1, img:imgFolder+'Ägg.png'},
{Id:id++, name:'Ananas', category:'protein', position:1, img:imgFolder+'Ananas.png'},
{Id:id++, name:'Ananas', category:'protein', position:1, img:imgFolder+'ananas1.jpg'},
{Id:id++, name:'Ananas', category:'protein', position:1, img:imgFolder+'ananas2.png'},
{Id:id++, name:'Avokado', category:'protein', position:1, img:imgFolder+'avocado1.jpg'},
{Id:id++, name:'Avokado', category:'protein', position:1, img:imgFolder+'avocado2.jpg'},
{Id:id++, name:'Avokado', category:'protein', position:1, img:imgFolder+'Avokado.png'},
{Id:id++, name:'bbqsauce', category:'protein', position:1, img:imgFolder+'bbqsauce.jpeg'},
{Id:id++, name:'Beat Cornball', category:'protein', position:1, img:imgFolder+'Beat Cornball.png'},
{Id:id++, name:'blackbean', category:'protein', position:1, img:imgFolder+'blackbean1.jpg'},
{Id:id++, name:'blackbean', category:'protein', position:1, img:imgFolder+'blackbean2.jpg'},
{Id:id++, name:'blackolive', category:'protein', position:1, img:imgFolder+'blackolive.png'},
{Id:id++, name:'blackolive', category:'protein', position:1, img:imgFolder+'blackolive1.png'},
{Id:id++, name:'blackolive', category:'protein', position:1, img:imgFolder+'blackolive2.png'},
{Id:id++, name:'Blomkålsris med citronsmak', category:'protein', position:1, img:imgFolder+'Blomkålsris med citronsmak.png'},
{Id:id++, name:'Bönmix mukimame', category:'protein', position:1, img:imgFolder+'Bönmix mukimame.png'},
{Id:id++, name:'Broccoli', category:'protein', position:1, img:imgFolder+'Broccoli.jpg'},
{Id:id++, name:'Broccoli', category:'protein', position:1, img:imgFolder+'broccoli.png'},
{Id:id++, name:'bulgur', category:'protein', position:1, img:imgFolder+'bulgur1.jpg'},
{Id:id++, name:'bulgur', category:'protein', position:1, img:imgFolder+'bulgur2.jpg'},
{Id:id++, name:'Cantaloupemelon', category:'protein', position:1, img:imgFolder+'Cantaloupemelon.png'},
{Id:id++, name:'carot', category:'protein', position:1, img:imgFolder+'carot1.png'},
{Id:id++, name:'carot', category:'protein', position:1, img:imgFolder+'carot2.png'},
{Id:id++, name:'carot', category:'protein', position:1, img:imgFolder+'carot3.jpg'},
{Id:id++, name:'carot', category:'protein', position:1, img:imgFolder+'carot4.jpg'},
{Id:id++, name:'Cherry pepper', category:'protein', position:1, img:imgFolder+'Cherry pepper.png'},
{Id:id++, name:'chicken1', category:'protein', position:1, img:imgFolder+'chicken1.jpg'},
{Id:id++, name:'Cocktailtomater Mix', category:'protein', position:1, img:imgFolder+'Cocktailtomater Mix.png'},
{Id:id++, name:'Cocktailtomater Mix', category:'protein', position:1, img:imgFolder+'Cocktailtomater.png'},
{Id:id++, name:'coke', category:'protein', position:1, img:imgFolder+'coke1.jpg'},
{Id:id++, name:'coke', category:'protein', position:1, img:imgFolder+'coke2.jpg'},
{Id:id++, name:'coke', category:'protein', position:1, img:imgFolder+'coke3.jpg'},
{Id:id++, name:'cokezero', category:'protein', position:1, img:imgFolder+'cokezero1.jpg'},
{Id:id++, name:'Coleslaw', category:'protein', position:1, img:imgFolder+'Coleslaw.png'},
{Id:id++, name:'corn', category:'protein', position:1, img:imgFolder+'corn1.png'},
{Id:id++, name:'corn', category:'protein', position:1, img:imgFolder+'corn2.png'},
{Id:id++, name:'corn', category:'protein', position:1, img:imgFolder+'corn3.jpg'},
{Id:id++, name:'Cornichoner', category:'protein', position:1, img:imgFolder+'Cornichoner.png'},
{Id:id++, name:'Cottage cheese', category:'protein', position:1, img:imgFolder+'Cottage cheese.png'},
{Id:id++, name:'Couscous Berebere', category:'protein', position:1, img:imgFolder+'Couscous Berebere.png'},
{Id:id++, name:'Couscous Tabbouleh', category:'protein', position:1, img:imgFolder+'Couscous Tabbouleh.png'},
{Id:id++, name:'cremefresh', category:'protein', position:1, img:imgFolder+'cremefresh1.jpg'},
{Id:id++, name:'cremefresh', category:'protein', position:1, img:imgFolder+'cremefresh2.jpg'},
{Id:id++, name:'cuecumber', category:'protein', position:1, img:imgFolder+'cuecumber1.jpg'},
{Id:id++, name:'cuecumber', category:'protein', position:1, img:imgFolder+'cuecumber2.png'},
{Id:id++, name:'cuecumber', category:'protein', position:1, img:imgFolder+'cuecumber3.png'},
{Id:id++, name:'dietcoke', category:'protein', position:1, img:imgFolder+'dietcoke1.jpg'},
{Id:id++, name:'dillsås', category:'protein', position:1, img:imgFolder+'dillsås1.jpg'},
{Id:id++, name:'drytomato', category:'protein', position:1, img:imgFolder+'drytomato1.jpg'},
{Id:id++, name:'drytomato', category:'protein', position:1, img:imgFolder+'drytomato2.jpg'},
{Id:id++, name:'edamame', category:'protein', position:1, img:imgFolder+'edamame1.png'},
{Id:id++, name:'edamame', category:'protein', position:1, img:imgFolder+'edamame2.jpeg'},
{Id:id++, name:'edamame', category:'protein', position:1, img:imgFolder+'edamame3.jpg'},
{Id:id++, name:'Ägg', category:'protein', position:1, img:imgFolder+'egg1.jpg'},
{Id:id++, name:'Ägg', category:'protein', position:1, img:imgFolder+'egg2.jpg'},
{Id:id++, name:'Ägg', category:'protein', position:1, img:imgFolder+'egg3.jpg'},
{Id:id++, name:'Falafel', category:'protein', position:1, img:imgFolder+'Falafel.png'},
{Id:id++, name:'fanta', category:'protein', position:1, img:imgFolder+'fanta1.jpg'},
{Id:id++, name:'fanta', category:'protein', position:1, img:imgFolder+'fanta2.jpg'},
{Id:id++, name:'fantaexotic', category:'protein', position:1, img:imgFolder+'fantaexotic1.jpg'},
{Id:id++, name:'fantalemon', category:'protein', position:1, img:imgFolder+'fantalemon1.jpg'},
{Id:id++, name:'fefferoni', category:'protein', position:1, img:imgFolder+'fefferoni1.jpg'},
{Id:id++, name:'fefferoni', category:'protein', position:1, img:imgFolder+'fefferoni2.jpg'},
{Id:id++, name:'fest', category:'protein', position:1, img:imgFolder+'fest1.jpg'},
{Id:id++, name:'fest', category:'protein', position:1, img:imgFolder+'fest2.jpg'},
{Id:id++, name:'fest', category:'protein', position:1, img:imgFolder+'fest3.jpg'},
{Id:id++, name:'fest', category:'protein', position:1, img:imgFolder+'fest4.jpg'},
{Id:id++, name:'fest', category:'protein', position:1, img:imgFolder+'fest5.jpg'},
{Id:id++, name:'Fetaost', category:'protein', position:1, img:imgFolder+'Fetaost.png'},
{Id:id++, name:'Fruktsallad', category:'protein', position:1, img:imgFolder+'Fruktsallad.png'},
{Id:id++, name:'Gemelli', category:'protein', position:1, img:imgFolder+'Gemelli.png'},
{Id:id++, name:'greenchilli', category:'protein', position:1, img:imgFolder+'greenchilli1.jpg'},
{Id:id++, name:'greenolive', category:'protein', position:1, img:imgFolder+'greenolive1.png'},
{Id:id++, name:'greenolive', category:'protein', position:1, img:imgFolder+'greenolive2.png'},
{Id:id++, name:'greenolive', category:'protein', position:1, img:imgFolder+'greenolive3.jpg'},
{Id:id++, name:'greenolive', category:'protein', position:1, img:imgFolder+'greenolive4.jpg'},
{Id:id++, name:'greenpepper', category:'protein', position:1, img:imgFolder+'greenpepper1.jpeg'},
{Id:id++, name:'greenpepper', category:'protein', position:1, img:imgFolder+'greenpepper2.jpg'},
{Id:id++, name:'greenpepper', category:'protein', position:1, img:imgFolder+'greenpepper3.jpg'},
{Id:id++, name:'Gröna Ärtor', category:'protein', position:1, img:imgFolder+'Gröna Ärtor.png'},
{Id:id++, name:'Gröna Sojabönor', category:'protein', position:1, img:imgFolder+'Gröna Sojabönor.png'},
{Id:id++, name:'Grönkålssallad', category:'protein', position:1, img:imgFolder+'Grönkålssallad.png'},
{Id:id++, name:'Gyros', category:'protein', position:1, img:imgFolder+'Gyros.png'},
{Id:id++, name:'Honungsmelon', category:'protein', position:1, img:imgFolder+'Honungsmelon.png'},
{Id:id++, name:'Hummus', category:'protein', position:1, img:imgFolder+'Hummus.png'},
{Id:id++, name:'Indiskt Morot & Linsris', category:'protein', position:1, img:imgFolder+'Indiskt Morot & Linsris.png'},
{Id:id++, name:'Isbergssallad', category:'protein', position:1, img:imgFolder+'Isbergssallad.png'},
{Id:id++, name:'Italiensk black barleysallad', category:'protein', position:1, img:imgFolder+'Italiensk black barleysallad.png'},
{Id:id++, name:'Kallrökt lax', category:'protein', position:1, img:imgFolder+'Kallrökt lax.png'},
{Id:id++, name:'Kräftstjärtar', category:'protein', position:1, img:imgFolder+'Kräftstjärtar.png'},
{Id:id++, name:'Krämig chipotlepasta med bacon', category:'protein', position:1, img:imgFolder+'Krämig chipotlepasta med bacon.png'},
{Id:id++, name:'Krämig pasta med chili', category:'protein', position:1, img:imgFolder+'Krämig pasta med chili.png'},
{Id:id++, name:'Krämig salladsost', category:'protein', position:1, img:imgFolder+'Krämig salladsost.png'},
{Id:id++, name:'Kronärtskockshjärtan', category:'protein', position:1, img:imgFolder+'Kronärtskockshjärtan.png'},
{Id:id++, name:'Krutonger vitlök & persilja', category:'protein', position:1, img:imgFolder+'Krutonger vitlök & persilja.png'},
{Id:id++, name:'Kryddiga Sriracha Kikärtor', category:'protein', position:1, img:imgFolder+'Kryddiga Sriracha Kikärtor.png'},
{Id:id++, name:'Kycklingspett chili', category:'protein', position:1, img:imgFolder+'Kycklingspett chili.png'},
{Id:id++, name:'Libanesisk quinoasallad', category:'protein', position:1, img:imgFolder+'Libanesisk quinoasallad.png'},
{Id:id++, name:'loka', category:'protein', position:1, img:imgFolder+'loka1.jpg'},
{Id:id++, name:'lokaboll1', category:'protein', position:1, img:imgFolder+'lokaboll1.jpg'},
{Id:id++, name:'lokacitrus1', category:'protein', position:1, img:imgFolder+'lokacitrus1.jpg'},
{Id:id++, name:'lokanaturell1', category:'protein', position:1, img:imgFolder+'lokanaturell1.jpg'},
{Id:id++, name:'Majs', category:'protein', position:1, img:imgFolder+'Majs.png'},
{Id:id++, name:'Mango', category:'protein', position:1, img:imgFolder+'Mango.png'},
{Id:id++, name:'mayonaise1', category:'protein', position:1, img:imgFolder+'mayonaise1.png'},
{Id:id++, name:'Melonmix', category:'protein', position:1, img:imgFolder+'Melonmix.png'},
{Id:id++, name:'mer1', category:'protein', position:1, img:imgFolder+'mer1.jpg'},
{Id:id++, name:'mer1', category:'protein', position:1, img:imgFolder+'mer2.jpg'},
{Id:id++, name:'mer1', category:'protein', position:1, img:imgFolder+'mer3.jpg'},
{Id:id++, name:'mer1', category:'protein', position:1, img:imgFolder+'mer4.jpg'},
{Id:id++, name:'Miniköttbullar', category:'protein', position:1, img:imgFolder+'Miniköttbullar.png'},
{Id:id++, name:'Mojo Rojo Bönröra', category:'protein', position:1, img:imgFolder+'Mojo Rojo Bönröra.png'},
{Id:id++, name:'Morot Julienne', category:'protein', position:1, img:imgFolder+'Morot Julienne.png'},
{Id:id++, name:'Morot-zucchini nuggets', category:'protein', position:1, img:imgFolder+'Morot-zucchini nuggets.png'},
{Id:id++, name:'Mozzarella', category:'protein', position:1, img:imgFolder+'Mozzarella.png'},
{Id:id++, name:'Naturella Krutonger', category:'protein', position:1, img:imgFolder+'Naturella Krutonger.png'},
{Id:id++, name:'Nudelsallad Sweet Chili', category:'protein', position:1, img:imgFolder+'Nudelsallad Sweet Chili.png'},
{Id:id++, name:'Nudelsallad wok', category:'protein', position:1, img:imgFolder+'Nudelsallad wok.png'},
{Id:id++, name:'Olivolja & balsamico', category:'protein', position:1, img:imgFolder+'Olivolja & balsamico.png'},
{Id:id++, name:'Örtkryddad trivilini', category:'protein', position:1, img:imgFolder+'Örtkryddad trivilini.png'},
{Id:id++, name:'Örtmarinerade oliver', category:'protein', position:1, img:imgFolder+'Örtmarinerade oliver.png'},
{Id:id++, name:'Paprikamix', category:'protein', position:1, img:imgFolder+'Paprikamix.png'},
{Id:id++, name:'Pärlgrynsallad', category:'protein', position:1, img:imgFolder+'Pärlgrynsallad.png'},
{Id:id++, name:'Pasta basilika soltorkad tomat', category:'protein', position:1, img:imgFolder+'Pasta basilika soltorkad tomat.png'},
{Id:id++, name:'pasta1', category:'protein', position:1, img:imgFolder+'pasta1.jpg'},
{Id:id++, name:'pasta1', category:'protein', position:1, img:imgFolder+'pasta2.jpg'},
{Id:id++, name:'pasta1', category:'protein', position:1, img:imgFolder+'pasta3.png'},
{Id:id++, name:'Pastasallad oliv', category:'protein', position:1, img:imgFolder+'Pastasallad oliv.png'},
{Id:id++, name:'Pastasallad pesto', category:'protein', position:1, img:imgFolder+'Pastasallad pesto.png'},
{Id:id++, name:'Picklad rödlök', category:'protein', position:1, img:imgFolder+'Picklad rödlök.png'},
{Id:id++, name:'Pico de gallo', category:'protein', position:1, img:imgFolder+'Pico de gallo.png'},
{Id:id++, name:'pineaplechunk1', category:'protein', position:1, img:imgFolder+'pineaplechunk1.png'},
{Id:id++, name:'pineaplesliced1', category:'protein', position:1, img:imgFolder+'pineaplesliced1.jpg'},
{Id:id++, name:'Potatissallad', category:'protein', position:1, img:imgFolder+'Potatissallad.png'},
{Id:id++, name:'Quinoa gurkmeja & örter', category:'protein', position:1, img:imgFolder+'Quinoa gurkmeja & örter.png'},
{Id:id++, name:'Räkor', category:'protein', position:1, img:imgFolder+'Räkor.png'},
{Id:id++, name:'Råkost crunch', category:'protein', position:1, img:imgFolder+'Råkost crunch.jpg'},
{Id:id++, name:'Råkost Regnbågssallad', category:'protein', position:1, img:imgFolder+'Råkost Regnbågssallad.png'},
{Id:id++, name:'ramlösa', category:'protein', position:1, img:imgFolder+'ramlösa1.jpeg'},
{Id:id++, name:'ramlösa', category:'protein', position:1, img:imgFolder+'ramlösa1.jpg'},
{Id:id++, name:'ramlösaäpple', category:'protein', position:1, img:imgFolder+'ramlösaäpple1.jpg'},
{Id:id++, name:'ramlösacitrus', category:'protein', position:1, img:imgFolder+'ramlösacitrus1.jpg'},
{Id:id++, name:'ramlösafläder1', category:'protein', position:1, img:imgFolder+'ramlösafläder1.jpg'},
{Id:id++, name:'ramlösalingon', category:'protein', position:1, img:imgFolder+'ramlösalingon.jpg'},
{Id:id++, name:'redbull1', category:'protein', position:1, img:imgFolder+'redbull1.jpg'},
{Id:id++, name:'redbullsugerfree', category:'protein', position:1, img:imgFolder+'redbullsugerfree1.jpg'},
{Id:id++, name:'redcabbage', category:'protein', position:1, img:imgFolder+'redcabbage.jpg'},
{Id:id++, name:'redcabbage', category:'protein', position:1, img:imgFolder+'redcabbage1.jpg'},
{Id:id++, name:'redcabbage', category:'protein', position:1, img:imgFolder+'redcabbage2.jpg'},
{Id:id++, name:'redkidney', category:'protein', position:1, img:imgFolder+'redkidney1.jpg'},
{Id:id++, name:'redkidney', category:'protein', position:1, img:imgFolder+'redkidney2.jpg'},
{Id:id++, name:'redonion', category:'protein', position:1, img:imgFolder+'redonion.jpg'},
{Id:id++, name:'redonion', category:'protein', position:1, img:imgFolder+'redonion2.jpg'},
{Id:id++, name:'redonion', category:'protein', position:1, img:imgFolder+'redonion3.png'},
{Id:id++, name:'redpepper', category:'protein', position:1, img:imgFolder+'redpepper1.jpg'},
{Id:id++, name:'redpepper', category:'protein', position:1, img:imgFolder+'redpepper2.png'},
{Id:id++, name:'redpepper', category:'protein', position:1, img:imgFolder+'redpepper3.jpg'},
{Id:id++, name:'redpepper', category:'protein', position:1, img:imgFolder+'redpepper4.jpg'},
{Id:id++, name:'Rödbetshummus', category:'protein', position:1, img:imgFolder+'Rödbetshummus.png'},
{Id:id++, name:'Rödlök', category:'protein', position:1, img:imgFolder+'Rödlök.png'},
{Id:id++, name:'Rökt kalkon', category:'protein', position:1, img:imgFolder+'Rökt kalkon.png'},
{Id:id++, name:'Rökt skinka', category:'protein', position:1, img:imgFolder+'Rökt skinka.png'},
{Id:id++, name:'rosesallad1', category:'protein', position:1, img:imgFolder+'rosesallad1.png'},
{Id:id++, name:'Rostad lök', category:'protein', position:1, img:imgFolder+'Rostad lök.png'},
{Id:id++, name:'Ruccolasallad', category:'protein', position:1, img:imgFolder+'Ruccolasallad.png'},
{Id:id++, name:'Sallad familjemix', category:'protein', position:1, img:imgFolder+'Sallad familjemix.png'},
{Id:id++, name:'Sallad Napolimix', category:'protein', position:1, img:imgFolder+'Sallad Napolimix.png'},
{Id:id++, name:'sallad', category:'protein', position:1, img:imgFolder+'sallad.png'},
{Id:id++, name:'sallad', category:'protein', position:1, img:imgFolder+'sallad1.png'},
{Id:id++, name:'sallad', category:'protein', position:1, img:imgFolder+'sallad2.svg'},
{Id:id++, name:'Salladskyckling', category:'protein', position:1, img:imgFolder+'Salladskyckling.jpg'},
{Id:id++, name:'Salladskyckling', category:'protein', position:1, img:imgFolder+'Salladskyckling.png'},
{Id:id++, name:'Salladsost Gouda', category:'protein', position:1, img:imgFolder+'Salladsost Gouda.png'},
{Id:id++, name:'Salladstopping Physalis', category:'protein', position:1, img:imgFolder+'Salladstopping Physalis.png'},
{Id:id++, name:'Salladstoppning Kokos', category:'protein', position:1, img:imgFolder+'Salladstoppning Kokos.png'},
{Id:id++, name:'Sesampicklade Grönsaker', category:'protein', position:1, img:imgFolder+'Sesampicklade Grönsaker.png'},
{Id:id++, name:'Skagenröra fraiche', category:'protein', position:1, img:imgFolder+'Skagenröra fraiche.png'},
{Id:id++, name:'Skivad Gurka', category:'Skivad Gurka', position:1, img:imgFolder+'Skivad Gurka.png'},
{Id:id++, name:'Skivad kyckling', category:'Skivad kyckling', position:1, img:imgFolder+'Skivad kyckling.png'},
{Id:id++, name:'Sojabönor ört- och vitlöksmarinerade', category:'Sojabönor ört- och vitlöksmarinerade', position:1, img:imgFolder+'Sojabönor ört- och vitlöksmarinerade.png'},
{Id:id++, name:'Soltorkade tomater', category:'Soltorkade tomater', position:1, img:imgFolder+'Soltorkade tomater.png'},
{Id:id++, name:'Sötpotatissallad', category:'Sötpotatissallad', position:1, img:imgFolder+'Sötpotatissallad.png'},
{Id:id++, name:'sprite1', category:'sprite1', position:1, img:imgFolder+'sprite1.jpg'},
{Id:id++, name:'Surimi & kräftstjärtar', category:'Surimi & kräftstjärtar', position:1, img:imgFolder+'Surimi & kräftstjärtar.png'},
{Id:id++, name:'Surimi', category:'Surimi', position:1, img:imgFolder+'Surimi.png'},
{Id:id++, name:'Svart quinoa & linssallad', category:'Svart quinoa & linssallad', position:1, img:imgFolder+'Svart quinoa & linssallad.png'},
{Id:id++, name:'Tacokyckling', category:'Tacokyckling', position:1, img:imgFolder+'Tacokyckling.png'},
{Id:id++, name:'Tärnad Gurka', category:'Tärnad Gurka', position:1, img:imgFolder+'Tärnad Gurka.png'},
{Id:id++, name:'Tomat & basilika bite', category:'Tomat & basilika bite', position:1, img:imgFolder+'Tomat & basilika bite.png'},
{Id:id++, name:'tomato', category:'tomato', position:1, img:imgFolder+'tomato1.png'},
{Id:id++, name:'tomato', category:'tomato', position:1, img:imgFolder+'tomato2.png'},
{Id:id++, name:'tomato', category:'tomato', position:1, img:imgFolder+'tomato3.png'},
{Id:id++, name:'Tonfiskröra med kvarg', category:'Tonfiskröra med kvarg', position:1, img:imgFolder+'Tonfiskröra med kvarg.png'},
{Id:id++, name:'aprikoser, tranbär, solrosfrön', category:'aprikoser, tranbär, solrosfrön', position:1, img:imgFolder+'Topping aprikoser, tranbär, solrosfrön.png'},
{Id:id++, name:'kokoschips, pumpa, solroskärnor', category:'kokoschips, pumpa, solroskärnor', position:1, img:imgFolder+'Topping kokoschips, pumpa, solroskärnor.png'},
{Id:id++, name:'pumpakärnor, tranbär, gojibär', category:'protein', position:1, img:imgFolder+'Topping pumpakärnor, tranbär, gojibär.png'},
{Id:id++, name:'trocadero1', category:'protein', position:1, img:imgFolder+'trocadero1.jpg'},
{Id:id++, name:'Tzatziki', category:'protein', position:1, img:imgFolder+'TZATZIKI.jpg'},
{Id:id++, name:'Tzatziki', category:'protein', position:1, img:imgFolder+'Tzatziki.png'},
{Id:id++, name:'Varmrökt lax', category:'protein', position:1, img:imgFolder+'Varmrökt lax.png'},
{Id:id++, name:'Vattenmelon', category:'protein', position:1, img:imgFolder+'Vattenmelon.png'},
{Id:id++, name:'Vindruvor', category:'protein', position:1, img:imgFolder+'Vindruvor.png'},
{Id:id++, name:'vitlöksås1', category:'protein', position:1, img:imgFolder+'vitlöksås1.jpg'},
{Id:id++, name:'vitost1', category:'protein', position:1, img:imgFolder+'vitost1.png'},
{Id:id++, name:'vitost2', category:'protein', position:1, img:imgFolder+'vitost2.png'},
{Id:id++, name:'vitost4', category:'protein', position:1, img:imgFolder+'vitost4.png'},
{Id:id++, name:'wakame1', category:'protein', position:1, img:imgFolder+'wakame1.jpg'},
{Id:id++, name:'wakame2', category:'protein', position:1, img:imgFolder+'wakame2.jpg'},
{Id:id++, name:'wakame3', category:'protein', position:1, img:imgFolder+'wakame3.jpg'},
{Id:id++, name:'yellowonion', category:'protein', position:1, img:imgFolder+'yellowonion.png'},
]

module.exports = data