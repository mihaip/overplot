var N = Neighborhood;var S = QuoteSet;var Q = Quote;
var neighborhoods = [
  new N('Chelsea', 272, [[40.757628,-74.005558],[40.748866,-73.984745],[40.742022,-73.989766],[40.743323,-73.992888],[40.738031,-73.996675],[40.743323,-74.009571],[40.748590,-74.008498],[40.750313,-74.009099],[40.754572,-74.008026]], 40.747687, -73.999016, [5,6,7,8,0,1,2,3,4])
  ,new N('East Village', 290, [[40.734934,-73.990345],[40.727064,-73.971505],[40.718022,-73.974080],[40.723876,-73.993092],[40.730478,-73.990989]], 40.726051, -73.982438, [0,1,2])
  ,new N('Gramercy', 66, [[40.727064,-73.971505],[40.734934,-73.990345],[40.735421,-73.990313],[40.735129,-73.989594],[40.740364,-73.985796],[40.742014,-73.989776],[40.746273,-73.986558],[40.743680,-73.980174],[40.738771,-73.983693],[40.734836,-73.973737],[40.729340,-73.971334]], 40.736100, -73.981353, [6,7,8,9,10,0])
  ,new N('Murray Hill', 49, [[40.743307,-73.971441],[40.746103,-73.978307],[40.743648,-73.980153],[40.746273,-73.986558],[40.753337,-73.981419],[40.747647,-73.968458]], 40.747840, -73.977842, [4,5,0])
  ,new N('TriBeCa', 30, [[40.726820,-74.011674],[40.719323,-74.001353],[40.714997,-74.005129],[40.712834,-74.007061],[40.714737,-74.011567],[40.715615,-74.017682],[40.718884,-74.017317]], 40.719202, -74.009988, [5,6,0,1,2])
  ,new N('Financial District', 50, [[40.715615,-74.017671],[40.714728,-74.011567],[40.712817,-74.007039],[40.715005,-74.005129],[40.714468,-74.004099],[40.714086,-74.003574],[40.713826,-74.003048],[40.714102,-74.002565],[40.713191,-74.001052],[40.711394,-74.001020],[40.710971,-74.000720],[40.710410,-74.001138],[40.708255,-73.998284],[40.701821,-74.009056],[40.700553,-74.014034],[40.700943,-74.016008],[40.704001,-74.018562],[40.706148,-74.019785]], 40.708392, -74.010510, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,0])
  ,new N('Chinatown', 12, [[40.708255,-73.998274],[40.710418,-74.001127],[40.710979,-74.000709],[40.711394,-74.001009],[40.713191,-74.001042],[40.714094,-74.002544],[40.713826,-74.003026],[40.714078,-74.003541],[40.714468,-74.004089],[40.715013,-74.005119],[40.719323,-74.001342],[40.717290,-73.998445],[40.714330,-73.989251],[40.714915,-73.982577],[40.712834,-73.975496],[40.710378,-73.977513],[40.709776,-73.981225],[40.709109,-73.988618],[40.709890,-73.988757],[40.708645,-73.997265]], 40.712816, -73.991681, [10,11,12,13,14,15,16,17,18,19,0])
  ,new N('SoHo', 70, [[40.729340,-74.011492],[40.728649,-74.002694],[40.725657,-73.996793],[40.725259,-73.995001],[40.723413,-73.996482],[40.722234,-73.996975],[40.718477,-74.000183],[40.726844,-74.011695]], 40.724830, -74.003278, [7,0,1,2,3,4,5,6])
  ,new N('Lower East Side', 30, [[40.723868,-73.993102],[40.718014,-73.974059],[40.712825,-73.975486],[40.714915,-73.982545],[40.714338,-73.989218],[40.716550,-73.996096],[40.718502,-73.994937]], 40.717938, -73.985526, [0,1,2])
  ,new N('NoLIta', 7, [[40.725267,-73.995001],[40.724543,-73.992866],[40.719705,-73.994529],[40.721087,-73.997920],[40.722226,-73.996943],[40.723397,-73.996471]], 40.722489, -73.995154, [0,1,2])
  ,new N('Little Italy', 3, [[40.718493,-74.000162],[40.721079,-73.997909],[40.719705,-73.994529],[40.718534,-73.994915],[40.716558,-73.996085],[40.717274,-73.998435]], 40.718805, -73.997202, [1,2,3,4])
  ,new N('West Village', 71, [[40.743307,-74.009571],[40.738039,-73.996718],[40.733909,-73.999658],[40.731243,-74.001567],[40.728690,-74.002898],[40.729356,-74.011524],[40.738884,-74.010773],[40.739096,-74.012189],[40.741079,-74.011867],[40.740998,-74.010000]], 40.735573, -74.005588, [5,6,7,8,9,0,1,2,3,4])
  ,new N('Greenwich Village', 316, [[40.738055,-73.996718],[40.735421,-73.990324],[40.734917,-73.990366],[40.730446,-73.990989],[40.724543,-73.992856],[40.725259,-73.994980],[40.725649,-73.996696],[40.728673,-74.002855],[40.731194,-74.001589]], 40.731192, -73.995846, [0,1,2,3,4])
  ,new N('Flatiron', 171, [[40.738031,-73.996675],[40.743307,-73.992877],[40.742055,-73.989787],[40.740331,-73.985796],[40.735137,-73.989615],[40.735421,-73.990324]], 40.739216, -73.991239, [2,3,4,5])
  ,new N('Hell\'s Kitchen', 79, [[40.757644,-74.005558],[40.773278,-73.993993],[40.768338,-73.982084],[40.752605,-73.993542]], 40.762950, -73.993803, [0,1,2,3])
  ,new N('Turtle Bay', 18, [[40.751012,-73.976097],[40.758440,-73.970540],[40.754734,-73.961484],[40.747631,-73.968437]], 40.753035, -73.969044, [1,2,3])
  ,new N('Midtown', 481, [[40.751012,-73.976076],[40.757173,-73.990259],[40.768330,-73.982062],[40.762227,-73.967857]], 40.759682, -73.979059, [2,3,0])
  ,new N('Garment District', 59, [[40.752589,-73.993553],[40.757140,-73.990206],[40.753337,-73.981419],[40.748858,-73.984712]], 40.752986, -73.987484, [1,2,3])
  ,new N('Upper West Side', 206, [[40.768167,-73.981633],[40.773278,-73.993993],[40.806192,-73.971012],[40.800735,-73.957837]], 40.787269, -73.975994, [1,2,3,0])
  ,new N('Central Park', 65, [[40.768175,-73.981687],[40.800499,-73.958105],[40.796877,-73.949350],[40.764470,-73.973007]], 40.782508, -73.965533, [1,2,3])
  ,new N('Morningside Heights', 97, [[40.801368,-73.959231],[40.806208,-73.970947],[40.817528,-73.962922],[40.819184,-73.961205],[40.811065,-73.953953],[40.805510,-73.957922],[40.803025,-73.957987]], 40.809645, -73.961913, [1,2,3,4,5,6,0])
  ,new N('Upper East Side', 139, [[40.764454,-73.973007],[40.788113,-73.955691],[40.782881,-73.943417],[40.781370,-73.943803],[40.776041,-73.941979],[40.772336,-73.944747],[40.769427,-73.947966],[40.761090,-73.955305],[40.758505,-73.958352]], 40.772942, -73.956416, [1,2,3,4,5,6,7,8])
  ,new N('Harlem', 24, [[40.819201,-73.961205],[40.822952,-73.958116],[40.823617,-73.959510],[40.827904,-73.956592],[40.827401,-73.954940],[40.834755,-73.950047],[40.828277,-73.934469],[40.819964,-73.934040],[40.818324,-73.933654],[40.814361,-73.933697],[40.811601,-73.934040],[40.809522,-73.934212],[40.807475,-73.933246],[40.803496,-73.930092],[40.801222,-73.928998],[40.806663,-73.942301],[40.796901,-73.949296],[40.800475,-73.957922],[40.800816,-73.957880],[40.801336,-73.959167],[40.802993,-73.957965],[40.805461,-73.957901],[40.811048,-73.953931]], 40.816161, -73.946238, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])
  ,new N('Spanish Harlem', 9, [[40.788129,-73.955648],[40.796885,-73.949318],[40.806663,-73.942323],[40.801222,-73.929062],[40.796836,-73.928890],[40.794465,-73.930113],[40.791687,-73.934684],[40.789396,-73.936958],[40.786618,-73.938267],[40.785156,-73.939705],[40.782881,-73.943396]], 40.794600, -73.941578, [1,2,3,4,5,6,7,8,9,10])
  ,new N('Washington Heights', 11, [[40.834755,-73.950005],[40.842158,-73.947301],[40.843749,-73.946185],[40.847093,-73.946786],[40.850534,-73.946958],[40.852741,-73.942580],[40.865043,-73.934126],[40.868369,-73.932238],[40.869343,-73.932216],[40.865448,-73.927453],[40.858876,-73.923268],[40.854802,-73.922882],[40.847206,-73.928225],[40.844674,-73.929899],[40.842288,-73.930779],[40.835811,-73.934469],[40.834139,-73.935027],[40.828277,-73.934426]], 40.848171, -73.936142, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])
  ,new N('Inwood', 6, [[40.869327,-73.932195],[40.871079,-73.932023],[40.876563,-73.928268],[40.877472,-73.926530],[40.876953,-73.922796],[40.875087,-73.919921],[40.874600,-73.915544],[40.873318,-73.911381],[40.871355,-73.910222],[40.869375,-73.910844],[40.864718,-73.913891],[40.862998,-73.915393],[40.861765,-73.917089],[40.858730,-73.919470],[40.854802,-73.922839],[40.858876,-73.923268],[40.865432,-73.927410]], 40.868523, -73.921366, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])
  ,new N('Sutton Place', 12, [[40.758457,-73.970540],[40.762244,-73.967793],[40.758440,-73.958309],[40.754734,-73.961442]], 40.758475, -73.964500, [1,2,3])
  ,new N('Kips Bay', 28, [[40.746119,-73.978286],[40.743290,-73.971398],[40.740396,-73.972192],[40.735974,-73.972363],[40.734771,-73.973737],[40.738738,-73.983693],[40.743680,-73.980174]], 40.740384, -73.976773, [6,0,1,2,3,4])
];
var quotes = [
  new S('56th st. between 7th Ave & Broadway', 40.765155, -73.981285, 16, [
    new Q('005475', 'A Nice Pair of Wednesday One-liners', 'Woman on cell: My boobs aren\'t ready for this cold weather. They\'re still too new.', '', 1147888832)
  ])
  ,new S('Houston & Sullivan', 40.7276, -74.00144, 7, [
    new Q('003518', 'Mithras to His Friends (Happy Birthday!)', 'Guy: Somebody stole the baby Jesus! I\'m <em>appalled</em>!<br />\nHobo: Jesus isn\'t born until Christmas.', '', 1135515626)
  ])
  ,new S('27th between 5th & 6th', 40.744725, -73.98936, 0, [
    new Q('004385', 'Call a Doctor, Wednesday One-liners!', 'Girl on cell: I was freaking out on the floor...drooling...and hissing...', '', 1139450418)
  ])
  ,new S('32nd & 2nd', 40.74349, -73.97682, 27, [
    new Q('003853', 'Hobo\'s Quick with the Puns', 'Hobo: So you two ladies want to go with me, I have a room at the Plaza? <br />\nGirl #1: No.<br />\nHobo: Are you sure?<br />\nGirl #2: Please leave us alone.<br />\nHobo: Okay, I\'m a gentleman. See, I\'m going to leave you alone. So will you come with me to the Plaza? <br />\nGirl #1: No.<br />\nHobo: Okay. See I\'m a gentleman, I\'m going to leave you alone. You have a nice night.<br />\nGirl #1: Bye.<br />\nHobo: Don\'t fucking patronize me!', '', 1136055640)
    ,new Q('003431', 'Wednesday One-liners Are #1!', 'Chick: Wait, he peed on you?', '', 1131602403)
  ])
  ,new S('52nd between 8th & Broadway', 40.763125, -73.98424, 16, [
    new Q('003597', 'Wednesday One-liners v. Wade', 'Guy on cell: So she\'s pregnant again, what\'s up with that?', 'Johnny Tremain', 1132790440)
  ])
  ,new S('Elevator, Columbus between 95th & 96th', 40.792505, -73.96777499999999, 18, [
    new Q('003990', 'It Has a Disproportionate Influence on Other Smells', 'Girl: Smells like Judaism here.', 'Jayson Littman', 1136016034)
  ])
  ,new S('Cozy Soup & Burger, Broadway between Waverly & 8th', 40.730075, -73.99283, 12, [
    new Q('003560', 'Dr. King Must Have Been Dreaming', 'B&T girl: I couldn\'t believe that shit. Black people are such stereotypas. What an asshole!', 'Corkie Wood', 1137405613)
  ])
  ,new S('Office, Greenwich & Beach', 40.72074, -74.01002, 4, [
    new Q('004739', 'This Would Be a Great Commercial', 'Lady #1: Hey, do you remember how that conversation with Jim started today? <br />\nLady #2: Um, honestly, no. <br />\nLady #1: Well, f_ck you then! Ginka balinka, Alzheimer\'s bitch!', '', 1143165600)
  ])
  ,new S('71st between 2nd & 3rd', 40.768600000000006, -73.960005, 21, [
    new Q('003250', 'Get Ready to Be Afraid! (Happy Halloween)', 'College girl #1: What do you think is the saddest emotion or feeling?<br />\nCollege girl #2: I\'m not sure, maybe fear.<br />\nCollege girl #1: Yeah, that\'s a good one. Ya know, if we lived in Ethiopia you would have said hunger.', 'Lizz Tooher', 1130752806)
  ])
  ,new S('Elevator, 5th & 20th', 40.73965, -73.99095, 13, [
    new Q('004264', 'Wednesday One-liners Read 1 Corinthians', 'Crazy guy: You\'re gonna burn! You\'re all gonna burn! The agents of Satan will burn you all!', '', 1138262412)
    ,new Q('003086', 'Wednesday One-liners Look Busted', 'Woman: They\'re staying with us for two days. And my cousin Paula is coming, the one with the pie-faced child.', '', 1129140006)
  ])
  ,new S('81st & Amsterdam', 40.78446, -73.9774, 18, [
    new Q('006185', 'Don\'t Talk With Your Mouth Full', 'Middle-Aged man: I hope we don\'t get caught.<br />Prostitute: Don\'t worry, I never have.', '', 1152208800)
    ,new Q('005839', 'Wednesday One-liners in the Family Way', 'Woman: She thinks she\'s so special cause she\'s pregnant. Try being 35 and not pregnant! That\'s harder to do!', '', 1150898432)
    ,new Q('005505', 'Here\'s to the Huge Fight You\'re Going to Have When You Get Home', 'Drunk guy to entire restaurant: Everyone I want to make a toast, raise your fcking glasses.<br />\nAlright -- My girlfriend had an abortion, we are <em>not</em> having a baby!', '', 1148126432)
    ,new Q('004721', 'As If, Bottomboimanhattan24', 'Queer #1: So, what did you think of him? <br />\nQueer #2: I don\'t see what he sees in him. <br />\nQueer #1: And he\'s poor. <br />\nQueer #2: No! Why is he with someone that homely if he doesn\'t have<br />\nmoney? <br />\nQueer #1: And did you see his teeth? <br />\nQueer #2: There isn\'t enough money for me to stick my dick in that<br />\nmouth.', '', 1143014459)
    ,new Q('003592', 'Wednesday One-liners\' Fashion Emergency', 'Guy on cell: Yeah, I\'m going to dress her up in outfits again and make her dance.', '', 1132812059)
  ])
  ,new S('Starbucks, West 4th Street & Washington Square East', 40.72957, -73.99659, 12, [
    new Q('004561', 'Wednesday One-liners for Fuck Machines', 'Guy: I feel bad for her, because what if she really isn\'t a slut? What if she\'s just, you know, empowered?', '', 1140652837)
    ,new Q('004191', 'Wednesday One-liners for the Weathergirls', 'Guy: Ha, ha, Mother Nature\'s a bitch, and she just gave you a blowjob!', 'Ryan Scoble', 1137657616)
    ,new Q('003742', 'Wednesday One-liners Watch House', 'Guy: You know how the Japanese are so obsessed with cleanliness that they never get sick? But if they do get sick, they, like, die because they can\'t fight the disease? That\'s why it\'s okay that I don\'t take showers.', '', 1133978447)
    ,new Q('003535', 'It\'s Hard to Find Scalpers Locally', 'Girl on cell: I cannot believe you just said that! I can\'t tell my roommate...Because she\'s Indian!<br />\nGirl #2: What can\'t you tell her?<br />\nGirl on cell: Shh.<br />\nGirl #2: Probably outsourcing.', '', 1133582445)
    ,new Q('003203', '\"...and where\'s that pepper bar like in your ads?\"', 'Woman: I want a vanilla coffee creme.<br />\nBarista chick: I can get you a cup of plain coffee with vanilla <br />\nsyrup, and you can put the milk in over there. Unless you want a <br />\nlatte or something?<br />\nWoman: What\'s a latte?<br />\nBarista chick: It\'s espresso with milk.<br />\nWoman: Oh, espresso! I think that\'s a little strong... What about a cappuccino? Do they have those here?', '', 1130896827)
  ])
  ,new S('27th & 5th', 40.74404, -73.98774, 2, [
    new Q('004688', 'Why You Gotta Be Ignorant All Your Life?', 'Girl #1: Isn\'t this the bar we\'re going to?<br />\nGirl #2: No, that place is called Barbacasue. We\'re going to Valley something.<br />\nGirl #1: Where does it say that?<br />\nGirl #2: Right up there, on that sign.<br />\nGirl #1: That says \"barbecue\", you asshole!', 'Krissimarie', 1142848807)
  ])
  ,new S('44th & 9th', 40.75973, -73.99169, 14, [
    new Q('004917', 'Wednesday One-liners Flick the Clicker', 'Lady: I don\'t watch TV; TV watches me.', 'Mark Miller', 1143626433)
    ,new Q('004402', '\"Poitier doesn\'t like me, but he came.\"', 'Mom: So why didn\'t you come to dinner?<br />\nDad: I don\'t like you.', 'puppy', 1140418831)
    ,new Q('004259', 'Wednesday One-liners or Best Offer', 'Guy: You just spent $200 on dinner and you can\'t spend $2 on a MetroCard?', '', 1138204822)
    ,new Q('003992', 'It\'s Also Where They Treat Albert\'s Diabetes', 'Guy #1: Yo, where you live, son?<br />\nGuy #2: Up by the Fat Albert store, man.<br />\nGuy #1: <em>Oh yeah</em>? Son, I used to live right near there.<br />\nGuy #2: By the hospital?<br />\nGuy #1: Yeah, man! Ha, ha, that\'s the hospital that I went to when I had the hepatitis, son! Yo for real though, that shit hurts.', 'Chad F.', 1137189637)
  ])
  ,new S('33rd St & 31st Ave, Astoria', 40.76357, -73.9219, -1, [
    new Q('006231', 'Wednesday One-Liners Have a History of Violence', 'Woman on cell: Sometimes the most spiritual fucking thing to do is punch somebody in the face.', 'Wade', 1153360800)
  ])
  ,new S('111th between Broadway & Amsterdam', 40.804235000000006, -73.964875, 20, [
    new Q('003449', 'That\'s Just Bullshit', 'Guy: I\'m domestic.<br />\nChick: You are so not domestic.<br />\nGuy: I\'m a lazy domestic.<br />\nChick: You leave bags of garbage on the floor of your room for days at a time!<br />\nGuy: Whatever. Domesticated cows shit inside.', 'djlindee', 1132704010)
  ])
  ,new S('14th Street between 9th & 10th', 40.74147, -74.006685, 11, [
    new Q('004919', 'Wednesday One-liners Got It in Pearl', 'Guy on cell: I was straight with her, you know? This is who I am. I\'m<br />\nyoung, I\'m dumb, I\'m full of cum.', '', 1143640853)
  ])
  ,new S('2nd Avenue & 11th Street', 40.73037, -73.98637, 1, [
    new Q('004854', 'Wednesday One-liners Are for Boobs', 'Drunk girl: What kind of guys do you like?...What kind of guys do you like? I like guys with big tits.', '', 1143093646)
    ,new Q('003831', 'Wednesday One-liners Filled the Ark', 'Guy: I was a seeing-eye human for my dog for years; without me she couldn\'t cross the street.', 'Amir', 1134590452)
  ])
  ,new S('116 & Broadway', 40.708511, -74.011108, 5, [
    new Q('005118', 'Wednesday One-liner on Biotech Outsourcing', 'Dude: biotch. Spelled b-y-o-c . . . some sht like that. It\'s Chinese.', '', 1145505632)
  ])
  ,new S('Houston & D', 40.72, -73.97871, 1, [
    new Q('004918', 'Wednesday One-liners Turn It Up a Notch', 'Dude: She would punch you so hard, they wouldn\'t have to dig your grave; they\'d just have to cover it!', '', 1143633634)
  ])
  ,new S('Veniero\'s, 11th St & 1st Ave', 40.72938, -73.98402, 1, [
    new Q('005613', 'She\'s a Vegan -- Pass the Cheesecake', 'Girl #1: So I was thinking about milk the other day.  Milk comes from cows.  And what do cows eat?<br />\nGirl #2: Other cows?<br />\nGirl #1: No, dumbass!  They eat grass!  So it stands to reason, when you drink milk, you\'re actually drinking liquified grass.<br />\nGirl #2: Ugh, gross!  I\'m so not drinking milk anymore.<br />\nGirl #1: Totally, that\'s why I drink soy.', '', 1148889632)
    ,new Q('005385', 'Politically Informed Wednesday One-Liners', 'Boy:  If you can find that channel on cable, it\'s all Castro, all the time.', 'Elmer Colon', 1147932032)
  ])
  ,new S('Post Office, 4th Avenue & 11th Street', 40.73196, -73.99022, 1, [
    new Q('003953', 'Wednesday One-liners Just Work Here', 'Postal woman: I\'m searchin\' every customer till I get my favorite pen back!', 'willis cornell', 1135785606)
  ])
  ,new S('9th Street & 4th Avenue', 40.73055, -73.99049, 1, [
    new Q('004541', 'Simultaneously', 'Hobo: Once you go black you never go back.<br />\nGirl: Oh, but I did!', 'anna k', 1141574445)
  ])
  ,new S('55th between 6th & 7th', 40.76361, -73.979575, 16, [
    new Q('004463', 'Wednesday One-liner Cotton to Book Learnin\'', 'Suit: I am the best metaphor person ever. \"It\'s like a this.\" \"It\'s like a that.\" I\'m so good at that stuff.', '', 1140040858)
  ])
  ,new S('Broadway & 108th', 40.80288, -73.96751, 18, [
    new Q('003522', 'Someone\'s Been Reading Men\'s Health', 'Little boy: I have a six pack.<br />\nLittle girl: What does that mean?<br />\nLittle boy: It means I have big nipples.', '', 1134525604)
  ])
  ,new S('47th & 9th', 40.7616, -73.99033, 14, [
    new Q('004920', 'Ego & Hubris & Wednesday One-liners', 'Drunk girl: Sometimes, when I look at myself through the microscope of cold, hard objectivity, I think to myself, \"God, you are <em>awesome</em>!\"', '', 1143648053)
  ])
  ,new S('Puebla Mexican Food & Coffee Shop, 1st Ave between 2nd & 3rd', 40.724255, -73.98773499999999, 1, [
    new Q('005501', 'Don\'t Knock It \'til You\'ve Tried It', 'Guy: I\'o\'really mess with Queens, or people from Queens.  [pause] 130th Street and 5th Ave, that sht is mad weird!  You ever been to his house!  That sht is mad white!  You <em>never</em> gonna get in a fight there.  [pause] Who eats ketchup -- <em>by is\'self</em>?', 'C-Dub<br />', 1148097632)
  ])
  ,new S('23rd & 3rd', 40.73883, -73.98316, 27, [
    new Q('003745', 'Tuesday One-liners...Psyche!', 'Crazy woman: <em>Oh yeah</em>? Come down here and say that to my face, bitch! I\'ll tear out your balls! I\'ll kick you in the fucking twat!', 'cityhick', 1134028826)
    ,new Q('003750', 'Wednesday One-liners Are Stuffed', 'Teen guy on cell: You can\'t eat bread with <em>mold</em> on it!...Nah, really stale bread is still okay.', 'Becka Dash', 1134007215)
    ,new Q('003274', 'Wednesday One-liners GOTTA MAKE', 'Man: He don\'t know where he is. He could just sit there for weeks on end...You need to pick him up every once in a while and squeeze him over the toilet and pour some water down his throat...I don\'t know, it might be good for space travel.', 'Myles Gaythwaite', 1130335229)
  ])
  ,new S('17th & 8th', 40.74165, -74.00114, 0, [
    new Q('004898', 'A Big Mac Truck', 'Girl #1: Ever notice how tightly girls hold onto their boyfriends when they are walking through Chelsea?<br />\nGirl #2: Right? It\'s like they\'re afraid he\'s going to run out into traffic and get hit by a truck.', '', 1144490424)
    ,new Q('004564', 'Wednesday One-liners Miss St. Elsewhere', 'Model guy:  ...I know, jaundice is so in now.', '', 1140674402)
  ])
  ,new S('12th between 2nd & 3rd', 40.73148, -73.98703499999999, 1, [
    new Q('004622', 'WWWednesday One-liners', 'Dude: It was good with a caps lock G.', '', 1141221616)
  ])
  ,new S('135th & Broadway', 40.82006, -73.95501, 22, [
    new Q('004194', 'Wednesday One-liners for the Thespians', 'Woman: No, man. You don\'t understand. I mean his tongue was so fucking far inside of her...That guy is <em>such</em> a good actor.', '', 1137621637)
    ,new Q('003620', 'Here\'s Sam Champion with the Overheard Forecast', 'Black guy: <em>Aah</em>! Shit is <em>cold</em>! That\'s those fuckin North winds.<br />\nWhite girl: And you want to move to Canada?<br />\nBlack guy: Yo, they got tight snowboarding up there.', '', 1134410412)
  ])
  ,new S('50th between 8th & 9th', 40.762879999999996, -73.987565, 14, [
    new Q('004319', 'Wednesday One-liners Are All Over the Map', 'Chick: ...but it\'s like the Harvard of Canada.', 'Zach', 1138831202)
  ])
  ,new S('28th & Park', 40.74327, -73.98401, 2, [
    new Q('004650', 'Knowing is Half the Battle', 'Guy: I asked you if you knew where he lived; you pointed to <em>Iraq</em>!<br />\nGirl: Well, I don\'t know. How was I supposed to know?<br />\nGuy: Iraq is not the same as Israel.', 'Jack B', 1142402406)
    ,new Q('004393', 'It Told Her to Go See a Psychic', 'Woman: I see you will be engaged by the end of the year!<br />\nBusinessman lady: Great!<br />\nWoman: So can I give you a full reading?<br />\nBusinessman lady: No thanks, I got a fortune cookie in my lunch.', '', 1140300046)
    ,new Q('003873', 'Traditionally the 10th is Kicks', 'Guy #1: Tomorrow is my 10th wedding anniversary.<br />\nGuy #2: Oh yeah, what are you going to do?<br />\nGuy #1: I\'m going to buy a new belt and beat my wife with it.', '', 1136361622)
    ,new Q('003501', 'A Prescription of Wednesday One-liners', 'Old lady: I\'m telling you: she\'s allergic to snow!', '', 1132178451)
  ])
  ,new S('Broadway between 11th & 12th', 40.732825, -73.99120500000001, 12, [
    new Q('004857', 'Wednesday One-liners Are on the Other Line', 'Flyer guy: Free cell phones...Free BlackBerries...Free prisoners of war...', '', 1143064823)
  ])
  ,new S('56th & 5th', 40.76229, -73.97447, 16, [
    new Q('004987', 'Wednesday One-liners Hit the Premiere', 'Guy: I would rather <i>piss</i> on my <i>hands</i> than watch that fcking movie with him!', 'reggae sarkar', 1144252832)
    ,new Q('004777', 'Wednesday One-liners Lunch Hour', 'Guy: Yo, chipotle is the truth, my nigga.', '', 1142460031)
    ,new Q('004371', 'Can Someone Translate Into Brooklyn?', 'Teen girl: I would like to. Notwithstanding, I--<br />\nOld lady: Never say \"notwithstanding\" in New York. Too long a word for here.<br />\nTeen girl: Why the heck...?<br />\nOld lady: Notwithstanding and two financial empires have already <br />\ncollapsed! Where are you from, by the way?<br />\nTeen girl: Missoula, Montana.<br />\nOld lady: You\'re making my point, darling!...So, Redford says \"notwithstanding\"? No kidding?<br />\nTeen girl: Robert lives in Utah.', 'Bertrand Latour', 1140249600)
    ,new Q('004382', 'Wednesday One-liners Are Upright Citizens', 'Chick: So, basically, I need you to get in trouble and go to jail or something.', '', 1139464819)
    ,new Q('003960', 'Wednesday One-liners M.D.', 'Girl: I have so many boogers these days.', '', 1135800048)
  ])
  ,new S('Bleecker & Bowery', 40.72525, -73.99229, 1, [
    new Q('004315', 'The Language of Wednesday One-liners', 'Suit on cell: Saying \"fuck you\" to someone in New York is completely acceptable.', 'Station', 1138824003)
    ,new Q('003435', 'Relationship Problems? Try Wednesday One-liners', 'Guy on cell: I have never been with any woman other than my wife...yes, for better or <em>worse</em>.', 'Katalina E.', 1131573637)
  ])
  ,new S('Dale and Thomas Popcorn, 48th & Broadway', 40.76011, -73.98484, 16, [
    new Q('005668', 'When You\'re Standing in the Middle of a Lake, You\'re There', 'Tourist guy:  Excuse me, do you work here?<br />\nUniformed employee: Yes...<br />\nTourist guy:  Oh good.  Is this Central Park?<br />\nUniformed employee:  No, this is Dale and Thomas Popcorn.<br />\nTourist guy:  Oh, well the bus guide said this was it.  Where is it?<br />\nUniformed employee, pointing north:  Just walk that way.<br />\nTourist guy:  Well that\'s not much help, how the hell am I supposed to find it?<br />\nUniformed employee:  Oh trust me, you\'ll find it.<br />\nTourist guy: HOW?<br />\nUniformed employee: IT\'S A BIG FCKING PARK!', '', 1149177632)
    ,new Q('003438', '...Goodwill to Men', 'Flagman: Hey man, why you drivin\' over my orange cones?<br />\nSUV guy: I need to turn here.<br />\nFlagman: You can\'t; street\'s closed! There\'s a big ass crane coming down! See it?...What are you doing? You see that big ass crane? Why you rolling over my cones? It\'s dangerous. Street\'s closed!<br />\nSUV guy: I <em>need</em> to turn here and go down this street!<br />\nFlagman: You see that big ass crane? You wanna play chicken with that? Go one block down and come back on the other side. Take you five minutes.<br />\nSUV guy: But I <em>need</em> to turn here and go down this street! You can\'t block a street in New York, asshole!<br />\nFlagman: It\'s dangerous. Street\'s closed! Back up or get outta the damned truck. What\'s the matter with you? Get out of the damned car!<br />\nSUV guy: Damn it! Asshole.<br />\nFlagman: Damn! He rolled over my cones...Fuckin\' Mercedes driver! Anybody else wanna play chicken with that big ass crane?', 'Kevin W. Eaches', 1135580435)
  ])
  ,new S('111th & Broadway', 40.80485, -73.96635, 20, [
    new Q('005357', 'And He\'s Lucky', 'Girl #1: I sucked his balls for part of the time he shaved me. I don\'t know what possessed me to tell you that.<br />\nGirl #2: Possibly because you\'re you? And I\'m me?', 'djlindee<br />', 1147104032)
    ,new Q('005140', 'Wednesday One-liners Ask Alice', 'Chick on cell: I am very tame. I promise. [a few seconds later]...and we\'re just doing a bit of coke for fun.', 'djlindee', 1146045602)
    ,new Q('004718', 'Birthday Cake is More Traditional', 'Little girl: I wish I could have that cookie.<br />\nMother: It\'s nice to wish.', '', 1142964039)
    ,new Q('004564', 'Wednesday One-liners Miss St. Elsewhere', 'Girl on cell: So she\'s still smoking in your apartment?  And she knows you\'re allergic? Not cool. You should tell her that for every cigarette she smokes during the day, you\'ll put one out on her while she sleeps.', 'Andrea', 1140674402)
    ,new Q('004314', 'Wednesday One-liners Punch Pat Benatar', 'Cashier guy: A girl said something a little disrespectful to me the other day, so I smacked her father.', 'Alex Crohn', 1138788035)
    ,new Q('004200', 'Eternal Silence is Eternal Consent', 'Chick: Are you saying you would have anal sex with my lifeless body?<br />\nGuy: No. No, I\'m not. I\'m <em>insinuating</em> it.', 'djlindee', 1138752028)
    ,new Q('003556', 'Harps Require Too Much Manual Dexterity', 'King of single line drawings: Can you make me some copies of these drawings? I am the king of single line drawings.<br />\nCopy guy #1: How many do you want?<br />\nKing of single line drawings: What\'s your favorite musical instrument? I\'ll make you one right now on the spot. How about that?<br />\nCopy guy #1: Piano.<br />\nKing of single line drawings: ...And here you are. What\'s <em>your</em> favorite instrument?<br />\nCopy guy #2: Saxophone.<br />\nKing of single line drawings: ...And here you are. Hey, you back there! What\'s your favorite instrument?<br />\nCopy girl: A harp!<br />\nKing of single line drawings: Oh...anything but a harp!', '', 1133658039)
    ,new Q('003435', 'Relationship Problems? Try Wednesday One-liners', 'Teen girl: When you\'re dating someone whose first name is \"Mr.\", that\'s a problem.', 'Djlindee', 1131573637)
    ,new Q('003145', '\"You mean \'cause the Israelis control that, too?\"', 'Girl #1: I\'d offer to set you up with him, but you\'re already occupied.<br />\nGirl #2: I am <em>not</em> occupied.<br />\nGirl #1: Please! You\'re so occupied, you\'re the Gaza Strip.<br />\nGirl #2: <em>Don\'t you watch the news</em>?', 'djlindee', 1130508006)
  ])
  ,new S('Office, Hudson & King', 40.72803, -74.0072, 7, [
    new Q('004771', 'One-liners Are Due on Wednesday', 'Lady: ...and as it turns out, the demon got her pregnant.', '', 1142424039)
  ])
  ,new S('14th & University', 40.73518, -73.99169, 12, [
    new Q('005342', 'Wednesday One-Liners, Mixed Messages', 'Guy: Its similar to that. Not exactly the same as that. But it\'s almost similar.', '', 1147262432)
    ,new Q('005088', 'How Were Your Holidays, New York?', 'Girl on cell: I must\'ve gained, like, 10 pounds after the two Passover seders I went to...and I still have Easter dinner to worry about!...What? No, I\'m not having a religious identity crisis!', 'Amelia D', 1145304034)
    ,new Q('003332', 'Gee, I Wonder if She Likes Sex & the City?', 'White girl: ...No, I just thought I was being harassed.', '', 1131940827)
  ])
  ,new S('2nd Avenue between 6th & 7th', 40.72768, -73.98834, 1, [
    new Q('003351', 'Come on Home, Wednesday One-liners', 'Punk guy: You know somethin\'? I could have been home right now, watching <em>Gremlins</em>.', '', 1130954441)
  ])
  ,new S('18th & 3rd', 40.73579, -73.98537, 2, [
    new Q('004109', 'It\'s a Late Wednesday One-liners Lunch', 'Girl on cell: ...yeah, so Sally\'s having some \"bagel brunch\" thing at her place, but why the fuck would I want to go eat carbohydrates with a bunch of people I don\'t even like?', 'Damon Trent', 1137024012)
  ])
  ,new S('32nd & 3rd', 40.74443, -73.97906, 27, [
    new Q('003658', 'Wednesday One-liners: The Pole', 'Crazy guy: <em>America</em>? I am here to cockblock you!', 'Tammy Scumbag', 1133395222)
  ])
  ,new S('27th & 1st', 40.7394, -73.97674, 27, [
    new Q('006123', 'Wednesday One-Liners Have a Combined IQ of Forty Eight', '20-Something girl: So, is Alabama <em>in</em> Kentucky?', 'interlard', 1152763200)
  ])
  ,new S('6th & W 18th', 40.73983, -73.99502, 13, [
    new Q('005448', 'And She\'s Paper-Trained', 'Woman petting dogs: Oh, don\'t you just love these little doggies?<br />\nHusband: No. I don\'t even like you.', 'djingo<br />', 1147737632)
  ])
  ,new S('59th & Lexington', 40.7622, -73.96818, 16, [
    new Q('004456', 'Wednesday One-liners Tip the Scales', 'Guy: I can\'t be a part of a couple that weighs over 300 pounds.', '', 1140012045)
    ,new Q('004348', 'America\'s Next Top Cripple', 'Man: Miss! You are so beautiful! Your eyes! Your hair! Are you interested in modeling?<br />\nChick: Uh--<br />\nMan: I love the way you walk. Imagine! Down a runway!<br />\nChick: It\'s because my heel is broken, you fuckhead.', 'Passerby', 1139947258)
    ,new Q('003826', 'Reeks of Wednesday One-liners', 'Bellringer guy: Happy holidays! Happy holidays! Wow, it smell like fish! Happy holidays!', 'mh', 1134576009)
    ,new Q('003657', 'Wednesday One-liners: The Hole', 'Lady: I just told them to get all the black hair out. It hurt worse than a Brazilian.', 'Erin', 1133388045)
    ,new Q('002943', 'No One Likes a Redundant Animal', 'Woman: Dogs are supposed to sniff their trails. I mean, that\'s what dogs do, right?<br />\nMan: Yes, but that was one stupid, stupid, unintelligent dog...', '', 1129240854)
  ])
  ,new S('33rd & 6th', 40.74912, -73.98827, 0, [
    new Q('004533', 'Isn\'t That Nice?', 'Chick #1: Omigod, like, if I like your earrings, why should I tell someone else I like your earrings? I should just tell you. <br />\nChick #2: Omigod, I\'m just like that too. But really it\'s because I love getting compliments. <br />\nChick #1: Omigod! Me, too! It\'s the only reason why I say nice things to other people.', 'Mary Beth Hanlon', 1142604047)
    ,new Q('003244', 'Why Would He Buy a Bag from Himself?', 'Street vendor: Hey, you married? <br />\nWoman: No. <br />\nStreet vendor: Hmph. Me neither. If we were married, I would buy you a bag. Since we\'re not, it will cost you $5.', 'Mary Beth Hanlon', 1131314435)
  ])
  ,new S('Fulton St', 40.70782, -74.00432, 5, [
    new Q('005705', 'He\'s Been Setting Them Two Minutes Slow', 'Street vendor: Watches -- five dollars.<br />\nGuy: Five dollars?  What\'s the catch?<br />\nStreet vendor becomes nervous and looks around.<br />\nStreet vendor: They\'ll never catch me!', 'elephant', 1149429632)
  ])
  ,new S('Thompson between Prince & Spring', 40.725485, -74.002105, 7, [
    new Q('003959', 'Wednesday One-liners and the Boy Parts', 'Chick: ...and I was like, \"Suck my dick!\" Fuck that!', '', 1135828827)
  ])
  ,new S('19th & 7th', 40.74162, -73.99744, 0, [
    new Q('005344', 'He Was Watching Beaches', 'Black guy #1 listening to cell: Yo, no niggr should leave a weepy message like that. Niggr is soft.<br />\nBlack guy #2: Stupid niggr.', 'CG<br />', 1147017632)
  ])
  ,new S('9th Ave', 40.75714, -73.9936, 14, [
    new Q('006106', 'Wednesday One-Liners Watch the Nature Channel', 'Loud girl on cell: Well don\'t ask me! I don\'t know anything about the mechanics of whale sex!', '', 1152734400)
    ,new Q('006087', 'Wednesday One-Liners Need at Least a C Cup', 'Woman: And I was like, \"Do you want my breasts to make the copies for you\"?', 'Michelle', 1152122400)
    ,new Q('003270', 'Whoopi\'s Much Scarier (Happy Halloween!)', 'Girl: We watched <em>The Color Purple</em> on friday night.<br />\nGuy: Oh god. How about when Oprah Winfrey comes through that cornfield?<br />\nGirl: No shit. Now I know who I\'m going to be for Halloween.', '', 1130774445)
  ])
  ,new S('Prince & Mercer', 40.72459, -73.99854, 7, [
    new Q('003278', 'Wednesday One-liners Wave Around a Cup', 'Hobo: Anyone care enough to give to the Broke-Ass Foundation?', 'Alex Tarampi', 1130364042)
  ])
  ,new S('Verizon, 73rd & 3rd', 40.77043, -73.9601, 21, [
    new Q('004922', 'Wednesday One-liners Love Their Mommy', 'Lady: Mommy got wasted on Saturday and lost her phone.', 'Bob', 1143662427)
  ])
  ,new S('5th Ave', 40.77176, -73.96755, 21, [
    new Q('006084', 'Wednesday One-Liners Own Eight-Sided Dice', 'Middle-Aged man: I think vampires are kind of stupid. They seem to care an awful lot about how they look and what others think. It\'s like, who cares?  You\'re six hundred years old and on your way to hell, hello?', 'Someone who thinks he has a point', 1152093600)
  ])
  ,new S('60th & 1st', 40.76022, -73.96153, 21, [
    new Q('004269', 'Wednesday One-liners Assume', 'White guy on cell: I\'m walking home from the gym--54th & 1st...Yeah, the City Gym...Naw, it\'s good. But man when I went to shower I felt like I\'d stepped into the show <em>Oz</em> except without all the ass-raping.', '', 1138226429)
  ])
  ,new S('Cilantro\'s, 89th & 2nd', 40.77979, -73.95031, 21, [
    new Q('004596', 'Is That a \"No\"?', 'Queer #1: I woke up this morning with a used condom hanging from my ass. Was that you?<br />\nQueer #2: You are so disgusting.', 'Srednivashtar', 1142157640)
    ,new Q('004512', 'Or Trying to Read It', 'Girl #1: How does she afford to live here? <br />\nGirl #2: You think she is selling her cooch?<br />\nGirl #1: No. I should sell mine, though.<br />\nGirl #2: That\'s like trying to sell the <em>AM New York</em>.', '', 1141380010)
  ])
  ,new S('80th & Amsterdam', 40.78382, -73.97784, 18, [
    new Q('005840', 'Wednesday One-liners Don\'t Go There', 'Hobo: That\'s it. I\'m revokin\' ya hood pass! Don\'t go past a hundred and tenth!', 'Jeremy Cristol', 1150884032)
    ,new Q('004850', 'Wednesday One-liners for Backdoor Beauties', 'Hobo: Well f_ck you, I hope you get f_cked up the ass. Without Vaseline.', 'william Siegel', 1143043252)
    ,new Q('003588', 'Wednesday One-liners, It\'s My First Time', 'Woman: ...and he\'s not so young that I feel bad ogling. I used to say fifteen was the limit, but I\'ve upped it to seventeen. I mean, seventeen, I\'m twenty-four, what\'s wrong with that? When I was fifteen I lost my virginity to someone my age.', '', 1132761619)
  ])
  ,new S('Spring & Thompson', 40.72486, -74.00261, 7, [
    new Q('005271', 'You Could Learn a Few Things from Her', 'Girl: Do you bite your nails?<br />\nGuy: No, my girlfriend does it for me.', 'FERN', 1146528032)
  ])
  ,new S('Vintage New York, 93rd & Broadway', 40.79268, -73.97312, 18, [
    new Q('004162', 'He Totally Got the Vanilla', 'Fratboy: This one is awesome. Chicks love it....or, um, dudes, if you\'re into that kind of thing. <br />\nSuit: I am, thank you.<br />\nFratboy: Awesome. Good save, huh?<br />\nSuit: Yeah. Thanks for the recommendation.<br />\nFratboy: Anytime.', '', 1138464054)
  ])
  ,new S('85th & York', 40.77523, -73.94762, 21, [
    new Q('006094', 'Wednesday One-Liners Explore Their Hoo-Hoo Zones', 'Girl on cell: Yeah, but I\'ve gotta get out of these pants first. The crotch is wet and I don\'t wanna get mad yeast.', 'Ivan', 1152158400)
  ])
  ,new S('Chase Bank, 73rd & Broadway', 40.77959, -73.98185, 18, [
    new Q('004692', 'Wednesday One-liners for Sprint Ambassadors', 'Girl: Listen, it\'s like this: if someone calls you on the phone, you can say whatever you want to say to them-&#8212;anything at all&#8212;-because <em>they</em>...<em>called</em>...<em>you</em>!', 'Susan Volchok', 1141812033)
  ])
  ,new S('\"Paragon Sports, 18th & Broadway ', 40.73779, -73.99013, 13, [
    new Q('004558', 'Wednesday One-liners for the Tots', 'Little girl: Mommy, how old will I be when I have sex?', '', 1140631248)
    ,new Q('003953', 'Wednesday One-liners Just Work Here', 'Store guy: Girl, you keep messing around you\'re gonna wind up with Uggs.', 'corinne mohr', 1135785606)
  ])
  ,new S('24th & Lexington', 40.74016, -73.98426, 2, [
    new Q('004902', 'The Mysterious Fratboy Mating Dance', 'Guy #1: I think I\'d come in third.<br />\nGuy #2: Why third? Why not first or second?<br />\nGuy #1: I don\'t know, I probably don\'t have the biggest, but it isn\'t the smallest either, so I figured third.<br />\nGuy #3: Wait, then whose dick do you think is the smallest?<br />\nGuy #1: I don\'t fcking know! I just don\'t think I have the smallest, so I\'m sure I beat one of you motherfckers. <br />\nGuy #4: Dude, sounds like you got a small dick.', 'paul10003', 1144692001)
  ])
  ,new S('23rd & Park', 40.74014, -73.9863, 13, [
    new Q('003620', 'Here\'s Sam Champion with the Overheard Forecast', 'Man: Omigod! It is <em>so cold</em>! It\'s so cold it\'s like...<em>It\'s so cold I have nothing to compare it to</em>!', '', 1134410412)
    ,new Q('003571', 'I Was Wondering Where I Left My Toad', 'Guy #1: <em>You have warts</em>?<br />\nGuy #2: I don\'t know...I think I caught it at the gym.<br />\nGuy #1: Uh yeah, getting fucked in the ass at the gym!', '', 1133856056)
    ,new Q('003501', 'A Prescription of Wednesday One-liners', 'Man on cell: I do feel better today...and I don\'t think it was the placebo.', '', 1132178451)
    ,new Q('003221', 'Drunk Girls + Car + Velocity = Humor', 'Guy: I think you might want to get a little closer to the curb.<br />\nDrunk girl #1: No, you know, I\'m okay like this.<br />\nDrunk girl #2: Stop, don\'t be a bitch, he\'s being nice.<br />\nDrunk girl #1: Sorry!<br />\nDrunk girl #2: Thanks anyway, but we won\'t get hit by a car, because it\'s simple mathematics. It\'s impossible!', '', 1131091204)
    ,new Q('003278', 'Wednesday One-liners Wave Around a Cup', 'Hobo: Hey! Do you like to fuck in the ass?', 'keeley stalnaker', 1130364042)
  ])
  ,new S('Bleecker St', 40.73014, -74.00237, 11, [
    new Q('006089', 'Wednesday One-Liners Make Friends with the Purple Monkey in the Corner', 'Old man: Yeah, my daughter moved out a few months ago. She loves her university and smokes a lot of pot.', '', 1152129600)
    ,new Q('005789', 'Heather Duke Redux', 'Drunk girl #1 coughs.<br />\nDrunk girl #2: If you vomit, I swear to God this friendship is over.', 'kellianne', 1150048832)
  ])
  ,new S('Office, 45th & 5th', 40.7554, -73.97949, 16, [
    new Q('004780', 'Wednesday One-liners Found \"The One\"', 'Lawyer guy: So I was walking past a busy high school, folowing this big, middle-aged guy \'cause he was cutting a swathe through all the teens. Then then he stopped dead and I almost walked into him. I checked to see why he had stopped, and he was making out with a teen!', '', 1142474402)
    ,new Q('004703', 'Wednesday One-liners Belong in a Zoo', 'Lawyer guy: Well, I\'ve never seen a black bear that could suck its own cock, but I have seen one take a shit.', '', 1141876850)
    ,new Q('004342', 'TGIF', 'Guy #1: What do you think of when you hear the word \"bathhouse\"?<br />\nGuy #2: \"Happy ending\".<br />\nGuy #1: I think \"Thursdays\".', '', 1140177646)
    ,new Q('004379', 'Wednesday One-liners Could Use a Scrubbing', 'Guy: Money is so dirty, and yet I don\'t feel dirty when I touch it; I feel happy!', '', 1139428849)
    ,new Q('004267', 'Wednesday One-liners Make Great Pets', 'Girl: I just got a Friendster request from a dog.', '', 1138219229)
    ,new Q('003913', 'That Runway\'s Hilarious', 'Lady lawyer: You look like a lot of my cousins, you know.<br />\nBoy attorney #1: Are they models?<br />\nBoy attorney #2: Yeah, leg brace models!', '', 1136628019)
    ,new Q('003905', 'Seems Jesus Came Up Short', 'Lady lawyer: I think Christians are generally taller.<br />\nBoy attorney #1: So if a Korean was to convert to Christianity, he\'d get taller?<br />\nBoy attorney #2: Sure, if he prayed hard enough.', '', 1136484013)
  ])
  ,new S('Office, Madison & 47th', 40.75598, -73.97698, 16, [
    new Q('006147', 'Wednesday One-Liners Take Up Hobbies', 'Meathead #1, to meathead #2: Hey! Want to go to a ballroom club?', '', 1153303200)
    ,new Q('004607', 'He Got Framed', 'Tech guy #1: I left my bike at the PATH station over the weekend.<br />\nTech guy #2: Was it stolen?<br />\nTech guy #1: No, but all the wheels are missing.', 'Will', 1142103640)
    ,new Q('004065', 'How Are His Prices? Are They Sane?', 'Chick #1: I know he\'s crazy. <br />\nChick #2: Right, so you should be able to be like, \"He\'s crazy\", and<br />\nleave him. <br />\nChick #1: But I\'m used to his level of craziness.', '', 1137772845)
    ,new Q('003962', 'Wednesday One-liners for Jung', 'Old woman: I\'m not studying, I\'m not working, I\'m not married; it\'s in<em>sane</em>!', '', 1135814443)
    ,new Q('003502', 'Wednesday One-liners for the Mishpokhe', 'Man on phone: Who are you talking about, the kids?...Where were they?...Whip their asses and put them to bed.  Period.', '', 1132207237)
  ])
  ,new S('84th & Amsterdam', 40.78637, -73.976, 18, [
    new Q('003448', 'Don\'t Hate the Piper, Hate the Rock', 'Hobo: Can I get some change?<br />\nDrunk guy: I\'m sorry, I don\'t smoke crack. I can\'t understand you.', '', 1132977604)
  ])
  ,new S('Lexington & 43rd', 40.75211, -73.97556, 16, [
    new Q('003748', 'Wednesday One-liners Have Language Problems', 'Chick: Oh my God, I\'m so excited I can barely keep my exposure!', 'Listening Intently', 1133992814)
  ])
  ,new S('20th & 6th', 40.74101, -73.99417, 13, [
    new Q('004323', 'Overheard in the Studio', 'Mark Riley on cell: ...We\'re filming <em>I Love Lucy</em>. What\'s the problem?', 'Thanks for having us!', 1138917644)
    ,new Q('004161', 'Chuck E. Cheese Himself Had Syphilis', 'Queer #1: That used to be a fun place. Remember that backroom? That was a fun backroom!<br />\nQueer #2: Are you nuts? It was a nasty firetrap full of gropey old trolls, people came on me <i>without my permission</i>, and I had my wallet stolen!<br />\nQueer #1: True.', '', 1138629657)
    ,new Q('004258', 'Wednesday One-liners Fantasies', 'Bouncer guy: I really cried, yo. I thought wrestling was real.', '', 1138197631)
  ])
  ,new S('15th & 2nd', 40.73303, -73.98444, 2, [
    new Q('003382', 'Your Overheard Guide to New York', 'Guy #1: Well, to the west is Chelsea, down past 14th Street is the Village, uptown is Harlem, down past Houston is Soho; the Lower East Side is South past the Village.<br />\nGuy #2: What\'s this area called?<br />\nGuy #1: I have no idea...', 'Bucky Turco', 1132329648)
  ])
  ,new S('17th & 9th', 40.74284, -74.00397, 0, [
    new Q('003273', 'Last Call for Wednesday One-liners', 'Queer on cell: <em>I have no fucking idea if we\'re still in Chelsea. I wish we were, then I could get a blowjob, which is exactly what I need because I am so drunk right now.</em>', 'Alia C', 1130328009)
  ])
  ,new S('Starbucks, 21st & 7th', 40.74279, -73.9966, 0, [
    new Q('005219', 'Actually, It Was Dieting and Giving Head', 'Wannabe fashionista on cell: Yeah, so I have to walk the red carpet. What? No . . . My feet are trashed, but how much walking will I actually have to do? . . . What, Mom, stop it! I was trying on gowns the other day. But I have to find a smaller one. Yeah, they were too big. . . No, Mom! What do you think my job was when I was in PR, borrowing gowns from stars?', '', 1146175222)
  ])
  ,new S('34th & 8th', 40.75218, -73.99348, 0, [
    new Q('006096', 'Wednesday One-Liners Make Mary Kate Heave', 'Fat woman on cell: \"Butter Lovers\" or \"X-treme Butter\" with an X?', 'Rita', 1152727200)
    ,new Q('006118', 'Xenophobic Wednesday One-Liners', 'Black woman, looking at <em>Nacho Libre</em> poster: I don\'t wanna see any foreign shit. Fuck that!', 'K Smith', 1152712800)
    ,new Q('006093', 'Wednesday One-Liners Aren\'t So Vanilla', 'Cute guy: I mean, shit.  I was in a threesome with him.  He has no right to judge me.', '', 1152151200)
    ,new Q('005388', 'Wednesday One-Liners Lost Your Number', 'Girl on cell: Listen, this kid asks me out and he doesn\'t have the audacity to even call me! What is his fcking problem? I mean, you know how upset I\'d be if I actually liked him?', 'Desiree<br />', 1147312832)
    ,new Q('005139', 'CNN Crawl: EU Dramatically Oversteps Its Mandate', 'Guy #1: The richest guy in the world is an oil tycoon from Saudi Arabia.<br />\nGuy #2: Bullsht! You\'re telling me the richest guy in the world is from England?<br />\nGuy #1: England?? Saudi Arabia!<br />\nGuy #2: OK, Europe. Same difference?', '', 1145692832)
    ,new Q('004623', 'Hair Today, Wednesday One-liners', 'Girl: I\'ve never been blonde, like <em>blonde</em>. I had blonde roots once.', '', 1141228829)
    ,new Q('004562', 'Wednesday One-liners Get Baked', 'Jamaican woman: Oh mahn, I used to get so high and den turn on dat Spanish channel so loud and just sit in front of it and listen.', '', 1140660024)
    ,new Q('004555', 'Wednesday Ob/gyn-liners', 'Suit on cell: I mean, what are we gonna give him, Vagisil?', 'hempchill', 1140609625)
    ,new Q('004457', 'Wuxtry! Wednesday One-liners', '<em>Daily News</em> guy: Osama Bin Laden in New York! Let\'s get him! Saddam Hussein has escaped!', '', 1140019224)
    ,new Q('004384', 'The Oldest Wednesday One-liners Profession', 'Little boy: A pimp is a very lucky man!', 'Constantino', 1139472049)
    ,new Q('003954', 'Wednesday One-liners Are The Model Minority', 'Chick: When I get mad, my Koreanness comes out.', '', 1135771241)
    ,new Q('003748', 'Wednesday One-liners Have Language Problems', 'Guy on cell: You makin\' me sick. For real. I\'m \'bout to throw this<br />\nphone on the ground you makin\' me so sick...<em>Do you hear me</em>?...I\'m not speaking Beijing here!', 'Rock Lobster', 1133992814)
    ,new Q('003658', 'Wednesday One-liners: The Pole', 'Chick: Look...he doesn\'t have a job, all he does is lay on your <br />\nsofa and play PlayStation, you pay his bills, you feed him. There are <br />\nthousands of men in the city who would like that deal; at least find <br />\nyourself one that has a respectable dick.', 'Cully', 1133395222)
    ,new Q('003092', 'Wednesday One-liners v. The DEA', 'Chick: They had to <i>cut her open</i> to get the drugs out. <em>Cut</em>. <em>Her</em>. <em>Open</em>.', '', 1129154409)
  ])
  ,new S('Rivington & Orchard', 40.7203, -73.98911, 8, [
    new Q('005833', 'Wednesday One-liners for Pick-up Artists', 'French guy: You know, I like to make happy with the pretty girls, but not the <em>so</em> pretty girls.', 'Collin', 1150293632)
  ])
  ,new S('Fordham University, Lincoln Center', 40.77074309746061, -73.98472309112549, 18, [
    new Q('004987', 'Wednesday One-liners Hit the Premiere', 'Chick: I met Clive Owen once, at the Natural History Museum. He was standing alone in a corner and just started talking to me about sulfur.', 'Jess McGins', 1144252832)
    ,new Q('004924', 'Wednesday One-liners Read Vogue', 'Girl: I\'m so excited for spring break! I bought new bathing suits. I put them on and chilled in my apartment all day.', 'Jess McGins', 1143676838)
    ,new Q('004848', 'Parve Wednesday One-liners', 'Chick: Come to think of it, all of my Jewish friends went to summer camp. Isn\'t that kind of ironic though; Jews at camp?', 'Amanda', 1143021625)
    ,new Q('004645', 'Fred Schneider Found It', 'Chick: Professor, Dr. Roberts is looking for you.<br />\nProfessor lady: No, she\'s looking for the lobster.', 'Procrastinatrix', 1142344855)
    ,new Q('004635', 'How Was Your Ash Wednesday, New York?', 'Girl: I\'m so glad I\'m not Catholic so I don\'t have to walk around with that shit on my head all day!', '', 1141358420)
    ,new Q('004351', 'Prostate Cancer?', 'Girl #1: Sara, everything\'s not about you. <br />\nGirl #2: Everything\'s <em>relevant</em> to me.', 'Trix', 1141120805)
    ,new Q('004285', 'Tell That to the First Catholic Chick', 'Girl #1: There are like, so many orthodox Jews at the law school.  Why would they come to a Jesuit school if they\'re orthodox Jews?<br />\nGirl #2: Well, it\'s not like everyone else is Catholic.<br />\nGirl #1: But Jews are like the opposite of Catholics, they\'re, like, not even close.<br />\nGirl #2: You\'re a slut; that\'s not very Catholic.', 'IDigGraves94', 1139536816)
    ,new Q('004170', 'Canadia\'s Much Closer', 'Girl: Where\'s the nearest Banana Republic? <br />\nGuy: Uh...Dominican Republic?', 'daniela', 1138989651)
    ,new Q('004313', 'Wednesday One-liners Reek', 'Girl: I have never had punany odor complaints.', '', 1138816853)
    ,new Q('003833', 'Wednesday One-liners Hate Project Runway', 'Guy: ...and then the salesgirl said, \"We don\'t have any. They\'re out of season.\" Out of season? They\'re <em>bathrobes</em>. Have I missed something? Is there a season for bathing?', 'Erin', 1134604824)
  ])
  ,new S('3rd & B', 40.72266, -73.98296, 1, [
    new Q('004084', 'That Just Means He Likes Kids', 'Girl #1: So this is the man you want to marry?<br />\nGirl #2: Yeah.<br />\nGirl #1: And you said there were <em>how</em> many maggots on the turkey?', '', 1138075211)
  ])
  ,new S('T Salon Emporium, 20th & Broadway', 40.73915, -73.98975, 13, [
    new Q('005664', 'Wednesday One-liners, Altered States', 'Queer to hippie chick: I read what you wrote, and it totally made me want to do mushrooms with you.', '', 1149141632)
  ])
  ,new S('The Gap, 34th & 6th', 40.74978, -73.9878, 0, [
    new Q('004043', 'Wednesday One-liners Love Bathroom Humor', 'Woman on cell: ...and I\'m having pain upon urination. Can you help me with that?', '', 1136419215)
    ,new Q('003153', 'You\'re Thinking of the WTC (Too Soon?)', 'Tourist man: Look, there\'s the Empire State Building!<br />\nTourist woman: No, that\'s not it. Unless they rebuilt it because it doesn\'t look like that.', 'Trisha Simoes', 1130544036)
  ])
  ,new S('Bleecker & LaGuardia', 40.72806, -73.99896, 12, [
    new Q('004268', 'Wednesday One-liners Wear Gross Sneakers', 'Hobo: Care to make a donation to the Broke Ass Foundation?', '', 1138240805)
  ])
  ,new S('Spruce & Gold', 40.7103, -74.00404, 5, [
    new Q('004383', 'Wednesday One-liners Are Ready for Valentine\'s', 'Teen boy: I think that guy I made out with the other night is a pedophile.', 'Nick Nasty', 1139443231)
  ])
  ,new S('60th & Broadway', 40.76893, -73.98224, 18, [
    new Q('004395', 'That\'s Not What the Bird Said', 'Guy: Motherfucker of God!<br />\nChick: That would be Joseph.', 'James Wolf', 1140310847)
    ,new Q('003986', 'That Explains the Tusks', 'Store woman: It\'s so cold in here.<br />\nStore man: It\'s really not so bad.<br />\nStore woman: Well, not all of us have a protective layer of blubber to keep us warm in the winter.', '', 1137110428)
    ,new Q('003861', 'Arbeit Macht Reizend', 'Mom: What\'s the name of that group?<br />\nTeen boy: Death Cab for Cutie.<br />\nMom: Death Camp for Cutie?<br />\nTeen boy: Death <em>Cab</em>.<br />\nMom: What a horrible name...<br />\nTeen boy: This is them playing, do you like it? <br />\nMom: Yeah I love it, but what a horrible name! Death Camp...', 'Avital', 1137060013)
  ])
  ,new S('40th between 5th & 6th', 40.752865, -73.983435, 17, [
    new Q('003281', 'Wednesday One-liners Need a Planner', 'Chick: I got in the habit of flipping numbers so when I was 14 I said I was 41--I know!--but now I\'m going down.', '', 1130385644)
  ])
  ,new S('31st & 7th', 40.74908, -73.99202, 0, [
    new Q('004377', 'Wednesday One-liners Could Use Some Color', 'Scalper guy: Man, she gon\' dump yo\' white ass because you never take her anywhere; all you do is play that goddamn violin!', 'RMC', 1139400006)
    ,new Q('004268', 'Wednesday One-liners Wear Gross Sneakers', 'UHO guy: Spare some money for the homeless! Every penny counts! Spare some money...Yeah, that little piece of paper is going to help.', '', 1138240805)
  ])
  ,new S('58th & 6th', 40.765, -73.97672, 16, [
    new Q('005482', 'See How She Turned That Around?', 'Girl: Hey, you!<br />\nRandom guy: Yes?<br />\nGirl: Not you, the guy behind you.<br />\nOther guy: Yes?<br />\nGirl: On a scale of one to ten, what do you think my chances are with the guy I just spoke to before you?', '', 1147968032)
  ])
  ,new S('116th & Frederick Douglass', 40.80441, -73.95538, 22, [
    new Q('003710', 'Where Are They Now? (A NYC Short Story)', 'Woman: What ever happened to Ceci?<br />\nMan: Ceci?<br />\nWoman: Yeah, Ceci. That little girl that got her fingers cut off. The pretty little crackhead with the beautiful soul.', 'Melissa Berry', 1134806417)
  ])
  ,new S('32nd between Madison & Park', 40.746134999999995, -73.983125, 3, [
    new Q('003190', 'She\'s Got Wednesday One-liners Down There', 'Construction guy: When she bends over in front of me, her ass is all over that pussy!', 'Caitlin Cox', 1129723239)
  ])
  ,new S('29th & 7th', 40.74785, -73.99293, 0, [
    new Q('005807', 'I knew plaid wasn\'t back!', 'Girl: Is he gay or just Scottish?<br />Guy: Scottish.', 'Mike Chmiel<br /> <span>Headline by: cdogg Davis <br /></span>', 1150135200)
    ,new Q('004857', 'Wednesday One-liners Are on the Other Line', 'Guy on cell: Man, that\'s the worst, when you\'re jerking off and a friend calls. Like you really want to jerk off, but you really want to talk to your friend too.', '', 1143064823)
    ,new Q('004682', 'That\'s Called Abstinence', 'Dude #1: \"I won\'t be home until after I go to the pharmacy.\" That\'s like, the third month in a row that she forgot! Well, at $2 a pill, I guess it\'s better than the alternative.<br />\nDude #2: Totally...Wait, I don\'t get it.', 'Jeff Nunner', 1142838049)
    ,new Q('004506', 'She Just Made Him Blissful', 'Guy: Hey, hey shortie with the red hair...Hey, I\'m talkin\' to you!<br />\nGirl: Yeah, and I\'m ignoring you.', '', 1141336822)
    ,new Q('004133', 'Shave and a Haircut, Four Twits', 'Guy: I keep getting screwed over on my haircuts! Last time they left it way too shaggy in the back, and this time it\'s much too short. I need to find a stylist I can stick with.><br />\nChick: Hmm, so your hair is like shlong or something.<br />\nGuy: Huh?<br />\nChick: Shlong. Like short-long. Shlong.<br />\nGuy: Um, well, \"shlong\" means \"penis\" in Yiddish. So, uh, ha, ha, no.<br />\nChick: Oh, I didn\'t know that!<br />\nGuy: I sure hope I don\'t have a penis growing out the back of my head.', '', 1138298448)
    ,new Q('004189', 'Wednesday One-liners Drop It Like It\'s Hot', 'Guy on cell: Man, you\'re married. You can\'t be doin\' that shit...She was hot, right?...<em>No</em>?...Man, Pampers are intense.', 'Kate Ehle', 1137578418)
    ,new Q('003904', 'It\'s a Grand Old Party', 'Guy #1: I\'m not a very social person.<br />\nGuy #2: Join the club.', '', 1136476817)
  ])
  ,new S('Bleecker & Mott', 40.72563, -73.99376, 12, [
    new Q('005745', 'Hardworking Wednesday One-liners', 'Girl: The thing is, he\'s too lazy to be a drug dealer.', '', 1149732032)
  ])
  ,new S('Water & Wall', 40.70527, -74.00725, 5, [
    new Q('003198', 'I Can See Why He Proposed', 'Businessman lady #1: See, she always finds a way to make things about her!<br />\nBusinessman lady #2: Um, she just found out she has cancer.<br />\nBusinessman lady #1: So? I am getting married, it should be all about me, focus all on me. Now we <em>have</em> to make it about her! Ugh.<br />\nBusinessman lady #2: You\'re not getting married till next year.<br />\nBusinessman lady #1: I know that, but I am getting married. Anyway, cancer is like the flu, almost everyone is going to get it. She is not going to die from it.<br />\nBusinessman lady #2: I can\'t believe you. You are so crass sometimes. Ugh.<br />\nBusinessman lady #1: Oh, shit! What if she really does die? Then it will really be all about her. Crap.', '', 1130868017)
    ,new Q('002934', 'Here Come 1800 Nickels', 'Hobo: You man, got a dollar?<br />\nSuit: Yeah, got change for a hundred?', '', 1128819633)
  ])
  ,new S('108th & Columbus', 40.80053, -73.96193, 18, [
    new Q('004893', 'He Totally Sucks', 'Teen boy #1: Okay, tell the truth. Have you ever tried to lick your own balls? I\'ll be honest, I\'ve tried.<br />\nTeen boy #2: I\'ve thought about it, I just know I couldn\'t do it.', '', 1144468805)
  ])
  ,new S('63rd & 3rd', 40.76405, -73.96476, 21, [
    new Q('004695', 'Wednesday One-liners Love Jim Beam', 'Chick on cell: I thought that we might go out drinking so I brought my diaphragm.', '', 1141833618)
  ])
  ,new S('87th & Columbus', 40.78715, -73.97169, 18, [
    new Q('004850', 'Wednesday One-liners for Backdoor Beauties', 'Teen girl: Yeah, I\'ve always wanted to know what it would smell like if someone farted right into your nose.', 'Ariamy', 1143043252)
  ])
  ,new S('Bedford & N 10th', 40.71947, -73.95592, -1, [
    new Q('005940', 'Not as Annoying as My Daddy Never Speaking English', 'Little girl in wagon: Daddy, that truck song is annoying.<br />\nHipster dad: Yes, the commodification of your desires is annoying, isn\'t it?', 'susan', 1151064032)
  ])
  ,new S('Broadway & Prince', 40.7242, -73.99775, 7, [
    new Q('004309', '\"It\'s a date!\"', 'Girl: I guess I\'ll be taking my vibrator out for Valentine\'s.', 'Toby Boudreaux', 1139918432)
    ,new Q('004207', 'They Found the Stylist with an Aqua Net', 'Woman #1: So my mom is all depressed because of the Hurricane Katrina stuff, and she says she has no time to take care of herself. And I say, \"It\'s just a call to duty, Mom.\" I mean, if she\'d go to the beauty parlor...<br />\nWoman #2: The beauty parlor probably got destroyed.<br />\nWoman #1: Yes, and they had to build a new one. And I say, if she just goes in there and has them...fix her hair, or something...she\'ll feel so much better!', '', 1137816049)
    ,new Q('003949', 'It Must Have Been Cotton', 'Chick: I\'m owed this shirt because I\'m black, bitches. I don\'t owe nothin\' to you white folks. I\'m owed this shirt because of slavery.', 'helen r.', 1136505632)
    ,new Q('003891', 'Cigarettes & Alcohol Fuel Wednesday One-liners', 'Girl: Only for like, a week, I was pregnant and didn\'t smoke or drink for a week. Can you believe that? I gave up smoking and drinking \'cause I didn\'t wanna injure my fetus.', 'Luis Bustamante', 1135202450)
    ,new Q('003487', 'That\'s Why He Invented Hell', 'Girl #1: Man, I really want some cigarettes, but I don\'t have any cash.<br />\nGirl #2: Sorry, I don\'t have any cash either.<br />\nGirl #1: Look, I found a 20! God like totally wants me to smoke.', '', 1133337634)
    ,new Q('003177', 'Wednesday One-liners are New to the Area', 'Ghetto lady: Damn, yo. Look what they smoking. They must be from the Village.', 'Kate R', 1129766419)
  ])
  ,new S('Water & Pine', 40.70564, -74.00674, 5, [
    new Q('003155', 'That\'s More Like a Commune', 'Guy: At some point, the fucking union of New York City deli workers must have met to decide breakfast would no longer be cheap.<br />\nGirl: You think they have a union or something?<br />\nGuy: Yeah, it\'s called Chinatown.', '', 1130612441)
  ])
  ,new S('Party, 74th & 1st', 40.76912, -73.95503, 21, [
    new Q('003942', 'Those SOBs Probably Had It Coming', 'Guy #1: Well, you know, I am a Mets fan.<br />\nGuy #2: Dude, then you\'re okay in my book. You could murder puppies and that\'s okay so long as you\'re a Mets fan!<br />\nGuy #3: Um, he does.<br />\nGuy #2: Exactly! You can totally murder puppies if you\'re a Mets fan!<br />\nGuy #3: No, he really does.<br />\nGuy #2: Totally!<br />\nGuy #3: He\'s a vet.<br />\nGuy #1: I am.', '', 1136930416)
  ])
  ,new S('Macdougal & West 3rd', 40.73043, -74.00012, 12, [
    new Q('005113', 'Wednesday One-liners Are All About Location', 'Junkie guy: I\'ma go back to 1903 when there wasn\'t nobody around!', 'E. Schwartz', 1145512803)
    ,new Q('005108', 'Wednesday One-liners for the Old', 'Chick: What\'s gonna look good on her when she\'s 90?', '', 1145448034)
    ,new Q('003896', 'Wednesday One-liners for the Holidays', 'Drunk Santa: Everybody stand back! Santa is gaseous!', 'lindsay', 1135224025)
    ,new Q('003886', 'The Wednesday One-liners Welcome to NY', 'Man: Y\'know, Sullivan could be the wrong direction. In fact, three directions are wrong right now.', 'mikey frenchman', 1135173620)
  ])
  ,new S('Bedford & Barrow', 40.73182, -74.0051, 11, [
    new Q('004265', 'Wednesday One-liners Run to the WC', 'Man: Have you tried this? It doesn\'t taste like chocolate. It tastes like shit.', '', 1138248046)
  ])
  ,new S('49th & Broadway', 40.76079, -73.98448, 16, [
    new Q('003662', 'Wednesday One-liners Rifle Through the Trash', 'Woman: Yeah, Coney Island is where they bury all the dead homeless people.', 'Michael Galyon', 1133402459)
    ,new Q('003492', '...With a Side Order of Wednesday One-liners', 'Woman: Oh, I know! There\'s this great place we go to after Knicks games where you can get hot dogs and wine.', 'Durin', 1132185605)
  ])
  ,new S('49th between Broadway & 8th', 40.761224999999996, -73.98554, 16, [
    new Q('004034', 'That\'s Hunchback of Notre Dame', 'Tourist lady #1: <em>Sweeney Todd</em>...I heard that\'s a spoof on a cooking show.<br />\nTourist lady #2: Oh, is it about Julia Child?<br />\nTourist lady #1: I think so.', '', 1137801605)
  ])
  ,new S('Washington Square South & LaGuardia', 40.72994, -73.99737, 12, [
    new Q('004599', 'Not as Interesting as the Reversal', 'Dude #1: Going to NYU is interesting.<br />\nDude #2: No, getting a girl pregnant is interesting.', '', 1142146802)
    ,new Q('004046', 'Wednesday One-liners Order Scotch, Rocks', 'Girl on cell: I\'m going to go home, sleep, and vomit.', '', 1136433624)
    ,new Q('003887', 'Wednesday One-liners & the Entertainment Industry', 'Guy: Sorry man, I can\'t hear you. Madonna is yelling at me...<em>Shut up, bitch</em>! <em>Shut up</em>!', 'Carmabelle', 1135180851)
    ,new Q('003750', 'Wednesday One-liners Are Stuffed', 'Queer: I don\'t care about it being diet...I just want it to taste diet.', 'Colin', 1134007215)
  ])
  ,new S('68th & Lexington', 40.76785, -73.96407, 21, [
    new Q('004457', 'Wuxtry! Wednesday One-liners', '<em>AMNewYork</em> guy: <em>AM</em>! <em>AM</em>! Feel free to snatch two, one for the trash and one for your co-worker.', 'rufus', 1140019224)
    ,new Q('003825', 'Wednesday One-liners Have Their Boarding Passes', 'Girl on cell: First class? Fuck first class...You just get out here, and I will fuck you two ways from Sunday and you won\'t even remember the seats on the plane.', '', 1134568842)
    ,new Q('003439', 'He Must Have Been Following Orders', 'Queer: What? Are you calling me a nerd? Do I look like I pay attention in class? I got a D+ so in your face, bitch! Oh, guess who I fucked last night?<br />\nGirl: Could you say that any louder? Who?<br />\nQueer: Myself.', 'Collegiate Cutie', 1132934456)
    ,new Q('003011', 'That Must Be Canadia', 'Girl #1: We\'re going to Montreal for the weekend.<br />\nGirl #2: I love Montreal! It\'s so easy to get to, and so exotic...it\'s<br />\nlike going to a different country.', '', 1131703228)
    ,new Q('002893', 'I Guess the Terrorists Have Won', 'Guy #1: \"Leibovitz, Phederson, Yushuvayeva\"--<br />\nGuy #2: Whatever happened to Ellis Island changing people\'s names so we can say them?', 'Dina Pirutinsky', 1128672046)
  ])
  ,new S('Chambers between Church & Broadway', 40.714535, -74.007135, 4, [
    new Q('003892', 'Wednesday One-liners Ignore the UHO', 'Hobo: Miss, do you have a dollar so I can go home and spend it?', '', 1135195221)
  ])
  ,new S('39th & Madison', 40.75088, -73.98068, 3, [
    new Q('005157', 'Longest Ticket Line Since Alien', 'Tourist #1: Are all those people trying to get tickets to a concert or something?<br />\nTourist #2:  Maybe. Do you think that\'s Radio City?', '', 1145764832)
  ])
  ,new S('81st between Central Park West & Columbus', 40.782650000000004, -73.97313, 18, [
    new Q('004106', 'Wednesday One-liners, Rated G', 'Dad: You know what you are being? A little brat. If you don\'t come inside right now, you are going to get privileges taken away up the ying yang!', '', 1136973605)
  ])
  ,new S('Office, Wall & William', 40.70638, -74.00952, 5, [
    new Q('004588', 'What\'s the Catch?', 'Chick #1: We can watch Lackawanna Blues tonight.<br />\nChick #2: I can\'t watch another black movie. I watched one last night.<br />\nChick #1: What\'d you watch last night?<br />\nChick #2: <em>Hitch</em>.', '', 1142013610)
  ])
  ,new S('Spring & Lafayette', 40.72229, -73.99713, 7, [
    new Q('003831', 'Wednesday One-liners Filled the Ark', 'Chick: Take your fucking stuffed animals and go fuck yourself!', '', 1134590452)
    ,new Q('003495', 'Wednesday One-liners Rev Her Engine', 'Dude: What? So moving furniture didn\'t turn you on?', '', 1132142421)
    ,new Q('003088', 'Wednesday One-liners, One Leg at a Time', 'Guy: Look, her shorts are so short that you can see the turkey lip of her pussy peeking out.', '', 1129183219)
  ])
  ,new S('27th between 5th & Madison', 40.743705, -73.98694, 2, [
    new Q('004143', 'You\'re a Real New Yorker When You Don\'t', 'Girl #1: I haven\'t seen our homeless guy lately.<br />\nGirl #2: We have a homeless guy?<br />\nGirl #1: Yeah, the guy who lives on that mattress under our building.<br />\nGirl #2: Oh yeah...I hope he\'s okay, I haven\'t seen him all week.<br />\nGirl #1: You know you\'re a New Yorker when you worry about where your homeless guy is.', 'Lauren Lerner', 1138399234)
  ])
  ,new S('84th & 2nd', 40.77655, -73.95271, 21, [
    new Q('005351', 'He\'ll Need The Club Tonight', 'Asian chick: Hmm.', '', 1147068032)
    ,new Q('005355', 'Better to Be Safe', 'Girl #1: So he was at my house and we were like, fooling around on my bed, and I was lying on top of him, but then I made him get up.<br />\nGirl #2: Why?<br />\nGirl #1: Because if he got turned on, got hard, came, his zipper fell down a little and some come got on my pants and while I was taking off my pants it brushed my underwear and then went inside me, I could totally get pregnant.<br />\nGirl #2: Oh, right.', 'Samantha Thomas<br />', 1147089632)
    ,new Q('004383', 'Wednesday One-liners Are Ready for Valentine\'s', 'Suit: No. If you were 40 and you had only slept with five people, I wouldn\'t marry you...Unless it was, like, five 5 year relationships.', '', 1139443231)
    ,new Q('003231', 'What An Ass', 'Guy: I don\'t want to be drunk in front of her. <br />\nGirl: What? Why not? <br />\nGuy: I don\'t want her to see me like that. <br />\nGirl: But face down on the floor is really the only way to see you.', 'mortimer stackendanch', 1131195640)
  ])
  ,new S('Mulberry & Prince', 40.72335, -73.99571, 9, [
    new Q('005047', 'Wednesday One-liners Are Locked & Loaded', 'Teen boy: I feel like buying a firearm...but I can\'t get a license. I really want to scare him tonight.', '', 1144886401)
  ])
  ,new S('3rd between 12th & 13th', 40.732275, -73.98792499999999, 1, [
    new Q('003654', 'Wednesday One-liners by Dolly Parton', 'Guy: Yeah, he has really nice girlie titties.', '', 1133373629)
    ,new Q('003117', 'This is What Waldo Has Done to a Generation', 'Drunk girl: Can you tell me where 3rd and 12th is?  <br />\nGuy: You\'re standing on it.<br />\nDrunk girl: Do you know where Bar None is?<br />\nGuy: Right under that huge Bar None sign.', 'kristcollekt', 1130205619)
  ])
  ,new S('23rd & 8th', 40.74528, -73.9985, 0, [
    new Q('006187', 'Wednesday One-Liners Aced Anatomy 101', 'Chick: His teeth are really straight. But that\'s because he was home-schooled.', '', 1153929600)
    ,new Q('004227', 'That\'s the Way for the Men', 'Chick #1: I really think this is the way to go.<br />\nChick #2: I told you, I\'m not <em>ready</em>. They don\'t even know me. I don\'t want them to always think of me as \"that lesbian girl.\" I said no.<br />\nChick #1: I meant Eighth Avenue.', 'Mchelly', 1140156004)
    ,new Q('003887', 'Wednesday One-liners & the Entertainment Industry', 'Guy on cell: Omigod, I just sidewalk-danced with a Gilbert Gottfried, how hilarious!', 'diana lee', 1135180851)
  ])
  ,new S('Starbucks, 17th & Union Square W', 40.73656, -73.98906, 13, [
    new Q('005504', 'Tyra Taught Her That Trick', 'Ghetto high school girl #1: Gimme the camera!<br />\nGhetto high school girl #2: Noooo!  I need to take a picture for myspace. You know what that means!<br />\nGhetto high school girl #1: What?<br />\nGhetto high school girl #2: I gotta look cute! But it has to look normal, like I\'m not posing.<br />\nGhetto high school girl #1 grabs the camera and whacks girl #2 on the head. She snaps a photo.<br />\nGhetto high school girl #2: What the fck bitch!?<br />\nGhetto high school girl #1: [looking at the camera] Oh my god! It\'s such a cuuuuuuuuuute picture!<br />\nGhetto high school girl #2: Oh my god!  I\'m sooooo cute.', '', 1148119232)
  ])
  ,new S('Duane Reade, 22nd & Park', 40.73949, -73.9868, 13, [
    new Q('004802', 'Also Thinks Margarine Made Out of Butter', 'Guy: I don\'t need a bag, thanks.<br />\nStore lady: You\'re going to carry that in your hand?<br />\nGuy: Yeah.<br />\nStore lady: That\'s fine with me. I love customers who don\'t want bags.<br />\nGuy: Why waste them, right?<br />\nStore lady: Yeah. People need to recycle. They keep cutting down more and more trees for these bags. <br />\nGuy: ...Yeah.<br />\nStore lady: Plastic bags are made out of trees, right?<br />\nGuy: ...Well, no...<br />\nStore lady: Oh, I think it\'s paper bags that are made out of trees.', '', 1143597630)
  ])
  ,new S('Office, 45th & Madison', 40.75473, -73.9779, 16, [
    new Q('005044', 'Wednesday One-liners Look Sharp', 'JAP: Can I tell you? I saw the hottest guy on the way to work today. I think he was coming from work because he was in scrubs. I mean, he was in scrubs and he was just so hot. So I followed him for a while, and I didn\'t realize he was sprinting so I almost got hit by a cab, but he was just going to get his car. But I really wish I did get hit by that cab so he could come and save me. Yeah, I\'m a little embarrassed I was following him, but whatever, he was hot.', 'Jane D.', 1144864828)
    ,new Q('004384', 'The Oldest Wednesday One-liners Profession', 'Girl on phone: Yeah...So like a male prostitute hitting on you is like...the Tribeca or something.', '', 1139472049)
    ,new Q('004374', 'Wednesday One-liners Press the Fontanelle', 'Guy on cell: I gotta buy my baby a crib...I mean a <em>crib</em> crib!', 'mihow', 1139407206)
  ])
  ,new S('Elevator, Worth & Church', 40.71706, -74.00622, 4, [
    new Q('003217', 'Ten Years, Give or Take', 'Old man #1: ...so she processes it and hands me back the form and it hits me like a ton of bricks: Senior! I\'m a senior now! Do I look like a senior?<br />\nOld man #2: ...How long do I have to answer that?', 'Cap\'n Mid-nite', 1131163238)
  ])
  ,new S('7th Street & 2nd Avenue', 40.72797, -73.98813, 1, [
    new Q('004859', 'Wednesday One-liners Will Miss Greenspan', 'Guy: Wait, they\'re actually a dime a dozen?', '', 1143079259)
    ,new Q('004070', 'Haggling, Haggling Hobos', 'Hobo: Got any spare change?<br />\nLady: No.<br />\nHobo: Well, I take dollars too. Give me your phone, we can discuss it later.', 'Jack Cutler', 1138060850)
    ,new Q('003800', 'It\'s Not Gay if You Blow for Blow Money', 'Guy #1: You don\'t have one gay relative?<br />\nGuy #2: Well, maybe my junkie cousin.', '', 1135936844)
    ,new Q('003473', 'So Should I Just Throw Out These Carnations?', 'Hobo: What\'s the best in the nation? Hey you, what\'s the best in the nation?<br />\nGuy: The best what?<br />\nHobo: In the <em>nation</em>. What\'s the best in the nation?<br />\nGirl #1: The best what in the nation?<br />\nHobo: You know, like <em>country</em>.<br />\nGirl #1: Oh, you mean what\'s the best country?<br />\nHobo: Yeah. <em>Nation</em>.<br />\nGirl #1: The United States!<br />\nHobo: Wrong!<br />\nGirl #2: Red Sox nation!<br />\nHobo: Wrong!<br />\nGuy: Nigeria?<br />\nHobo: Wrong! The best in the nation...the best nation is a <em>donation</em>! Gimme a nickel.', 'Carmen Nobel', 1133107221)
  ])
  ,new S('A between 11th & 12th', 40.72875500000001, -73.98156, 1, [
    new Q('004627', 'Wednesday One-liners Go Potty', 'Drunk girl: If I fucking pee myself it\'s not my fault.', 'Stephan Sebastian Dukofsky', 1141243223)
  ])
  ,new S('Cosi, 48th between 5th & 6th', 40.75796, -73.97973999999999, 16, [
    new Q('004312', 'Priapic Wednesday One-liners', 'Chick: I think penises are disgusting, but I love balls! They\'re like little hamsters!', 'pixelvisions', 1138795214)
  ])
  ,new S('Prince & Elizabeth', 40.72271, -73.99416, 9, [
    new Q('003573', 'Pot Brownies: Now with Real Pots!', 'Girl: Did you bring me my brownie mix?<br />\nGuy: No; where\'s that dude you were with the other night, anyway?<br />\nGirl: Who cares? He couldn\'t deliver the steel.', '', 1133848841)
  ])
  ,new S('28th & Madison', 40.74399, -73.9857, 2, [
    new Q('006124', 'Wednesday One-Liners Are Going to Hell', 'Girl on cell: Well, she wasn\'t a better person before she went to rehab, just a more fun one...Yeah, I agree, it would be awesome if she relapsed. God, we are terrible people.', '', 1153310400)
  ])
  ,new S('34th & Madison', 40.74774, -73.98295, 3, [
    new Q('004269', 'Wednesday One-liners Assume', 'Man on cell: Listen, I told you three times: Go. Fuck. Your. Self. In. The. Ass.', '', 1138226429)
  ])
  ,new S('26th & Lexington', 40.74138, -73.98336, 2, [
    new Q('004317', 'Wednesday One-liners Pay Roaming Fees', 'Guy on cell: So, like, for once, when I call you, can you not pick up?', '', 1138867232)
  ])
  ,new S('Therapy, 52nd & 9th', 40.76473, -73.98805, 14, [
    new Q('005827', 'Wednesday One-liners in Tails', 'Tux: You know my ex-boyfriend, right? Come on, you remember him.  His sister was in jail with Amy Fisher?', '', 1150329632)
  ])
  ,new S('34th & Broadway', 40.74986, -73.98797, 0, [
    new Q('005665', 'That Really Gets My Goat', 'Woman: No, I\'m telling you, I\'m right! He couldn\'t eat the Trix because he was an <em>adult</em> rabbit, and Trix were only supposed to be for kids. <br />\nMan: Well, I always thought it was just because he was a rabbit and not a person.<br />\n[A period of silence -- the woman looks down at her food.]<br />\nMan: What\'s wrong?<br />\nWoman: I\'m just really getting tired of you always being wrong.', '', 1149156032)
    ,new Q('005115', 'Wednesday One-liners Already Miss QAF', 'Promoter guy: Excuse me, miss, you have to stop. I\'ll have a fag attack if you don\'t stop those shoes right there.', 'SK', 1145484053)
    ,new Q('005070', 'Also Thinks the UN Runs IHOP', 'Ghetto girl #1: I had like four pancakes this mornin\'.<br />\nGhetto girl #2: You mean like those little bagels?', 'Brian Hamill', 1145149215)
    ,new Q('004813', 'No Relation', 'Man: <em>I found Waldo</em>!', 'Gee', 1143820823)
    ,new Q('004564', 'Wednesday One-liners Miss St. Elsewhere', 'Girl: I want to get a tattoo on my wrist that says, \"Take Your Vitamins\" so I\'ll remember to take my vitamins and won\'t feel like shit like I always do.', '', 1140674402)
    ,new Q('004459', 'The Wednesday One-liners Class Struggle', 'Chick: I\'m not even gonna try applying for a Gap card; they\'ll never<br />\ngive it to me. I don\'t know what it is about Gap; they always know if you have bad credit.', 'Dianora', 1140026437)
    ,new Q('004318', 'Wednesday One-liners Move to the Big Apple', 'Tourist guy: So is this Long Island?', 'Marc Baizman', 1138845622)
    ,new Q('004042', 'It\'s Lunch for Wednesday One-liners', 'Chick: That is the most disgusting cheese I have ever seen!', '', 1136412028)
    ,new Q('003748', 'Wednesday One-liners Have Language Problems', 'Girl on cell: What? <em>You\'re locked in a Port-A-Potty</em>?...Oh, you\'re walking through Port Authority. Got it.', 'Samsers', 1133992814)
  ])
  ,new S('Canal & Baxter', 40.71755, -73.99932, 6, [
    new Q('006107', 'Wednesday One-Liners Have Trouble Re-Folding the Map', 'Woman on cell:  No, I can\'t.  I\'m in the Times Square area right now.', 'Steph J.', 1153332000)
  ])
  ,new S('11th & B', 40.72746, -73.97947, 1, [
    new Q('004729', 'None of That Drag Queen Lassie Crap', 'Man: Those are some fine-lookin\' sweaters! <br />\nOld lady: Do you like them? I made them, you know.<br />\nMan: You made those?<br />\nOld lady: I did.<br />\nMan: Do you think you could make one for him?<br />\nOld lady: I would be delighted!<br />\nMan: But, you know...I mean...like, for a <em>boy</em> chihuahua.', 'Stephanie Matthew-Diaz', 1143108029)
    ,new Q('004420', 'Gee, Let\'s See if Kansas Starts to Riot', 'Guy #1: Is she blind or something?<br />\nGuy #2: No, she\'s Christian.<br />\nGuy #1: Oh...Same thing I guess.', '', 1139594449)
  ])
  ,new S('53rd & 5th', 40.7604, -73.97585, 16, [
    new Q('006349', 'Wednesday One-Liners Hang Around Home Depot', 'Hobo: Make New York safe for women! Lesbian jail! Put those vicious, ass-grabbing lesbians behind bars.', 'colin', 1154520000)
    ,new Q('004341', 'We\'ve Found Osama', 'Woman: Did you call Giuliani? Call in a favor?<br />\nMan: I tried, but....<br />\nWoman: After all you did for him after 9/11. What a slap in the face.', '', 1140112806)
    ,new Q('004105', 'Wednesday One-liners Are a Dumb Idea', 'Suit on cell: Yeah, but none of us respect Alex...Why? Because he\'s a retard!', '', 1137002440)
    ,new Q('003436', 'Wednesday One-liners Wander New York', 'Hobo: Help the homeless stay homeless! It takes money to keep me on the street!', '', 1131580830)
  ])
  ,new S('Whole Foods, Columbus Circle', 40.76828922528404, -73.98277044296265, 14, [
    new Q('004986', 'Wednesday One-liners Will Cost You', 'Guy: Yo, how you gonna charge tax on flowers? They come from the Earth! From the Earth, man!', 'tamaso', 1144245632)
    ,new Q('004697', 'Wednesday One-liners Wear Heatherette', 'Queer: Yeah, but that\'s like those fake Louis Vuitton purses you see those whores with clear heels carrying. They\'re cute but not <em>cute</em>.', 'Byron Aman', 1141848022)
    ,new Q('004517', 'The Password is, \"Fencing\"', 'Guy: Is that for picket or chain link?<br />\nOld man: No, it\'s for an Olympic event.', 'Ray Fisher', 1141444845)
    ,new Q('004554', 'Wednesday One-liners Face It', 'Chick on cell: I know. I really can\'t believe it. She has a face like pavement.', 'Sebastian White', 1140602440)
    ,new Q('004387', 'Someone Get This Woman a Drink', 'Woman: Hi, do you have any meatloaf?...Um, that\'s not meatloaf.<br />\nStore lady: It\'s almost the same.<br />\nWoman: Not really...Do you have any meatloaf?<br />\nServer lady: It\'s the same thing. It\'s beef. It all tastes the same.<br />\nWoman: Yeah, okay. I\'ll take three.', 'Grace Aldridge', 1140321645)
  ])
  ,new S('LaGuardia', 40.77820166245536, -73.8746452331543, -1, [
    new Q('005045', 'The Science That is Wednesday One-liners', 'Teen girl: Are those mountains over there? What are mountains made of?', '', 1144872012)
    ,new Q('005043', 'Thank You for Flying Wednesday One-liners', 'Loudspeaker: Mr.--ha, ha, ha!...Mr. Punani? Ha, ha...Can Mr. Punani please come to Gate 12? Paging Mr...ha, ha...oh yeah...Mr. Punani to Gate 12.', 'Purvi Amin', 1144857618)
    ,new Q('005043', 'Thank You for Flying Wednesday One-liners', 'Southern woman on cell: What airline are you on?...You don\'t know what airline you\'re on?...You\'re sitting on the runway and you don\'t know what airline you\'re on?...No, I won\'t let anyone know.', 'p', 1144857618)
    ,new Q('004801', 'This Metric Stuff is Complicated', 'Teen girl #1: What\'s a \"fortnight\"?<br />\nTeen girl #2: It\'s British for \"ten days\"; like, \"I\'ll be gone for a fortnight.\"<br />\nTeen girl #1: Oh yeah, that makes total sense.', 'GGary', 1143612036)
    ,new Q('004613', 'Only If It\'s Decaf', 'Security lady #1: I don\'t think I never met an Amish person.<br />\nSecurity lady #2: Ain\'t that Marie Osmond an Amish? Yeah, she\'s an Amish person.<br />\nSecurity lady #1: If she\'s Amish, why is she allowed to wear so much makeup? They can\'t wear makeup, right?', '', 1143223205)
    ,new Q('004670', 'The Five Basic Fool Groups', 'Guy: Why do they put peas in the fried rice? Peas and carrots? I don\'t want that in my fried rice.<br />\nGirl: Because it\'s vegetable fried rice.<br />\nGuy: That\'s what the egg is for.<br />\nGirl: Egg is not a vegetable. Wait...What is it? Dairy? It should be meat, because if you let it go it will be meat.<br />\nGuy: I think it\'s produce.', '', 1142647215)
    ,new Q('004669', 'California Raisins for Brains', 'Teen girl #1: Yeah, it\'s totally true. I heard it on the olive branch.<br />\nTeen girl #2: \"Olive branch\"?<br />\nTeen girl #1: Yeah, you know. It\'s going around...It\'s a rumor. The olive branch.<br />\nTeen girl #2: You mean the grape branch?', 'rebecca', 1142618457)
    ,new Q('004459', 'The Wednesday One-liners Class Struggle', 'Intercom: Please take a headset <em>before</em> you get on the plane, because they\'re free now. They\'re actually free once you get on the<br />\nplane, but I charge $50 labor for bringing them to you once you\'re on. So it\'s in your best interests to take one now. Can you tell I\'m a happy person?', '', 1140026437)
    ,new Q('004094', 'Worst Umpire Ever', 'Little girl: That didn\'t hurt.<br />\nMom: I will kill you right now, don\'t tell me that didn\'t hurt.', 'Zeve', 1137956434)
    ,new Q('003703', 'Above the Average Would Be Luckier', 'Mom: Eat this first and then you can have your Lucky Charms.<br />\nLittle boy: No! <em>I hate banana</em>!<br />\nMom: You do not; you were begging me for banana on Sunday. Fine. Turkey bacon, then.<br />\nLittle boy: No.<br />\nMom: Fine. Nothing for you. Say, \"OK, Mommy.\"<br />\nLittle boy: You\'re mean.<br />\nMom: You\'re lucky to have a mean mommy.', 'Kate Lane', 1136206815)
    ,new Q('003953', 'Wednesday One-liners Just Work Here', 'TSA guy: Ladies and gentleman, this is the airport, not Burger King; you can\'t have it your way...I didn\'t walk a mile to work today to have some idiot yell at me.', 'Erin', 1135785606)
  ])
  ,new S('183rd & Fort Washington', 40.85212, -73.93783, 24, [
    new Q('004925', 'Wednesday One-liners Count Calories', 'Teen boy: Green tea is mad good for your prostate.', '', 1143684023)
  ])
  ,new S('58th & 3rd', 40.76089, -73.96696, 26, [
    new Q('004633', 'Wednesday One-liners with an Attitude', 'Girl: I can play hard to get. If I don\'t like someone, I am really hard to get.', '', 1141286401)
  ])
  ,new S('Mulberry & Hester', 40.71816, -73.99794, 10, [
    new Q('005465', 'It\'s Chinese for \"Learn Italian, Fool\"', 'Girl: Little Italy is changing so much. Look at this place, this doesn\'t belong  here...<br />\nGuy: Why not?  It\'s called \"Casa Bella.\" That means \"beautiful house.\"<br />\nGirl: \"Bella\" doesn\'t mean \"house.\"', 'Wow<br />', 1147845632)
  ])
  ,new S('25th & Lexington', 40.74077, -73.98382, 2, [
    new Q('004701', 'Wednesday One-liners Believe in Holy Ghosts', 'Goth guy: I am really weird. Like you know how like when people\'s conscience is talking to them how there is the angel over one<br />\nshoulder and then the devil over the other? Well for me it is penguins. The one on the left is good and like he has a name tag that says \"good\"...And the one on the right is a gothic penguin with fangs and one wing. Well, not really one wing; it\'s more like one wing and a stump.', '', 1141862435)
    ,new Q('003620', 'Here\'s Sam Champion with the Overheard Forecast', 'Crazy man: It\'s raining my children! You are all God\'s children and you must go home!...Come home to me, children!', 'Jenna', 1134410412)
    ,new Q('003612', 'The Notorious St. Pauli Girl Keg', 'Guy #1: Hey, check her out, she\'s so hot.<br />\nGuy #2: Eh, she\'s decent.<br />\nGuy #1: I\'d do her<br />\nGuy #2: I\'d tap her, but not too hard.', 'Eugene Lee', 1134194418)
  ])
  ,new S('4th Avenue between 11th & 12th', 40.73235, -73.990125, 1, [
    new Q('004061', 'I Don\'t Care How Cheap the Gay Porn Is', 'Guy #1: I couldn\'t not buy it.<br />\nGuy #2: Yeah, I\'m thinking about it too. It\'s totally worth it.<br />\nGuy #1: I mean, there are two real porn stars in it. If it was just one, I could have passed it up.<br />\nGuy #2: Yeah, man. But for that price, you almost have to do it!', 'Corinne Hears-All', 1137722455)
  ])
  ,new S('Wall between Pearl & Hanover', 40.705749999999995, -74.008325, 5, [
    new Q('004730', '\"Hole foods?\"', 'Guy #1: So I had my colonoscopy Tuesday. It was like I lost an hour out of my life.<br />\nGuy #2: What do you mean?<br />\nGuy #1: Oh that stuff they give you to make you sleepy. It gives you <br />\namnesia or something.<br />\nGuy #2: That\'s messed up.<br />\nGuy #1: So my girlfriend tells me afterwords like five times that they removed a polyp and that they think it could be pre-cancerous. I won\'t know until next week or something.<br />\nGuy #2: So where do you want to get lunch?', 'Barb Ordell', 1143151219)
  ])
  ,new S('3rd between 13th & 14th', 40.73294, -73.98743999999999, 1, [
    new Q('005852', 'As for the Third Arm, It\'s a Long Story', 'Thug: God, is there anything wrong with you? Do you have horns?<br />\nChick: No.<br />\nThug: A third arm?<br />\nChick: Nope.<br />\nThug: Have you ever been in jail?<br />\nChick: Nope.<br />\nThug: Well, you know, I\'ve been in jail...<br />\nChick: Um...', 'Elizabeth Wiederseim', 1150444832)
    ,new Q('003435', 'Relationship Problems? Try Wednesday One-liners', 'Man: Dude, I wouldn\'t fuck her with <em>your</em> dick.', 'sascha', 1131573637)
  ])
  ,new S('46th & 3rd', 40.7533, -73.97259, 15, [
    new Q('004833', 'The Plastron He\'s Fine With', 'Guy: What were you doing when I walked in this morning?<br />\nGirl: Putting on my pantyhose.<br />\nGuy: You looked like a turtle. Don\'t ever make me see that again.', 'MeliV', 1143982848)
  ])
  ,new S('78th & 1st', 40.77165, -73.95318, 21, [
    new Q('005560', 'Wednesday One-liners Stock Up on Nair', 'Guy to his girlfriend: You are one hairy bastard', '', 1149746432)
  ])
  ,new S('Chambers & Broadway', 40.71416, -74.00632, 4, [
    new Q('006006', 'The United Colors of Wednesday One-Liners', 'Young guy: I was in a spaceship speaking Arabic.', '', 1151510400)
    ,new Q('004931', 'She Couldn\'t Pick One Easy to Remember', 'Old woman: I need to see the lady to get my PIN number to activate my card.<br />\nOld man: They sent you your PIN.<br />\nOld woman: I need to see that lady over there.<br />\nOld man: I\'m telling you, you have your PIN already.<br />\nOld woman: Just shut your fcking mouth while I see the lady.', 'Anna', 1144555222)
  ])
  ,new S('Elevator, 57th & 10th', 40.7691, -73.98859, 14, [
    new Q('004856', 'Wednesday One-liners Still Like Jesse', 'Guy on cell: Okay, you are telling me 6 o\'clock. Can you give that<br />\nto me in black time? You mean like 8.', 'J-N-T', 1143057654)
  ])
  ,new S('Bowery & 1st', 40.7249, -73.9924, 1, [
    new Q('004375', 'God Tells Wednesday One-liners to Kill People', 'Guy: Congratulations on your...what do you call it? \"Baptism\"?', '', 1139392849)
  ])
  ,new S('Christopher & Gay', 40.73396, -74.00034, 11, [
    new Q('004799', 'Not Killing; Liberating', 'Girl: And he\'s like, \"Are you pregnant?\"<br />\nGuy: Is that how straight people ask if you got laid?<br />\nGirl: No, but I\'m kinda worried.<br />\nGuy: Yeah. My friends from high school got pregnant like one after the other.<br />\nGirl: Ew.<br />\nGuy: It was like abort over here, abort over there.<br />\nGirl: I\'m scared.<br />\nGuy: We was killing baby fetuses every week.', '', 1143590410)
    ,new Q('003523', 'She\'s Taking a Concentration in It', 'Chick #1: Did California even exist yet?<br />\nChick #2: No, it belonged to the Spaniards.<br />\nChick #3: Yeah, that was before we taught them about manifest destiny.<br />\nChick #1: Yo, manifest destiny is genocide.<br />\nChick #3: Hi, did we not just discuss me and genocide earlier?', '', 1133553632)
  ])
  ,new S('Cafe Exchange, Broadway & Exchange Place', 40.70682, -74.01249, 5, [
    new Q('004892', 'Still Boasting About the Mayflower', 'Chick: So, where are you from?<br />\nGuy: I\'m from Brooklyn.<br />\nChick: No, you have an accent.<br />\nGuy: Oh yeah, well, my parents are Eurotrash.', '', 1144425633)
    ,new Q('004382', 'Wednesday One-liners Are Upright Citizens', 'Cop: Uh, now I\'ve gotta go fight crime.', '', 1139464819)
  ])
  ,new S('West Broadway & Prince', 40.72577, -74.00091, 7, [
    new Q('004378', 'Wednesday One-liners for Fashion Week', 'Dad: Hey. Hey! Check it out. FCUK...It spells \"fuck\" backwards!', 'Julian Joslin', 1139421628)
    ,new Q('003834', 'Wednesday One-liners Don\'t Look So Hot', 'Girl: Oh my god! He was super short, I thought he was an Oompa Loompa.', 'Sam', 1134619236)
  ])
  ,new S('Office, 58th & Broadway', 40.76712, -73.98173, 16, [
    new Q('003401', 'Hair Today, Heard Tomorrow (NYC Short Stories)', 'Accounting lady: What did you do to your hair?<br />\nMailroom guy: It\'s called the wet look.<br />\nAccounting lady: Oh yeah? What\'s that?<br />\nMailroom guy: I sprinkle some water on my head.', '', 1132581655)
  ])
  ,new S('78th & Columbus', 40.78127, -73.97599, 18, [
    new Q('003417', 'Note She Said \"Until\", Not \"Unless\"', 'Girl: I\'ve seen pictures of you as a child. You didn\'t look Jewish. Hitler would have loved you. Well, until he saw your penis.<br />\nGuy: Wow...uh...wow.', '', 1132660842)
  ])
  ,new S('Three of Cups bar, 5th St & 1st Ave', 40.72579, -73.98665, 1, [
    new Q('006349', 'Wednesday One-Liners Hang Around Home Depot', 'Girl: I think I could totally be a lesbian...except for the whole, like, lack of penises thing.', 'beepster', 1154520000)
    ,new Q('004849', 'Wednesday One-liners Rocket', 'Girl: I don\'t know, all I remember is that when I woke up in the morning there was a cucumber with your menstrual blood on it.', 'diane', 1143028806)
    ,new Q('004631', 'Wednesday One-liners Flip Channels', 'Woman on cell: ...I know, that\'s never something I would do! So anyway, then I actually swallowed it, and I totally forgot how bad<br />\nthat stuff tastes...I know, we should be on <em>Fear Factor</em> for these kind of things.', 'Hannah Russell', 1141272056)
  ])
  ,new S('3rd between 57th & 58th', 40.76055, -73.967205, 26, [
    new Q('003436', 'Wednesday One-liners Wander New York', 'Hobo: Anybody who buys me breakfast will get to kiss me for <em>2 minutes</em>, that is it, but breakfast must be something sweet.', '', 1131580830)
  ])
  ,new S('Stanton & Orchard', 40.72144, -73.98852, 8, [
    new Q('004722', 'They Waxed the Floor and Soaked the Sheets', 'Girl #1: So we basically spent the entire day having sex on Sunday.<br />\nGirl #2: Oh my god! How do you get any chores done?', '', 1142942413)
    ,new Q('004701', 'Wednesday One-liners Believe in Holy Ghosts', 'Drunk woman: You are all a bunch of cocksuckers! You are Christian Rock without God!', 'JR', 1141862435)
  ])
  ,new S('33rd & 8th', 40.75151, -73.99395, 0, [
    new Q('006289', 'Wednesday One-Liners Wake Up in a Tub of Ice', 'Guy: Yeah, the only reason I have kids is that, if I ever need it, I know there\'s a compatible kidney around.', 'kjsilopanna', 1153368000)
    ,new Q('005200', 'They Say the Neon Lights Are Bright and Sht', 'Tourist man: Honey, is this Times Square?<br />\nTourist wife: No, I think this is Union Square.<br />\nNew Yorker: This is Herald Square. If you wanna go to Times Square, just walk north until you see all the lights and sht.<br />\nTourist man:  Thank you!', '', 1146031232)
    ,new Q('004560', 'Wednesday One-liners Like Cans of Beans', 'Hobo: Hey man, help an ugly dude out, will ya?', 'Brian Graham', 1140645642)
    ,new Q('004079', 'My Friend in Atlanta Breeds Them for Sale', 'Guy: My dog is so racist. She is scared of black people. But she also hates the black people of dogs.<br />\nGirl: What does that even mean?<br />\nGuy: Pugs.', '', 1138068001)
    ,new Q('003963', 'Wednesday One-liners, Clothing Optional', 'Girl: I don\'t know about you, but I wear my clothes at least twice before I wash them.', '', 1135821627)
    ,new Q('003656', 'A Pink Triangle of Wednesday One-liners', 'Black guy: <em>Ooh shit</em>! She so fine I\'ll suck her daddy dick!', 'Rich Dees', 1133380834)
    ,new Q('003456', 'Not as Sick as \"Grody\" Usage', 'Queer #1: Ick. He\'s like, your cousin or something.<br />\nQueer #2: First cousin.  Second cousin.  Once removed.<br />\nQueer #1: But not a cousin cousin.<br />\nQueer #2: Right.<br />\nQueer #1: That\'s still grody.<br />\nQueer #2: I love that skirt on her.', '', 1133150428)
    ,new Q('003409', 'That\'s More Like Salad Tongs', 'Construction guy #1: Yo, when I got home last night, I had a 3 hour nap. <br />\nConstruction guy #2: Oh yeah? Did you spoon with your boyfriend?', 'bernadette', 1132480859)
  ])
  ,new S('Waverly & 10th', 40.73448, -74.0014, 11, [
    new Q('003353', 'Long, Thin Wednesday One-liners', 'Chick: ...and it\'s great. Now it\'s like good penis/bad penis.', 'Otis', 1131004811)
  ])
  ,new S('35th St & 23rd Ave, Astoria', 40.77309, -73.91109, -1, [
    new Q('005561', 'Wednesday One-liners in Black and White', 'Girl on cell: I don\'t care if I am as white as a bar of soap, I can say bangin\' all I want.', 'Rick Adams', 1148529632)
  ])
  ,new S('28th & 3rd', 40.74196, -73.98086, 27, [
    new Q('005657', 'Wednesday One-liners Pick You Up', 'Very old homeless woman to sleeping homeless man: You don\'t even <em>know</em> how good looking you are!', 'juju', 1149105632)
  ])
  ,new S('Thompson & Houston', 40.72734, -74.00059, 7, [
    new Q('005833', 'Wednesday One-liners for Pick-up Artists', 'Guy: If she had broken up with me before the end of the school year, I would have had a shot at nailing all of her friends.', 'Ryan', 1150293632)
    ,new Q('004379', 'Wednesday One-liners Could Use a Scrubbing', 'Girl: It kinda tasted like dirty sock water...But you know, I liked it.', 'dboyroy', 1139428849)
  ])
  ,new S('14th & Broadway', 40.73478, -73.99074, 12, [
    new Q('004985', 'Wednesday One-liners for Other Places', 'Man: Well, yeah, but people don\'t know I\'m not Eurotrash!', 'David Lock', 1144238449)
    ,new Q('004777', 'Wednesday One-liners Lunch Hour', 'Chick: So at like 12 o\'clock she said, \"Fuck, I don\'t have any icing,\" and, \"Fuck, I\'ll like do a fucking Martha Stewart,\" so she made her own.', '', 1142460031)
    ,new Q('004474', 'Head You Win, Tail You Win', 'Hobo #1: Penny for the homeless?<br />\nHobo #2: You\'ve got to be universal, you can\'t just ask the pretty women.', 'Joe Q', 1140969639)
    ,new Q('004185', 'Wednesday One-liners Aren\'t a Perfect Fit', 'Chick on cell: ...I finally figured out why I take solace in so many other men. They have been my refuge and it\'s because I love him so much!', 'A. C.', 1137614443)
    ,new Q('003923', 'Patrick McGoohan Finally Gives In', 'Flyers girl: Hi, would you like to come to a party?<br />\nGuy: No, thanks.<br />\nFlyers girl: Why do people keep lying to me?<br />\nGuy: I\'m not a person.', 'Will Person', 1136808001)
    ,new Q('003832', 'Wednesday One-liners Aren\'t in the Best of Health', 'Man: I don\'t know. I don\'t mind a little herpes under my hands.', '', 1134612036)
    ,new Q('003224', 'This Gay Slang Gets Really Odd Really Quick', 'Woman #1: So I organized my closet--<br />\nWoman #2: Ohmigod, I love that! It\'s like a natural high! Did you put things in boxes?<br />\nWoman #1: No, bags.<br />\nWoman #2: Ohmigod! Did you label them?<br />\nWoman #1: Yeah, I put stickers on them.<br />\nWoman #2: <em>Ohmigod</em>, that\'s great!', 'Anastasia', 1131228018)
  ])
  ,new S('19th & Park', 40.73775, -73.98823, 13, [
    new Q('004268', 'Wednesday One-liners Wear Gross Sneakers', 'Hobo: All right everybody! Let\'s all donate to the 99 Niggers <br />\nAre Homeless Fund!', '', 1138240805)
    ,new Q('004111', 'Wednesday One-liners by Eve Ensler', 'Punk girl: I was like, \"Do you <em>know</em> what a queef is, you fucking nigger?\"', 'Ben', 1137045607)
    ,new Q('003742', 'Wednesday One-liners Watch House', 'Chick: So I told him, \"I\'m not trying to be a douchebag, but my Tylenol PM just kicked in and I\'m feeling pretty worthless.\"', 'Shimmers', 1133978447)
  ])
  ,new S('27th & 9th', 40.77396, -73.93102, -1, [
    new Q('004698', 'Wednesday One-liners Take Home Ec', 'Guy: First I\'m gonna tell her I love her, then I\'m gonna cook her some ribs.', '', 1141840804)
  ])
  ,new S('Office, 48th & 6th', 40.75864, -73.98135, 16, [
    new Q('005653', 'Wednesday One-liners Make Me Sick', 'Suit #1 to suit #2: We can do whatever you want today. I just don\'t like the stuff you make me do that makes me throw up.', 'their waitress<br />', 1149076832)
    ,new Q('004197', 'There\'s an SAT Question Here Somewhere', 'Dude: Wait, who\'s Pete?<br />\nChick: Pete\'s the guy who\'s sleeping with John\'s girlfriend.<br />\nDude: Oh, right.', 'this guy', 1139047211)
    ,new Q('003288', 'Gravitional Pull is an Involuntary Process', 'Guy #1: Dude, I hate fat chicks that are stuck up.<br />\nGuy #2: Yeah, it\'s like, \"Bitch, act your weight.\"', '', 1131667208)
  ])
  ,new S('18th between 10th & 11th', 40.745270000000005, -74.007305, 0, [
    new Q('003654', 'Wednesday One-liners by Dolly Parton', 'Guy: Oh shit, I showed my tits on camera.', 'djlindee', 1133373629)
  ])
  ,new S('Essex & Houston', 40.72216, -73.98634, 1, [
    new Q('004693', 'Wednesday One-liners Like Balla', 'Girl: I just think all Minimalist paintings look like flags...You know, Mark Rothko: <em>Welcome to Japan</em>!', '', 1141819208)
    ,new Q('004383', 'Wednesday One-liners Are Ready for Valentine\'s', 'Girl: <em>You fucked Cookie Monster</em>?', '', 1139443231)
    ,new Q('003051', 'Someone Needs to Hire a Closet Organizer', 'Guy #1: You know, I\'m really into the color purple lately. Does that mean I\'m gay?<br />\nGuy #2: Nah, purple\'s all right with me.<br />\nGuy #1: Maybe it\'s because of my childhood crush on Whoopi Goldberg.', '', 1129802425)
  ])
  ,new S('Bodega, 12th & B', 40.72809, -73.979, 1, [
    new Q('003387', 'Tastes Not-So-Great, More or Less Filling', 'Guy #1: Dude, do you actually have a refrigerator this time?<br />\nGuy #2: Yeah, of course.<br />\nGuy #1: Good, \'cause I don\'t want an infection like I got last year from putting the beers in the toilet tank<br />\nGuy #3: Man, you chilled the beers in the toilet?<br />\nGuy #1: No dude, the toilet <em>tank</em>! I thought I would be safe but I woke up with one swollen eye and two swollen fingers.', '', 1132380031)
  ])
  ,new S('74th & 3rd', 40.77105, -73.95964, 21, [
    new Q('005546', 'More Things Parents Just Don\'t Understand', 'Mother: What did you say? He\'s a professor of cold-cut studies?<br />\nDaughter: <em>No</em>, mom! He\'s a professor of Holocaust studies!', '', 1148436032)
  ])
  ,new S('Fulton & William', 40.70956, -74.00642, 5, [
    new Q('004386', 'Wednesday One-liners Are Killer', 'Dude on cell: <em>What</em> was <em>that</em>?...No, it wasn\'t...Did you just kill a <em>manatee</em>?', 'Grace', 1139457646)
  ])
  ,new S('Starbucks, 95th & Broadway', 40.79392, -73.97218, 18, [
    new Q('004990', 'Wednesday One-liners for Adoptionists', 'Chick: Like, I don\'t know if you are into God or like religious, but I<br />\nreally want to sing music like that. Like all the songs you\'ve written.', '', 1144274434)
    ,new Q('004015', 'Try Ben & Jerry\'s Next Door', 'Guy: I need a cigarette...I need a cigarette...I need a <em>cigarette</em>!<br />\nBarista chick: Yeah, well I need a <em>blunt</em> but I can\'t get one right now!', 'Caro', 1139176834)
  ])
  ,new S('45th & Broadway', 40.75798, -73.98561, 16, [
    new Q('005616', 'All I Really Need to Know I Learned from Puppets', 'Tall Asian teen: That was really funny.<br />\nShorter white teen: Yeah, I\'m sorry I keep calling you a fcking Asian.', '', 1148846432)
    ,new Q('005186', 'She Loves the Stateroom Scene', 'Promoter guy: Do you guys want to see a comedy show? <br />\nTourist mom: Oh, sorry, we have an opera tonight. <br />\nPromoter guy: Oh! <em>Fidelio</em>? <br />\nTourist mom: No, <em>Phantom</em>.', 'Andy Hobin', 1145923232)
    ,new Q('005089', 'She Couldn\'t \"Deploy the Troops\"', 'Hipster chick #1: Did you get to use the bathroom?<br />\nHipster chick #2: No! They said it was for patrons only.<br />\nHipster chick #3: What\'s a patron?<br />\nHipster chick #2: I dunno. I think it has something to do with being in the army.', '', 1145311259)
    ,new Q('004695', 'Wednesday One-liners Love Jim Beam', 'Promoter guy: Hey do any of you guys like comedy? Come on, we can go get drunk, pick up some drunk girls, then bang then after the show.', 'Duncan Money', 1141833618)
    ,new Q('004381', 'The Wednesday One-liners Method Acting Method', 'Military guy: Have you heard of that movie <em>Annapolis</em> about the insane military academy? Well, it\'s <em>useless</em>. <em>Useless</em>.', 'elizabeth kim', 1139436042)
    ,new Q('004265', 'Wednesday One-liners Run to the WC', 'Chick: The only person\'s poo I want to be smelling is my own.', 'Simply_G', 1138248046)
    ,new Q('004194', 'Wednesday One-liners for the Thespians', 'Tourist lady: I prefer musicals with singing in them.', 'Ryan Smith', 1137621637)
    ,new Q('003754', 'And If It\'s a Miscarriage?', 'Guy: ...And I said, \"Thanks\", and that I would rape the shit outta her later.<br />\nGirl: And I said, \"Oh yay, I\'m gonna have a little rape baby.\"<br />\nGuy: And we would name her <em>Janelle</em>.', 'Chad', 1135116010)
    ,new Q('003009', 'Because the Sharks Think It\'s Sushi', 'Guy: My 9 month old nephew visited today, then my dad and stepmom went sailing.<br />\nGirl: The baby went sailing too?<br />\nGuy: No, you don\'t take a baby out on a sailboat!<br />\nGirl: Well, why not? I mean as long as it is wearing a life preserver, what\'s the problem?', 'Alex Duke', 1129586421)
  ])
  ,new S('110th & Amsterdam', 40.80296, -73.96389, 18, [
    new Q('005523', 'He\'s Just Like Brad but with Less Expensive Packaging', 'Girl #1: So I got that, like, Wal-stat stuff. Whatever the generic brand of Monistat is.<br />\nGirl #2: Dude, don\'t skimp when it comes to your vagina. That\'s an area where you really want quality.<br />\nGirl #1: Says the girl who slept with John!', 'djlindee<br />', 1148284832)
    ,new Q('004948', 'i.e., The Parental Prerequisite', 'Girl: ... so dogs were getting electrocuted and they kept telling people to put boots on their dogs--<br />\nGuy: What is with these New Yorkers and their dogs? If you want a creature that badly, have a child!<br />\nGirl: You are an idiot.', '', 1144828807)
  ])
  ,new S('63rd & 1st', 40.7621, -73.96015, 21, [
    new Q('003094', 'I\'m Hungee for Wednesday One-liners', 'Guy on cell: When you get here I will make you breakfast sausage. And I am not talking euphemistically.', '', 1129168856)
  ])
  ,new S('53rd & 6th', 40.76174, -73.97907, 16, [
    new Q('005751', 'Terrorists Use Google Maps', 'Girl #1: Will you stop staring up at the buildings?  You look like a terrorist.<br />\nGirl #2: Uh...<br />\nGirl #1: Tourist.  I mean tourist.', '', 1149782432)
    ,new Q('005388', 'Wednesday One-Liners Lost Your Number', 'Girl on cell: No, I haven\'t had a chance to blow him off yet.', '', 1147312832)
    ,new Q('004029', 'That\'s Not How Jesus Tells It', 'Tween boy: So he said, \"Sex is a very beautiful thing, you shouldn\'t be ashamed about it.\"<br />\nTween girl: Sex is a beautiful thing. Your parents had sex...or you were adopted.', 'Nina', 1137556842)
  ])
  ,new S('The Met', 40.77916032794149, -73.96307229995728, 19, [
    new Q('006102', 'Wednesday One-Liners Think Ancient Greece Is the Word', 'Old lady, standing in front of the Leda and the Swan statue: Gee, I guess she must really like that swan.', '', 1153346400)
    ,new Q('005874', 'Come Back 65 Million Years Ago', 'Woman:  Is there a specific exhibit you\'d like to see?<br />\nMan: Yeah, I want to see the dinosaurs!', 'Susie', 1150596032)
    ,new Q('004719', 'Temporal Displacement?', 'Chick: Let\'s go to the other wing. I\'m not that interested in seeing the modern art.<br />\nGuy: Then why are we at the Museum of Modern Art?', 'djlindee', 1142992819)
    ,new Q('004693', 'Wednesday One-liners Like Balla', 'Queer: God, I can\'t believe I took a fucking Adderall for this...', 'Kyle Fox', 1141819208)
    ,new Q('004693', 'Wednesday One-liners Like Balla', 'Dad: Aw! If they didn\'t wan\'t us to touch the sculptures they would have a sign here that says, \"Don\'t touch\"!', 'Liam Hawry', 1141819208)
    ,new Q('004563', 'Clothes Make the Wednesday One-liners', 'Security guy: I\'m surprise I haven\'t seen nobody wearing shorts.', 'Maddy Moop', 1140667250)
    ,new Q('004326', '\"Or Daddy\'s hentai?\"', 'Little girl: Mommy, what\'s this?<br />\nMom: Japanese art. You know, like in <em>Mulan</em>.', '', 1139749242)
    ,new Q('004188', 'Wednesday One-liners Drink Red Rum', 'Suit: ...and it was just in time. My wife was going to kill my father, I mean just kill him.', '', 1137607256)
    ,new Q('004184', 'Wednesday One-liners on Telemundo', 'Woman: These are nice, but they just look like Puerto Rico.', 'Cait O\'Connor', 1137592840)
    ,new Q('003907', 'More Like a Mausoleum at This Point', 'Old Jewess #1: So this hooker comes up to us, both of us, and offers us a menage a trois.<br />\nOld Jewess #2: I once visited that museum.', '', 1137103207)
    ,new Q('004110', 'Wednesday One-liners Need to Know', 'Woman: Do these stairs work?', 'Fletcher Murdoch', 1137016850)
    ,new Q('003518', 'Mithras to His Friends (Happy Birthday!)', 'Man #1: You can tell she loves her son.<br />\nMan #2: Who?<br />\nMan #1: Mary.<br />\nMan #2: Mary who?<br />\nMan #1: There.<br />\nMan #2: ...George, that\'s a painting of Mary and Jesus. Of course she loves her son.', '', 1135515626)
    ,new Q('003653', 'Incomplete Wednesday One-liners', 'Girl: ...and it, like, hit me right in the head. Right in my soft spot! I know only babies have soft spots but I think mine, like, never healed.', 'Shannon', 1133352006)
    ,new Q('003405', 'Think How the Bunny Felt', 'Girl #1: So did you guys fuck all night?<br />\nGirl #2: Yeah, till I had to stop to smoke a cigarette because I needed to throw up...I felt so fat just laying there while he rabbit-humped me.', 'Aubrey DiScalo', 1132567232)
    ,new Q('003491', 'Wednesday One-liners Aren\'t the Sharpest Knife', 'Girl: I didn\'t know Van Gogh was such a big deal.', '', 1132192818)
    ,new Q('003491', 'Wednesday One-liners Aren\'t the Sharpest Knife', 'Tween girl: Ohmigod, all of these drawings and paper on the wall; this is <em>such</em> a fire hazard.', '', 1132192818)
  ])
  ,new S('3rd Ave & 19th St', 40.73637, -73.98495, 2, [
    new Q('005510', 'He Uses That Line on All His Dates', 'Guy #1: Have I ever told you that I got a ticket for public urination?<br />\nGuy #2: No way, that\'s awesome!', '', 1148162432)
  ])
  ,new S('39th & 5th', 40.75155, -73.98226, 3, [
    new Q('005512', 'There\'s a Class at Toys in Babeland', 'Girl on cell:  Ugh, so I\'m headed to the subway now. I just had to do this job where we were working with a construction crew so of course they were like \"let\'s give the bull dyke all the construction work.\"  And I\'m like, I don\'t know how to fcking use power tools.', '', 1148191232)
    ,new Q('004924', 'Wednesday One-liners Read Vogue', 'Chick: The messenger bag wants to be a satchel.', '', 1143676838)
    ,new Q('003836', 'Wednesday One-liners Wetworks', 'Dude on cell: When you see him, I want you to hit him. Hit him really hard with something very heavy. Then take his bible and burn it...I want to be the one who decides whether he lives or dies.', 'Fishy Ellie', 1134626442)
  ])
  ,new S('23rd & Lexington', 40.73949, -73.98476, 2, [
    new Q('004557', 'Chuck Woolery\'s Wednesday One-liners', 'Guy: I can either have a dog or a girlfriend. I can\'t afford both.', 'Creighton', 1140624001)
    ,new Q('004262', 'The Wednesday One-liners Monologues', 'Girl: Ew, that felt like vaginal secretion!', '', 1138183246)
    ,new Q('003064', 'It\'s Going to Be One Long Yom Kippur', 'Guy #1: So how was your Rosh Hashanah?<br />\nGuy #2: I got a blowjob at a movie theater. Since I was watching <em>Flightplan</em> does that count as mile high?', 'dan levin', 1128729646)
  ])
  ,new S('7B, Avenue B', 40.721753, -73.98363, 1, [
    new Q('004882', 'There Go the First Two Rules', 'Drunk guy #1: Let\'s start the East Village Fight Club.<br />\nDrunk guy #2: I\'m in.  <br />\nDrunk guy #1: The only rule of this particular fight club is you have to let your victim know you are beating the crap out of them for being too hip.', '', 1144396846)
  ])
  ,new S('61st & Madison', 40.76483, -73.9705, 21, [
    new Q('004524', 'Except for All Those Fetuses', 'Girl #1: I think that most men prefer it closed.<br />\nGirl #2: You think? I would figure open to be easier access. <br />\nGirl #3: Oh, for God\'s sake! No one has ever rejected me because of my vagina!', '', 1141682455)
  ])
  ,new S('52nd & 10th', 40.76593, -73.9909, 14, [
    new Q('004438', 'The Colonel\'s 11th Spice', 'Girl: She is so fucking dirty. I swear, whenever she touches her hair she has to wash her hands.<br />\nGuy: Or make fried chicken.', '', 1140825622)
  ])
  ,new S('80th between 1st & 2nd', 40.773515, -73.953375, 21, [
    new Q('003434', 'Wednesday One-liners Get There Somehow', 'Man on cell: Well, I saw her running but she wasn\'t too chatty.', '', 1131566447)
  ])
  ,new S('CVS, 23rd & 1st', 40.73665, -73.97843, 27, [
    new Q('004658', 'Where\'s the Climax to This Story?', 'Guy #1: Last summer I was hangin\' out in Richmond for a weekend and me and some other people were havin\' a party and someone gave me and this girl a pill and told us it was painkillers.<br />\nGuy #2: Oh yeah? Sounds like...fun.<br />\nGuy #1: Well the next day, after we had had sex in a pool in front of like 30 people for about 10 hours, the girl who told us it was painkillers told us it was actually Cialis.', 'katie facada', 1142560856)
  ])
  ,new S('38th between 5th & 6th', 40.751615, -73.984325, 17, [
    new Q('005828', 'Wednesday One-liners Know the Facts of Life', 'Woman: I ain\'t gonna take that sht, a\'ight! I\'m gonna fck that nigga \'til a nigga come outta me, a\'ight!', 'Not That Nigga', 1150286432)
    ,new Q('004996', 'Wednesday One-liners Eat Wedding Cake', 'Guy on cell: Three out of four marriages today end in divorce. I would<br />\nbe pissed too if I paid fifty grand for a doomed wedding!...Don\'t get married! Come with us to Bangkok. We\'ll have tons of sex...They love American guys there. I fcked triplets there!', 'Palaverist', 1144310418)
    ,new Q('004185', 'Wednesday One-liners Aren\'t a Perfect Fit', 'Woman on cell: I woke up and I looked down and there were bite marks all over my boobs and I had a wicked bad hangover. Then I rolled over, kissed the guy on the forehead, and said, \"Thanks for the orgasm\" and then just left \'cause I was totally having my mattress delivered that day.', 'J-La.', 1137614443)
  ])
  ,new S('Bodega, West 129th & Lenox', 40.81028, -73.94358, 22, [
    new Q('005522', 'You Have Some Dental Floss, Right?', 'Dad: You get back here! If you get hurt, I am <em>not</em> going to take you to the hospital. I will <em>not</em> be late. I will just stitch you up myself when we get home.<br />\nDaughter looks skeptical.<br />\nDad: I learned how to do it in prison.', '', 1148270432)
    ,new Q('003895', 'Hunger for Wednesday One-liners', 'Thug guy: Make this man his fucking sandwich before I smack your fucking lip.', 'Khadi', 1135209646)
  ])
  ,new S('The Gap, 18th & 5th', 40.73848, -73.99179, 13, [
    new Q('004697', 'Wednesday One-liners Wear Heatherette', 'Guy: Is that coat too rabbinical?', '', 1141848022)
    ,new Q('004232', 'They\'re Gonna Sue Mom for Alimony', 'Mom: How much is it?<br />\nChick: A hundred and fifty bucks.<br />\nMom: Let me pay.<br />\nChick: <em>Mom</em>! No! Don\'t give me any goddamn money!<br />\nMom: Here, just take it, dammit!<br />\nChick: Fine, but I\'m paying for the taxi home.<br />\nMom: I can\'t believe Michael puts up with you. You are so divorced in<br />\nfive years.', '', 1139248834)
    ,new Q('004269', 'Wednesday One-liners Assume', 'Man on cell: So I just had my first rectal exam today...', '', 1138226429)
    ,new Q('003394', 'I\'m Thankful for My Health', 'Guy: I wish I could turn my fat into gold.', 'basselope', 1132826435)
    ,new Q('003310', 'She\'ll Never Make it to Banana Republic', 'Cashier lady: No, they\'re not. I\'m not sure they ever were buy one, get one free.<br />\nWoman: Oh, I was just kidding. I wanted to see what you would say. I <br />\nfigured it was worth a shot.<br />\nCashier lady: Oh, well thanks for making me walk all over the <br />\nstore for no reason.<br />\nWoman: That\'s how you get success, honey.', '', 1131775225)
  ])
  ,new S('2nd Avenue & 10th Street', 40.72977, -73.98681, 1, [
    new Q('005605', 'New Ways to Get Out of Sex', 'Girl #1: But I wasn\'t laughing at him, I was laughing at his little white penis in a black condom. <br />\nGirl #2: Yeah. Chris\'s penis is crooked, and I told him he could never wear one of those yellow banana-flavored condoms, because I might forget I was blowing him and think I was eating a banana.<br />\nGirl #1: You\'re an idiot.', 'Alia Lesoix<br />', 1148760032)
    ,new Q('003658', 'Wednesday One-liners: The Pole', 'Man: So she stuck her face through the divider and asked the cabbie if he minded if she sucked this guy\'s dick.', 'Nicole G', 1133395222)
  ])
  ,new S('34th & 1st', 40.74377, -73.97353, 27, [
    new Q('005234', 'The Other Times He Was Meditating', 'Dreadlocked guy:  Well if you want to get so technical, the first time I was taking a dump.', '', 1146304832)
  ])
  ,new S('Park Slope', 40.6669025988096, -73.98167610168457, -1, [
    new Q('006101', 'What Would Wednesday One-Liners Do?', 'Drunk guy: Jesus saved me already, you fucking cunt!', 'braincurve', 1152705600)
    ,new Q('004952', 'Carmen\'s At It Again', 'Guy: There\'s a very large building missing from my neighborhood.<br />\nGirl: A building missing, eh? <i>Have you been smoking the dope</i>?<br />\nGuy: Yes.', 'djlindee', 1144922420)
    ,new Q('005044', 'Wednesday One-liners Look Sharp', 'Woman: Is that my face? That\'s not the expression I thought I was making.', '', 1144864828)
    ,new Q('004989', 'Rapunzel\'s Wednesday One-liners', 'Bag lady: Hey, you guys, can you help me out? I\'m really hungry!...You need a dye job, you know! Your roots are showing.', '', 1144267226)
    ,new Q('004927', 'The Wednesday One-liners K-Hole', 'Girl: So I say to her, \"It\'s just a fcking junkie, step around him and let\'s go already.\"', 'jake', 1143784837)
    ,new Q('004918', 'Wednesday One-liners Turn It Up a Notch', 'Lady: Get your bi-polar, tri-focal ass out of here!', '', 1143633634)
    ,new Q('004854', 'Wednesday One-liners Are for Boobs', 'Girl on cell: ...Yeah, I know...Mom, I <em>know</em>...Mom, I gotta go, I don\'t have time to talk about your nipples right now.', 'Kate Elizabeth Queram', 1143093646)
    ,new Q('004858', 'Wednesday One-liners Lost Their MetroCard', 'Guy on cell: I\'ll be there shortly...I\'m stuck on the train on the bridge.', 'Nick Draven', 1143072006)
    ,new Q('004659', 'They Can Help You in Richmond', 'Dude #1: Yo, what\'s up?<br />\nDude #2: I know what\'s going up.<br />\nDude #1: The price of stamps?<br />\nDude #2: This elevator don\'t go down till the passengers get off. A samurai won\'t sheath their sword without the taste of blood...Fool, my penis! Damn, you just broke the elevator. Way to go, homo.', 'Gary Wattson', 1142568045)
    ,new Q('004429', 'Something Dimwitted This Way Comes', 'Guy: ...so he digs stuff like <em>Fahrenheit 451</em> and all--<br />\nGirl: \"451\"? Er, 9-11, you mean.', 'Cap\'n MidNite', 1140732044)
    ,new Q('004389', 'Overheard id New York', 'Woman: Oh god, I hope nobody takes that out of context.<br />\nMan: Takes what out of context?<br />\nWoman: A thing I just thought.', 'Mike N', 1140289255)
    ,new Q('004492', 'Overheard in the Headlines: The Blizzard of \'06', 'Man: Yeah, that\'s how New Yorkers prepare for a blizzard...Order delivery!', 'Mardi', 1140184834)
    ,new Q('004458', 'Wednesday One-leyeners', 'Guy on cell: So he was buying fish? You gave him the evil eye?', 'mh', 1140004823)
    ,new Q('004381', 'The Wednesday One-liners Method Acting Method', 'Teen boy: I threw up on Meryl Streep\'s daughter.', 'jones', 1139436042)
    ,new Q('004386', 'Wednesday One-liners Are Killer', 'Dude: I\'m telling you, if I go back and get like six of these crates every night, I\'ll be able to make a <em>killer fort</em>!', 'Mallory McMahon', 1139457646)
    ,new Q('004317', 'Wednesday One-liners Pay Roaming Fees', 'Tween girl: So, in other news, I got a new ringtone today!', 'anna w', 1138867232)
    ,new Q('004317', 'Wednesday One-liners Pay Roaming Fees', 'Hobo: Honey, if I had a phone I\'d give you a call.', 'Charles', 1138867232)
    ,new Q('004318', 'Wednesday One-liners Move to the Big Apple', 'Chick: So I told him we were thinking of moving here and he was all like, \"Yeah, and you\'re gonna have to sell your <em>uterus</em> to get in!\"', '', 1138845622)
    ,new Q('004319', 'Wednesday One-liners Are All Over the Map', 'Hipster guy on cell: What?...No, she left already...Why? \'Cause we were talking about legos and Third World dynamics, I guess...', '', 1138831202)
    ,new Q('004174', 'You Can\'t Trust Those Damn Slags', 'Girl: But, I mean, it\'s not like I ever plan on giving birth.<br />\nGuy: Well, if your mother gave birth, it\'s like your chances are good that you\'ll give birth too.<br />\nGirl: ...Uh, dude, <em>your</em> mother gave birth.<br />\nGuy: Absolutely.', '', 1138759242)
    ,new Q('004144', 'To the Water Tower!', 'Drunk guy: If you come in and dance with me, I\'ll buy you a drink.<br />\nSober girl: No, thanks. There\'s a five dollar cover.<br />\nDrunk guy: If you come in and dance with me, I\'ll give you five dollars.<br />\nSober girl: I don\'t dance.<br />\nDrunk guy: I think you\'re hot.<br />\nSober girl: I\'m sorry...Watch out. You\'re setting yourself on fire.<br />\nDrunk guy: I\'m on fire for you, baby!', 'djlindee', 1138392011)
    ,new Q('004189', 'Wednesday One-liners Drop It Like It\'s Hot', 'Preggers: My baby\'s so low she can help me walk up steps. <em>Mee-mur</em>.', '', 1137578418)
    ,new Q('003978', '\"No,\" Zuul replied.', 'Girl: We were in the middle of having sex, and I was screaming, like, \"Oh god, oh god.\" He looked down at me and replied, \"There is no God. I am your God.\"<br />\nGuy: Uh huh.<br />\nGirl: It sucks because since then I haven\'t been able to sleep with atheists. You\'re not an atheist, are you?', 'Sabrina', 1137139256)
    ,new Q('003960', 'Wednesday One-liners M.D.', 'Guy on cell: Really, the doctor told me that I\'m not contagious once they all scab over.', 'William Gibbons', 1135800048)
    ,new Q('003960', 'Wednesday One-liners M.D.', 'Woman: The mother has the cancer and refuses to leave the apartment. The oldest son is in jail for about the twentieth time. The middle son has AIDS. And the daughter married a Jew.', '', 1135800048)
    ,new Q('003568', 'A Trannie and a Robot Walk Into Park Slope...', 'Girl #1: You and Lori are friends, right?<br />\nGirl #2: Yeah, I guess. Why?<br />\nGirl #1: Curious. Did you guys talk about the guy she\'s dating at all?<br />\nGirl #2: Nope. It\'s hard to get past conversations that don\'t have her sucking my dick. Ha, ha! Sorry.<br />\nGirl #1: Wait, what? Confused.', 'Ilysse Weise', 1133834440)
    ,new Q('003555', 'No, It\'s Like a Co-op', 'Man #1: ...and on the top floor, they sell condos.<br />\nMan #2: What is that, like a building?', 'jbay', 1133744431)
    ,new Q('003471', 'Gee, I Wonder What She\'ll Grow Up to Be', 'Dad: That was awful.', '', 1133053255)
    ,new Q('003597', 'Wednesday One-liners v. Wade', 'Teen girl: Ew, why were you sucking on her titties? Was she pregnant?', 'Katie', 1132790440)
    ,new Q('003498', 'Wednesday One-liners Are Quick to Thrown Down', 'Little girl: I\'m tired of thinking about ponies! <em>Now it\'s time to kill</em>!', '', 1132171212)
    ,new Q('003492', '...With a Side Order of Wednesday One-liners', 'White guy on cell: I\'m kind of over white bread these days. I\'m sorry. I just don\'t know what else to say.', 'Carrie', 1132185605)
    ,new Q('003317', 'No, She Masturbates Others for Man-lotion', 'Hobo: You got some nice skin.<br />\nGirl: Thanks.<br />\nHobo: So you must masturbate yourself like all the time then, huh?', 'still laughing', 1131822035)
    ,new Q('003426', '\"The L Word\" is Wednesday One-liners', 'Girl: I hate Brooklyn lesbians; they\'re all nerdy. I\'m all, \"Yo, where the sluts at?\".', '', 1131537627)
    ,new Q('003355', 'Wednesday One-liners Smoke, Shoot and Sniff', 'Girl: It\'s such hypocrisy when people smoke pot but not cigarettes.', '', 1130961612)
    ,new Q('003116', 'Less of a Vibe and More of a Wave', 'Teen girl #1: She just has this sexual vibe about her--<br />\nTeen girl #2: No, she doesn\'t. She\'s fat!', 'brownthomas', 1130198422)
    ,new Q('003077', 'I Think He Was Just Nostalgically Hungry', 'Girl #1: ...it was so disgusting.<br />\nGirl #2: Oh my god, I can\'t believe you got sexually-harrassed by a three year old.', '', 1129986046)
    ,new Q('003091', 'Wednesday One-liners Go On a Bender', 'Hippie guy on cell: Nathan, I don\'t care how drunk you were, if you\'re giving a blowjob, you know you\'re giving a blowjob.', '', 1129176037)
    ,new Q('003093', 'Wednesday One-liners Ain\'t Very Smoove', 'Tween Goth chick: We got close, but all we did was exchange blowjobs.', 'carrie', 1129161610)
    ,new Q('003085', 'Wednesday One-liner Grrls', 'Girl on cell: I want you to respect my need to get off the phone right now.', 'Nick DeWind', 1129118436)
    ,new Q('002950', 'You\'re Barefoot When They Put You in the Ground', 'Italian guy #1: For some guys, it\'s all right.<br />\nItalian guy #2: The fucking Israelis started that shit.<br />\nItalian guy #1: I don\'t see nothing wrong with it, if that\'s what you\'re into...<br />\nItalian guy #2: The day I wear a square-toed shoe, put me in the fucking ground!', 'James', 1128862813)
  ])
  ,new S('7-11, East 23rd Street', 40.74925, -74.007964, 0, [
    new Q('004109', 'It\'s a Late Wednesday One-liners Lunch', 'Bag lady: I hope your finger isn\'t in my food!', '', 1137024012)
  ])
  ,new S('Madison & 33rd', 40.74708, -73.98345, 3, [
    new Q('003741', 'Wednesday One-liners for Pete Doherty', 'Suit on cell: Yeah, so doing coke while speed dating is a really bad idea.', '', 1133956815)
  ])
  ,new S('62nd & Lexington', 40.76409, -73.96681, 21, [
    new Q('003600', 'Red-handed, Huh? With What Were They Stained?', 'Girl #1: I saw this homeless girl on the street who looked our age and I felt so bad.<br />\nGirl #2: So did you give her money? <br />\nGirl #1: No, my nails were wet.', '', 1134122413)
  ])
  ,new S('Rivington & Norfolk', 40.71958, -73.98675, 8, [
    new Q('005453', 'And They Make Good Snacks', 'Lady: Excuse me, can I borrow a light?<br />\nTanktop girl: Sure.<br />\nLady: Thank you so much. [Turns and whispers to guy she\'s with:] See, I told you. I think if you\'re nice to them, they\'re nice to you.<br />\nTanktop girl: Tourists are so cute.', 'djlindee<br />', 1147766432)
    ,new Q('003435', 'Relationship Problems? Try Wednesday One-liners', 'Hipster chick: It was much better when we were just friends. I had such lower expectations.', '', 1131573637)
  ])
  ,new S('Pearl & Beekman', 40.70808, -74.00343, 5, [
    new Q('005046', 'Wednesday One-liners Are Hired', 'Black woman: What I don\'t understand is why they send someone out on training while everybody else is out on disability. That just doesn\'t make any sense.', 'Rich Mintz', 1144879252)
  ])
  ,new S('80th & 2nd', 40.77402, -73.95456, 21, [
    new Q('005597', 'Beautiful and Witty', 'Drunk guy: Why should I invite you up to my apartment?<br />\nDrunk girl: Because I\'m beautiful ASSHLE!', '', 1148702432)
    ,new Q('004195', 'Women Have Needs, Wednesday One-liners', 'Chick on cell: ...the food came, and then so did I.', '', 1137628851)
  ])
  ,new S('65th & 1st', 40.76335, -73.95924, 21, [
    new Q('005821', 'Wednesday One-liners for Special Events', 'Guy on cell: Get the hell out of here!  I just can\'t believe that someone would go to a baptism just to start a fight.', '', 1150927232)
  ])
  ,new S('15th & 3rd', 40.73397, -73.98669, 2, [
    new Q('005222', 'Another Major Deposit', 'Thug #1: I heard he\'s in some sht. Married, two kids, child support,<br />\na wife, girl on the side, and she just found out about his boyfriend. <br />\nThug #2: Yeah, that\'s some sht.', 'Garrett Ricciardi', 1146189632)
    ,new Q('004011', 'Something\'s in the Air (Happy VD!)', 'Drunk girl #1: Oh god! You were <em>so</em> flirting with him.<br />\nDrunk girl #2: No! I was kicking his ass.', '', 1139911212)
    ,new Q('004375', 'God Tells Wednesday One-liners to Kill People', 'Hobo: Can you help me out?  Can you help me out? See God, they turn their back on me. Fuck them!', 'Hairytoe', 1139392849)
  ])
  ,new S('Broadway & Grand', 40.72082, -74.00067, 7, [
    new Q('005256', 'That Was Alsome', 'Guy: Remember when your sht was all yellow and sht? Remember that? What happened then?<br />\nGirl: I DON\'T CARE!', '', 1146427232)
    ,new Q('004925', 'Wednesday One-liners Count Calories', 'Guy on cell: Man, I\'m telling you, you have to get into pastrami. It\'s the money meat!', 'Bert Berry', 1143684023)
  ])
  ,new S('92nd & Broadway', 40.79204, -73.97356, 18, [
    new Q('004781', 'Your Prescription is Wednesday One-liners', 'Guy: I don\'t want to get a yeast infection.', 'Roger Harper', 1142481636)
    ,new Q('003579', 'Hence the \"Please Don\'t Feed the Retards\" Sign', 'Woman #1: Did Francesca like the sweaters you bought her?<br />\nWoman #2: She liked the red one. But I came home the other day and half of it was gone. She ate it.', '', 1134086436)
    ,new Q('003357', 'Wednesday One-liners Are Pre-Med', 'Man on cell: ...I don\'t know, but it bleeds when I wipe.', 'kathy', 1130976023)
    ,new Q('003280', 'The Riddler Presents: Wednesday One-liners', 'Foreign guy: Excuse me, could you direct me to the NYU college?', 'djlindee', 1130378458)
  ])
  ,new S('29th & 6th', 40.74665, -73.99007, 0, [
    new Q('003425', 'Have a Seat, Wednesday One-liners', 'Woman: They got him a high chair. He\'s fuckin\' 3 months old. What\'s that motherfucka gonna do with a fuckin\' high chair?', '', 1131544849)
  ])
  ,new S('Lexington & 22nd', 40.73882, -73.98523, 2, [
    new Q('003226', 'More Like a Pickle', 'Sober black guy: Oh no, call the ambulance, white man down!<br />\nDrunk white guy: I know, I\'m such a cracker!', 'Zane Gould', 1131184811)
  ])
  ,new S('51st & 6th', 40.7605, -73.97999, 16, [
    new Q('004716', 'It Took Miss Muffet and Bo Peep a Lot of Tequila', 'Suit: Who needs variety when we got f_cking spiderlambs?', '', 1143000008)
    ,new Q('004779', 'Wednesday One-liners See No UHO Money', 'Hobo: I haven\'t had good German food since I was in Milwaukee.', '', 1142467239)
    ,new Q('004777', 'Wednesday One-liners Lunch Hour', 'PA: Attention, please! May I have your attention, please? This is the fire safety director. The alarm on the 20th was caused by... burning toast in the toaster in the 20th floor pantry. Again, the alarm was caused by burning toast.', '', 1142460031)
    ,new Q('004696', 'Wednesday One-liners for Ed O\'Neill', 'Girl on phone: Oh my god, <em>you just got engaged</em>? Aw...That\'s so exciting...Wait...Did you say <em>yes</em>? Oh wow, so you like have a ring?', '', 1141891246)
    ,new Q('004318', 'Wednesday One-liners Move to the Big Apple', 'Lady: I mean, <em>how many</em> times can you watch a line of women lifting their legs at the same time?', '', 1138845622)
    ,new Q('004105', 'Wednesday One-liners Are a Dumb Idea', 'Lady: When will you quit taking <em>stupid</em> pictures?', '', 1137002440)
    ,new Q('003784', 'There is No Logroll in Team', 'Suit #1: You did a helluva job in that meeting.<br />\nSuit #2: It gives me a hardon when you say that, John. It gives me a hardon.', 'chite', 1135396846)
  ])
  ,new S('82nd & 5th', 40.77894, -73.96233, 21, [
    new Q('004777', 'Wednesday One-liners Lunch Hour', 'Man: It would be so much easier if there were a Red Lobster here.', 'Heather', 1142460031)
  ])
  ,new S('Food for Health, 3rd between 92nd & 93rd', 40.782925, -73.950985, 21, [
    new Q('005204', 'Wednesday One-liners Are Cooking with Gas', 'Jappy girl: I\'m not a crunchy vegan...I\'m more like a lipstick vegan.', 'Dan Berkman', 1146081632)
  ])
  ,new S('Office, Broadway & 52nd', 40.76271, -73.98326, 16, [
    new Q('004156', 'That\'s Some Serious Koan Shit', 'Woman: Hi!...Oh, I thought you were someone else.<br />\nMan: I am.', 'Mitch Mahan', 1138622455)
    ,new Q('004116', 'Her Eggs Are Full of Cheese', 'Girl #1: There\'s no way I could get that guy. He is absolutely gorgeous!<br />\nGirl #2: What do you think you are? An omelette?', 'theallegedother', 1138140044)
  ])
  ,new S('Liberty & Nassau', 40.70863, -74.00935, 5, [
    new Q('003670', 'The Maids Ain\'t Milking Anymore', 'Businessman: Yeah, I had to fire like 8 people one Christmas eve.<br />\nBusinesslady: Oh! Ha, ha, ha, ha.', 'Erika', 1135483201)
  ])
  ,new S('Broadway & Fulton', 40.71088, -74.00907, 5, [
    new Q('005737', 'Monotonous and Covered in Other People\'s Sweat?', 'Middle-aged woman exiting subway: Man, these are a lotta steps.<br />\nYoung white woman: Yeah, living in New York is like living on a Stairmaster.<br />\nMiddle-aged black woman: Amen, sister.', '', 1149652832)
    ,new Q('005555', 'Wednesday One-liners Think They\'re All That', 'Guy on cell: No, no.  We only look down on people we\'re helping.', '', 1148536832)
    ,new Q('004775', 'What\'s in a Name, Wednesday One-liners?', 'Guy on cell: I\'m coming up with a new character; I\'m going call her Buttertits.', '', 1142496033)
    ,new Q('004597', 'Pretend a Woman Said It', 'Guy #1: Do you think I\'m too sensitive?<br />\nGuy #2: I...uh...don\'t understand the question.', 'Luke Taylor Brown', 1142114438)
    ,new Q('004499', 'On the Other Hand: Howard Zinn', 'Guy #1: I don\'t get why they call it the 7 Years War if it didn\'t really take 7 full years.<br />\nGuy #2: Well then, why don\'t you write your own motherfucking textbook about history and call it whatever the fuck you want? And nobody will read it, because you don\'t know shit about what we\'re doing second semester!', '', 1141300811)
    ,new Q('003833', 'Wednesday One-liners Hate Project Runway', 'Woman on cell: Oh, they have them? Get me a size 3...Oh wait, are they stretch?...No? Then at least a 7-8.', 'Liz Senning', 1134604824)
    ,new Q('003430', 'Isn\'t That Rich, Wednesday One-liners?', 'Girl on cell: Damn girl my back be hurtin\' all da damn time, I\'m ready to cut these shits off...Really, cabbage?...Ya grandma did<br />\nthat..Yeah, dem old people be knowin\' shit like that...Girl, I\'m \'bout to buy me a bunch of cabbage and stick that shit in my bra tomorrow. I\'m be stinkin\' at work, girl...Yeah, I think that\'s better than spending mad bread to chop these things off...I wish they had centers that bought breasts like they have for hair and shit with dem cancer patients. I\'d be mad rich.', 'SHERRY ANONYMOUS', 1131559212)
    ,new Q('003121', 'Confirmed: Biological Terrorism Hits New York', 'Man: I have a cold and I\'m going to talk right in your face!', 'Jessie', 1130241612)
  ])
  ,new S('Orchard & Houston', 40.72263, -73.98791, 1, [
    new Q('004563', 'Clothes Make the Wednesday One-liners', 'Hipster girl: American Apparel makes me want to fucking kill myself.', 'stephanie k', 1140667250)
    ,new Q('004386', 'Wednesday One-liners Are Killer', 'Hipster girl: She was in the fucking wrong, dead uncle or no dead uncle.', '', 1139457646)
  ])
  ,new S('Starbucks, Delancey & Allen', 40.71924, -73.99025, 8, [
    new Q('003177', 'Wednesday One-liners are New to the Area', 'Tourist chick: Boy, you can tell we\'re in New York; none of the signs are American.', 'Jesse Soursourian', 1129766419)
  ])
  ,new S('Grand St & Graham Ave, Williamsburg', 40.71073, -73.95625, -1, [
    new Q('005774', 'Next Time Try It on a Goth Kid', 'Crazy old lady to young clerk: Whatsa matter, you don\'t like old ladies?  If I  was forty years younger, I would eat you up like an, like an apple. [to older clerk] C\'mere gimme a kiss.  C\'mon gimme a kiss.  What are you, scared? I\'d have you laying out in my funeral parlour in a pine box. What do you think if we skinned the knish? They\'ll wrap you in sheet and ship you back to Yemen. You want to ride the bull with me? You\'ll decide you love America.', '', 1149948032)
    ,new Q('005513', 'Too Late to Keep Out the Devil', 'Woman: *sneeze*<br />\nMan on street: God bless you.<br />\nWoman: You need to shave. You look fcking hideous.', '', 1148176832)
  ])
  ,new S('27 & 3rd', 40.730034, -73.989551, 1, [
    new Q('004047', 'Wednesday One-liners\' Scenes from The City', 'Guy on cell: What side of the street are you on, left or right?...It doesn\'t matter which way you\'re facing, we\'re on the same street.', 'Mr. Brian J', 1136426436)
  ])
  ,new S('70th & Broadway', 40.77705, -73.98202, 18, [
    new Q('003496', 'Wednesday One-liners Shoot Skeet', 'Woman: We don\'t even <em>need</em> his sperm anymore!', 'Isaiah Tanenbaum', 1132164009)
    ,new Q('003433', 'Wednesday One-liners Get to Work', 'Girl on cell: What, did she say she thought I was going to hit her or something?...There was a <em>customer</em> there!', '', 1131595205)
    ,new Q('003284', 'Scenes from the Scene', 'Girl: Hey, you guys were great. If you\'re not doing anything after, <br />\ncall my number, I wrote it next to the monument [on this dollar].<br />\nJurassic 5 singer: Wow..uh, great. Take care, now.<br />\nGirl: Yeah, see you later.<br />\nJurassic 5 singer: ...Dude, she just gave me her phone number. You take it.<br />\nGuy: Yeah? Wow, thanks!<br />\nJurassic 5 singer: Yeah, but buddy, you make sure you tap that shit, now, y\'hear? Aright.', 'Sharon B', 1131516015)
  ])
  ,new S('Varick & King', 40.72786, -74.00543, 7, [
    new Q('004383', 'Wednesday One-liners Are Ready for Valentine\'s', 'Guy on cell: Baby, you know I\'m passin\' up thousands of bitches to be wit\' you...and you know that\'s the truth!', '', 1139443231)
  ])
  ,new S('32nd & Park', 40.74581, -73.98235, 3, [
    new Q('003744', 'Wednesday One-liners Aren\'t Having a Good Time', 'Guy on cell: So, are you gonna stop crying?...Okay. So I\'ll see you later...Yeah. See you tomorrow.', '', 1134021601)
  ])
  ,new S('7th & Leroy', 40.73032, -74.0047, 11, [
    new Q('004557', 'Chuck Woolery\'s Wednesday One-liners', 'Black man: ...but I remember you. You spent the night at my house<br />\nand didn\'t have sex.', '', 1140624001)
  ])
  ,new S('72nd & West End', 40.7798, -73.9845, 18, [
    new Q('004695', 'Wednesday One-liners Love Jim Beam', 'Girl: I\'m the kind of person that goes to group meetings drunk. Because I can\'t handle it.', 'Jess McGins', 1141833618)
  ])
  ,new S('46th & 7th', 40.75857, -73.98509, 16, [
    new Q('004187', 'Wednesday One-liners for Mr. Howell', 'Lady: My kids aren\'t used to this; they\'re used to the Hamptons.', '', 1137585610)
    ,new Q('003835', 'Barkers Hawk Wednesday One-liners', 'Promoter guy: Comedy show! Tickets are free!...Come on, it\'s better than Scientology, guys!', 'Shira Burton', 1134633648)
  ])
  ,new S('54th & Lexington', 40.759, -73.97055, 16, [
    new Q('003658', 'Wednesday One-liners: The Pole', 'Guy on cell: You just wanted to suck my dick? I thought you liked me!', '', 1133395222)
  ])
  ,new S('23rd & 10th', 40.74768, -74.00418, 0, [
    new Q('003862', 'Daddy\'s Favorite Second Choice', 'Russian guy: You should introduce me to your sister<br />\nFrat guy: Hell no, man.<br />\nRussian guy: I would introduce you to my sister.<br />\nFrat guy: Dude, what do you do in your country? Meet in neutral territory and swap family members?', 'Mariclair Partee', 1136815202)
  ])
  ,new S('46th between Broadway & 8th', 40.759235000000004, -73.986645, 16, [
    new Q('004460', 'Wednesday One-liners Don\'t Get None', 'Girl: You\'re the sluttiest virgin I know.', 'DFlo', 1139997602)
  ])
  ,new S('Banc Cafe, 30th & 3rd', 40.74319, -73.97996, 27, [
    new Q('004319', 'Wednesday One-liners Are All Over the Map', 'Bike guy: Followed my girl. yeah, followed my girl to Chicago and Europe, got dissed by my girl...Then I came back.', '', 1138831202)
    ,new Q('003941', 'Blowing Hobos in Five Years?', 'Girl #1: Don\'t laugh while I tell you this! Channel Chris Parnell! <br />\nGirl #2: Ha, ha, ha!...I\'m sorry, I have to pull a Jimmy Fallon.', '', 1136714404)
  ])
  ,new S('Madison between 60th & 61st', 40.764515, -73.970725, 21, [
    new Q('004260', 'It\'s Not Looking Good, Wednesday One-liners', 'Guy: If Hitler were still alive and he were gay you would have thought he\'d decorated that apartment. It was a soulless aesthetic abomination.', '', 1138190426)
  ])
  ,new S('Houston & Varick', 40.72859, -74.00532, 7, [
    new Q('003560', 'Dr. King Must Have Been Dreaming', 'White guy on cell: Yo, shit nigga, this shit the bomb!<br />\nBlack guy: If you close your eyes, he almost sounds like the real deal.', '', 1137405613)
    ,new Q('003275', 'Wednesday One-liners Prefer Metro', '<em>AMNewYork</em> guy: <em>AMNewYork</em>. Get your <em>AMNewYork</em>. New York\'s motherfucking free newspaper.', 'Andrea', 1130342405)
  ])
  ,new S('8th & University', 40.73158, -73.99477, 12, [
    new Q('004854', 'Wednesday One-liners Are for Boobs', 'Chick on cell: Yeah, don\'t you hate it when you\'re not wearing a bra and like one nipple gets hard and the one doesn\'t?', '', 1143093646)
    ,new Q('004467', 'Wednesday One-liners Belt It Out', 'Guy: I want to live with a group of singing nuns. They\'ll go about singing how I\'m difficult but they love me anyway. And Mother Superior will have a great range and a vibrato like no other.', '', 1140062431)
    ,new Q('004188', 'Wednesday One-liners Drink Red Rum', 'Girl on cell: Lemme tell ya, she <em>ain\'t</em> gonna be alive by next Christmas...That\'s a fact...Not if I have anything to do with it...<em>What you lookin\' at</em>?', 'Tina L', 1137607256)
    ,new Q('003832', 'Wednesday One-liners Aren\'t in the Best of Health', 'Guy: 1 in 4 people don\'t know they have AIDS. And you know what? I don\'t care.', 'mixolydia', 1134612036)
    ,new Q('003643', 'That\'s How You Know You\'re Doing It Right, Guy', 'Girl: I can\'t stop thinking about having sex with you.<br />\nGuy: Uh, aren\'t you being a little loud about that?', 'Lauren', 1134468031)
    ,new Q('003745', 'Tuesday One-liners...Psyche!', 'Crazy man: All the king\'s horses and all the king\'s men couldn\'t put a stupid egg back together. Bullshit!', 'S.C.', 1134028826)
  ])
  ,new S('63rd and York', 40.76116, -73.95788, 21, [
    new Q('005207', 'Wednesday One-liners Make History Come Alive', 'Dude:  Dude, the Thirty Years War ended four hundred years ago! Get over it!', 'John Bardes', 1146096032)
  ])
  ,new S('40th between 7th & 8th', 40.755340000000004, -73.98933, 17, [
    new Q('004954', 'It\'s One of the Symptoms of Jungle Fever', 'Guy: You know whose coochie smells? Don\'t take this the wrong way: white girls. White girls\' coochie always smells nasty. Every white girl I been with, their coochie is stank.<br />\nChick: You know why? It\'s \'cause white girls live far from the ghetto, and they have a longass train ride to get to the ghetto, and by the time they get to your house in the ghetto, they sweating and waiting and their coochie stinks.', 'cherie', 1144944031)
  ])
  ,new S('2nd & Houston', 40.72372, -73.99101, 1, [
    new Q('005268', 'Anthony Washed Out of St. Louis', 'Realtor #1: New York is a great place to move to. They say if you can\'t make it here, you can\'t make it anywhere.<br />\nRealtor #2: Anthony, that\'s not what they say. It goes, \"if you can make it here, you can make it anywhere.\"', 'gina carducci', 1146506432)
    ,new Q('004772', 'Wednesday One-liners Play for Pay', 'Hag: Totally. I mean, did you see the balls on that stripper? They <br />\nwere hanging so low, they were like chipmunk balls!', '', 1142431223)
  ])
  ,new S('41st & 3rd', 40.75009, -73.97494, 3, [
    new Q('006189', 'Wednesday One-Liners Say Booty is Truth and Truth Booty', 'Mom, to her kids: Your mama\'s booty is gonna come in handy tonight!', 'allison<br />', 1153922400)
    ,new Q('003830', 'Expecting Some Wednesday One-liners?', 'Guy on cell: You\'re not getting pregnant; you\'re sterile!', '', 1134597602)
  ])
  ,new S('9th St & 3rd Ave', 40.73014, -73.98948, 1, [
    new Q('006182', 'Wednesday One-Liners Tie the Knot', 'Guy: I have to sleep with her before she gets married.', 'Alison R.', 1153972800)
    ,new Q('005877', 'You Just Can\'t Get Good Help These Days', 'Skateboarder on cell: I was just at the spot and there was no car.  Fuck, I know what a car looks like and it wasn\'t there. Are you sure it was a white Lexus?  Fuck you, it wasn\'t there. I got eyes, you know.  Well then fuck off and go buy your own damn drugs!', '', 1150617632)
  ])
  ,new S('John & Cliff', 40.70791, -74.00596, 5, [
    new Q('003656', 'A Pink Triangle of Wednesday One-liners', 'Girl: So today after my quiz I went to the Agora Gallery. My friend knows some guy that works there and we had \"lunch\". Like queer people.', '', 1133380834)
  ])
  ,new S('Starbucks, 54th & Broadway', 40.76402, -73.98247, 16, [
    new Q('006287', 'Wednesday One-Liners Say the Neon Lights Are Bright', 'Guy: Now, you know I want <em>Tarzan the Musical </em> to be a giant flop, but...', '', 1153915200)
    ,new Q('005047', 'Wednesday One-liners Are Locked & Loaded', 'White man: Let\'s face it: if she had at any point owned an Uzi, it would be sexy.', 'Moss Saddened', 1144886401)
    ,new Q('004744', 'The Shrapnel Took Out Grandpa', 'Little girl: Mommy, do you have veins in your head?<br />\nMom: Of course you do. That\'s how Grandma died; a big vein in her brain exploded.', 'Glynnis O', 1143230422)
  ])
  ,new S('Canal & Mott', 40.71686, -73.99775, 6, [
    new Q('003748', 'Wednesday One-liners Have Language Problems', 'Guy: There are a lot of plurals missing here.', 'Katie I', 1133992814)
  ])
  ,new S('14th between 6th & 7th', 40.73795, -73.998275, 11, [
    new Q('004268', 'Wednesday One-liners Wear Gross Sneakers', 'Hobo: If you don\'t give me money you\'ll turn out like me.', '', 1138240805)
    ,new Q('003652', 'Wednesday One-liners Go to the Health Club', 'Flyers guy: What about you? You want to come to the gym?...No?...That is a <em>big</em> mistake.', '', 1133366429)
  ])
  ,new S('Washington & 5th', 40.73184, -73.99664, 12, [
    new Q('004111', 'Wednesday One-liners by Eve Ensler', 'Suit on cell: <em>Yes</em>!...<em>No</em>! Listen, if it has to deal with...ah...\"Female issues,\" then I don\'t want to know...Fine! Goodbye.', 'Ryan', 1137045607)
  ])
  ,new S('Office, 66th & York', 40.76302, -73.95652, 21, [
    new Q('004191', 'Wednesday One-liners for the Weathergirls', 'Woman: My husband has this hierarchy of terrible things that can happen to a person, and you wanna know what tops off his list?  According to him, the number one most horrible thing that can ever happen to a person is getting snow on your wrists.', 'Molly the Mole', 1137657616)
  ])
  ,new S('47th between Broadway & 8th', 40.759905, -73.986295, 16, [
    new Q('003587', 'Wednesday One-liners Went to Twilo', 'Girl: I\'m pouring my heart out to you and all you can talk about is China Club!', '', 1132754417)
  ])
  ,new S('76th & Broadway', 40.78179, -73.98117, 18, [
    new Q('004715', 'This Website Doesn\'t Help Matters', 'Girl: Well maybe you should start seeing a therapist.<br />\nGuy: I bet you they\'ll just say I\'m paranoid.', '', 1142935248)
    ,new Q('003894', 'Wednesday One-liners Get Edumacated', 'Girl on cell: <em>You got in</em>? You\'re going to Catholic School where you can\'t sleep with the boys!', 'Avital', 1135216846)
    ,new Q('003500', 'Wednesday One-liner Brought a Half Keg', 'Hobo: Hey buddy! I\'m just trying to clean my ears...with cognac!', 'Lauren', 1132200007)
  ])
  ,new S('Christopher & Bedford', 40.73313, -74.00587, 11, [
    new Q('003346', 'How Was Your Halloween, New York?', 'Guy #1: I know it\'s Halloween and this is the West Village, but do you faggots have to block the <i>entire</i> sidewalk?<br />\nGuy #2: Oh go sit on a cock.<br />\nGuy #1: Yeah, you\'d like that.', 'Adam Nathan', 1130918410)
  ])
  ,new S('30th & 7th', 40.74847, -73.99248, 0, [
    new Q('003901', 'Remember That Whole Strike Thing?', 'Woman: Maybe a taxi will stop for us cause I\'m pretty.', '', 1135303233)
    ,new Q('003323', 'It\'s Time for NYC Short Stories', 'Guy: Hey man, wanna make some quick money moving some equipment for me?<br />\nHobo: I don\'t have time right now.', 'theallegedother', 1132099241)
  ])
  ,new S('Tens, 21st & Park Ave South', 40.73886, -73.98726, 13, [
    new Q('005405', 'A PVC Corset Works, Too', 'Art magazine-type girl #1: I guess some guy was touching her ass.<br />\nArt magazine-type girl #2: What? I can\'t believe it. I\'ve been riding the 4 and the 5 for like, six years, and no one ever touches my ass.<br />\nArt magazine-type girl #1: Really? I don\'t know. Maybe when it gets warmer you should wear a sarong. I definitely get felt up more when I wear a sarong. <br />\nArt magazine-type girl #2: OK, I will.', '', 1147478432)
    ,new Q('005378', 'Wednesday One-Liners Take It Off', 'Stripper: The makeup lady is finally here! I need to go get my eyelashes put on, \'cause I feel naked without them.', '', 1147320032)
  ])
  ,new S('100th & Broadway', 40.79716, -73.96983, 18, [
    new Q('005845', 'They Don\'t Have Delivery on Her Planet', 'Woman: Damn, that Mexican is hungry.<br />\nMexican with 10 bags: I\'m the delivery boy, you dumb fck.', 'robby b', 1150387232)
    ,new Q('005383', 'Wednesday One-Liners\' New Fall Line', 'Construction worker to suit: I like your outfit. Except for the tie; it\'s awful. Who dressed you this morning?', '', 1147305632)
    ,new Q('005264', 'Girl, Your Leg Is Not All That', 'Girl #1: Sometimes I wanna kill your cat.<br />\nGirl #2: But I thought you hated dogs.<br />\nGirl #1: I do, but your cat always looks at me like it wants to hump my leg.', 'Amanda Fox', 1146484832)
    ,new Q('005110', 'The Wednesday One-liners Party', 'Woman: I know it\'s going to be boring, but we\'ll have so much fun that we won\'t notice how boring it is.', 'Paul D', 1145455223)
    ,new Q('004083', 'The Freak at the Next Table (A NYC Short Story)', 'Woman: I think the most passionate sex I will ever have will be during some really passionate adulterous affair. I would have to make a really conscious decision not to have an affair; it would be like fourth-order cognition.', '', 1138046432)
    ,new Q('003869', 'The Father of the Year 2005 Nominees', 'Girl on cell: So he was at this wedding and said that the father/daughter dance was so incestuous that it made everyone uncomfortable.', '', 1136088036)
    ,new Q('003641', 'Now It Really Can\'t Donate Blood', 'Hobo: Wow! Your dog is skinny.<br />\nWoman: Well, we feed him but he doesn\'t eat a lot and he gets a lot of exercise...<br />\nHobo: No. That dog has AIDS.', '', 1134439217)
    ,new Q('002856', 'I Ain\'t Evolved From No Damn Sea Monkey!', 'Woman #1: When we got off the cruise we had to adapt to having land legs.<br />\nWoman #2: Well, sea legs is probably our natural state, from way back.', '', 1129564831)
  ])
  ,new S('Le Pain Quotidien, 58th & 7th', 40.76621, -73.97958, 16, [
    new Q('005153', 'It\'s Impossible to Know Both the Position and the Velocity of Caesar Dressing', 'Old woman: I bought this Caesar salad, but I don\'t know where to get the dressing. Please, can you tell me where I can get some dressing?<br />\nCute girl: Ummm, I don\'t know. I\'ve never had a salad here before.<br />\nOld woman: But where do you think the dressing could be?<br />\nCute girl: Well, possibly in the refrigerator over there... where they keep the drinks?<br />\nOld woman: Are you sure?<br />\nCute girl: Well, that\'s my hypothesis, but it hasn\'t been tested.', '', 1145656832)
    ,new Q('004070', 'Haggling, Haggling Hobos', 'Hobo: Can you spare some money?<br />\nGirl: No, sorry, I don\'t have any change.<br />\nHobo: That\'s okay, I take dollar bills, too. No credit cards or checks.', '', 1138060850)
  ])
  ,new S('51st & Broadway', 40.76207, -73.98367, 16, [
    new Q('005924', 'Wednesday One-liners Have Had It Up to Here', 'Hot queer in suit:  I swear if one more thing goes wrong, I\'m just going to pull my skirt over my head and <em>scream</em>!', '', 1150963232)
    ,new Q('005511', 'But Jack Black Did Make Shark Tales', 'Guy on cell: Yeah, I spoke to Jack Black about it... right, yeah.  I think he\'ll do just about anything at this point.  [pause] Jack Black.  Jack Black.  [pause] Oh, Jack White.  Jack Black is the comedian. Yeah.', 'Jim<br />', 1148169632)
    ,new Q('004699', 'Wednesday One-liners for the Lookers', 'Girl: You should appreciate what you have because some people don\'t have noses.', 'drewseph', 1141855214)
    ,new Q('004619', 'Meet Katrina Levy', 'Drunk girl #1: I have so many beads.<br />\nDrunk girl #2: Stop showing your tits!<br />\nDrunk girl #1: <em>I can\'t</em>!', 'Lauren Lerner', 1141084826)
    ,new Q('004384', 'The Oldest Wednesday One-liners Profession', 'Woman: What\'s the difference between you and a prostitute?', 'Bianca', 1139472049)
    ,new Q('004013', 'Those Crazy Pro-lifers', 'Woman: Well, they can run like $400 a ticket.<br />\nMan: <em>$400 a ticket</em>? Christ, woman, you\'re gonna make me have a baby!', 'Morgan & Pam Bays', 1137438035)
    ,new Q('003955', 'Wednesday One-liners Get Paid for It', 'Queer on cell: Maybe I should buy some condoms so he doesn\'t think I\'m a total slut.', '', 1135792822)
  ])
  ,new S('113th and Amsterdam', 40.80487, -73.96249, 20, [
    new Q('005720', 'He\'s Been Mixing the Adderall and the Ambien Again', 'Frat boy #1: Dude, you have, like, pills all over your counter. You have, like, a pharmacy on your counter, Dude. Why?<br />\nFrat boy #2: I don\'t know. Wait, I don\'t have pills all over my counter.<br />\nFrat boy #1: Yes, you do, Dude.<br />\nFrat boy #2: Oh, those...', 'lotuseater<br />', 1149552032)
  ])
  ,new S('Suffolk & Rivington', 40.71933, -73.98589, 8, [
    new Q('006098', 'Wednesday One-Liners Do It Standing Up to Be Safe', 'Guy on cell: My doctor told me if you piss right after sex, you can\'t get STDs...Yeah, I do it all the time.', 'John', 1152756000)
    ,new Q('004989', 'Rapunzel\'s Wednesday One-liners', 'Hipster guy: Have you been in that place? It\'s done up like someone\'s rec room and all the dudes have handlebar moustaches. It\'s like it\'s a requirement or something.', '', 1144267226)
    ,new Q('004623', 'Hair Today, Wednesday One-liners', 'Man: I be straight as a perm, son.', '', 1141228829)
  ])
  ,new S('Hudson & Charlton', 40.72731, -74.00733, 7, [
    new Q('004668', 'You Could Pull Them Off, If You\'re Bigger', 'Chick: So do you wear briefs or boxers?<br />\nDude: You mean panties?<br />\nChick: No, you know, briefs.<br />\nDude: Boxers. I wear boxers. Adult males don\'t wear panties. Panties are for girls.<br />\nChick: Why you call \'em panties?<br />\nDude: That\'s what we call \'em in jail.', '', 1142625633)
    ,new Q('004773', 'Reach Out & Touch Wedneday One-liners', 'Guy: I have a sphincter in my finger.', '', 1142438449)
    ,new Q('002870', 'Those Dishes Aren\'t Going to Wash Themselves', 'Man #1: Look at that bum. It\'s 2 in the afternoon, and he\'s just sleeping in a doorway.<br />\nMan #2: He\'s homeless. What the fuck else is he supposed to do?', '', 1129680048)
  ])
  ,new S('46th & Vanderbilt', 40.75497, -73.97653, 16, [
    new Q('004981', 'V for Velveeta', 'Guy: So I was invited to a party at Natalie Portman\'s apartment, and--<br />\nGirl: Natalie Portman from <em>The Facts Of Life</em>?', 'longtimelistener', 1144080026)
  ])
  ,new S('University & 10th', 40.73272, -73.99382, 12, [
    new Q('004859', 'Wednesday One-liners Will Miss Greenspan', 'Little boy on cell: ...You\'re not listening to me! It\'s not about the snack, it\'s about the fact that I\'ve had a really hard day and I want to unwind a little.', 'Phineas J Whoobie', 1143079259)
    ,new Q('003204', 'It\'s Actually Just the Sheepshead Bay', 'Girl #1: I have the best view of the Hudson River from my bedroom window.<br />\nGirl #2: Oh, did you move to the West Side?<br />\nGirl #1: Um, no. I still live on the East Side.<br />\nGirl #2: You mean the East River?<br />\nGirl #1: Whatever, you\'re not invited.', '', 1132048848)
    ,new Q('003250', 'Get Ready to Be Afraid! (Happy Halloween)', 'Man on cell: I have two phobias. The post office and the library. And you want me to go to the post office for <em>you</em>?', '', 1130752806)
  ])
  ,new S('55th between Park & Madison', 40.760615, -73.972455, 16, [
    new Q('005437', 'Wow, You\'ve Had a Dozen Cats?', 'Construction worker #1: ...I don\'t know, maybe a dozen or so.<br />\nConstruction worker #2: Okay, but how many <em>relationships</em> have you had?', 'Katie Compa', 1147651232)
  ])
  ,new S('46 & 8th', 40.738275, -74.003951, 11, [
    new Q('005670', 'Why New Yorkers Are Always Going Underground', 'Little girl: What\'s that, mommy? <br />\nShe points to double-decker site-seeing tourist bus.<br />\nMom: That\'s what the tourists use to look at us.', '', 1149192032)
  ])
  ,new S('57th & Broadway', 40.76626, -73.98187, 16, [
    new Q('004776', 'Wednesday One-liners Sport Beef Curtains', 'Guy: You know, if she throws that cooter in your face you\'re gonna be eating cooter for dinner tonight.', 'melly', 1142488809)
    ,new Q('004780', 'Wednesday One-liners Found \"The One\"', 'Girl on cell: I really want you to come over tonight. I\'ll even wash your underwear by hand if you do.', 'Scarfish', 1142474402)
    ,new Q('004297', 'She Likes a Guy with a Huge Chin', 'Girl: It\'s not that it\'s small, it\'s just...not that big.<br />\nGuy: I wish we could stop talking about this now.<br />\nGirl: ...Maybe you could just stop shaving.', 'Leonor M.', 1139673642)
    ,new Q('004031', 'It\'s Like Fox News, Dumbed Down', 'Girl #1: Where did you hear that?  What news have <em>you</em> been watching?<br />\nGirl #2: Canadian.', 'Duncan Pflaster', 1137672032)
  ])
  ,new S('85th & Broadway', 40.78762, -73.97698, 18, [
    new Q('004854', 'Wednesday One-liners Are for Boobs', 'Chick: Well I understand that, but that\'s no reason to set your nipples on fire.', 'Christina Hauser', 1143093646)
  ])
  ,new S('Spring & Greenwich', 40.72598, -74.00911, 7, [
    new Q('004374', 'Wednesday One-liners Press the Fontanelle', 'Girl on cell: Aw, Boo-Boo, did I wake you up from your nappy? Well call me later so we can go out, it\'s still early.', '', 1139407206)
  ])
  ,new S('22nd & 6th', 40.7422, -73.99328, 13, [
    new Q('005390', 'Wednesday One-liners Make Great Role Models', 'Guy on cell: No! For the last time, you gotta set it on fire <em>after</em> you put it on his doorstep. [To friend] God, fcking kids these days.', '', 1147867232)
    ,new Q('004996', 'Wednesday One-liners Eat Wedding Cake', 'Chick: I told him, \"You\'re married! You have a wife! You have kids! Go yell at <em>them</em>.\"', 'Claire Keaveney', 1144310418)
    ,new Q('003895', 'Hunger for Wednesday One-liners', 'Store chick: Why do we have so much coffee?', '', 1135209646)
    ,new Q('003894', 'Wednesday One-liners Get Edumacated', 'Woman: I am so over Shakespeare.', 'Jennie Kaufman', 1135216846)
    ,new Q('003531', 'That Cracked Mirror Doesn\'t Lie', 'Chick #1: I feel so fucked up. I don\'t know why.<br />\nChick #2: Maybe it\'s because of the way you look!...Just kidding,<br />\nMargaret! Just kidding!', 'Stephie Russell<br />', 1133539219)
  ])
  ,new S('Houston & Mulberry', 40.72501, -73.99486, 9, [
    new Q('003436', 'Wednesday One-liners Wander New York', 'Hobo: Parlez-vous fran<em>change</em>?', '', 1131580830)
  ])
  ,new S('86th & 1st', 40.77687, -73.94939, 21, [
    new Q('005046', 'Wednesday One-liners Are Hired', 'Girl on cell: I was thinking of just taking the day off and masturbating.', '', 1144879252)
  ])
  ,new S('Il Violino, 68th & Columbus', 40.77483, -73.98067, 18, [
    new Q('005295', 'Wednesday One-Liners Are Ready for 2008', 'Man: Yeah, we have all sorts of connections in DC. 1300 Pennsylvania Avenue!', 'Kat<br />\n <br />\nWoman on cell: Some of this sht is mad funny! I saw a sign back there about Bush. That sht was mad funny.', 1146650432)
  ])
  ,new S('Empire State Building', 40.748850056378274, -73.98650407791138, 0, [
    new Q('004870', 'Hey, We\'re the Only Interesting Ones!', 'Promoter guy: This your first time at the Empire State Building?<br />\nDude: Yeah, it is.<br />\nPromoter guy: Cool. Where are you from?<br />\nDude: Native New Yorker.<br />\nPromoter guy: I don\'t want to talk to you.', 'Adam Nathan', 1144173644)
    ,new Q('004723', 'Human Pyramid?', 'Worker guy: We\'re going to try to get the line moving quicker. Anyone who is in a group of 2 or more people, have 1 person stand in line and buy tickets. The other members of your group can go to a waiting area and you can meet them there.<br />\nTourist guy: But what if all 3 of us want to go up to the top?', 'Tra', 1142985649)
    ,new Q('004317', 'Wednesday One-liners Pay Roaming Fees', 'Suit on cell: If you would have given me your correct phone number, I wouldn\'t <em>have</em> to stalk you, would I?', 'G. Gayle', 1138867232)
    ,new Q('004318', 'Wednesday One-liners Move to the Big Apple', 'Tourist man: This building is going to be really tall by the time I get done with it.', 'David Weinberger', 1138845622)
    ,new Q('004153', '\"...Go stand by her, by the edge.\"', 'Asian chick: Hey, you\'d look good with that girl up there in the pink checked coat.', 'Taffy Doublewide', 1138485608)
    ,new Q('004047', 'Wednesday One-liners\' Scenes from The City', 'Tourist dude: Where do they have the Bat-Signal?', 'Charles A. L.', 1136426436)
  ])
  ,new S('Grand & Chrystie', 40.71815, -73.99385, 8, [
    new Q('005798', 'Just Put It in the Blender', 'Chinese guy: Why not?<br />\nChinese girl: Cause I don\'t like the taste.<br />\nChinese guy: But it\'s the only way I can get off.<br />\nChinese girl: Fine but eat something that makes it liquidy, otherwise it\'s too hard.', '', 1150113632)
    ,new Q('003746', 'Wednesday One-liners: It\'s All About Location', 'Tourist woman: How do we get to the area with all the shops?', 'Charlie', 1134014456)
  ])
  ,new S('Lafayette & Bond', 40.72661, -73.9941, 12, [
    new Q('006125', 'Wednesday One-Liners Live Beyond Their Means', 'Guy: I dunno, if I had that much money, I\'d spend it on something else. Like pants made of diamonds...Or hookers made of gold.', 'jayloo', 1153908000)
    ,new Q('005651', 'Wednesday One-liners Want Sexual Healing', 'Chick to friends:  He was like, \"Say you love me.  Say my name.  Say, \'I love you John*!\'  And I was like, \"Can we just concentrate on the task at hand, here?\"', 'jayloo', 1149084032)
  ])
  ,new S('132nd between Lenox & 7th', 40.812745, -73.943635, 22, [
    new Q('004558', 'Wednesday One-liners for the Tots', 'Girl: I tell every nigga I meet that I have four kids, and if they still want to holla, then that\'s more money for me.', 'A. Nicholson', 1140631248)
  ])
  ,new S('49th & 6th', 40.75925, -73.98089, 16, [
    new Q('004776', 'Wednesday One-liners Sport Beef Curtains', 'Lawyer guy: She was sitting there spread-eagle...and all my friends got a glimpse of the gobbler.', 'Ron Mexico', 1142488809)
    ,new Q('003989', 'Well, It\'s Gone Now; Timber!', 'Guy: We came up on 6th Avenue so now we\'re on 49th!<br />\nGirl: <em>Does anybody know where the friggin\' tree is</em>?<br />\nWoman: It\'s on the fucking left!', 'Emma', 1136703637)
    ,new Q('003832', 'Wednesday One-liners Aren\'t in the Best of Health', 'Guy: You liked that shit? That shit made me nauseous. I ain\'t never met a noodle like that. That noodle made me nauseous.', '', 1134612036)
  ])
  ,new S('66th between Columbus & Central Park West', 40.772994999999995, -73.980175, 18, [
    new Q('005421', 'Uggs Are So Over', 'Old lady leaving <em>The Tony Danza Show </em>#1: Grazie!<br />\nOld lady leaving <em>The Tony Danza Show </em>#2: Why didn\'t you wear the right shoes?<br />\nOld lady leaving <em>The Tony Danza Show </em>#1: No, no, these are fine.<br />\nOld lady leaving <em>The Tony Danza Show </em>#2: Aaaah, blow me. They\'re terrible.', 'MojoSaves<br />', 1147543232)
  ])
  ,new S('Jane & 8th', 40.73811, -74.00412, 11, [
    new Q('002825', 'And You Thought Don Rickles Was Dead', 'Woman passerby: Who?<br />\nHobo: My dick, that\'s who!', 'yassira', 1129039238)
  ])
  ,new S('Starbucks, 27th & Park', 40.74266, -73.98447, 2, [
    new Q('006095', 'Wednesday One-Liners: Cha-ching!', 'Biker dude: She\'s a shrink <em>and</em> a psychiatrist, so you know she\'s rollin\' in money.', 'Brawny McBrawnerson', 1152165600)
  ])
  ,new S('43rd & 7th', 40.75671, -73.98648, 16, [
    new Q('004284', '\"Yeah, he finished really quickly.\"', 'Teen girl #1: So, my boyfriend told me that if I didn\'t have sex with him, he\'d break up with me. So I did, but then he broke up with me anyway. I don\'t understand!<br />\nTeen girl #2: Well, maybe you were really bad at it.', '', 1139662849)
    ,new Q('004280', 'Talk About Anal Retentive', 'Tourist man: Honey, there\'s something stuck on your pants...Honey, it\'s toilet paper!<br />\nTourist woman: But, it can\'t be; I haven\'t gone to the bathroom in <em>hours</em>.', '', 1139500859)
    ,new Q('004379', 'Wednesday One-liners Could Use a Scrubbing', 'Tourist girl: So did I mention that I\'m taking came-on-my-chest boy to the winter formal next week?', '', 1139428849)
    ,new Q('003746', 'Wednesday One-liners: It\'s All About Location', 'Girl on cell: I\'ve been waiting for you for a half hour!...I\'m in the cafe on the corner in Times Square.', 'Kellsbells', 1134014456)
  ])
  ,new S('Leonard between Broadway & Church', 40.71728, -74.00490500000001, 4, [
    new Q('002990', 'The Black Flag is at Half-mast', 'Punk girl: Fight bureaucracy!<br />\nSuit: You\'re not the boss of me.', 'Lakini Malich', 1129212028)
  ])
  ,new S('1st Avenue & 6th Street', 40.72641, -73.9862, 1, [
    new Q('005389', 'Wednesday One-Liners Like Side Dishes', 'Possible paternity litigant: Paul Newman, another girl, and my mom were all having sex together right before I was born.', '', 1150279232)
    ,new Q('004992', '50 States plus Wednesday One-liners', 'Old lady: Where do you think you\'re going? Trashy plates! You shtty drivers are always from New Jersey!', 'Laurabelle', 1144281607)
    ,new Q('003498', 'Wednesday One-liners Are Quick to Thrown Down', 'Hipster guy: Don\'t hit me there, it makes me have to take a piss.', 'Johnny Tremain', 1132171212)
    ,new Q('003201', 'A Black Hole Isn\'t a Universe', 'Girl #1: You talk like you\'re from an entirely other universe.<br />\nGirl #2: I am. It\'s called Los Angeles!', 'miss dubin', 1132063226)
    ,new Q('003289', 'But What About the Sandbox?', 'Guy #1: Isn\'t that the Norwegian metal band where the drummer is eight and he killed the lead singer?<br />\nGuy #2: No, the drummer <em>ate</em> the lead singer.', '', 1131660045)
  ])
  ,new S('75th & 3rd', 40.77169, -73.95918, 21, [
    new Q('003564', 'Overheard in New York: The Movie', 'Suit: I think you would really like <em>As Good As It Gets</em>.<br />\nWoman: Is that the one with Jennifer Aniston?<br />\nSuit: No, it\'s Helen Keller.', 'Aaron Hotfelder', 1134057606)
  ])
  ,new S('13th & 5th', 40.73531, -73.99413, 12, [
    new Q('004449', 'The Mona Lisa Just Burst Out Laughing', 'Guy: Hey, you seen that movie <em>Grizzly Man</em> yet?<br />\nGirl: No, but I really really want to.<br />\nGuy: Yeah, it\'s so good. Hey, you know they\'re making a movie about the bear guy? Already! And guess who\'s starring in it!<br />\nGirl: I dunno...<br />\nGuy: Leonardo da Vinci!<br />\nGirl: Who?<br />\nGuy: You know! Leonardo da Vinci! <em>Leonardo da Vinci</em>!', 'Halli Civelek', 1140904813)
    ,new Q('004267', 'Wednesday One-liners Make Great Pets', 'Lady: <em>Watch it, mister</em>! I\'ve got two dogs here. Animals can\'t see you know!', '', 1138219229)
    ,new Q('004109', 'It\'s a Late Wednesday One-liners Lunch', 'Guy: Has your poop ever been orange? Yesterday my poop was orange. Today it\'s back to brown, but yesterday it was orange. I\'m never eating clam chowder again.', 'The King Adrock', 1137024012)
    ,new Q('003588', 'Wednesday One-liners, It\'s My First Time', 'Chick: Who knew losing your virginity was so traumatizing? I thought it was a one time thing and then it\'s over.', '', 1132761619)
    ,new Q('003347', 'Wednesday One-liners & That Vision Thing', 'Girl: So wait, is skullfucking only in the eye?', '', 1130940013)
  ])
  ,new S('Prince & Sullivan', 40.72648, -74.00235, 7, [
    new Q('004462', 'Wednesday One-liners Give Bad Gifts', 'Woman: So I called to return the gnomes...You know, the ones we got for the wedding.', '', 1140069658)
    ,new Q('003277', 'Wednesday One-liners Belong in a Cage', 'Chick on cell: Are you going to the dog wedding?', 'Fangirl', 1130356832)
  ])
  ,new S('38th between 7th & 8th', 40.754104999999996, -73.990235, 17, [
    new Q('005663', 'Wednesday One-liners, Baby Chic', 'Casting person: Ok, here\'s the problem, they don\'t wan\'t a baby with a huge head compared to his chest, nor do they want to see gross veins all over its chest. They want the fcking Gerber baby, ok?', '', 1149127232)
  ])
  ,new S('78th & Amsterdam', 40.78247, -73.97883, 18, [
    new Q('006310', 'Wednesday One-Liners Teach Their Children Well', 'Father, to crying son: Yeah yeah, life\'s a disappointment.', 'someone who agrees', 1153965600)
  ])
  ,new S('Astoria', 40.772124376373135, -73.93030643463135, -1, [
    new Q('004990', 'Wednesday One-liners for Adoptionists', 'Drunk guy: I can\'t believe you stole a statue from a church!', 'Alexis', 1144274434)
    ,new Q('004990', 'Wednesday One-liners for Adoptionists', 'Lady on cell: So basically he was ODing himself on these pills. Who needs to take 10 pills a day? He can\'t be that sick...Oh wait, that\'s him! I have caller ID. I\'ll talk to him, you get the minister. We need to pray...', '', 1144274434)
    ,new Q('004853', 'Wednesday One-liners Sit on the Throne', 'Woman on cell: Why do you have to tease me by pooping at <em>your</em> house?', '', 1143100855)
    ,new Q('004848', 'Parve Wednesday One-liners', 'Guy on cell: You deserve a gold Jewish Star of David!...Did you swallow?...Yeah, that\'s true, one step at a time.', 'SEM', 1143021625)
    ,new Q('004695', 'Wednesday One-liners Love Jim Beam', 'Woman: <em>I\'m not drunk; I\'m Jewish</em>!', '', 1141833618)
    ,new Q('004554', 'Wednesday One-liners Face It', 'Indian chick: Remember when I threw cum in Greg\'s face? He got so pissed!', 'Erin the Barbarian', 1140602440)
    ,new Q('004318', 'Wednesday One-liners Move to the Big Apple', 'Teen girl: Damn, it\'s like ten degrees warmer in the Bronx.', '', 1138845622)
    ,new Q('004306', 'Year of the Jackass', 'Guy #1: Why did you cut your knish like you\'re an Asian person?<br />\nGirl: Because I\'m a <em>jink</em>!<br />\nGuy #2: Anna, you are one crazy cookie.', '', 1138604406)
    ,new Q('004145', 'He Couldn\'t Step', 'Hipster guy: I need a woman to love me so I can alienate her. The love part, that\'s where it gets difficult.<br />\nGirl #1: Oh, come on. It\'s so easy to find a needy bitch.<br />\nGirl #2: Have you tried AA?', '', 1138406435)
    ,new Q('004260', 'It\'s Not Looking Good, Wednesday One-liners', 'Guy: Carson Daly looks like a colostomy bag...with cocoa butter on it.', 'Afrocurl', 1138190426)
    ,new Q('003750', 'Wednesday One-liners Are Stuffed', 'Old man: Sushi is the Japanese way of getting back at us for winning the war.', 'Politics', 1134007215)
    ,new Q('003596', '...Butt It\'s Wednesday One-liners!', 'Girl: It\'s basically the same thing except it goes in the ass.', '', 1132783228)
    ,new Q('003498', 'Wednesday One-liners Are Quick to Thrown Down', 'Girl on cell: I could have fucking kicked her ass in the hospital...but I didn\'t.', '', 1132171212)
    ,new Q('003307', 'It Wasn\'t Work, It Was an Audition', 'Guy #1: You look really familiar to me; what do you do?<br />\nGuy #2: I\'m an actor, poet, musician...<br />\nGuy #1: No...Did you ever work at Bloomingdale\'s?<br />\nGuy #2: ...Yes.', '', 1131717626)
    ,new Q('003011', 'That Must Be Canadia', 'Man: Honey, what\'s her zip code?<br />\nWoman: Oh...um...it\'s 1000007.', 'Alizzon', 1131703228)
    ,new Q('003432', 'Wednesday One-liners for Hump Day', 'Girl on cell: We were <em>not</em> a tag team. She was drunk, and I was...there.', 'Duncan Pflaster', 1131609643)
    ,new Q('003225', 'It\'s Official: Dark Sarcasm is Over', 'Industrial guy: Do you guys like noise? <br />\nHipster guy #1: Um...no, I\'m really into organized sound.<br />\nHipster guy #2: Yeah, I\'m really getting into silence...like that.', 'Jeremy Valeda', 1131170427)
    ,new Q('003108', 'Dude, You Totally Just Lost Your New Hag', 'Fat chick on cell: Well, it kind of sucks because the subway is <br />\nlike two avenue blocks away and--<br />\nQueer passerby: And there\'s no Krispy Kreme in between?', '', 1130126417)
    ,new Q('003177', 'Wednesday One-liners are New to the Area', 'Guy on cell: I\'m somewhere in Brooklyn, where are you?', 'fliphed', 1129766419)
    ,new Q('003176', 'Wednesday One-liners Rough It Up', 'Thug: If the rain was a person, I\'d kick its ass.', 'sean', 1129773616)
    ,new Q('002931', 'Who Needs a Kid If You\'ve Got a Puppy?', 'Little girl: Mommy, that guy has a puppy in his car!<br />\nMommy: How many times do I have to tell you that is the first temptation to kidnap you, stupid!', 'GeeGoo', 1128981627)
  ])
  ,new S('Carroll Gardens', 40.681419101865785, -73.99935722351074, -1, [
    new Q('004913', 'Not Yet, But Allah Willing...', 'Girl #1: I don\'t know, I think there was a language barrier.<br />\nGirl #2: Where is he from?<br />\nGirl #1: Well, Israel.<br />\nGirl #2: What the fck do they speak there? <em>Arabic</em>?', 'Janis Glendon', 1144699218)
    ,new Q('004921', 'Wednesday One-liners Turn Up the Radio', 'Dude: He\'s like Teyve except he\'s sings more than <em>deedle, deedle, dee</em>.', 'Zach', 1143655252)
    ,new Q('004365', 'Unlike His Refrigerator...Box', 'Hobo: Oh, thanks! Hey, wait. What, was this just sittin\' around?<br />\nGuy: No, I just filled it up from my sink.<br />\nHobo: Oh, well, I don\'t mean no disrespect. But you mind dumping this out and letting it run for a while? Shit just ain\'t cold enough.', 'bklyn awesome, waiting outside', 1140220859)
    ,new Q('004191', 'Wednesday One-liners for the Weathergirls', 'Dad: If you start to get blown away, just drop the umbrella.', '', 1137657616)
    ,new Q('003615', 'Dead Lady Couldn\'t Break the Glass Ceiling', 'Woman #1: He works at a law firm...the name of which I can\'t remember.<br />\nWoman #2: Oh, Dead Guy, Dead Guy, Dying Guy, and Never There Guy...LLC.', 'Myrddins', 1134219604)
    ,new Q('003749', 'Wednesday One-liners for the Family Gals', 'Woman on pay phone: Someone\'s spreading rumors that I am having an affair with my son.', '', 1134000007)
    ,new Q('003594', 'Wednesday One-liners Roll Up Dollars', 'Guido: ...yo son, my father died protecting his heroin addict sister, bro!', '', 1132804825)
    ,new Q('003251', 'He Means His Wingman, the Cop', 'Drunk lady: I don\'t know how you get all those fuckin\' girls. You\'re <br />\nmotherfuckin\' 70 years old!<br />\nOld man:  My dick. My big fuckin\' dick.', '', 1131436806)
    ,new Q('003283', 'Wednesday One-liners Can Be So Rude', 'Fat guy on cell: So then I had to tell that bitch, \"I\'m sorry, but you can\'t disagree with me when I say your feet are sexy!\"', 'Jordan Harris', 1130400040)
    ,new Q('003126', 'What Matters is a Happy Ending', 'Girl: God, it\'s getting so <em>cold</em>! I should\'ve brought my winter coat!<br />\nGuy: You don\'t need a coat, you need a hot man to warm you up. <br />\nGirl: I need that, too...but I\'d start with a coat.', 'Mallory McMahon', 1130256004)
    ,new Q('003180', 'Wednesday\'s One-liners for Christina Aguilera', 'Garbageman: She stunk like shit. Seriously, she smelled like stool.', '', 1129780815)
  ])
  ,new S('17th & 7th', 40.74045, -73.99831, 0, [
    new Q('006002', 'Wednesday One-Liners for Pride Week', 'Queer: I remember back when I was having orgies with, like, 15 or 20 people.  And I was having a lot of fun!', 'Sofia', 1151488800)
    ,new Q('004556', 'Color Me Wednesday One-liners', 'Girl: Saturday was a day from Hell. I have no recollection of Saturday, because that was the day my dad said I had to choose...between a Cherokee and a Renegade. Now, the Cherokee was white, and the Renegade was green, and they had, like, completely different features. And finally, I chose the Cherokee, and for that I blame my mom, because I think she pressured me into taking a car I didn\'t really want, when what I wanted was the best features of both of them in one vehicle.', 'Keith Thrash', 1140616838)
  ])
  ,new S('10th St & 4th Ave', 40.73424, -74.00298, 11, [
    new Q('005857', 'Just Making Conversation', 'Cashier: That\'s $1.50.<br />\nDrunk: You\'re killing me, man! Hey, do you know if the liquor store\'s still open?<br />\nSuit: You don\'t?', '', 1150480832)
  ])
  ,new S('31st & 3rd', 40.7438, -73.97952, 27, [
    new Q('003435', 'Relationship Problems? Try Wednesday One-liners', 'Guy: So I tried to take Melissa home with me last night. She said no but it was okay, I had Tiffany waiting in her bed just marinating for me.', 'Jono', 1131573637)
  ])
  ,new S('D\'Agostino, 76th & Lexington', 40.773, -73.96032, 21, [
    new Q('004434', 'Uh Oh, She\'s Radioing for Backup', 'Cashier girl: You have more than 10 items.<br />\nWhite man: Who are you? Are you the items police?<br />\nCashier girl: You\'re only allowed to have 10 items.<br />\nWhite man: Fine, but I have two of the same items, so does that count as one item or two? <br />\nCashier girl: I have to call the manager.', 'Andrew Saint John Goodwin', 1140782445)
    ,new Q('004385', 'Call a Doctor, Wednesday One-liners!', 'Guy on cell: I\'m not that worried. I mean like Magic Johnson has had it for like 15 years and he\'s fine.', 'Brian', 1139450418)
  ])
  ,new S('McDonalds, 50th & Broadway', 40.76144, -73.98408, 16, [
    new Q('004636', 'Best Seats in the House', 'Woman: I don\'t know where we are?<br />\nUsher guy: Lady, you\'re in Manhattan.', '', 1142280009)
    ,new Q('004631', 'Wednesday One-liners Flip Channels', 'White guy ...it\'s better than Smurfette in a dark room with other Smurfs.', 'Michael Tober', 1141272056)
    ,new Q('002960', 'I\'m Lovin\' It', 'Suit: Can I get a Number 2?<br />\nMcCounterlady: What size?<br />\nSuit: What\'s the difference between the medium and the large?<br />\nMcCounterlady: The size.<br />\nSuit: Fair enough.', 'Ciacci', 1129014049)
  ])
  ,new S('87th & 1st', 40.77754, -73.9489, 21, [
    new Q('005979', 'She Reminds Me So Much of Her Mother', 'Cash register guy: Yo man, how you doing? I saw your daughter walk past here yesterday. She was with some new dude.<br />\nBagel customer: Really?<br />\nCash register guy: Yeah, I never saw her with this guy before.<br />\nBagel customer: Yeah, I don\'t really keep track of her.<br />\nCash register guy: Yeah man, she\'s always with a different guy. I never see her with the same guy twice. You know, one day I saw her two times in an afternoon, and she was hangin\' all over a different guy each time. Two in the same day, you know?<br />\nBagel customer: I don\'t control what she does.', 'K. Fung', 1151287232)
    ,new Q('005392', 'Wednesday One-Liners and Their Little Dogs, Too', 'Woman sitting on bench with small dog on lap: You know that no matter what you do, I will always love you, right?', '', 1147334432)
    ,new Q('005255', 'Then Stop Talking to Me Already', 'Urinal user: Hey!<br />\nStall user: Yeah?<br />\nUrinal user: You doing number one in there?<br />\nStall user: Um . . . yeah.<br />\nUrinal user: Good!  Because if you\'re talking when you\'re doing number two it don\'t come out right.', '', 1146420032)
  ])
  ,new S('57th & 7th', 40.76551, -73.98005, 16, [
    new Q('004998', 'Wednesday One-liners Need an Adapter', 'Girl on cell: It felt like sticking your tongue in a battery terminal...You know? Like when you stick your tongue in the terminal of a 9 volt battery?...You don\'t?', '', 1144303230)
  ])
  ,new S('43rd & 6th', 40.7555, -73.98364, 16, [
    new Q('005746', 'Less Than Truthful Wednesday One-liners', 'Man screaming on cell : Nah, I didn\'t lie to you about nuthin\'. [Pause] Even if I did lie, I sho\' wouldn\'t tell you about it!', 'C Mike<br />', 1149739232)
  ])
  ,new S('18th & 10th', 40.74463, -74.00638, 0, [
    new Q('003620', 'Here\'s Sam Champion with the Overheard Forecast', 'Queer: I can\'t get it up when the wind\'s this strong.', '', 1134410412)
  ])
  ,new S('Office, 39th & 7th', 40.75412, -73.98836, 17, [
    new Q('004188', 'Wednesday One-liners Drink Red Rum', 'Guy: Did you know if they found out who tried to blow up that Starbucks?', '', 1137607256)
    ,new Q('003200', 'As Fucked Up As \"Working Her Like a Slave\"?', 'White chick #1: Yeah, did she tell you about the designer that was racist to her?<br />\nWhite chick #2: No! That\'s so rude.<br />\nWhite chick #1: Yeah, I know. Even though she makes it kind of easy to be racist, that is so fucked up!', '', 1130882423)
  ])
  ,new S('Henry\'s, 105th & Broadway', 40.80046, -73.9679, 18, [
    new Q('004532', 'Anatomy of a Moron (NYC Short Stories)', 'Spanish guy: Wow, that was a long time, did you take butt piss? <br />\nWhite chick: No, quite the opposite...It felt like I was trying to shit out my scrotum. <br />\nSpanish guy: You don\'t even have a scrotum! <br />\nWhite chick: I know! Wait, yes I do! What are you talking about? I aced that anatomy shit. <br />\nSpanish guy: Obviously not. <br />\nWhite chick: Oh, you\'re right. I meant it felt like I was shitting out my spleen.', '', 1141675229)
  ])
  ,new S('54th & 7th', 40.76359, -73.98147, 16, [
    new Q('004704', 'Taco Bell Might Sue', 'Girl #1: I don\'t normally carry a bag of vomit with me as a weapon.<br />\nGirl #2: We should market that.', '', 1142892002)
  ])
  ,new S('58th & Lexington', 40.76158, -73.96863, 16, [
    new Q('004240', 'Jacques Cousteau: Au contraire, tards.', 'Teen boy #1: Dude that sounds like someone trying to drown a dolphin.<br />\nTeen boy #2: Ha, ha, ha! Yo, they live in the water! They can\'t drown!<br />\nTeen boy #1: I know, that\'s why it\'s so fucked up!', 'Max Melsenti', 1139209238)
    ,new Q('003793', 'They Like to Summer in Vail', 'Chick #1: You know if I was going to be homeless, I wouldn\'t choose New York. I\'d go someplace warm.<br />\nChick #2: Yeah, I\'d go to Florida.<br />\nChick #1: Or New Orleans. Well, not now, but it would have been good.<br />\nChick #2: At least Myrtle Beach.<br />\nChick #1: Yeah. If I were homeless I wouldn\'t stay here. I\'d go to Aruba.', 'Tricia Morall', 1135713637)
  ])
  ,new S('Columbus between 89th & 90th', 40.78871, -73.970535, 18, [
    new Q('004734', 'Maybe It\'s Maybelline', 'Chick: I have to run in here and get more ChapStick.<br />\nGuy: You just bought chapstick yesterday.<br />\nChick: My dog steals them and eats them.<br />\nGuy: That must be why his lips are so soft.', '', 1143122449)
  ])
  ,new S('Post Office, 38th & 7th', 40.75351, -73.98881, 17, [
    new Q('004563', 'Clothes Make the Wednesday One-liners', 'Old man on cell:  Hi. What? Are you in stupid mode?...You\'re having a senior moment?...I wanna go see that underwear.', 'benb', 1140667250)
    ,new Q('004139', 'When Assholes Share, It Tends to Get Dirty', 'Guy #1: Hey man, you got an extra cigarette?<br />\nGuy #2: This is my last one.<br />\nGuy #1: Then why can I see the pack sitting in your pocket? Fucking asshole! Fucking dirty selfish asshole.', 'Andrew Wilbur', 1139486437)
  ])
  ,new S('Perry & West 4th', 40.73551, -74.00334, 11, [
    new Q('003012', 'The Taming of the Shrewd', 'Chick #1: What is that, [a picture of] a barn?<br />\nChick #2: No, it\'s the Globe.<br />\nChick #1: What are you, a wench?', '', 1129402833)
  ])
  ,new S('14th & 6th', 40.73735, -73.99685, 12, [
    new Q('005796', 'It Involves Double Indemnity', 'Biker dude #1: I\'m staying at that hotel, down by...93rd and 3rd.<br />\nBiker dude #2: Oh yeah?<br />\nBiker dude #1: Yeah, that\'s where I tried to commit suicide.<br />\nBiker dude #2: What do you pay a week down there?<br />\nBiker dude #1: I got a good deal going with the guy down there.', '', 1150092032)
    ,new Q('005562', 'Baby Got Wednesday One-liners', 'Black guy to white girl: Hey, Slim Goodie! I wanna take you home and fatten you up right <em>now</em>! Some KFC, that\'s all you need to juice that ass up.', 'Sarah Bitchards', 1148500832)
    ,new Q('004872', 'Bird Flu is Also a Trend', 'Girl: Do you sell tights with feet?<br />\nStore chick: Sorry, we only sell stuff that\'s trendy.', 'Amusled', 1144216820)
    ,new Q('004320', 'Wednesday One-liners Watch VH1', 'Woman on cell: Remember that handsome lawyer who took me out to dinner the other night? Yeah, well, he gave me an STD. It reminded me of a song.', '', 1138838409)
    ,new Q('004043', 'Wednesday One-liners Love Bathroom Humor', 'Man: We were in the club and I went to the bathroom and there was a girl next to me at the urinal. She said, \"Stop staring!\" I said, \"You\'re in the men\'s room, I\'ll stare all I want.\"', '', 1136419215)
    ,new Q('003895', 'Hunger for Wednesday One-liners', 'Chick: No, banana bread is a one trick pony.', 'epicte', 1135209646)
    ,new Q('003662', 'Wednesday One-liners Rifle Through the Trash', 'Hobo: One dollar! One dollar! Magic beans! One dollar!', 'Adam Nathan', 1133402459)
    ,new Q('003302', 'Whatever You Need to Tell Yourself', 'Girl: We used to go out--he was wonderful--so interesting, caring, funny, and great lover. But I dumped him because he was gay.<br />\nGuy: Are you sure?<br />\nGirl: ...Well, maybe he wasn\'t a gay after all...Yes, he definitely wasn\'t.', 'goga', 1131811209)
    ,new Q('003209', 'Don\'t Be Mad at Him; Be Mad at Newton', 'Guy: Sir, excuse me, are you okay? You just fell really hard.<br />\nMan: ...Fuck you.', 'The L0rdz', 1131026458)
    ,new Q('003167', 'Hipster or Homeless?', 'Guy: Did you know that there are homeless people who live underground in the abandoned subway stations?  <br />\nGirl: You mean like underground people? Wait, I\'ve heard of them, they have a weird name!  <br />\nGuy: Like \"underground people\"?<br />\nGirl: No, I saw it on <em>Felicity</em>.', 'peter', 1130720434)
  ])
  ,new S('78th & 5th', 40.77631, -73.96424, 21, [
    new Q('004317', 'Wednesday One-liners Pay Roaming Fees', 'Man: Well, if I had known it was your wife calling I wouldn\'t have answered!', 'Manders K', 1138867232)
  ])
  ,new S('26th & 7th', 40.74599, -73.99426, 0, [
    new Q('005046', 'Wednesday One-liners Are Hired', 'Woman: You know, if you\'re born into poverty it\'s because you did something really bad in a previous life.', '', 1144879252)
    ,new Q('004925', 'Wednesday One-liners Count Calories', 'Girl: I just paid 6 bucks for some nasty-ass food that I had to throw away! I mean it was gross. If it was just nasty, I would have ate it, \'cause you know, I paid 6 bucks for it, but it was <em>gross</em>.', '', 1143684023)
    ,new Q('003067', 'I\'m Sure the Reenacting Didn\'t Help', 'Black chick #1: So you didn\'t get the job?<br />\nBlack chick #2: Nah, I fucked up. I shouldn\'t have told them I drank when I was younger. I really didn\'t drink.', 'max', 1129888822)
  ])
  ,new S('51st & Lexington', 40.75711, -73.97191, 16, [
    new Q('004916', 'A Perfect Fit for This Dickhead', 'Guy #1: So that Egyptian baby girl with two heads died. A brain infection from when they removed the extra head.<br />\nGuy #2: Is this real or from the <em>Weekly World News</em>?<br />\nGuy #1: No, it\'s real. The extra head could only smile and blink.<br />\nGuy #3: So the extra head could give head...It had a use...Ha, ha, ha!<br />\nGuy #1: You are really a sick motherfcker.', '', 1143604828)
    ,new Q('004695', 'Wednesday One-liners Love Jim Beam', 'Yuppie lady: When all is said and done, I was drunk in Banana Republic...', '', 1141833618)
    ,new Q('003283', 'Wednesday One-liners Can Be So Rude', 'Guy on cell: Hey, I ran into you girlfriend!...Well, she\'s your girlfriend, right?...Well, I didn\'t mean it in the bad way.', '', 1130400040)
  ])
  ,new S('Office, 51st & Park', 40.75778, -73.97346, 16, [
    new Q('003965', 'Buddha Sure Thinks It\'s Funny', 'Suit #1: So what do they speak in India? Hindu? <br />\nSuit #2: Hindu\'s not a language. It\'s Hindi. <br />\nSuit #1: Right, right. So those people, they\'re Buddhist? <br />\nSuit #2: Are you kidding me?', '', 1136901635)
    ,new Q('003369', 'He Means Because He\'s a Warlock', 'Guy: You\'re how old? <em>27</em>? Wow, I\'m <em>old</em>.<br />\nChick: Why, how old are you?<br />\nGuy: 35. If this was 1000 years ago, I\'d be dead by now.', 'Shannon', 1132272040)
  ])
  ,new S('18th & 7th', 40.74104, -73.99788, 0, [
    new Q('003023', 'We Shan\'t Overcome', 'Hobo: ...Lick Al Sharpton\'s balls! Suck out his asshole! You\'re Democrats! It\'s your job!', 'A & J', 1129550455)
  ])
  ,new S('Houston & Chrystie', 40.72358, -73.99103, 1, [
    new Q('004208', 'If You Remember, It Wasn\'t Crack', 'Yuppie chick #1: Sarah D. Roosevelt Park! Remember when we bought crack there?<br />\nYuppie chick #2: We didn\'t even buy crack. We just smoked it.', '', 1139896817)
  ])
  ,new S('40th & 6th', 40.75354, -73.98505, 17, [
    new Q('004927', 'The Wednesday One-liners K-Hole', 'Suit on cell: I am so <em>fcked</em>. So fcked. I\'m going to be at the office all fcking night. I need some energy. I need some coke. Where\'s the closest high school around here?', '', 1143784837)
  ])
  ,new S('14th between 3rd & 4th', 40.733850000000004, -73.98855, 1, [
    new Q('004043', 'Wednesday One-liners Love Bathroom Humor', 'Chick: But I fail to understand why he needs a carpet on the toilet!', 'Alyson Leigh', 1136419215)
  ])
  ,new S('26th & 8th', 40.7472, -73.99711, 0, [
    new Q('006093', 'Wednesday One-Liners Aren\'t So Vanilla', 'Hipster woman: So I think my father is into kiddie porn.', 'Tobster', 1152151200)
    ,new Q('004148', 'A Rooster\'s Bitch, Probably', 'Girl: Whatever, tell your brother to go back to prison, learn how to read, and then he can talk to me.<br />\nGuy: But you egged his car! You egged his fucking car! What kind of bitch eggs someone\'s car?', 'Emily Ackerman', 1138561212)
    ,new Q('003833', 'Wednesday One-liners Hate Project Runway', 'Rasta guy: There should be a Sports Illustrated \"Girls with Regular Clothes\" issue.', 'Michelle Weiss', 1134604824)
    ,new Q('003359', 'It Would Finally Be Okay for Him to Suck', 'Amy Poehler: Yeah, I can\'t believe I was pretending to jerk off on a gay cruise and looking at Seth the whole time. He was really embarrassed and didn\'t know what to do.', '', 1131033638)
  ])
  ,new S('112th & Amsterdam', 40.80424, -73.96295, 20, [
    new Q('003782', 'The DEVO is Always the Last to Know', 'Guy #1: Dude, where\'s your woman tonight?<br />\nChick: Yeah, where is she?<br />\nGuy #2: She\'s back in Ohio breaking up with her boyfriend.', '', 1135684850)
  ])
  ,new S('57th between Broadway & 7th', 40.765885, -73.98096000000001, 16, [
    new Q('005110', 'The Wednesday One-liners Party', 'Woman on cell: She didn\'t even invite her children to her birthday party....Yeah...I don\'t know for sure. She said she was trying to cut back the guest list, so...', 'Carol', 1145455223)
  ])
  ,new S('81st & 5th', 40.77831, -73.96279, 21, [
    new Q('004289', 'Those Dancing Eyes Sure Ain\'t Clean', 'Teen guy: Everyone\'s out to get me; that guy just gave me the dirtiest look.<br />\nTeen girl: You retard, that guy was blind.', 'Chelsea Bridge', 1139716850)
  ])
  ,new S('86th & York', 40.77591, -73.94713, 21, [
    new Q('004859', 'Wednesday One-liners Will Miss Greenspan', 'Dude: That\'s not true; someone once charged me seven dollars and fifty-three cents for a smile.', 'Andrew Calderaro', 1143079259)
  ])
  ,new S('61st & 5th', 40.76551, -73.97211, 21, [
    new Q('003887', 'Wednesday One-liners & the Entertainment Industry', 'Girl: What\'s that, an award show for the best billboards?', 'Jamie Lindauer', 1135180851)
  ])
  ,new S('Marie\'s Crisis piano bar, Grove & Bleeker', 40.7329, -74.00398, 11, [
    new Q('005565', 'Wednesday One-liners Are From Mars', 'Ballsy dame: Well, that\'s <em>one</em> thing men are good for -- playing the minor roles in <em>Evita</em>.', 'Duncan Pflaster', 1148544032)
    ,new Q('004732', 'He\'s Been Training', 'Suit #1: I\'ve never had a hooker before.<br />\nSuit #2: Neither have I but I feel ready now.', 'ED Aston', 1143280808)
    ,new Q('004174', 'You Can\'t Trust Those Damn Slags', 'Guy #1: I don\'t mind getting old; I love getting old.<br />\nGuy #2: Yeah, just as long as you don\'t get pregnant.', '', 1138759242)
  ])
  ,new S('Subway, 44th & 2nd', 40.75111, -73.97125, 15, [
    new Q('004804', 'Atlas\' Slutty Little Sister', 'Chick #1: Oh my god, that girl just opened her mouth so wide she could swallow the world.<br />\nChick #2: Seriously, I think she just swallowed me. And while I was in there, there were three children with me...and a lhasa apso.', '', 1143712831)
    ,new Q('004385', 'Call a Doctor, Wednesday One-liners!', 'Old man: Well, I mean, it\'s just your scrotum being stapled; it\'s not like it\'s actually going to go through your testicle.', 'Dave Katz', 1139450418)
  ])
  ,new S('Office, 84th & 3rd', 40.77748, -73.95495, 21, [
    new Q('005422', 'Hazing for The Voice', 'Coworker chick #1: Do you guys remember [Becky Thatcher]?<br />\nCoworker girl crowd: Yes!<br />\nCoworker chick #1: Well, I waited on her once!<br />\nCoworker chick #2: Yo, did you ask her why she burned down that float?', 'da sarkastik ninja<br />', 1147550432)
    ,new Q('004917', 'Wednesday One-liners Flick the Clicker', 'Chick: Can you do something productive and get us tickets to <em>The Maury Povich Show</em>?', 'da sarkastik ninja,', 1143626433)
    ,new Q('004415', 'I\'m Guessing It\'s the Egotism', 'Hipster guy: Last night my girlfriend called me Caligula.<br />\nChick: That\'s really scary, \'cause he was crazy and evil. Why did she call you Caligula? <br />\nHipster guy: I don\'t know. I mean, I guess I could understand if she was talking about his big cock.', 'da sarkastik ninja.', 1140530444)
    ,new Q('003745', 'Tuesday One-liners...Psyche!', 'WASP woman: I had a dream that I smoked with you. It was right after I got rejected from the CIA', 'sam g', 1134028826)
  ])
  ,new S('52nd & 6th', 40.76113, -73.97953, 16, [
    new Q('003919', 'Putting the Man Back in Mandarin', 'Guy #1: No, he\'s a draq queen not a trannie; he didn\'t get it cut off.<br />\nGuy #2: So then RuPaul must be the most famous drag queen ever, man...<br />\nGuy #1: Probably not.<br />\nGuy #2: Who, then? Like...Fu Manchu?', '', 1136599254)
    ,new Q('003502', 'Wednesday One-liners for the Mishpokhe', 'Guy on cell: Ha, ha. All I can think about is when you ate all those M&Ms and puked all over yourself. And now you\'re in charge of someone\'s life.', 'randy', 1132207237)
    ,new Q('003003', 'It\'s Oh So Quiet in Hanoi?', 'Guy #1: Yeah, Iceland has a small Southeast Asian population. Mostly Vietnamese.<br />\nGuy #2: Why?<br />\nGuy #1: I\'m not sure. <br />\nGuy #2: Maybe Vietnam was an Icelandic colony. <br />\nGuy #1: I really doubt it, idiot.', '', 1129341632)
  ])
  ,new S('86th & Broadway', 40.78826, -73.97642, 18, [
    new Q('005458', 'By That Measure, They\'re Both Hardcore', 'Yuppie tween #1: Avril is so hard core.<br />\nYuppie tween #2: Yeah, but Ashlee is way more rock than Avril.<br />\nYuppie tween #1: Avril is, like, ... woah!<br />\nYuppie tween #2: But Ashlee has black hair and sings about her life!<br />\nYuppie tween #1: Avril is so hard core that sometimes I have to plug my ears \'cause it\'s like, \"Avril, you are so hard core!\"', '', 1147780832)
    ,new Q('005108', 'Wednesday One-liners for the Old', 'Old lady: If you get in that cab, I\'ll hide your viagra <em>and</em> your teeth!', 'Amanda Fox', 1145448034)
    ,new Q('004656', 'They Meant What You Think', 'Little girl #1: That\'s a pooty.<br />\nLittle girl #2: My mom has one with gray hair.', 'DJ Cayenne', 1142575202)
  ])
  ,new S('7th & B', 40.72506, -73.98121, 1, [
    new Q('004526', 'Showered with Golden Sunshine', 'Chick: Today is such a good day; my class was cancelled, it\'s sunny, I\'m so relaxed.<br />\nGuy: Yeah, and I fucked the shit out of you.<br />\nChick: Yeah, I love you.', 'meme', 1141984812)
    ,new Q('003430', 'Isn\'t That Rich, Wednesday One-liners?', 'Teen girl: Well, not cool because his dad died, but cool because he got a lot of money.', 'Sarah Dell\'Orto', 1131559212)
  ])
  ,new S('6th Street & 2nd Avenue', 40.72739, -73.98855, 1, [
    new Q('004854', 'Wednesday One-liners Are for Boobs', 'Chick: I think I\'m going to be a lactation consultant.', '', 1143093646)
    ,new Q('004561', 'Wednesday One-liners for Fuck Machines', 'Girl: Yeah, and one time he asked me if we could just fuck without kissing.', '', 1140652837)
    ,new Q('002987', 'For Us', 'Guy #1: It\'s a morning-after pill.<br />\nGuy #2: For him or her?', '', 1129082407)
  ])
  ,new S('2nd Avenue between 7th & St Marks', 40.728275, -73.98791, 1, [
    new Q('003453', 'Because That\'s Where Babies Come From', 'Drunk girl #1: Oh my god, you have camel toe!<br />\nDrunk girl #2: Why are you looking at my pussy?', '', 1133085605)
  ])
  ,new S('Canal St', 40.71833, -74.00042, 6, [
    new Q('005635', 'Seems Pretty Obvious', 'Woman: She locked me in a dog crate and poured hot wax on me.<br />\nRandom passerby: What kind of sex is she having?', 'Casstom<br />', 1148968832)
  ])
  ,new S('77th between 2nd & 3rd', 40.772485, -73.95713, 21, [
    new Q('004111', 'Wednesday One-liners by Eve Ensler', 'Teen boy: You aren\'t pussy-whipped. She\'s your mother.', '', 1137045607)
    ,new Q('003435', 'Relationship Problems? Try Wednesday One-liners', 'Woman: The wedding is on Saturday. I doesn\'t matter if she loves him; just look at what he did for all of ex-wives. Every one of them is now better off...after him.', 'roger fay', 1131573637)
  ])
  ,new S('14th & 5th', 40.73599, -73.99362, 12, [
    new Q('006288', 'Start Smashing Judy Garland Records', 'Girl: How do I cross the parade?<br />Cop: Get in line with the rest of the straight people.', '', 1152554400)
    ,new Q('003749', 'Wednesday One-liners for the Family Gals', 'Girl: Hey, which one of you doesn\'t like incest again?', '', 1134000007)
    ,new Q('002958', 'It\'s Probably Because of Copyright Violations', 'A cop comes up, and the hobo says: I don\'t know why. I\'ve already had five police come by and bother me today.', 'Casey<br />', 1129003249)
  ])
  ,new S('Elevator, Broadway & Dey', 40.71042, -74.00947, 5, [
    new Q('004343', 'She Stole That Fox', 'Girl #1: Is that a real fur coat?<br />\nGirl #2: Yes, oh my god and this woman started yelling at me this morning. I was like, \"Please don\'t throw blood on me or something. I don\'t hate animals; I have a dog!\"<br />\nMan: Not around your neck.', '', 1139976057)
  ])
  ,new S('Office, 22nd & 5th', 40.74086, -73.99008, 13, [
    new Q('004187', 'Wednesday One-liners for Mr. Howell', 'Woman: Fine. But she lives in the land of cheap and pretty jewelry.', '', 1137585610)
  ])
  ,new S('Bowery & 2nd', 40.72561, -73.99201, 1, [
    new Q('004562', 'Wednesday One-liners Get Baked', 'Guy: Motherfucker called me a drug dealer, son, and I got <em>hot</em>. I slammed him up against the <em>fucking wall</em>. <em>I smoke pot</em>. I\'m not a drug dealer. Don\'t label me, son.', 'Craig Howe', 1140660024)
    ,new Q('003492', '...With a Side Order of Wednesday One-liners', 'Girl: You smell like sandwiches. I want to eat you.', '', 1132185605)
  ])
  ,new S('Dwight & Dikeman, Red Hook', 40.67478, -74.01056, -1, [
    new Q('005239', 'Hobos Just Can\'t Close', 'Realtor guy: Fck you, you just cost me a commission!', 'Paul J. Pinizzotto<br />', 1146268832)
  ])
  ,new S('67th & 5th', 40.76925, -73.9694, 21, [
    new Q('004702', 'Wednesday One-liners for Thanatos', 'Hipster guy: What if you woke up on morning and came outside and saw a man hanging on one of those bayonets above people\'s heads? Just some dead guy?', '', 1141869644)
  ])
  ,new S('Park Avenue', 40.76921, -73.96535, 21, [
    new Q('005894', 'Nah, She\'s Married to Seal', 'Guy: You\'re married, right?<br />\nWoman: Yes.<br />\nGuy: I\'m too black and ugly for you anyways, right?', 'Skid', 1150970432)
    ,new Q('005624', 'He Gave Her Directions off the Queensborough Bridge', 'Tourist lady: Ahem ... excuse me sir ... em .. Could you tell us how to get to Central Park from here?<br />\nDude: Sure, just take a left on 72nd and walk straight on.<br />\nTourist lady to husband: See, I told you New Yorkers aren\'t rude if you talk to them nice.<br />\nDude: I\'m from Idaho, ma\'am, I\'m just here for Memorial weekend.', 'Jason<br />', 1148896832)
  ])
  ,new S('Union Square', 40.735958, -73.99027, 13, [
    new Q('006379', 'Wednesday One-Liners Set the Bar Low and Then Step Over It', 'Friend: First you suspect he\'s a date rapist, and now you\'re worried he isn\'t going to call?', '', 1154527200)
    ,new Q('006179', 'Wednesday One-Liners Don\'t Fear the Reaper', 'Guy #1, to guy #2: I don\'t want you to freak out about this, man, but when I die I want you by my side.', '', 1153980000)
    ,new Q('006096', 'Wednesday One-Liners Make Mary Kate Heave', 'Girl on cell: So I woke up with a slice of pizza on my stomach again last night.', 'Frank B', 1152727200)
    ,new Q('005951', 'I Just Know Some Girls Who Would Be Mad If They Heard Me Say That', '<em>Metro New York</em> lady: Is your girlfriend coming today?<br />\n<em>AM New York </em>man: I ain\'t got none of those.', '', 1151359232)
    ,new Q('005964', 'West Virginia or Guantanamo', 'Sista #1: Looka there! A naked squirrel! Look like he got burnt or somebody shaved him down the middle.<br />\nSista #2: People be eatin\' squirrels now.<br />\nSista #1: Look like he have a mohawk.<br />\nSista #2: It\'s a little squirrel torture place somewhere. Somebody done that to him.<br />\nSista #1: It\'d have to be someone who was raised in the woods. Know how to handle a squirrel.', 'lost soul', 1151215232)
    ,new Q('005831', 'Wednesday One-liners, the Morning After', 'Chick: You told me you was a celebrity!  I sucked yo dick!', '', 1150308032)
    ,new Q('005795', 'Ginger Did Her Boyfriend', 'Singing hobo: Just sit right back and you\'ll hear a tale, a tale of a fateful trip --<br />\nGirl with a lot of rage: Shut the fck up! I hate that fcking show. <em>Gilligan\'s Island.</em> Fck you, man.', '', 1150056032)
    ,new Q('005739', 'Sure He\'s Happy -- He Slept with Two Girls This Week', 'Happy guy looks at two happy girls: Aah, look how happy they are! That is how it\'s supposed to be around here.<br />\nUnhappy guy looks at two happy girls: They look too happy, considering they\'ve probably contracted multiple STD\'s just this week.<br />\nHappy guy: So you\'re not happy today?', '', 1149667232)
    ,new Q('005655', 'Wednesday One-liners, Summer Makeover Special', 'Man on cell:  I love you baby, but I just can\'t be looking at your face everyday like that.', '', 1149120032)
    ,new Q('005655', 'Wednesday One-liners, Summer Makeover Special', 'Guy to friend:  She had that ugly-ass quality about her.', 'Sarah', 1149120032)
    ,new Q('005590', 'Guys Are So Hard to Please', 'Super thin model/actress on cell: Urrgghhh!!! Jonathan left me again [pause] I can\'t believe it. [pause] For being too anorexic! Yeah, I thought being anorexic would be hot but apparently I\'m now <em>too</em> anorexic.', 'benji<br />', 1148652032)
    ,new Q('005564', 'Wednesday One-liners Majored in Anthro', 'White girl: He really was the smallest black guy I\'ve ever fcked...and believe me, I\'ve fcked plenty of black guys.', '', 1148479232)
    ,new Q('005524', 'Go Call Somebody Who Has a Soul', 'Guy: You have to accept the lord Jesus Christ into your soul! The Gospel says that if you don\'t accept the lord, you will burn in hell!  Hear my words and heed my warnings! The lord will take vengance upon your defiance!<br />\nWoman: Here\'s a quarter! Shut the fck up!', 'Vicksburg<br />', 1148263232)
    ,new Q('005507', 'Shhh, She\'s Undercover', 'Woman: Are these Japanese dolls?<br />\nEmployee: Yes.<br />\nWoman: Oh, are you Japanese?<br />\nEmployee: No.<br />\nWoman: Are you sure?', '', 1148140832)
    ,new Q('005479', 'How About Gefilte Fish and a Halogen', 'Guy #1: So what should we get him for his birthday?                        <br />\nGuy #2: I don\'t know....what about a menorah?                              <br />\nGuy #1: What? But it\'s not Hannukah.                                       <br />\nGuy #2: Yeah, but he\'s Jewish. And his room is dark.', 'curious', 1147975232)
    ,new Q('005418', 'Why Shower When You Can Swiffer?', 'Dude: Is she a stripper?<br />\nGirl: I don\'t think so. Although she does hang around a lot of French people.<br />\nDude: What about the guy...is he French?<br />\nGirl: Must be. He smells like hardwood floors.', '', 1147521632)
    ,new Q('005313', 'Puerto Rican Girls, They Know How to Listen', 'Italian #1: So my buddy Max was telling he how how he hooked up with this Puerto Rican chick the other night and it was...<br />\nItalian #2: And it was the best sex he ever had, right?<br />\nItalian #1: Man, you alway fck up my stories by cutting in.<br />\nItalian #2: Fine, finish the story.<br />\nItalian #2: Fck you, you already wrecked it!', '', 1146808832)
    ,new Q('005206', 'Wednesday One-liners Up the Wazoo', 'Girl: They were just talking about how much they hated anal sex<br />\nlast week!', 'Maria V', 1146657632)
    ,new Q('005295', 'Wednesday One-Liners Are Ready for 2008', 'Little Girl: Mom, they just forgot about me... kind of like what Bush did!', '', 1146650432)
    ,new Q('005169', 'Can You Explain It to Me Using a Baseball Metaphor?', 'Chick #1: Ugh, he totally meatballed me.<br />\nChick #2: I <em>hate</em> that.', 'Mahlo Hawn<br />', 1145822432)
    ,new Q('005114', 'Wednesday One-liners for That Slither Lady', 'Teen boy: Why is my leg fat so fckin\' jiggly?', '', 1145476820)
    ,new Q('005046', 'Wednesday One-liners Are Hired', 'Suit: When you\'re 25 and you measure your hourly rate in three digits it takes a hell of a lot of grief to not make it worthwhile.', '', 1144879252)
    ,new Q('004922', 'Wednesday One-liners Love Their Mommy', 'Guy: I always know when I\'m home, \'cause my mom buys the expensive toilet paper.', 'Collin', 1143662427)
    ,new Q('004825', 'Three Months There is Pretty Dumb', 'Polish man: Her 3 bedroom apartment in Williamsburg is <em>empty</em> for <em>9 months</em> every year!<br />\nAmerican man: What am I missing here?<br />\nPolish man: She\'s an idiot!', '', 1143756001)
    ,new Q('004928', 'The NYC Sights of Wednesday One-liners', 'Girl on cell: No, I don\'t know what a gazebo is! She don\'t know what a gazebo is either! Yeah, just look for that thing that looks like a little house. We\'re right next to that.', '', 1143691230)
    ,new Q('004766', 'This One\'s for the Birds', 'Woman: Wait, aren\'t dinosaurs mammals?<br />\nMan: Um.  They\'re reptiles, honey.<br />\nWoman: Oh. Right.<br />\nMan: You have two master\'s degrees?<br />\nWoman: But not in lizardology!', 'djlindee', 1143367237)
    ,new Q('004848', 'Parve Wednesday One-liners', 'Woman on cell: ...That\'s just so not my thing. I am <em>not</em> that kind of Jew, Larry, okay?', 'Nicole', 1143021625)
    ,new Q('004774', 'Wednesday One-liners Speak Well English', 'Dude: Yeah, that guy thinks he\'s oblivious.', 'Tannen Printz', 1142445633)
    ,new Q('004703', 'Wednesday One-liners Belong in a Zoo', 'Lady: She always loved the ratboy best.', 'Keren', 1141876850)
    ,new Q('004632', 'Elsewhere: Wednesday One-liners', 'Dude: Ooh girl, you\'re gorgeous. I wanna take you to Miami and put you under a palm tree and do some cocaine.', 'rocky raccoon', 1141279236)
    ,new Q('004426', 'Jealous Doesn\'t Begin to Describe It', 'Chick: Are you Jon Lovitz? <br />\nJon Lovitz: Jealous?', '', 1140796843)
    ,new Q('004563', 'Clothes Make the Wednesday One-liners', 'Woman: You know, there is something to be said for dressing seasonally. Seasonably? Whatever. I mean, it\'s cool if you want to wear a tube top to the bar or whatever, but when girls are going out in these little tube tops, wear a jacket! You know? No outfit is cool unless you\'re comfortable in it. To a degree.', 'Nicole', 1140667250)
    ,new Q('004562', 'Wednesday One-liners Get Baked', 'Man: So you don\'t want to try the marijuana?...But you came all the way from Japan for the marijuana. Now you don\'t even want to try it?', 'Lila Byock', 1140660024)
    ,new Q('004561', 'Wednesday One-liners for Fuck Machines', 'Dude: I just, like, lost my virginity three times in that pillow fight.', 'Celeste Pietrusza', 1140652837)
    ,new Q('004492', 'Overheard in the Headlines: The Blizzard of \'06', 'Man: Aw geez, it\'s a winter freakin\' wonderland!', 'Manhattman', 1140184834)
    ,new Q('004367', 'His Dentist Was a Garbage Pail Kid', 'Dude #1: I didn\'t brush my tongue this morning.<br />\nDude #2: Yeah, I didn\'t have a cigarette.<br />\nDude #1: No, I saw a sign that said, \"Have you brushed your tongue today?\"<br />\nDude #3: No, you just have to go to the bathroom and throw up a little and then you\'ll be all set.', 'tanechka', 1140206452)
    ,new Q('004183', 'You Can Bid on eBaby', 'Grandma: Baby for sale! Baby for sale!<br />\nDad: Ma, don\'t do that!<br />\nGrandma: What? They know it\'s a joke!', 'Tina L', 1138888856)
    ,new Q('004316', 'A New High for Wednesday One-liners', 'Woman: Mmm, I smell some good weed...Never mind, I think it\'s just the shish kabob.', '', 1138860015)
    ,new Q('004308', 'Hamas Has Won Here, Too', 'Man: Is this kosher?<br />\nVendor guy: Um...there\'s kosher salt in the bacon.', '', 1138716015)
    ,new Q('004100', 'It\'s Like Being in Subway Purgatory', 'Guy: I can\'t believe I was cockblocked by the L train.', 'Chelsea Miller', 1138428044)
    ,new Q('004263', 'Wednesday One-liners Read InStyle', 'Guy on cell: Damn nigga, <em>no</em>! I seriously never even bought a CD, \'cept for blank ones to burn from a spindle. Yeah...Wal-Mart...I\'m a mufuckin\' pirate! I need a peg leg and an eyepatch an\' shit.', 'Jake Glazier', 1138255218)
    ,new Q('003560', 'Dr. King Must Have Been Dreaming', 'White guy: He just sucks so bad.<br />\nBlack guy: All black people suck.', 'Brian Minter', 1137405613)
    ,new Q('004107', 'Gimme Shelter, Wednesday One-liners', 'Hobo: Spare some change? Have any change to spare? Anyone? What, are you all playing communists tonight?', '', 1137009624)
    ,new Q('004105', 'Wednesday One-liners Are a Dumb Idea', 'Man: I couldn\'t watch it again. It was so redundant.', '', 1137002440)
    ,new Q('003970', 'Too Busy Defending Their Master\'s Thesis', 'Girl #1: I\'m cold.<br />\nGirl #2: Oh, shut up. What if you were homeless, then what would you do?<br />\nGirl #1: Kill myself.<br />\nGirl #2: Oh. Why don\'t they think of that?', 'Colleen', 1136937643)
    ,new Q('003935', 'My Anti-Drug? Being a Retard', 'Queer: So some stranger just approached me and asked me to fuck her and her husband on Staten Island...Wait, it was Ellis Island. Yeah, she wanted me to fuck with the Statue of Liberty.<br />\nHag: Oh, that\'s too bad. Staten Island is nice.', 'Tina L.', 1136851213)
    ,new Q('003933', 'The Grade Comes Nine Months Later (\"An F?\")', 'Guy: Wait, how\'s that work, exactly?<br />\nGirl: Well, you have sex according to the woman\'s menstrual cycle, you know, and you just don\'t have sex when she\'s ovulating.<br />\nGuy: Don\'t you have to take a health class or something to do that?', 'Katie', 1136836857)
    ,new Q('003882', 'Product Placement: Now in Loud Conversations', 'Dude #1: But I really want to go to Arabia.<br />\nDude #2: Nice.<br />\nDude #1: Like Iran or some shit like that...I want to do those Arabian countries.<br />\nDude #2: Ha! And have some Arabian night.<br />\nDude #1: Fuck, yeah. But shit, I really need some Diesel jeans.', 'buffy', 1136332807)
    ,new Q('003897', 'In the Mood for Wednesday One-liners', 'Woman on cell: Sometimes I just want him to take her and sodomize her!', '', 1135238436)
    ,new Q('003896', 'Wednesday One-liners for the Holidays', 'Hipster guy: I made a snow penis, but someone knocked it over.', 'Gena Radcliffe', 1135224025)
    ,new Q('003892', 'Wednesday One-liners Ignore the UHO', 'Wheelbo: Can anyone help me out? Anyone? Can anyone help me out with a hundred thousand dollars?', '', 1135195221)
    ,new Q('003892', 'Wednesday One-liners Ignore the UHO', 'UHO guy: Sir? Sir? I\'d rob you in a second.', '', 1135195221)
    ,new Q('003889', 'Wednesday One-liners for Chosen People', 'Girl: Are there Jew stars on my back?', '', 1135188041)
    ,new Q('003890', 'Wednesday One-liners Sit on It', 'Yuppie guy on cell: Deborah asked me, \"Do you remember anus?\"...No, anus...<em>anus</em>!', 'Mike U', 1135159202)
    ,new Q('003718', 'Sounds Like They Should Be Stand-ups', 'Promoter guy: Do you guys like comedy?<br />\nGirl #1: We hate laughter.<br />\nGirl #2: Sunshine and happiness too.', '', 1135065611)
    ,new Q('003689', 'Don\'t Ask Him How It\'s Hanging', 'Girl: Wow, look at all these vegetables and things.<br />\nGuy: Yeah.<br />\nGirl: This is great! We should come here all the time.<br />\nGuy: I think my testicles are falling off.', '', 1134846015)
    ,new Q('003674', 'I Guess She Works for Goldman', 'Girl #1: Man, it sure is cold.<br />\nGirl #2: Yes...but my insides are fiery...and cancerous.', 'Grace', 1134640857)
    ,new Q('003835', 'Barkers Hawk Wednesday One-liners', 'Flyers guy: That\'s right, ignore me. Don\'t take the flier. Stay true to New York.', 'Lee', 1134633648)
    ,new Q('003836', 'Wednesday One-liners Wetworks', 'Dude: ...so I realized that it was a lot harder to kill the guy when <br />\nthrowing the gun at him.', 'timothy leary', 1134626442)
    ,new Q('003834', 'Wednesday One-liners Don\'t Look So Hot', 'Lady: When you look in the mirror you should feel excited, not tolerant!', '', 1134619236)
    ,new Q('003830', 'Expecting Some Wednesday One-liners?', 'Girl: If a baby can come out of it, a king dong can go in it!', 'diana lee', 1134597602)
    ,new Q('003830', 'Expecting Some Wednesday One-liners?', 'Latina: Hurry up, you pregnant biot[e]ch!', 'MissPinkKate', 1134597602)
    ,new Q('003831', 'Wednesday One-liners Filled the Ark', 'Guy on cell: I heard her dad\'s hung like a camel, so you have no chance.', '', 1134590452)
    ,new Q('003635', 'New York Does Not Do Hyphenation, Douche', 'Guy: I\'m a NyLon.<br />\nGirl: A what?<br />\nGuy: A NyLon. New York-Londoner.<br />\nGirl: Oh, well, I\'m a NoInt.<br />\nGuy: NoInt?<br />\nGirl: Yeah, Not Interested.', 'Lucy Stone', 1134424836)
    ,new Q('003660', 'Heavenly Wednesday One-liners', 'Guy: Have you ever met God?...Gimme a pen and paper. Prepare to meet him.', 'deandra', 1133416812)
    ,new Q('003662', 'Wednesday One-liners Rifle Through the Trash', 'Hobo: <em>Hi ho, hi ho, it\'s off to work I go. To fuck this cock, to fuck this cock, hi ho.</em>', '', 1133402459)
    ,new Q('003657', 'Wednesday One-liners: The Hole', 'Guy on cell: Your cunnie woke me up last night...Well, we do live in shared space, these things happen!', '', 1133388045)
    ,new Q('003657', 'Wednesday One-liners: The Hole', 'Girl: You smell like pussy! Where have you been?', '', 1133388045)
    ,new Q('003656', 'A Pink Triangle of Wednesday One-liners', 'Queer: Oh my god! Do lesbians have Soccer Mom fantasies too?', '', 1133380834)
    ,new Q('003397', 'I\'m Thankful for My Friends', 'Girl #1: Is your sweater cashmere?<br />\nGirl #2: Yeah. Well, cashmere blend.<br />\nGirl #1: Blend? That doesn\'t count. God, you\'re such a bitch.', 'Kate Elizabeth Queram', 1132837251)
    ,new Q('003596', '...Butt It\'s Wednesday One-liners!', 'Girl: Oh, he\'s constant, all right. He\'s a constant asshole.', '', 1132783228)
    ,new Q('003492', '...With a Side Order of Wednesday One-liners', 'Guy on cell: Hi honey, what trendy little shithole will we be dining at tonight?', 'Judith Currin', 1132185605)
    ,new Q('003501', 'A Prescription of Wednesday One-liners', 'Scarlett Johansson on cell: It kinda looked swollen.', '', 1132178451)
    ,new Q('003306', 'He Kept Rubbing the Lamp in Public', 'Guy #1: I found my old Nintendo yesterday<br />\nGuy #2: Yo, remember Game Genie and shit?<br />\nHobo: I had a genie once.', 'Creighton', 1131753645)
    ,new Q('003436', 'Wednesday One-liners Wander New York', 'Hobo: Don\'t you people know? Vegetables are all made of sugar! They turn into sugar! Don\'t you know about diabetes? Obesity wasn\'t a problem in the 1950s!', 'Kelly', 1131580830)
    ,new Q('003436', 'Wednesday One-liners Wander New York', 'Hobo: Crack is right here! Faggots! All over, everywhere! 14th Street and Fifth Avenue, two homos, looking for boys!', '', 1131580830)
    ,new Q('003429', 'Wednesday One-liners: What Not to Wear', 'Woman: Either he\'s a jogger or he\'s homeless.', '', 1131530437)
    ,new Q('003146', 'It Would Be Like Actual Sex', 'Suit #1: ...I wasn\'t trying to make her mad or anything. I just want to know how she feels without it.<br />\nSuit #2: I hear you. I don\'t even know what sex without a condom would be like.', '', 1130493615)
    ,new Q('003274', 'Wednesday One-liners GOTTA MAKE', 'Queer: I haven\'t pooped in two days and I work at The Gap.', '', 1130335229)
    ,new Q('003277', 'Wednesday One-liners Belong in a Cage', 'Girl on cell: I\'m impartial to monkeys...', '', 1130356832)
    ,new Q('003277', 'Wednesday One-liners Belong in a Cage', 'Woman: I don\'t care <em>how</em> fucking amazing it is, it\'s a <em>mousetrap</em>. I don\'t need to see it.', '', 1130356832)
    ,new Q('003069', 'The Urban Statler and Waldorf', 'Black teen boy #1: What the hell is this?<br />\nBlack teen boy #2: What are you, stupid? This is what they call <br />\nmisinterpretive dancing.', '', 1129903221)
    ,new Q('003176', 'Wednesday One-liners Rough It Up', 'Fratboy on cell: That guy needs to get thumped, you should have him met your financial advisor...Yeah, I\'ll go to his house and smash his face for him with a sack of nickels.', '', 1129773616)
    ,new Q('003179', 'Will Wednesday One-liners Ever Find True Love?', 'Guy on cell: Yeah, I mean she\'s not easy to talk to, because, you know, she\'ll be like, \"What did you do this weekend?\" and I\'ll say, \"Nothing\", but really I was fucking some other girl.', '', 1129752046)
    ,new Q('003090', 'Wednesday One-liners Just Don\'t Understand', 'Guy on cell: Luke! I am your mother!', '', 1129147253)
    ,new Q('002941', 'A German Barbeque, to Be Precise', 'Suit #1: Smells like barbeque.<br />\nSuit #2: It\'s just us Jews.', '', 1128895223)
    ,new Q('002900', 'Good Thing This Isn\'t in a Frathouse', 'Flyer guy: Here.<br />\nChick: No thanks.<br />\nFlyer guy: No? What the fuck you mean, \"no\"?', '', 1128715248)
  ])
  ,new S('Astor Place', 40.72977, -73.991, 1, [
    new Q('006120', 'M4M Wednesday One-Liners', 'Teenager: Do you know where the Gay Pride Parade is?... I\'m not gay!', '', 1153317600)
    ,new Q('005871', 'It\'s All About the Facial Hair', 'Girl: But also Chuck Norris.<br />\nGuy: Well, that\'s a given.<br />\nGirl: I know, I just like saying his name.<br />\nGuy: Gives you a little rush?<br />\nGirl: You don\'t know the half of it.', 'Michelle', 1150574432)
    ,new Q('005817', 'If She Loves You, She Won\'t Mind Being Disowned', 'Guy #1 on cell: Hey it\'s me. Listen, I\'m about to walk into the subway, I\'m gonna lose you, I just wanted to tell you that my parents are gonna be there tonight, and I know you didn\'t want them to see your tattoos the first time they met you, so I wanted to tell you so you could...oh. Hi, Mrs. Goldstein.<br />\nGuy #1 to guy #2: FUCK! I cannot believe I just did that! Her mother had no idea she has tattoos.<br />\nGuy #2: I don\'t see the big deal, so she has tattoos, everyone has...wait, did you say her last name was Goldstein? I get it now.', '', 1150257632)
    ,new Q('005555', 'Wednesday One-liners Think They\'re All That', 'Guy on cell: She goes to school in Pittsburgh. She\'s second rate. We go to school in New York. We know who we are.', '', 1148536832)
    ,new Q('005291', 'Wednesday One-Liners, Exotic People and Places', 'Hipster on cell: You know who is really into that big time...the Portuguese. [pause] Yeah, there are too many Portuguese people in Rhode Island.', '', 1146700832)
    ,new Q('005290', 'Wednesday One-Liners Have an Announcement', 'Guy on cell: Well, dad...I\'m gay', 'Mathew Kennedy<br />', 1146693632)
    ,new Q('005115', 'Wednesday One-liners Already Miss QAF', 'Guy: No, no, no, they\'re not going to kill you. Mormons don\'t kill<br />\nhomosexuals. They don\'t kill people at all. They\'re really actually very patriotic and peaceful.', 'PK', 1145484053)
    ,new Q('005044', 'Wednesday One-liners Look Sharp', 'Girl: Whenever I see someone who looks sluttier than me, I think I\'m doing something wrong.', '', 1144864828)
    ,new Q('004868', 'JDate Just Crashed', 'Hobo: Hey baby, will you marry me? Wanna get married?<br />\nGirl: No thanks.<br />\nHobo: Will if you won\'t marry me, will you at least go on a date?<br />\nGirl: I guess I\'d be paying.', '', 1144195237)
    ,new Q('004627', 'Wednesday One-liners Go Potty', 'Guy on cell: No dude, this girl is <em>freaky</em>. Too freaky...She wanted me to pee in her mouth, man!...That\'s crazy! All white girls are freaks...Yeah! She asked me to <em>pee</em> in her <em>mouth</em>.', 'Celeste', 1141243223)
    ,new Q('004560', 'Wednesday One-liners Like Cans of Beans', 'Hobo: Uh oh, uh oh! You make a big doo-doo! It\'s okay. I make big doo-doos too.', 'Melissa Cole', 1140645642)
    ,new Q('004456', 'Wednesday One-liners Tip the Scales', 'Chick on cell: Great, now I\'m the fat sister!', 'Christina Wilson', 1140012045)
    ,new Q('004340', 'This Price Ain\'t Right', 'Woman: I\'ll give you one up the butt if you let me be a stay at home mom.<br />\nMan: Once for every year you stay home.<br />\nWoman: Once per child.<br />\nMan: Once for every two years, or I\'ll be the stay at home.<br />\nWoman: Fine.', '', 1139983210)
    ,new Q('004287', 'What a Cocky Shit', 'Teen boy #1: Yo, pussy!<br />\nTeen boy #2: You just called me a pussy? <br />\nTeen boy #1: You are what you eat!', 'Jenya', 1139572821)
    ,new Q('004266', 'Wednesday One-liners Build Up an Appetite', 'Girl: Ew! Ew! I work at McDonalds; they spit in all your food, I swear to God.', 'Lalaith', 1138233607)
    ,new Q('004193', 'Wednesday One-liners Start Spreading the Word', 'Girl: Stop turning it! It could fall over on you! And it\'s got points!', '', 1137643243)
    ,new Q('004107', 'Gimme Shelter, Wednesday One-liners', 'Drunk guy: I didn\'t realize fags could be homeless.', 'helen r.', 1137009624)
    ,new Q('004044', 'Wednesday One-liners by Onan', 'Woman on cell: Oh, shit...We <i>really</i> need to order more dildos.', 'Daniel', 1136440836)
    ,new Q('003957', 'An Assault of Wednesday One-liners', 'Man on cell: Whadda you mean, she bit you? She ain\'t got teeth! She <em>gummed</em> you.', 'tiffy l', 1135836030)
    ,new Q('003791', 'I\'m Creaming of a Pearly White Christmas', 'Girl: Jack, it\'s snowing!<br />\nGuy: That explains why I\'m hard...Sorry...Kiss me.<br />\nGirl: I hope it breaks off.', 'timothy leary', 1135461630)
    ,new Q('003833', 'Wednesday One-liners Hate Project Runway', 'Guy on cell: I\'m so excited! I just bought some Spider-Man pajamas!...No, they\'re not for me, they\'re for a little boy.', '', 1134604824)
    ,new Q('003478', 'We Prefer to Be Called Immigrants', 'Guy #1: I don\'t think aliens are aliens.<br />\nGuy #2: Oh no. Me neither.<br />\nGuy #1: I think aliens are just regular people who evolved a different way.<br />\nGuy #2: I have always believed that. Everyone knows that.', '', 1133193639)
    ,new Q('003194', 'Overheard in the Headlines', 'Man: My friend asked me if they were shooting a movie, and I said,<br />\n\"Yeah, it\'s called <em>Bombscare</em>.\"', '', 1129755633)
    ,new Q('002980', 'Yet They\'ll Still Blame the Media', 'Woman: So I asked him, \"How come I make 3 million dollars a year and you still don\'t want me?\" And he said, \"Because you are a fat fucking cow!\"', 'bogica', 1129557643)
  ])
  ,new S('69th & 2nd', 40.76687, -73.95978, 21, [
    new Q('003090', 'Wednesday One-liners Just Don\'t Understand', 'Mom: What are you crying for now? You got your manicure!', 'Dave A', 1129147253)
  ])
  ,new S('Washington Square South', 40.73029, -73.99809, 12, [
    new Q('004861', 'Cats Often Make Terrible Pets', 'Man: That\'s what she told me.<br />\nWoman: Wow! You know so much about a woman\'s cervix now!<br />\nMan: Yeah...She bit my neck the other night.<br />\nWoman: What?<br />\nMan: Yeah...I, like....she drinks a lot.', 'Renee B.', 1144144819)
    ,new Q('003746', 'Wednesday One-liners: It\'s All About Location', 'Guy on cell: I\'m at 39 1/2 Washington Square South...No, I\'m not shitting you, there is a 1/2...Of course I\'m sure, I\'m in the Village.', 'Ting', 1134014456)
    ,new Q('002962', 'They\'re Still Wearing Those Juicy Pants?', 'Girl #1: Ew...what\'s this spot on my pants?<br />\nGirl #2: Sperm?<br />\nGirl #1: God, I wish!', '', 1129305630)
  ])
  ,new S('6th between B & C', 40.723985, -73.98045, 1, [
    new Q('003883', 'He Works in the Irony Precinct', 'Guy: I thought you couldn\'t write diplomats tickets.<br />\nCop: You can write \'em, they just don\'t have to pay \'em!<br />\nGuy: Oh.<br />\nCop: Yeah. Fuck them!', '', 1136455208)
  ])
  ,new S('14th between 2nd & 3rd', 40.732805, -73.98606000000001, 1, [
    new Q('005115', 'Wednesday One-liners Already Miss QAF', 'Crazy guy: Don\'t worry about me, I\'m just a white dude standing here. I have a high VP position at my office with my boss who I slept with...who is male!', 'Zak Santucci', 1145484053)
    ,new Q('004554', 'Wednesday One-liners Face It', 'Guy on cell: So I said to him, \"Okay don\'t put it in my mouth, put it in my face.\"', '', 1140602440)
  ])
  ,new S('Von, Bleecker & Elizabeth', 40.72544, -73.99303, 12, [
    new Q('005875', 'I Bet It Was an HMO', 'Guy #1: So when I started telling him my feelings on the Iraq war, he rolled over to me in his wheelchair and started cursing me out. He was going on about his time in Vietnam and how there are things about war I\'ll never understand. <br />\nGuy #2: That sucks.<br />\nGuy #1: I was like, \"Whoa. You\'re my shrink! I\'m paying <em>you</em> to listen to <em>me</em>!\"<br />\nGuy #2: Seriously.<br />\nGuy #1: Well, at least the co-pay was only $15. But anyway, I\'m definitely not going back to him.', 'Blondie', 1150603232)
  ])
  ,new S('32nd between 6th & 7th', 40.749095, -73.99013, 0, [
    new Q('004995', 'Wednesday One-liners Bring It', 'Lady on cell: I\'ll tell her where I\'m going, so if I get murdered, they\'ll know where I am.', 'Adam Nathan', 1144288852)
  ])
  ,new S('80th & East End', 40.77106, -73.94759, 21, [
    new Q('003675', 'Those Sorority Chicks Are Real Skeletons', 'Girl: I haven\'t talked to her since she left for college. How is she?<br />\nGuy: I don\'t know, man...I haven\'t heard from her either, so I guess she\'s just, like, decaying or whatever.', 'Anne O.', 1134547208)
  ])
  ,new S('26th between Park & Madison', 40.742395, -73.985765, 2, [
    new Q('004632', 'Elsewhere: Wednesday One-liners', 'Dude: These guys, they\'re from Hungria.', 'Andrew Bonito', 1141279236)
  ])
  ,new S('75th & Amsterdam', 40.78055, -73.98022, 18, [
    new Q('004317', 'Wednesday One-liners Pay Roaming Fees', 'Guy: I\'m sick of that bitch telling me I have no messages.', '', 1138867232)
  ])
  ,new S('142nd & Convent', 40.82275, -73.94766, 22, [
    new Q('003291', 'I\'m More Offended That It\'s By Hamilton\'s House', 'Skateboy #2: Let\'s not make this into a rape thing, y\'know?', '', 1131638418)
  ])
  ,new S('157th & Broadway', 40.83426, -73.94521, 24, [
    new Q('005368', 'Is That a Promise?', 'Girl #1: I seriously love Barry Manilow. I\'m gonna get Barry Manilow to perform at my wedding.<br />\nGirl #2: No, he\'s gonna be dead by then.', '', 1147190432)
  ])
  ,new S('22nd & 9th', 40.74581, -74.00182, 0, [
    new Q('004225', 'No Steps, Either', 'Guy #2: Nice recovery.<br />\nGuy #1: Easier than rehab!', 'Ari Fleischer', 1139090424)
  ])
  ,new S('110th & Frederick Douglass', 40.80071, -73.95847, 18, [
    new Q('003279', 'Yum! Wednesday One-liners', 'Hipster chick: God I feel nauseous. All I\'ve had to eat this weekend has been coffee, secondhand smoke, and semen.', '', 1130371247)
  ])
  ,new S('Starbucks, 53rd & Park', 40.75902, -73.97254, 16, [
    new Q('004560', 'Wednesday One-liners Like Cans of Beans', 'Hobo: Please help me...Please help me...I need money to buy popcorn...Please help me...I need a hot meal...I need money to buy popcorn.', '', 1140645642)
    ,new Q('003772', 'Her Ears Must Be Huge', 'Chick #1: Where\'s [Suzy]?<br />\nChick #2: She\'s in Vegas.<br />\nChick #1: She is? How\'d she get there so fast?<br />\nChick #2: I dunno. She\'s fat. She can fly.', '', 1136498403)
  ])
  ,new S('JFK', 40.644959106244755, -73.78623962402344, -1, [
    new Q('005392', 'Wednesday One-Liners and Their Little Dogs, Too', 'Woman on cell: No, I don\'t have any plans! All right then, it\'s a date! But first I have to bond with my puppies. Notice how I didn\'t say my daughter.', 'The King', 1147334432)
    ,new Q('005307', 'Take Some Quinine. And Ritalin.', 'Girl #1: I don\'t feel well. <br />\nGirl #2: You look fine. <br />\nGirl #1: I think I have malaria.<br />\nGirl #2: I really don\'t think you do.<br />\nGirl #1: Do people get malaria in Nicaragua?<br />\nGirl #2: I don\'t know, I don\'t care, and furthermore, we were in Brazil.', '', 1146765632)
    ,new Q('005288', 'Them\'s Fightin\' Wednesday One-Liners', 'Indian guy on cell:  Shut up, you placenta.', '', 1146679232)
    ,new Q('005107', 'Wednesday One-liners for the Young', 'Woman: Your voice! It\'s just like my kids, I tune it right out.', 'Pimpin Dupree', 1145440800)
    ,new Q('004958', 'I Wonder How They\'ll Pass the Time', 'Latino: There\'s a six hour minimum wait for a SUV.<br />\nLatina: What?  <br />\nLatino: To get a SUV, it\'s a six hour minimum wait.  <br />\nLatina: What you mean, \"a six hour minimum\"?<br />\nLatino: If we want an SUV there is a six hour minimum wait!  <br />\nLatina: So we can only rent it for six hours?', 'Paul Ferris', 1144929606)
    ,new Q('004992', '50 States plus Wednesday One-liners', 'Mom: Indiana isn\'t a state; I\'m not sure it will be on there...<em>Oh</em>.', '', 1144281607)
    ,new Q('004589', 'There is No Future and England\'s Screaming', 'Little girl: What\'s London?<br />\nTeen girl: London is a country in Europe.<br />\nLittle girl: In Newark?', 'emily', 1141963215)
    ,new Q('004692', 'Wednesday One-liners for Sprint Ambassadors', 'Girl on cell: Normally when I doesn\'t answer my phone, 16 days in a row, it means I don\'t want to talk to you.', '', 1141812033)
    ,new Q('004501', 'The New Comeback to Anything, \'06', 'Woman: Um...excuse me...But...are you all right?<br />\nTeen boy: Juilliard audition!', 'Sydney M', 1141308006)
    ,new Q('004557', 'Chuck Woolery\'s Wednesday One-liners', 'Woman: Yeah, he cooked dinner for me. I thought, \"Finally a good nice sensitive guy.\" Until this Lolita shows up in the living room. \"Hey Dad, I\'m here for the weekend. Who\'s this?\"', 'Najlae Benmbarek', 1140624001)
    ,new Q('004301', 'Sara Lee Joins the War on Terror', 'Girl: Hey, where\'s my bag? Why hasn\'t my bag come through the machine? My other one did; did you have to rescan it or something?<br />\nTSA guy: Oh, don\'t worry. that\'s because we\'re keeping it in a 350 degree oven to get it warm and fluffy and then we\'re going to toast it to a nice golden brown.<br />\nGirl: What?', 'bre', 1139832001)
    ,new Q('004244', 'The Himmlers Are Alive', 'Teen girl: So they\'re like the von Trapps.<br />\nChick: If the von Trapps wore Homestar t-shirts and were Tunisian, then sure.<br />\nTeen girl: And hot.<br />\nChick: Yeah, the von Trapps did nothing for me in <em>The Sound of<br />\nMusic</em>. My mom\'s dog died the day that movie came out. I guess maybe subconsciously that has something to do with their not-hotness.<br />\nTeen girl: What about the Nazi thing?<br />\nChick: The von Trapps weren\'t Nazis, were they?', '', 1139356837)
    ,new Q('004261', 'Come on Down, Wednesday One-liners', 'Intercom: ...You are requested to be at your gate for your non-stop flight to JFK, New York.', 'smoon', 1138212014)
    ,new Q('003869', 'The Father of the Year 2005 Nominees', 'Mom: Who do you think is going to be waiting for you in your bed when you get home?<br />\nLittle boy: Daddy.<br />\nMom: No, I mean...Who do you think is going to be waiting and meowing when you see him?<br />\nLittle boy: Daddy.', '', 1136088036)
    ,new Q('003706', 'Atlas Winced', 'Girl: Where is Norfolk again? Virginia?<br />\nGuy: No, Long Island. Long Island forks into two parts, Norfolk and Suffolk.', 'miss n.', 1135036819)
    ,new Q('003696', 'I Can See Why Bill Had a Stroke', 'Wife: Bill can\'t fly because of the wheelchair. He can\'t get out of it.<br />\nHusband: Surely there are planes with wheelchair access. We should ask for him.<br />\nWife: Please, like he never asked himself? He just can\'t fly, ever.<br />\nHusband: That\'s not true. What do you think Teddy Roosevelt did when he wanted to go somewhere? He was in a wheelchair and he was the President so he had lots of places to go. Of course there had to be planes with wheelchair areas.<br />\nWife: Oh, I never thought of him. You\'re right. We should really tell Bill about that.', '', 1134748855)
    ,new Q('003745', 'Tuesday One-liners...Psyche!', 'White guy: I had a dream about Berlin. It was subtitled.', 'pixelvisions', 1134028826)
  ])
  ,new S('79th & Amsterdam', 40.78314, -73.97833, 18, [
    new Q('003476', 'Chelsea Takes a Trip North', 'Guy #1: You talk about cock more than girls I know who suck it every weekend.<br />\nGuy #2: Um, are you insinuating that I\'m gay?<br />\nGuy #1: I don\'t need to insinuwait anything.<br />\nGuy #3: You\'re both gay.<br />\nGuy #1: Suck my cock, bitch.', 'AChest', 1133172031)
  ])
  ,new S('36th & 7th', 40.75227, -73.9897, 17, [
    new Q('005190', 'The One Person Who Hasn\'t Seen the Bodies Exhibit', 'Guy #1: Man it\'s got to be the weather, \'cause I\'ve been crazy horny lately.<br />\nGuy #2: Yeah, chicks are a just as horny, only difference is our testicles hang on the outside of our bodies.', '', 1145908832)
    ,new Q('004192', 'May We Suggest Kiss From a Rose?', 'Woman: Yo, my cousin is going to be on <em>American Idol</em>.<br />\nGuy: Wow, she any good?<br />\nWoman: No, she\'s terrible, she sounds like a dying seal.', 'Brian', 1137679227)
  ])
  ,new S('Karma Bar, 3rd St & 1st Ave', 40.72458, -73.98749, 1, [
    new Q('005289', 'Wednesday One-Liners Like a Good Time', 'Chick: There\'s a fine line between \'mean\' and \'scoring free drinks.', 'djlindee', 1146686432)
    ,new Q('004779', 'Wednesday One-liners See No UHO Money', 'Hobo: Tell your boyfriend he don\'t gotta play lotto no more; he done hit the jackpot!', 'Sharon K', 1142467239)
  ])
  ,new S('Office, 53rd & 7th', 40.76296, -73.98193, 16, [
    new Q('005761', 'Her People Love Fashion at a Bargain', 'Older woman: Excuse me, miss?<br />\nYounger woman: Yeah?<br />\nOlder woman: Your veil, your burqa is very beautiful. I didn\'t know your people were allowed to wear it in bright colors.<br />\nYounger woman: It\'s not a burqa, it\'s a poncho. I\'m Jewish. It\'s for the rain. I got it at TJ Maxx.', 'Pam', 1149883232)
    ,new Q('004700', 'Wednesday One-liners Engage in Carnality', 'Woman: Actually, now that I think about it, I guess I\'ve had sex in both of the Sheratons.', '', 1141884051)
    ,new Q('004189', 'Wednesday One-liners Drop It Like It\'s Hot', 'Woman: When my son was born he was very hairy, so I had terrible heartburn.', 'Jim S', 1137578418)
    ,new Q('004110', 'Wednesday One-liners Need to Know', 'Office chick: I just found out what coke is!', '', 1137016850)
    ,new Q('003748', 'Wednesday One-liners Have Language Problems', 'Japanese woman: Dating in New York is easy. It\'s the getting married<br />\npart that\'s hard. Men don\'t want to get commission. I mean commitment. I hate English! And men.', 'Carol', 1133992814)
  ])
  ,new S('Broadway & Bleecker', 40.72652, -73.99585, 12, [
    new Q('005583', 'The New Crunch Marketing Strategy', 'Girl on cell: Seriously George, I gained twenty pounds while I was in LA, and now every black guy in the city can\'t stop talking to me about my ass!<br />\nGuy slowly driving by and waving out window: Oooh girl, you so fiiiine...you gorgeous.<br />\nGirl on cell: Jesus Christ! There\'s another one! I\'ve gotta call you back, I\'m going to the gym.', '', 1148616032)
    ,new Q('005091', 'So Very Many Roommates...', 'Hobo: Got a cigarette you can spare?...Give me a cigarette!<br />\nGirl #1: Hey, fuck you.<br />\nHobo: Yeah, fuck you too!<br />\nGirl #2: At least we have a home!<br />\nHobo: Yeah, I got a home too. In your mother\'s cunt, bitch!', 'Solanum', 1145325641)
    ,new Q('004850', 'Wednesday One-liners for Backdoor Beauties', 'Guy: Dude, I think I just farted on a model.', '', 1143043252)
    ,new Q('004561', 'Wednesday One-liners for Fuck Machines', 'Dude: Yo, I\'m tired of this shit. I ain\'t fuckin\' no girl behind no nigga\'s back....at least not that I know of.', '', 1140652837)
    ,new Q('004263', 'Wednesday One-liners Read InStyle', 'Hipster chick: I\'ll pay ya when we get back to the office. These pants are suede; I can\'t keep any money in the pockets. I put money in, and it slides right out.', 'The Rorster', 1138255218)
    ,new Q('003176', 'Wednesday One-liners Rough It Up', 'Man: ...so the cab driver slapped the lady on the ass.', 'jen', 1129773616)
    ,new Q('003094', 'I\'m Hungee for Wednesday One-liners', 'Chick on cell: I\'m <em>so</em> tired of hearing him talk about how great the Apple stock is doing. I bet those poor fucking farmers don\'t even see any of the profits.', '', 1129168856)
  ])
  ,new S('14th & 10th', 40.74208, -74.00819, 11, [
    new Q('003429', 'Wednesday One-liners: What Not to Wear', 'Chick: Oh my god [Flora], your pants are inside out. They\'re inside out because you were fucking [Eric] in the limo!', 'Kara Lindstrom', 1131530437)
  ])
  ,new S('W 65th St', 40.77403, -73.98465, 18, [
    new Q('005726', 'Bad Copies of Coach, Prada, Supernanny', 'Guy selling belts: Getcha belts here! Five dollahs! Belts! Only FIVE DOLLAHS!<br />\nTouristy man passes by with 10-year-old son.<br />\nGuy selling belts: Getcha belts to hitcha kids with! Talking to them don\'t work!', '', 1149516032)
  ])
  ,new S('Barnes & Noble, 17th & 5th', 40.73789, -73.99222, 13, [
    new Q('005399', 'But Bow Ties Are Back', 'Thug #1: Yo nigga, what are they wearing in the hood these days?<br />\nThug #2: Nigga, white on white is <em>out</em>!', '', 1147392032)
    ,new Q('003894', 'Wednesday One-liners Get Edumacated', 'Store chick: There\'s a guy looking for a novel. It\'s called <em>The Great Gatsby</em> by an author named Fitzgerald.', 'Bunk', 1135216846)
    ,new Q('003539', 'It\'s At Least 33% Different', 'Woman: The bargain discount...what is that?<br />\nCashier guy: It is 25% off.<br />\nWoman: 25% of what?<br />\nCashier guy: 25% off of the price on the book.<br />\nWoman: So it is 25% off of the sale price.<br />\nCashier guy: It\'s 25% off of the price listed on the back of the book.<br />\nWoman: So what is the sale?<br />\nCashier guy: It\'s 25% off the retail price.<br />\nWoman: So how is that a bargain?<br />\nCashier guy: You save 25%.<br />\nWoman: That\'s not a bargain!...The world has changed...', 'Tom T', 1133589642)
    ,new Q('003419', 'Choose Your Own Dating Adventure', 'Hag: I see her point, I think that\'s why I don\'t have a boyfriend either. I\'m just too high maintenence.<br />\nQueer: Ha! Girl, you are <em>not</em> high maintenance, you are just plain old needy.', 'Thirsty Violet', 1132912822)
  ])
  ,new S('76th & 2nd', 40.77138, -73.95648, 21, [
    new Q('004921', 'Wednesday One-liners Turn Up the Radio', 'Tween girl: The thing most people don\'t get about techno is, it\'s so emotional.', '', 1143655252)
  ])
  ,new S('Broadway & Spring', 40.723, -73.99881, 7, [
    new Q('005192', 'Finally, a Good Reason to Just Say No', 'Guy: Yo, I just tie it up with string and put it next to my nutsack.', 'teca<br />', 1145966432)
    ,new Q('004564', 'Wednesday One-liners Miss St. Elsewhere', 'Pretty boy: All right! Fine! So I gave you herpes! Now we <em>both</em> have herpes!', '', 1140674402)
    ,new Q('003993', 'Another Outburst and I\'ll Clear the Powder Room', 'Security guy: Ma\'am, please step into the back of the store.<br />\nChick: But why?<br />\nSecurity guy: Don\'t make this harder on yourself.<br />\nChick: But why?<br />\nShopgirl: They do make it harder on themselves, don\'t they?<br />\nChick: <em>Fuck you</em>!', '', 1137254419)
    ,new Q('003746', 'Wednesday One-liners: It\'s All About Location', 'Vendor guy: Hello, welcome to Starbucks! What can I get for you today?', 'bklynswhereitsat', 1134014456)
    ,new Q('003594', 'Wednesday One-liners Roll Up Dollars', 'Hipster girl on cell: Of course it\'s not laced...PCP is too expensive to lace!', '', 1132804825)
    ,new Q('003068', 'Man, Ben & Jerry Really Ran Out of Flavors', 'Salesguy #1: Dude, I think I smell or something...<br />\nSalesguy #2: You smell like the robust combination of onions and poop.', 'Jeeps', 1129917647)
  ])
  ,new S('Broadway & Franklin', 40.71746, -74.00353, 4, [
    new Q('003749', 'Wednesday One-liners for the Family Gals', 'Mom: Chad, stop doing tae kwon do on the street; there are people around.', 'call me the r', 1134000007)
  ])
  ,new S('96th & Lexington', 40.78585, -73.95094, 21, [
    new Q('004789', 'Popeye\'s Does the Voodoo Stuff', 'Teen girl #1: We\'re not going to KFC! Their food is, like, poison.<br />\nTeen girl #2: Yeah, they kill their chickens <em>alive</em>.', 'AG', 1143518456)
    ,new Q('003958', 'Conflict Fuels Wednesday One-liners', 'Chick on cell: So you\'re saying that if I don\'t like the lifestyle, I should move the fuck out!', 'Chris Lane', 1135843206)
    ,new Q('003275', 'Wednesday One-liners Prefer Metro', '<em>AMNewYork</em> guy: <em>AMNewYork</em>! Get your same shit, different fucking day newspaper! <em>AMNewYork</em>! Same shit! Different fucking day!', '', 1130342405)
  ])
  ,new S('40th & Broadway', 40.75432, -73.98688, 17, [
    new Q('004558', 'Wednesday One-liners for the Tots', 'Dude: For real, dog, all I\'m saying is that, she want to be with me, she gots to get rid of them kids. I ain\'t playing with no kids.', 'Brian', 1140631248)
  ])
  ,new S('Greenwich & West 12th', 40.73754, -74.0065, 11, [
    new Q('003166', 'My Sarcasmeter Just Exploded', 'Queer #1: I can\'t believe he wouldn\'t go out with me.<br />\nQueer #2: Well, he didn\'t think you could play the bongos.  And he was right.<br />\nQueer #1: I know, but it\'s not like I can\'t learn.<br />\nQueer #2: Oh God, you\'re giving me a boner.', '', 1130634054)
  ])
  ,new S('Canal & Lafayette', 40.71843, -74.00055, 6, [
    new Q('003671', 'That Must Have Been Some Orgy at the UN', 'Girl: God there are so many Chinos here. I hate Chinese people.<br />\nGuy: You\'re so dis...What do they call it? Racist! That\'s not a very good attribute to have, Christina.<br />\nGirl: The only people I like are Spanish people and white people.<br />\nGuy: I hope one day someone who\'s black and Chinese and...80 other races all mixed together bitchslaps you in the face!', 'nadja spiegelman', 1134835242)
  ])
  ,new S('59th & 5th', 40.76427, -73.97303, 16, [
    new Q('005584', 'Or Rue 57 Could Add an iPod Bar', 'Fashion queer #1: I wish the new Apple store sold food.<br />\nFashion queer #2: They should sell food --  then it would be, like, one-stop-shopping on our lunch hour.', 'Lubes<br />', 1148623232)
    ,new Q('005502', 'People From Upstate Love This', 'Cali girl #1: Where do you go again?<br />\nCornell girl: Cornell.<br />\nCali girl #2: Oh. Where is that?<br />\nCali girl #1: Oh my god, don\'t you know it\'s in New York?<br />\nCali girl #2: Umm no, you idiot, we\'re in New York and she said she just drove hours to get here.<br />\nCali girl #1: Oh right..I think it\'s in like.. the state that New York is in? New York state?<br />\nCornell girl: Yeah. Ithaca.<br />\nCali girl #1: Right right! Middle of nowhere, right? Shthaca!<br />\nCornell girl: Umm.', 'love cali girls<br />', 1148104832)
    ,new Q('005291', 'Wednesday One-Liners, Exotic People and Places', 'Guy to friend: Listen, he\'s Jamaican <em>and</em> he\'s not all there.', '', 1146700832)
    ,new Q('004096', 'That\'s What the Veterinarian Said', 'Girl #1: Ew, that horse is peeing.<br />\nGirl #2: Dude...that is a <em>shitload</em> of pee.', 'samuel', 1138111227)
    ,new Q('002949', 'Think of the Starving Baby Birds in Africa', 'Guy on cell: What were you saying?', 'Jeff Hubbard', 1129593628)
  ])
  ,new S('Starbucks, 48th & Lexington', 40.75523, -73.97328, 16, [
    new Q('004772', 'Wednesday One-liners Play for Pay', 'Store guy: See, my father and my uncle were pimps. And my grandfather and his father before him were assistant pimps.', 'abbey', 1142431223)
  ])
  ,new S('77th & Lexington', 40.77363, -73.95987, 21, [
    new Q('004995', 'Wednesday One-liners Bring It', 'Lady on cell: I didn\'t start the fight! Janet did! It was Janet! And she said that right in front of my <em>mother</em>! She\'s not human!', 'Collegiate Cutie', 1144288852)
    ,new Q('004181', 'Sir, Kim Cattrall is With Flaw', 'Guy #1: I met this girl, she was perfect.<br />\nGuy #2: Whaddya mean?<br />\nGuy #1: She was like a mannequin.<br />\nGuy #2: Interesting concept...', 'Jules Cattie', 1138881625)
    ,new Q('003830', 'Expecting Some Wednesday One-liners?', 'Chick on cell: Um, I don\'t really think that means your water broke.', 'Elle & Zoe', 1134597602)
  ])
  ,new S('64th & Park', 40.76599, -73.96743, 21, [
    new Q('003997', '\"Get the halal out of here!\"', 'Tween boy #1: Fine, fine. I\'ll buy you a BLT. How \'bout that?<br />\nTween boy #2: A BLT? I\'m Jewish, you idiot.<br />\nTween boy #1: Oh, whatever. I see you eat a BLT every day, liar.', 'Andrea C.', 1137297637)
  ])
  ,new S('1st & 1st', 40.7276, -73.98533, 1, [
    new Q('006123', 'Wednesday One-Liners Have a Combined IQ of Forty Eight', 'Early-20\'s woman: The Himalayas aren\'t a real place.  They\'re like Narnia.', '', 1152763200)
    ,new Q('004996', 'Wednesday One-liners Eat Wedding Cake', 'Girl on cell: She shouldn\'t be getting involved with any married man it\'s so fcking wrong, I don\'t care how bad the marriage is...Well, with you it\'s different because I hate the married guy you\'re with.', '', 1144310418)
    ,new Q('003750', 'Wednesday One-liners Are Stuffed', 'Hobo: You like chicken? I bet you\'d like chicken if you bought this bottle of barbeque sauce from me. Two dollars. I\'m trying to get my L.S.D... my Liquor Store Degree. I\'m a wino and I\'m trying to buy a bottle of wine....Hey, is this a Saab? I used to have one of these.', 'RITA', 1134007215)
    ,new Q('003167', 'Hipster or Homeless?', 'Guy: I\'m sick of these homeless hipsters. It\'s like, you\'re fucking <br />\n<em>hipsters</em>!', '', 1130720434)
    ,new Q('003115', 'Should Have Asked for Some Weed', 'Hobo: Hey dude, got a drink?<br />\nGuy: No, man. If I gave you a drink I\'d be enabling you. You know what that is? I\'ll be helping you by not getting you a drink.<br />\nHobo: You\'ve gotta be fucking kidding me.', 'Jasmine Moy', 1130212804)
  ])
  ,new S('West 3rd & LaGuardia', 40.72931, -73.99787, 12, [
    new Q('004105', 'Wednesday One-liners Are a Dumb Idea', 'Chick: I don\'t make fun of people who were born retarded. I make fun of people who were born, and <em>now</em> they\'re retarded.', 'Saaaza', 1137002440)
  ])
  ,new S('6th St, between 2nd & 3rd Ave', 40.72922, -73.994985, 12, [
    new Q('006184', 'Wednesday One-Liners Carry Razor Blades and a Mirror', 'Drunk guy, to his date: The reason I\'m buying all of this coke is so that we can fuck.', 'Danielle', 1153951200)
  ])
  ,new S('10th between 4th & Broadway', 40.801249999999996, -73.95222000000001, 22, [
    new Q('004190', 'Wednesday One-liners Aren\'t Quite Amiable', 'Woman: So your friend\'s an asshole. So what? You know why your friend\'s an asshole? Because you\'re an asshole.', '', 1137650458)
  ])
  ,new S('75th & Park', 40.77309, -73.96251, 21, [
    new Q('004693', 'Wednesday One-liners Like Balla', 'Guy: Oh my god, no art is worth this. I don\'t care if I get to blow Picasso, I\'m not waiting in this line.', '', 1141819208)
  ])
  ,new S('Lincoln Square Theater, 68th & Broadway', 40.77552, -73.9823, 18, [
    new Q('005417', 'Best with Lots of Butter', 'Chick:  I\'m going to get some popcorn.  Do you want anything to eat?<br />\nQueer:  Nah, no thanks.<br />\nChick:  So just my vajayjay then?  <br />\nQueer: Yep, thanks.', 'Jas<br />', 1147514432)
    ,new Q('003874', 'That\'s Why God Uses It as Punishment', 'Girl #1: ...It\'s so scary how time flies.<br />\nGirl #2: You know what\'s even scarier than that?<br />\nGirl #1: What?<br />\nGirl #2: AIDS.', 'Anne O.', 1136077243)
  ])
  ,new S('Lincoln Plaza Cinemas, 62nd & Broadway', 40.7706, -73.98227, 18, [
    new Q('004322', 'Because Nothing is Scarier Than Love', 'Old woman: You still don\'t have any Halloween candy, huh?<br />\nOld man: Valentine\'s Day. It\'s Valentine\'s Day candy! <em>Why do you keep calling it Halloween</em>?', 'Charlie Davidson', 1139925642)
    ,new Q('004383', 'Wednesday One-liners Are Ready for Valentine\'s', 'Chick: This is the last time I marry an ambassador!', '', 1139443231)
  ])
  ,new S('Mulberry St', 40.71577, -73.99942, 6, [
    new Q('005800', 'Some Things You Just Don\'t Say to a New Yorker', 'Tourist chick #1, whispering: Oh, gross. You ask.<br />\nTourist chick #2, whispering: No, you ask.<br />\nTourist chick #1: Excuse me, what kind of pizza is that?', 'i just wanted to eat my birthday lunch', 1150149632)
  ])
  ,new S('Doctor\'s Office, 12th between University & Fifth', 40.73429, -73.9937, 12, [
    new Q('004629', 'Wednesday One-liners Eat Churro', 'Teen boy: I quit that job. They treated me like I was a Mexican.', 'Todd', 1141257627)
  ])
  ,new S('Wascomat, 28th & 2nd', 40.74101, -73.97863, 27, [
    new Q('004268', 'Wednesday One-liners Wear Gross Sneakers', 'Hobo: Hey...I\'m gonna rob you...then I\'m gonna lick your twat!', '', 1138240805)
  ])
  ,new S('Park Place & Church', 40.71326, -74.00926, 5, [
    new Q('003777', 'We Agree with That Sentiment', 'Guy: Do you know that you have a cup of coffee on your roof?<br />\nDriver guy: Merry Christmas from Starbucks!', 'Dirt \"Chainsaw\" Dog', 1135504840)
  ])
  ,new S('68th & York', 40.76427, -73.95561, 21, [
    new Q('004333', '\"Yeah, and my mom married an alcoholic.\"', 'Guy: Dad, you had to see this broad; she must have been 200 to 250.<br />\nDad: Like you\'re some prize. You are 40, divorced, have 3 kids and live at home with your parents.', 'Anthony DiGangi', 1139904006)
  ])
  ,new S('13th Street & 9th Avenue', 40.74024, -74.00586, 11, [
    new Q('004318', 'Wednesday One-liners Move to the Big Apple', 'Girl: You know what gets on my nerves? These fucking cobblestones.', 'ray dan', 1138845622)
  ])
  ,new S('27th & 10th', 40.7502, -74.00235, 0, [
    new Q('005572', 'Wednesday One-liners, Minority Report', 'Very busy person: In class I start saying \"African American\" and then I\'m like, fck it, and I say \"black black black...\" I don\'t have time to be saying \"African American.\"', '', 1149753632)
    ,new Q('003427', 'Wednesday One-liners Call a Mohel', 'Dude: I saw that Hasidic Jew shit again today. That was ill.', 'BZ', 1131552044)
  ])
  ,new S('8th Street & 4th Avenue', 40.73003, -73.9911, 1, [
    new Q('003886', 'The Wednesday One-liners Welcome to NY', 'Guy on cell: No, straight up...Man, <em>fuck</em> 34th Street!', '', 1135173620)
    ,new Q('003429', 'Wednesday One-liners: What Not to Wear', 'Chick: ...but we <em>were</em> able to deduce that she was wearing nothing but a shawl!', '', 1131530437)
  ])
  ,new S('McDonalds, 71st & Broadway', 40.77786, -73.98199, 18, [
    new Q('004568', 'The Whig Party?', 'Little boy: Hurry up, hurry up, mommy! We don\'t want to be late for the party!<br />\nMom: Honey, there <em>is</em> no party to be late for.', 'Natasha', 1141999231)
    ,new Q('004070', 'Haggling, Haggling Hobos', 'Hobo: Y\'know what I\'d do if I was rich?<br />\nGirl: What?<br />\nHobo: Buy a Big Mac.<br />\nGirl: But you already have a Big Mac...<br />\nHobo: Oh, this is all theatrical. I only have a dollar...Can you spare some change?', 'Keesha Brown', 1138060850)
  ])
  ,new S('35th & Lexington', 40.74705, -73.97924, 3, [
    new Q('004467', 'Wednesday One-liners Belt It Out', 'Guy: It\'s good to like music. Wait, that came out really bad,', '', 1140062431)
  ])
  ,new S('Spring between Broadway & Crosby', 40.722815, -73.99839, 7, [
    new Q('003454', 'The Most Horrifying Sound in the Universe', 'Bike guy: Well why don\'t you shut up, bitch?<br />\nWoman: Whatever. <br />\nBike guy: I\'ll break my dick off in your mouth.', '', 1132689618)
  ])
  ,new S('86th & 2nd', 40.77787, -73.95175, 21, [
    new Q('006096', 'Wednesday One-Liners Make Mary Kate Heave', 'Teenage boy: I had frosted Cheerios for breakfast.  That\'s some heavy shit.', 'Madison Parks', 1152727200)
    ,new Q('005078', 'The Third Locksmith Finally Explained', 'Girl #1: Oh no, he didn\'t! He just texted me in <em>caps</em>!<br />\nGirl #2: Oh whatever, remember when you you used to caps everyone?<br />\nGirl #1: That was before I knew how to change out of caps lock.', '', 1145235650)
    ,new Q('004048', 'How Was Your Holiday, New York?', 'Chick: There are 3 things I hate about the holidays. One, people who become assholes for no reason. Two, people who become more emotional for no reason. And three, people who are both of the above.', 'Gwenn Levine', 1136462419)
    ,new Q('003662', 'Wednesday One-liners Rifle Through the Trash', 'Hobo: C\'mon, gimme a quarter. Pretty lady, gimme a quarter. Hey, you, Fat Albert, you gotta quarter? Nah...oh! Slim Shady over there, you know you got a quarter!', 'Mallory McMahon', 1133402459)
  ])
  ,new S('Times Square', 40.756587, -73.986118, 16, [
    new Q('006310', 'Wednesday One-Liners Teach Their Children Well', 'Tourist mom, to kids: Walk or die! Walk or die! Walk or die!', 'Scott', 1153965600)
    ,new Q('006107', 'Wednesday One-Liners Have Trouble Re-Folding the Map', 'Dude: Excuse me, is this Times Square?', 'Dumbfounded', 1153332000)
    ,new Q('006107', 'Wednesday One-Liners Have Trouble Re-Folding the Map', 'Tourist: Wait, are we in Manhattan or just New York?', 'betsy', 1153332000)
    ,new Q('006097', 'Wednesday One-Liners Hail from Simpler Lands', 'Tourist guy: Wow. I love this city. If New York had a cunt, I would eat it.', 'monzo', 1152698400)
    ,new Q('006092', 'Wednesday One-Liners Were Separated at Birth', 'Ghetto girl graduate: Ya\'ll wanna go to Red Lobstah or what?', 'Kaitlyn', 1152144000)
    ,new Q('005937', 'Watch What You Say -- They\'re Everywhere', 'Girl #1: But, like, why do all the gay guys have to be so hot?<br />\nGirl #2: I know. At least all the lesbians are ugly!', '', 1151049632)
    ,new Q('005780', 'A New York Welcome -- Blink, and You\'ll Miss It', 'Black girl: Hey white girl, where is the party?<br />\nWhite girl: What? We don\'t know.<br />\nHispanic girl #1: Y\'all know where all the parties are.<br />\nWhite girl: We are from Cali.<br />\nBlack and Hispanic girls: Ohhhhh.<br />\nLong pause.<br />\nBlack girl #1: Welcome.<br />\nBlack girl #2: What the fck are you, the welcome wagon?', '', 1149991232)
    ,new Q('005788', '80% of Divorces Start This Way', 'Man: Do you want fries?<br />\nWoman: No, I\'ll eat yours.', '', 1150041632)
    ,new Q('005656', 'Wednesday One-liners Should Stay on the Bus', 'Tourist guy: Lots of people, smells really bad... It\'s just like I always imagined.', 'Lauren', 1149148832)
    ,new Q('005609', 'Method Acting for Lost Audition', 'Teen on cell: So how do I get to your office? Wait, which way is east? Towards the river? What river? I\'M IN THE MIDDLE OF TIMES SQUARE, I DON\'T SEE A FUCKIN RIVER! WHAT DO YOU MEAN, ASK SOMEONE WHERE THE FUCKING RIVER IS? MANHATTAN\'S AN ISLAND, THERE\'S RIVER ALL OVER THE PLACE!', 'Ilysse Weisenfeld<br />', 1148788832)
    ,new Q('005390', 'Wednesday One-liners Make Great Role Models', 'Skinny white teenage boy, pointing to a T-shirt that says New York Fcking City: Yo mom. I want this shirt in the biggest size they have.', 'Allisa', 1147867232)
    ,new Q('005384', 'Wednesday One-Liners Love Entertainment Weekly', 'Tourist girl, Pointing at a set of glass windows:  Hey, isn\'t that where Carson Daly lives?', 'Max Bivona<br />', 1147284032)
    ,new Q('005369', 'He\'s Been Waiting Years to Say That', 'Man: Have you ever heard a man call his penis a gonzo?<br />\nGirl: No, but my boyfriend used to call his the Cookie Monster.<br />\nMan: Well, by the way you smell you should start calling your cooch Oscar the Grouch', 'FuzzyWuzzy<br />', 1147197632)
    ,new Q('005359', 'No, I\'m Whitney, You\'re Kevin', 'Tourist girl #1: You stand in front of me..and you stand in back of me.<br />\nTourist girl #2: Why?<br />\nTourist girl #1: You guys are my stab buffer.  I\'m just taking the necessary safety precautions.', '', 1147125632)
    ,new Q('005325', '...And How Did You Know?', 'Old, crazy-looking black dude: The problem, James, is that you\'re letting pride go to your head!<br />\nWhite college kid whose name probably isn\'t James: <em>Who are you?</em>', '', 1146895232)
    ,new Q('005179', 'The Smart Tourists Keep a Piece in Their Hair', 'Tourist #1: Where do you keep your wallet? <br />\nTourist #2: I don\'t, I keep my money in my hair. <br />\nTourist #3: I love how you two are talking about where you keep your money.', '', 1145872832)
    ,new Q('005175', 'MySpace Girl\'s Fave Spot: Madison Square Garden', 'Chick #1: What do you want to do now? <br />\nChick #2: I don\'t know. <br />\nChick #1: Well, why don\'t we go to Webster Hall? <br />\nChick #2: Where? <br />\nChick #1: Webster Hall... I was talking to this girl on MySpace and she said that Webster Hall is this upscale lounge. <br />\nChick #2: I could do with an upscale lounge.<br />\nChick #1: I agree, I\'m sick of these loud-ass clubs and sht.', 'Shen', 1145851232)
    ,new Q('005133', 'Ferlinghetti Dug Thin Mints', 'Hobo: ...and the cookies from the sky, you know, man?  All them cookies from the sky, like fckin\' meteors!<br />\nTourist girl: Look, Mom, it\'s a Beat poet!', '', 1145599232)
    ,new Q('005120', 'It\'s Like You Don\'t Even Know Me', 'Tourist #1: I recognize that accent! Where are you from?<br />\nTourist #2: Tennessee.<br />\nTourist #1: Really? I\'m from North Carolina!<br />\nTourist #2: Where\'s that?<br />\nTourist #1: Right next to Tennessee.', 'Victoria Spring<br />', 1145628032)
    ,new Q('004817', 'She\'s Blinded by That Bright Light', 'Old lady: Excuse me, where is the exit?<br />\nCop: Just follow the signs. <br />\nOld lady: I\'m following the signs and I don\'t know where I\'m going.', 'So K', 1143878421)
    ,new Q('004924', 'Wednesday One-liners Read Vogue', 'Guy: Well, you can wear whatever you like. As long as they\'re not, like, assless chaps like Dan was threatening to wear.', 'Frank I', 1143676838)
    ,new Q('004776', 'Wednesday One-liners Sport Beef Curtains', 'Guy: That\'s why people like me: for my vagina-cleansing properties.', '', 1142488809)
    ,new Q('004549', 'That\'s the Official New York Passport', 'Tourist lady: Wow, it\'s like a sea of people!<br />\nB&T guy: Welcome to the city that never sleeps!<br />\nNY woman: Fuck all of you.', 'Emily A', 1141711243)
    ,new Q('004626', 'Wednesday One-liners By the Book', 'L. Ron Hubtard: Hey, Carol, do we have the book in Hindi?', 'Kendall Barnes', 1141236049)
    ,new Q('004236', 'He\'s Taking Over Howard Hughes\' Old Job', 'Man: Hey, I finally got that promotion!<br />\nWoman: Oh my god, congratulations! High five!<br />\nMan: Don\'t touch me.', 'Aaliyah Leuschner', 1139166042)
    ,new Q('004129', 'Those Bastards Always Want to Know Things', 'Dude #1: What\'d that guy want?<br />\nDude #2: White guy wanted to know where the Kangol hat store was.<br />\nDude #1: <em>Him</em>?<br />\nDude #2: Yeah, must be from Jersey.', 'chris b.', 1138960836)
    ,new Q('004158', '\"And have the same name as my sister?\"', 'Chick #1: Girl, my feets is killin\' me. I\'s goin\' home, gettin\' in bed, put on the TV. I\'m done.<br />\nChick #2: Change your name to Saran, \'cause it\'s a wrap.', '', 1138518035)
    ,new Q('004151', 'Piccadilly Looks Different on TV', 'Tourist lady #1: Is this it?<br />\nTourist lady #2: I think this is it.<br />\nTourist lady #1: You\'d think they\'d have signs or something.<br />\nTourist lady #2: Yeah, this must be it, though.', '', 1138474826)
    ,new Q('004260', 'It\'s Not Looking Good, Wednesday One-liners', 'Artist guy: C\'mon honey, I\'ll draw your picture, make you look like Chewbacca.', '', 1138190426)
    ,new Q('004186', 'Wednesday One-liners Need an MRI', 'Chick: You have to watch out for those pre-cancerous lesions. You know, those can lead to cancer.', 'abigail', 1137600021)
    ,new Q('004028', 'He Needs Wasabi for His Sushi', 'Hobo: Hey, can you spare me something?<br />\nGirl: Like what?', 'subwayrat', 1137549639)
    ,new Q('004002', 'The Weather\'s Not Cold Enough', 'Tourist lady: Excuse me, how do I get to Battery Park?<br />\nMTA guy #1: Uh, Battery Park?<br />\nTourist lady: Yes, Battery Park.<br />\nMTA guy #1: Hmm, Battery Park. Battery Park. Yo, Battery Park? From here?<br />\nMTA guy #2: Battery Park?<br />\nTourist lady: Is this a union joke?', 'Brian W. Gottlock, Esq.', 1137492033)
    ,new Q('004108', 'The Shooting Death of Wednesday One-liners', 'Tourist mom: Do not touch any of these people; they\'ll pull out a gun and shoot you.', 'Karissa', 1137031250)
    ,new Q('003940', 'Twenty Drink Minimum', 'Promoter guy: Stand-up comedy! Are you interested in seeing some stand-up comedy tonight? Hey, I\'m asking you a question.<br />\nDude: Oh, no thanks.<br />\nPromoter guy: Oh, well, we also have stand-up misery.', 'Adam Robbins', 1136865633)
    ,new Q('003910', 'That\'s Not What the Milk Carton Says', 'Guy: You should let her get a picture with the Naked Cowboy.<br />\nDad: She\'s only six! She\'s not getting a picture with him.<br />\nLittle girl: Daddy? <em>I\'m six</em>?', '', 1136548805)
    ,new Q('003878', 'I Doubt It\'s for His Sake', 'Teen girl: What the fuck is a morning rubber? I\'ve got to get a morning rubber.<br />\nChick: God, you are such a virgin! You put a morning rubber on a morning glory, for God\'s sake.', 'Pi.', 1136534424)
    ,new Q('004047', 'Wednesday One-liners\' Scenes from The City', 'Mom: We\'re going where there\'s no people!', 'Lily', 1136426436)
    ,new Q('004047', 'Wednesday One-liners\' Scenes from The City', 'Girl: I think I would have liked this place better before when it had the real whores and druggies rather the current corporate whores and mindless drones.', '', 1136426436)
    ,new Q('003963', 'Wednesday One-liners, Clothing Optional', 'Girl on cell: Yeah..So I showed her the first set of photographs and she wasn\'t all that impressed...And then I showed her the second set and she was like \"wow\"...Yeah, yeah, that\'s right, the nude ones!', '', 1135821627)
    ,new Q('003803', 'She\'s More Like Blanche Devereaux Every Day', 'Queer: Who\'s up there?<br />\nWoman: Madonna.<br />\nQueer: Oh, well, I figured, obviously. I\'d recognize her back anywhere.', '', 1135735234)
    ,new Q('003803', 'She\'s More Like Blanche Devereaux Every Day', 'Queer: Oh my God, are they Voguing? That is <em>so</em> 1990.', '', 1135735234)
    ,new Q('003863', 'The Elves Call Her \"Iron Claus\"', 'Girl #1: What do you mean she fired you?<br />\nGirl #2: The bitch fired me.<br />\nGirl #1: You should write a story about her; she\'s fucked up and now you can show her.<br />\nGirl #2: I\'ve been writing a book about her since last Christmas.<br />\nGirl #1: Oh?<br />\nGirl #2: Yeah, I\'m pissed I\'m going to lose material filler now.', '', 1135645240)
    ,new Q('003888', 'Wednesday One-liners Are in Business', 'Guy: He should just go back to selling drugs in Colombia, forget about Wall Street.', '', 1135166452)
    ,new Q('003715', 'You Sure Can Catch Boogers', 'Guy: Can I help you?<br />\nWoman: You got boogers.<br />\nGuy: What?<br />\nWoman: You got boogers on your hand. I don\'t want it.<br />\nGuy: I got allergies.<br />\nWoman: Well, whatever it is, I don\'t want it!<br />\nGuy: You can\'t catch allergies...', 'Anton I', 1135044022)
    ,new Q('003835', 'Barkers Hawk Wednesday One-liners', 'Promoter guy: Tonight\'s show, get your tickets here! Get \'em here!  This job sucks! Get your tickets here!', '', 1134633648)
    ,new Q('003618', 'I\'ll Bring the Video Camera and Popcorn', 'Girl #1: So, I\'ve been thinking, I think I could be a lesbian. You know, get really really close with a girl. But I don\'t think I would want to hook up!<br />\nGirl #2: So...kinda like friends?<br />\nGirl #1: Oh yeah. I guess so.<br />\nGirl #3: So does that make us all lesbians?', 'Zoe Valen', 1134241224)
    ,new Q('003481', 'Cue Big Musical Finale', 'Tourist guy: Officer, what\'s happening?<br />\nCop guy: What\'s happening? Rush hour\'s happening!', '', 1133236813)
    ,new Q('003595', 'Wednesday One-liners Come Together', 'Dude: I am gonna marry the first girl that slips me a roofie.', '', 1132776044)
    ,new Q('003410', 'His Fangs Go in a Cup of Water by the Bed', 'Girl #1: What does the Pope wear when he like sleeps? Does he always wear the huge robe and tiny little hat?<br />\nGirl #2: Ha, ha! Wow, You just totally blew my mind.', 'Michelle Smith', 1132491657)
    ,new Q('003139', 'Same Applies for Judging Boyfriends', 'Woman: That one painting was gorgeous.<br />\nMan: Did you notice that no matter where you were in the room, his eyes were looking at you? That\'s how you can tell it\'s a great painting.', 'Jeff Scherer', 1131674431)
    ,new Q('003437', 'Attention Passengers: Wednesday One-liners', 'Announcement: Sir, sir, please do not take a dump on the platform.  Sir, please <em>do not</em> take a dump on the platform.', 'Queen Bee', 1131588046)
    ,new Q('003242', 'He Gained His Power from the Almighty Gosh', 'Hobo: Can you spare some change?...Fine, you 8th graders!<br />\nTween girl: Oh my gosh, he\'s psychic!', 'Amanda', 1131303610)
    ,new Q('003228', 'Hey, It\'s Kind of What They Came Here For', 'Southern woman: Excuse me, sir? We aren\'t from around here but could you tell me where Times Square is?<br />\nNY Man: Yeah, it\'s a bit uptown from here, you\'re lookin\' for 125th street. It\'ll say Harlem but don\'t let it throw you off.', 'Carl Krickmire', 1131148826)
    ,new Q('003348', 'Wednesday One-liners Heart Tracey Gold', 'Man on cell: Yeah, and then she blamed me for her eating disorder which is like...awesome.', 'bobby wellington', 1130947211)
    ,new Q('003189', 'Technically That Makes It a Gay Rape Snuff Film', 'Girl: Oh my god, you skullfucked a snowman? That definitely was porn!<br />\nGuy: It wasn\'t porn, it was art. I was covered in blue glitter.<br />\nGirl: Sweetie, that just makes it <em>gay</em> porn.', '', 1130839247)
    ,new Q('003174', 'Then You Should Be Reading This Site', 'Fliers guy: Here ladies--free comedy show.<br />\nTourist girl: No, thanks.<br />\nFliers guy: Come on. It\'s free.<br />\nTourist girl: Yeah, but, we don\'t like humor.', 'Ashley Gordon', 1130666422)
    ,new Q('003059', 'Because Mr. Cruise is Clearly Well Balanced', 'L. Ron Hubtard: Do you have stress?<br />\nMan: I live in New York, what the fuck do you think? \"<em>Do I have stress</em>?\" Fuck you.', 'ichi gami', 1129860017)
    ,new Q('003026', 'F--king with the Imports (NYC Short Stories)', 'Tourist lady: Does this A train go to Jamaica?<br />\nNY chick: The A train doesn\'t go to Jamaica.<br />\nTourist lady: Is this the A train?<br />\nNY chick: Yes.<br />\nTourist lady: And it goes to Jamaica?<br />\nNY chick: The A train does not go to Jamaica.<br />\nTourist lady: But I need the A train.<br />\nNY chick: This is it.<br />\nTourist lady: I need the A train to Jamaica.<br />\nNY chick: The A train does not...Oh forget it. This is your train, lady, get on!', 'Cat', 1129543219)
    ,new Q('003094', 'I\'m Hungee for Wednesday One-liners', 'Tourist lady: Are you sure this is the Empire State Building? I don\'t remember it having a cup of noodles on it.', 'Angela', 1129168856)
  ])
  ,new S('Daily Show studios, 51st & 11th', 40.76647, -73.99413, 14, [
    new Q('004485', 'This Cummerbund\'s Really Shitty', 'Guy: Why are you wearing tuxedo pants? <br />\nJon Stewart: I want to raise my baby formally. It\'s black tie in the<br />\nhouse.', 'Jess McGins', 1141149618)
  ])
  ,new S('Murray & West Broadway', 40.71305, -74.00724, 4, [
    new Q('003818', 'I Hate It When Mom and Dad Fight', 'Guy: Hey, if you\'re gonna pee you could at least find someone to clean it up. Did you hear me? If you\'re gonna urinate on the street, you could at least find someone to clean up after you!<br />\nHobo: How about you go fuck yourself, motherfucker? How about that?', 'Cait', 1135893645)
  ])
  ,new S('67th & Lexington', 40.76722, -73.96453, 21, [
    new Q('004990', 'Wednesday One-liners for Adoptionists', 'Girl: Your punishment is 12 rapes and a Hail Mary.', '', 1144274434)
  ])
  ,new S('Office, 42nd & Lexington', 40.75142, -73.97605, 16, [
    new Q('004603', 'Again With the Metrosexuals?', 'Paralegal chick #1: You have any plans for tonight?<br />\nParalegal chick #2: Yeah, I\'m going on a date with a girl I met online. <br />\nParalegal chick #1: Oh. I didn\'t know that you\'re a lesbian.<br />\nParalegal chick #2: I\'m not.', '', 1142082050)
    ,new Q('004560', 'Wednesday One-liners Like Cans of Beans', 'Hobo: Yeah, a couple of Jewish lawyers out to fuck the world...Shee-it.', 'Ronald A. Veenker', 1140645642)
  ])
  ,new S('Cosi, Broadway & 75th', 40.78106, -73.98142, 18, [
    new Q('004261', 'Come on Down, Wednesday One-liners', 'Mom: Quit fucking around on the sidewalk!', '', 1138212014)
    ,new Q('003280', 'The Riddler Presents: Wednesday One-liners', 'Lady on cell: Are you asking me if we are having sex tonight? Why do you want to know?', 'Oliver', 1130378458)
  ])
  ,new S('30th Pl & Thomson Ave, Long Island City', 40.7451, -73.93641, -1, [
    new Q('005506', 'Their Intergalactic Enforcement Program Is Top-Notch', 'College applicant: I want to learn how to shoot a gun.<br />\nAdmissions rep: Okay, well, we don\'t do that here -- it\'s a Criminal Justice college degree.<br />\nCollege applicant: But they told me I need to learn to shoot a gun. <br />\nAdmissions rep: Who\'s they?<br />\nCollege applicant: The aliens. You know, <em>them</em>.<br />\nAdmissions rep: I see. Well, maybe you should go to the CIA.', '', 1148133632)
  ])
  ,new S('Office, 53rd & Broadway', 40.76336, -73.98287, 16, [
    new Q('005041', 'Wednesday One-liners Tip One Back', 'Drunk guy: Peeing while you are drunk is like having a quarter of an orgasm.', '', 1144843246)
    ,new Q('004041', 'The Annunciation of Wednesday One-liners', 'Woman: It was so spiritual, like being in church or something. Not one of those judgmental going-to-hell Catholic churches, though. I mean a nice church.', '', 1136404850)
    ,new Q('003133', 'He Also Eats More Than They Do', 'PR girl #1: I love your outfit today!<br />\nPR girl #2: You know, I was walking down the street, and this homeless man in a box told me that \"Purple is the color of royalty.\"<br />\nPR girl #1: Don\'t joke about that. I could be joining him, if my apartment doesn\'t come through.<br />\nPR girl #2: At least he lives in Manhattan.', 'Roger Resnicoff', 1130457644)
  ])
  ,new S('58th between 8th & 9th', 40.76798, -73.983795, 14, [
    new Q('004269', 'Wednesday One-liners Assume', 'Latina: I don\'t feel guilty, I\'m just pissed that you take everything up the ass.', 'pstar', 1138226429)
    ,new Q('004067', 'When Her Burgundy Hair Was Wet', 'Woman: The color of the car is not burgundy; it\'s purple.<br />\nMan: No, I think it\'s burgundy.<br />\nWoman: No, it\'s purple. I should know what purple is, I used to have purple hair.<br />\nMan: ...You had purple hair?...When did you have purple hair?', '', 1137708051)
  ])
  ,new S('84th & Park', 40.77881, -73.95809, 21, [
    new Q('003058', 'Actually Sunday\'s the Day When God\'s Asleep', 'Father: You wanna go pee-pee here?<br />\nSon: No!<br />\nFather: C\'mon, I\'ll hold you up, you can go in the trash can.<br />\nSon: No! I don\'t wanna, they can see!<br />\nFather: Who? Oh, don\'t worry, it\'s not Sunday.', 'Gabriel Lombardi', 1129867225)
  ])
  ,new S('52nd & 3rd', 40.75706, -73.96985, 15, [
    new Q('005771', 'Jersey-Cute Is Blowout, French Tips, Clearly Implants', 'Girl #1: So my co-worker is kinda cute, kinda not. Like Jersey-cute. No offense.<br />\nGirl #2: Jersey cute? <br />\nGirl #1: Yeah, fake tan, big muscles, clearly injects.<br />\nGirl #2: Oh, you mean Guido cute!<br />\nGirl #1: Guido, yeah, that\'s the word I was looking for.', 'Just Walking', 1149933632)
  ])
  ,new S('46th & Broadway', 40.75869, -73.98534, 16, [
    new Q('004928', 'The NYC Sights of Wednesday One-liners', 'Tourist lady: Oh my god, it all looks so authentic.', 'Oscar Hallas', 1143691230)
    ,new Q('003799', 'I\'m Pretty Sure Vixen is Actually Lipstick', 'Guy: Hey look, it\'s fucking Rudolph. You gonna gimme a ride, Rudolph? You faggot.<br />\nLittle girl: Yeah, all reindeers are faggots. All reindeers are faggots, you faggot reindeer.', '', 1135450848)
    ,new Q('003066', 'That\'s Why He\'s Dr. Pepper', 'Girl: When we were younger, we totally took for granted the fun in playing Spin the Bottle...I would love to play now but it wouldn\'t be the same.<br />\nMan: Yeah, playing now would just end with an abortion two months later.<br />\nGirl: Ugh.', 'Jeff Rigby', 1129924804)
  ])
  ,new S('Starbucks, Crosby & Spring', 40.72263, -73.99797, 7, [
    new Q('004306', 'Year of the Jackass', 'Man: I have never seen so many chinks in one Starbucks in all my life.', 'Jas', 1138604406)
    ,new Q('003831', 'Wednesday One-liners Filled the Ark', 'Woman: It\'s going to end up with someone fucking a raccoon!', '', 1134590452)
  ])
  ,new S('43rd & 8th', 40.75791, -73.98931, 16, [
    new Q('006116', 'Wednesday One-Liners Are Potty Trained', 'Hurrying lady: ...and a urinal cake is worth fifteen points.', 'Casper', 1153958400)
    ,new Q('004921', 'Wednesday One-liners Turn Up the Radio', 'Girl: Oh, please. He\'s been on my shit list since \"You Remind Me of My Jeep\". Remember that?', 'Michelle Pujols', 1143655252)
    ,new Q('004647', 'Yeah, Cops Don\'t Need to Apologize', 'Man: Want to \"hang out\"? I have a six pack. <br />\nGirl: Uh...no. I am at work. I can\'t hang out now.<br />\nMan: I am not a cop...Baby, I shouldn\'t have said that. Sorry.', 'Katie LaGreca', 1142373650)
    ,new Q('003735', 'His Mom Throws Up in There', 'Man #1: Eli has got some issues, some hair issues.<br />\nMan #2: Yeah, they used to call him an overretarded baby bird; now they just call him the bird\'s nest.', 'Stephie Russell', 1136311218)
    ,new Q('003092', 'Wednesday One-liners v. The DEA', 'Guy on cell: ...and I ain\'t had no one to buy weed from, and that\'s what got me started on my rehabilitation. \'Cause I ain\'t had nowhere to get weed.', '', 1129154409)
  ])
  ,new S('6th between A & B', 40.724965, -73.98279500000001, 1, [
    new Q('004632', 'Elsewhere: Wednesday One-liners', 'Girl: I\'m afraid of pit bulls, so I moved to Santa Fe.', 'edward bottger', 1141279236)
  ])
  ,new S('47th & Avenue of the Americas', 40.75801, -73.98181, 16, [
    new Q('005464', 'If It Is a Good Morning...Which I Doubt', 'Man on cell: Good morning! How are you? <br />\nMan: Tell me the bad news...<br />\nMan: No, really... Tell me the bad news <br />\nMan: You\'re PREGNANT? How did that happen?<br />\nMan: I know how it happened...but I mean...I thought you were on the pill! <br />\nMan: Well, what are we going to do about this? [pause] I can\'t have a kid with you. [pause] I\'M MARRIED!', 'Cynthia Frawley<br />', 1147838432)
    ,new Q('004261', 'Come on Down, Wednesday One-liners', 'Woman: Red fist. Can\'t go.', 'jenny tobias', 1138212014)
  ])
  ,new S('Mama\'s Pizza, 106th & Amsterdam', 40.80042, -73.96573, 18, [
    new Q('005559', 'Wednesday One-liners Have Cool Spiny Backs and Tiny Tiny Brains', 'Woman: That movie\'s so stupid!  They got King Kong and the dinosaurs fighting even though they are from different centuries.', 'Kyle T', 1148515232)
  ])
  ,new S('77th & 1st', 40.77102, -73.95363, 21, [
    new Q('006179', 'Wednesday One-Liners Don\'t Fear the Reaper', 'Little Boy: Mommy, mommy! Guess what I dreamt about last night? I dreamt I was dead!', 'Fruit Salad', 1153980000)
    ,new Q('003896', 'Wednesday One-liners for the Holidays', 'Girl on cell: So how\'s the girlfriend you\'re gonna dump because it\'s Christmas?', '', 1135224025)
    ,new Q('003527', 'Oddly Enough, Using Windows', 'Guy #1: I told you I wanted a pineapple.<br />\nGuy #2: It\'s November.<br />\nGuy #1: And?<br />\nHobo: Pineapple <em>and</em> coconuts are made from computers. And you can tell!', 'Big Z', 1133330410)
  ])
  ,new S('Museum of Natural History', 40.781093865387405, -73.97326469421387, 18, [
    new Q('004827', 'Yeah, Famous Like...Um...', 'Chick: I know you\'ll think I\'m crazy, but I just don\'t believe that dinosaurs ever existed.<br />\nGuy: <em>What</em>? Well, where do you think those dinosaur bones come from?<br />\nChick: People just make them and put them in the ground and then dig them up so they will be famous.<br />\nGuy: I can\'t believe you\'re serious.', 'Kathie Samuelson', 1144332009)
    ,new Q('004212', 'The Traumatizing Origin of Blender Barbie', 'Mother: I\'m pretty thirsty, honey. Are you thirsty?<br />\nLittle girl: I\'m not thirsty. I\'m thirsty for toys!', '', 1138924823)
    ,new Q('004196', 'The Wednesday One-liners Brain Trust', 'Teen boy: Dinosaurs are so stupid!', 'Gena', 1137636008)
    ,new Q('003749', 'Wednesday One-liners for the Family Gals', 'Little girl: I don\'t like this place! I don\'t like this place! I want to go home!', '', 1134000007)
    ,new Q('003524', 'They Should See the Unnatural History Museum', 'Guy #1: Look at that. His front arms are so small.<br />\nGuy #2: Why do you think he looks so angry? He couldn\'t whack off.', 'Corey F', 1133481628)
    ,new Q('003427', 'Wednesday One-liners Call a Mohel', 'Old Jew: Of all places in the desert for Moses to put down his staff, he had to choose Israel: the only part without any oil. Any place else, and the Jews coulda been rich.', '', 1131552044)
  ])
  ,new S('26th between 5th & 6th', 40.74411, -73.98981, 0, [
    new Q('004997', 'It Reeks of Wednesday One-liners', 'Woman: I put on my deodorant and a minute later I realized I had rubbed Icy Hot into my armpits.', 'Danny Klau', 1144296004)
  ])
  ,new S('Grand & Lewis', 40.71397, -73.97998, 6, [
    new Q('004462', 'Wednesday One-liners Give Bad Gifts', 'Girl on cell: Listen to this: On Thanksgiving she gave us all copies of <em>A Million Little Pieces</em>. On Christmas we all got books about alcoholism.', 'The Moth', 1140069658)
  ])
  ,new S('110th & Broadway', 40.80419, -73.96682, 18, [
    new Q('005280', 'Layoffs at Willie Wonka\'s', 'Mom: God! What\'s with you and candy?  You already had two bars today and now you want two more?  Why don\'t you buy your own candy?  Why do I always have to buy your candy? Get a job, for Christ\'s sake!!', '', 1146592832)
    ,new Q('005251', 'But Where Can I Buy a Man at This Time of Night?', 'Woman holding flowers: How much are these?<br />\nVendor: Eight dollars.<br />\nWoman: Eight dollars? That is ridiculous!<br />\nVendor: Well maybe you should stop buying yourself flowers and get a man to buy them for you.', 'Fatty McFingers<br />', 1146391231)
    ,new Q('004990', 'Wednesday One-liners for Adoptionists', 'Old man: Beware of the Christian rednecks! They\'re everywhere! And they\'re all <em>white</em>!', 'notchy', 1144274434)
    ,new Q('004927', 'The Wednesday One-liners K-Hole', 'Girl: I don\'t like anything snow-like. Except maybe cocaine.', 'djlindee', 1143784837)
    ,new Q('004855', 'Wednesday One-liners by Peter', 'Girl: It\'s like, \"Well, it\'s the end of the night, I guess I\'ll put this in my mouth instead of a penis.\"', '', 1143086433)
    ,new Q('004384', 'The Oldest Wednesday One-liners Profession', 'Chick: I put the \"ho\" in \"tough road to hoe\"!', 'djlindee', 1139472049)
    ,new Q('003758', 'Humiliating the Indigent: Priceless?', 'Hobo: Do you have the time?<br />\nGuy: Yeah, it\'s 2:30ish<br />\nHobo: Can you spare some change?<br />\nGuy: I told you the time, and time is money.', '', 1136512810)
    ,new Q('003450', 'He Kept Uploading from His Floppy', 'Guy: I really don\'t watch that much porn.<br />\nChick: I woke up in the middle of the night that one time, and you were totally sitting in your desk chair watching porn!<br />\nGuy: I was just switching files between hard drives and I wanted to make sure the porn file still worked.', 'djlindee', 1133128811)
    ,new Q('003391', 'I\'m Thankful I\'m a New Yorker', 'Queer: No, thanks.<br />\nFlyers woman: You\'re a faggot.<br />\nQueer: Fuck you, you fucking piece of trash skank bitch. Why don\'t you wipe off your clown makeup, get some acutane, and find a real job? Fucking bitch.', '', 1132869618)
    ,new Q('003176', 'Wednesday One-liners Rough It Up', 'Old man on cell: You\'re an evil and dangerous person! You can\'t get away with that! I\'m going to get you!', 'Didi', 1129773616)
  ])
  ,new S('Mulberry & Grand', 40.71931, -73.99732, 10, [
    new Q('003348', 'Wednesday One-liners Heart Tracey Gold', 'Girl: You know, braces make you lose weight, \'cause you can\'t eat as much. Aren\'t you excited?', 'Kelly Daniel', 1130947211)
  ])
  ,new S('Bravo Pizza, 5th between 19th & 20th', 40.73936, -73.99116000000001, 13, [
    new Q('004334', 'The Chunky Soup was Confusing Enough', 'Dude: Does that come with a meal?<br />\nPasta guy: It is a meal.', 'Animal', 1139868024)
    ,new Q('004196', 'The Wednesday One-liners Brain Trust', 'Guy on cell: I\'ll have to call you back from a landline, can you give me the number? Uh huh...uh huh...uh huh...you know what? I don\'t have a pen to write this down, does it spell anything?', 'Echo', 1137636008)
  ])
  ,new S('57th & 6th', 40.7643, -73.97721, 16, [
    new Q('005931', 'Ever Since They Stopped Using Asbestos in Beanie Babies', 'White guy: FAO Schwarz used to be a fun place to hang out.<br />\nBlack guy: Yeah.<br />\nWhite guy: They\'ve changed it, though. It doesn\'t smell the same.', 'Mark F.', 1150992032)
    ,new Q('003702', 'Everything Seems to Happen to Him', 'Counter lady: \'Cause they look and talk like a woman, sometimes more than a woman! They be taking pills, shots...gives \'em a voice like a woman. I don\'t want you getting in something. You might kill somebody finding out it\'s not a woman.<br />\nFloor guy: Yeah, right.<br />\nCounter lady: Don\'t be saying that can\'t happen. It happened to a friend of my girlfriend\'s boyfriend.', '', 1134784809)
    ,new Q('003745', 'Tuesday One-liners...Psyche!', 'Crazy woman: Lady, I don\'t know why you keep talking to me, you look like a prostitute.', '', 1134028826)
    ,new Q('003503', 'Maybe He Just Likes Eating Out', 'JAP #1: It\'s like, I don\'t know if I\'m that into him, but I could use a nice meal.<br />\nJAP #2: Is he into you?<br />\nJAP #1: I don\'t know, he\'s like, \"Let\'s do dinner and...whatever.\"', '', 1133776852)
    ,new Q('003662', 'Wednesday One-liners Rifle Through the Trash', 'Yarmulke hobo: Who wants to take the day off work, take me home and cuddle? Why go to work when you can cuddle with me?', 'Katie C', 1133402459)
    ,new Q('003320', 'Which Apparently Comes Maple Syrup', 'Girl: Oh my god, what is that smell?<br />\nBoy: Yeah, what is that?<br />\nHobo fort: It\'s my big fat cock!', '', 1130623234)
  ])
  ,new S('79th between 2nd & 3rd', 40.7738, -73.956175, 21, [
    new Q('005741', 'Wednesday One-liners Deserve Each Other', 'Prissy girl on cell phone: Do you think I should call him? I don\'t think he\'d talk to me after all of the sht I\'ve pulled.', 'Phipmode', 1149681632)
  ])
  ,new S('79th & York', 40.77138, -73.95042, 21, [
    new Q('004562', 'Wednesday One-liners Get Baked', 'Woman: So...he got high on furniture?', '', 1140660024)
    ,new Q('004186', 'Wednesday One-liners Need an MRI', 'Guy on cell: So I had to go to the doctor to take care of my excessive earwax problem.', '', 1137600021)
  ])
  ,new S('Shakespeare & Co., 69th & Lexington', 40.76847, -73.96362, 21, [
    new Q('004947', 'She Knows What \"Wishful Thinking\" Means', 'Girl #1: I despise books about political science.<br />\nGirl #2: I just despise books.<br />\nGirl #1: You know, if I paid attention in class, I would know what, like, half these words meant.', '', 1144800009)
  ])
  ,new S('29th & 3rd', 40.74257, -73.9804, 27, [
    new Q('003628', 'It Must Be Different in Retard Years', 'Girl #1: Wait, how old was he?<br />\nGirl #2: He\'s 26.<br />\nGirl #1: Oh, I thought he was in his 20s.<br />\nGirl #2: Uh, yeah, he\'s 26.<br />\nGirl #1: Oh...', 'Zohra Chagany', 1134284458)
  ])
  ,new S('Bowery & Delancey', 40.72036, -73.99394, 8, [
    new Q('004142', 'He Obviously Doesn\'t Believe in Disco', 'Tourist guy: Why do the buildings in New York have water tanks on the<br />\nroofs? <br />\nCop guy: I don\'t know...maybe they knock it over if the building<br />\ngoes up in flames.', '', 1138384800)
  ])
  ,new S('Washington & Little West 12th', 40.74028, -74.00796, 11, [
    new Q('004771', 'One-liners Are Due on Wednesday', 'Bouncer: She doesn\'t have an ID, but she\'s pregnant. Can I let her in?', 'Betsy', 1142424039)
    ,new Q('003596', '...Butt It\'s Wednesday One-liners!', 'Drunk guy: I just got finger-blasted in the asshole by a dude, and that\'s the bottom line.', '', 1132783228)
  ])
  ,new S('14th between 7th & 8th', 40.73914499999999, -74.00111000000001, 11, [
    new Q('005042', 'Wednesday One-liners Cook the Afterbirth', 'Woman on cell: No, I mean, whatever. I cried for that baby when it died and all. Sht! I even went to its funeral and the damn thing wasn\'t even born! Who the fck has a funeral for a baby that wasn\'t even born?...Whatever, that\'s not the point. The point is, I\'m sure as hell not going to a birthday party for a baby whose funeral I went to a year ago. That is fcking morbid...and they had better not be expecting presents.', '', 1144850450)
  ])
  ,new S('16th between 5th & 6th', 40.737989999999996, -73.994265, 13, [
    new Q('003281', 'Wednesday One-liners Need a Planner', 'Girl on cell: So, I think I\'m going to get married next week...Yeah, I don\'t know. Tuesday, probably.', '', 1130385644)
  ])
  ,new S('181st between Broadway & Fort Washington', 40.850545, -73.93703500000001, 24, [
    new Q('004629', 'Wednesday One-liners Eat Churro', 'Girl: I don\'t know what you want from me...I don\'t dance and I don\'t speak Spanish.', '', 1141257627)
  ])
  ,new S('Wall Street', 40.70536, -74.00763, 5, [
    new Q('005247', 'Actually, I\'ll Be Driving. You\'ll Be Walking.', 'Guy #1: I know, I need to get my license.<br />\nGuy #2: Son, I\'m telling you when you get that sht you\'ll be walking along like you are King Jafee-Jafee of Zamundo.', 'Matthew Innes <br />', 1146369632)
  ])
  ,new S('50th & 8th', 40.76228, -73.98614, 16, [
    new Q('006178', 'Wednesday One-Liners Gone Wild', '18-year-old Asian girl: My parents just don\'t know me anymore, you know? I\'ve changed my last year in New York, you know? Like, I\'ve had sex with a lot of people.', '', 1152748800)
    ,new Q('004497', 'Test Some in a Kid First', 'Man: She needs to be <em>on</em> something.<br />\nWoman: She is; haven\'t you seen all the medicine bottles on her desk?<br />\nMan: She\'s got medicine on her desk? Let\'s go get some.', 'Jelly Bean', 1141185639)
    ,new Q('003901', 'Remember That Whole Strike Thing?', 'White guy on cell: Talk quickly. I only have 29 more blocks until I\'m home.', '', 1135303233)
    ,new Q('003661', 'Wednesday One-liners Watch Too Much TV', 'Guy on cell:  I gonna watch that with a fucking can of Vaseline, playing with myself the whole time.', '', 1133409622)
  ])
  ,new S('Broome & Forsyth', 40.71885, -73.99261, 8, [
    new Q('004627', 'Wednesday One-liners Go Potty', 'Girl: Uh...None of us wore a scarf tonight...Ew! That\'s fucking toilet paper!', 'Vincent L', 1141243223)
  ])
  ,new S('12th between 5th & 6th', 40.73534, -73.9962, 12, [
    new Q('005115', 'Wednesday One-liners Already Miss QAF', 'Old man: If I had my way, I\'d take all the homosexuals and burn them in Auschwitz.', '', 1145484053)
    ,new Q('003429', 'Wednesday One-liners: What Not to Wear', 'Chick: I already had to change underwear like seven times today.', '', 1131530437)
  ])
  ,new S('53rd & 9th', 40.76536, -73.98758, 14, [
    new Q('005281', 'Maybe You Haven\'t Met the Right Drunk Girl', 'Drunk girl: I wish you were straight.<br />\nGay guy holding her up: Honey, I knew I was gay when I was born during <em>General Hospital</em>.', 'Ciara DiSeta', 1146600032)
    ,new Q('004462', 'Wednesday One-liners Give Bad Gifts', 'Man: I\'m gonna get a new dress for her from Goodwill.', 'nickporjr', 1140069658)
  ])
  ,new S('Tompkins Square Park', 40.72641318283085, -73.98167610168457, 1, [
    new Q('005958', 'Maybe Next Lifetime, Or Next Girlfriend', 'Guy: And there\'s one more thing you could say. It\'s \"I love you.\"<br />\nGirl, looking through her purse: Ha ha, I know, one sec.', '', 1151179232)
    ,new Q('005621', 'She Either Wants a Gangsta or a Chicken Sandwich', 'Grandma to crying 5-year-old: Get a job if you want it that badly! Get a damn job! If you were in Russia, you\'d be working. If you were in China, you\'d be out working in the rice paddies. Goddamn. I\'m gonna put you in a sweatshop. This is Grandma\'s weekend to find a man. Gonna go up to the Bronx. Gonna hit the BX and find a BK.', '', 1148875232)
    ,new Q('004736', '\"...You and your brother! Honestly!\"', 'Mom: Did she tell you to pee in your pants?<br />\nLittle girl: No.<br />\nMom: Then she didn\'t make you.', '', 1143144036)
    ,new Q('003709', 'Or Maybe She\'s Just a Bitch', 'Lady: My dog hates morbidly obese people.<br />\nGuy: That\'s so cool.<br />\nLady: I guess a fat person must\'ve sat on her at the crackhouse where I found her.', '', 1136228450)
    ,new Q('003900', 'If They Had Kids, There\'s a Fifth Option', 'Girl: Think you\'ll be able to convince your parents to go see a movie or something over Christmas?<br />\nGuy: Not a chance. My parents are impossible to motivate to do <em>anything</em>.<br />\nGirl: Ah, I bet you could get them to at least try during the holidays.<br />\nGuy: I\'m not kidding...They are <em>completely</em> exhausted by eating, sleeping, shitting, and working. That\'s all they have energy for.', 'BBW', 1135288824)
    ,new Q('003891', 'Cigarettes & Alcohol Fuel Wednesday One-liners', 'Guy: I got a case of beer! I\'m selling it for 20 dollars, that\'s a dollar a beer! Come on everyone, this is <em>one hundred</em> dollars worth of beer and you people are going to pass it up? I don\'t drink, motherfuckers, what am I going to do with all this beer?', 'Spooner', 1135202450)
    ,new Q('003831', 'Wednesday One-liners Filled the Ark', 'Guy: You know where all the black squirrels are at? Over at Stuyvesant. It\'s like Harlem for squirrels over there.', 'Rex Danger', 1134590452)
    ,new Q('003831', 'Wednesday One-liners Filled the Ark', 'Guy: Hey! Don\'t sniff that dog! That\'s a guy dog!', '', 1134590452)
    ,new Q('003744', 'Wednesday One-liners Aren\'t Having a Good Time', 'Girl on cell: It was so lame! It was full of bloggers!...<i>Yeah, I<br />\nknow</i>!', 'Jessica Cutler', 1134021601)
    ,new Q('003662', 'Wednesday One-liners Rifle Through the Trash', 'Hobo: Yo, Freddie! <em>Fuck you</em>. Every time I hear your fuckin\' name and see your fuckin\' ugly face, it makes me wanna take a big fuckin\' shit on your head.', 'Tessa White', 1133402459)
    ,new Q('003176', 'Wednesday One-liners Rough It Up', 'Punk guy: My Slayer button fell off my jacket when I was kicking that dude in the face, so I stopped and picked it up. Then I finished kicking.', '', 1129773616)
  ])
  ,new S('Bank & Bleecker', 40.73661, -74.00531, 11, [
    new Q('004560', 'Wednesday One-liners Like Cans of Beans', 'Hobo: Spare a little change, girls?  That\'s all right, God bless <br />\nyou...even the Chinese girl.', '', 1140645642)
  ])
  ,new S('34th between Lexington & Madison', 40.747065, -73.981335, 3, [
    new Q('004492', 'Overheard in the Headlines: The Blizzard of \'06', 'Guy #1: Dude, they said on TV that it was gonna snow.<br />\nGuy #2: Nah, nan. It\'s not snow. It\'s frozen sunshine!', '', 1140184834)
  ])
  ,new S('13th between 5th & 6th', 40.735985, -73.995735, 12, [
    new Q('003639', 'The Pleasure of Double Treyf?', 'Chick: Is marijuana vegan?<br />\nFather: It is unless you roll it in elephant hide. Or foreskin.<br />\nMother: A joint rolled in foreskin would give you two pleasures at once!', 'Colin', 1134446410)
  ])
  ,new S('50th between 6th & 7th', 40.760490000000004, -73.981855, 16, [
    new Q('004728', 'AKA Chris Farley Disease', 'Suit #1: Hey, did we ever find out how Chris Penn died?<br />\nSuit #2: Yeah. He died of being a big, fat fuck.', '', 1141977607)
  ])
  ,new S('Chase Manhattan Bank, 15th & 1st', 40.73203, -73.98208, 2, [
    new Q('004984', 'Wednesday One-liners Use the Blue Parking', 'Tween girl: Oh, my, god. I know! She was so small I felt like stepping on her!', '', 1144231202)
    ,new Q('003655', 'Wednesday One-liners Are None Too Bright', 'Old Lady: Oh lord. Oh lord. Can you help me? I stuck my bus pass in the ATM, and it won\'t seem to give it back to me. Oh lord.', '', 1133344831)
  ])
  ,new S('Elevator, 53rd & Madison', 40.75973, -73.97422, 16, [
    new Q('005556', 'Completely Confused Wednesday One-liners', 'Well-dressed woman to passerby: Excuse me.  Which way is up?', 'Kitsune', 1148472032)
    ,new Q('003656', 'A Pink Triangle of Wednesday One-liners', 'Suit: Man, I need to call my cable company and get TiVo or something; every night I turn on the TV and there\'s woman-on-woman porn, and you know I want to watch it and save it for later.', '', 1133380834)
  ])
  ,new S('55th & Lexington', 40.75962, -73.9701, 16, [
    new Q('003748', 'Wednesday One-liners Have Language Problems', 'Asian girl: And when he said that to me, I said, \"Hell yeah!\" Well, I didn\'t say, \"Hell yeah!\", but I was like, \"Hell yeah!\".', '', 1133992814)
  ])
  ,new S('29th St & 33rd Ave, Astoria', 40.7621, -73.9275, -1, [
    new Q('006187', 'Wednesday One-Liners Aced Anatomy 101', 'Guy: Every time a girl sees my teeth, she\'s like, \"Naaah.\" I\'m gonna get this whole shit redone, where they take them all out and replace the whole thing. It costs like $20,000...Only thing is you have to go two months without any teeth.', '', 1153929600)
  ])
  ,new S('44th between Lexington & 3rd', 40.7524, -73.974305, 15, [
    new Q('003744', 'Wednesday One-liners Aren\'t Having a Good Time', 'Girl: It\'s like, we\'re all happy, and we\'re singing and we\'re dancing but...everyone has AIDS.', 'kristen mary piccolo', 1134021601)
  ])
  ,new S('42nd & 7th', 40.75602, -73.98697, 16, [
    new Q('005606', 'She Can\'t See Because of Her Hood', 'Girl on cell: I\'m on 42nd, where are you? Yeah, the place is on 46th. Where are  you again? No, I will not walk down to 33rd just to meet your cunty face and walk with you to 46th...meet me here. Just go straight! You\'re not blind, you fucking liar...oh, Christ, there is no such thing as stress blindness...I hope you get hit by a car.', 'Ria Vergara<br />', 1148767232)
    ,new Q('004843', 'He\'s Got an Urgent 1 O\'Clock to Get To', 'Hobo: You have a quarter for a cup of coffee?<br />\nSuit: Excuse me, can\'t you see I\'m on the phone?<br />\nHobo: <em>I don\'t have time for games</em>!', '', 1144101648)
    ,new Q('004747', 'Define \"Career\"', 'Promoter guy: Hey, see a comedy show! Is your relationship in trouble? Humor will help<br />\nGirl: No, thanks.<br />\nPromoter guy: Your relationship\'s in trouble.<br />\nGirl: Yeah, like your career.', '', 1143259218)
    ,new Q('004487', 'Must Be an Oedipus Revival', 'Tourist guy #1: What\'s going on?<br />\nTourist guy #2: Apparently someone is a motherfucker.', '', 1141934402)
    ,new Q('004581', 'No Dressing, Hold the Buns', 'Guy #1: Who, Trisha? Hell nah, She never calls me. She sucks.<br />\nGuy #2: Nah nigga, she doesn\'t suck; she licks.<br />\nGuy #1: What the fuck?<br />\nGuy #2: Isn\'t she a lesbian now or some shit?<br />\nGuy #1: I don\'t know!<br />\nGuy #2: Well I heard she is and like I said, she doesn\'t suck. She licks. The bitch eats vagiburgers.', 'Shanny O.', 1141790415)
  ])
  ,new S('30th & 5th', 40.7459, -73.98642, 2, [
    new Q('005824', 'Wednesday One-liners Are a Real Mother', 'Ghettomama: My son\'s favorite color used to be red, because his father is a Blood, but I\'ve gotten him out of that.  Now it\'s blue, and his father is going nuts.', '', 1150315232)
  ])
  ,new S('Lexington between 67th & 68th', 40.767535, -73.96430000000001, 21, [
    new Q('004039', 'Wednesday One-liners Are a Real Turn-on', 'Construction guy: So I says, \"I\'d like to put him in a bowl and pour some milk on him!\"', 'Haley Powell', 1136368837)
  ])
  ,new S('75th & York', 40.7688, -73.95231, 21, [
    new Q('003901', 'Remember That Whole Strike Thing?', 'Girl: Oh, I never realized walking sucks so much! I am <em>so</em> out of breath!<br />\nGuy: Yeah, well, that will happen when the buses stop running.<br />\nGirl: Ugh, I know. And why are they striking anyway?<br />\nGuy: Well, I heard it was because the workers think New York girls like you are too thick.', '', 1135303233)
  ])
  ,new S('47th between 2nd & 3rd', 40.75346, -73.97102000000001, 15, [
    new Q('003891', 'Cigarettes & Alcohol Fuel Wednesday One-liners', 'Man on cell: Yo, so check it out. I was drinkin\' Absolut Citron and shit, gettin\' liquored up, girls be buyin\' me drinks for my birthday and shit, and like my birthday stories are rollin\'...YouknowwhatI\'msayin\'? Even when it\'s not my birthday, it\'s my birthday.', 'Barry Negrin', 1135202450)
  ])
  ,new S('Astor & Lafayette', 40.72984, -73.99141, 12, [
    new Q('003436', 'Wednesday One-liners Wander New York', 'Hobo: Please give me some change, I am homeless and deranged!', 'Alyson Leigh', 1131580830)
  ])
  ,new S('Houston & Broadway', 40.72533, -73.99681, 7, [
    new Q('006107', 'Wednesday One-Liners Have Trouble Re-Folding the Map', 'Tourist girl: Oh, look!  I think that\'s Times Square!', 'Sumitra', 1153332000)
    ,new Q('005339', 'Is That Near Doucheburg?', 'Guy:  Douche...ville?  Douche...town?<br />\nGirl:  Doucheville.  Definitely.', 'Nico<br />', 1146988832)
    ,new Q('004858', 'Wednesday One-liners Lost Their MetroCard', 'Woman: Where the hell is the uptown 6 train? This is crazy! <em>Where the hell is the uptown 6</em>?', '', 1143072006)
    ,new Q('004778', 'Wednesday One-liners Watch Their Weight', 'Girl: Oh my god, Jen...You could be <em>so</em> skinny. I remember when you were skinny. You had such a great body. I was so jealous of you. Not anymore, though. But you really could be <em>so</em> skinny...Omigod I\'m sorry; are you offended? I\'m just saying...You <em>used to</em> have a really great body!', 'Lauren', 1142452823)
    ,new Q('004383', 'Wednesday One-liners Are Ready for Valentine\'s', 'Dude: This place will be filled with single girls, but they\'re all socially retarded.', 'glenndo', 1139443231)
    ,new Q('004193', 'Wednesday One-liners Start Spreading the Word', 'Guy: Don\'t ever give up your dreams. This is New York. It\'s not even about the numbers. I\'ve come too far to give up my dreams. Don\'t give up your dreams...So Canal Street is this way?', '', 1137643243)
    ,new Q('004106', 'Wednesday One-liners, Rated G', 'Dude: No, I agree with you. Even if it\'s a robotic kid, they should still treat it as one of their own.', 'Snackette', 1136973605)
    ,new Q('003024', 'He Knows What Today Is', 'Black cyclist guy: Where\'s all the black people around here? <em>Did y\'all eat all the black people</em>?<br />\nWhite girl: They taste yummy!', 'alyssa', 1129489257)
  ])
  ,new S('10th Street between 3rd & 4th', 40.732479999999995, -73.996015, 12, [
    new Q('003587', 'Wednesday One-liners Went to Twilo', 'Italian guy: Tony, these people are awful. Why are we waiting on a line with awful people to get into a club so we can hang out with said awful people some more?', 'J. Ferro', 1132754417)
  ])
  ,new S('Carmine\'s, 91st & broadway', 40.79142, -73.97403, 18, [
    new Q('004950', 'A Gun Can Get You Any Woman', 'Man: So I\'m just standing there, trying to get the guns from his hands--<br />\nWoman #1: Are they registered?<br />\nMan: Not in New York.<br />\nWoman #1: Ooh, you need to be careful. He could get arrested again!<br />\nMan: I know, right? So I have one gun in my hand, and he has the other one, and he\'s ready to give it to me when Susan starts freaking out.<br />\nWoman #2: Ooh...Did you know that they had a threesome with Trista?<br />\nMan: What? What the fck? Why does he get all the threesomes?', 'The Waitress', 1144821610)
  ])
  ,new S('Broadway & Tiemann', 40.81516, -73.95875, 20, [
    new Q('004924', 'Wednesday One-liners Read Vogue', 'Guy: Sht, man, if I win that lotto jackpot, I ain\'t never gonna wear clothes again.', '', 1143676838)
  ])
  ,new S('University & Waverly', 40.7307, -73.99556, 12, [
    new Q('005312', 'He Does His Best Thinking in the Laundromat', 'NYU boy #1: Dude, let\'s go to Delaware. I\'ve never been there -- I didn\'t even know it was a state until the quarter came out.<br />\nNYU boy #2: Oh yeah, you told me that. That was like last week.<br />\nNYU boy #1: Yeah, man.', 'a girl who\'s ashamed to go to NYU sometimes<br />', 1146801632)
    ,new Q('005042', 'Wednesday One-liners Cook the Afterbirth', 'Girl on cell: Wait, was this the eating disorder cousin or the crack dealer cousin?...Oh, she\'s having a baby? Wow, I hope it doesn\'t die.', '', 1144850450)
    ,new Q('004837', 'The Cream Cheese was...Perfectly Normal', 'Girl #1: Randy won\'t stop coming on my face.<br />\nGirl #2: ...Are you going to finish your bagel?', 'S.A.F.', 1144087216)
    ,new Q('004677', 'The Blind Man Was a Bluff', 'JAP #1: So then he like...stuck his stick up her hoo-ha!<br />\nJAP #2: Like in her area? You mean he went for the cash and prizes?<br />\nJAP #1: Yeah! So he like... hit her there with his stick, and she spun around and was like, \"What the f_ck?\", but then was like, \"Oh, you\'re blind.\" But I don\'t care. It\'s f_cked up.', 'tj', 1143302443)
    ,new Q('004697', 'Wednesday One-liners Wear Heatherette', 'Girl: That guy in the subway told me I shouldn\'t be wearing sunglasses \'cause I won\'t get enough air since you breathe out your eyes.', '', 1141848022)
  ])
  ,new S('231st & Broadway', 40.87882, -73.90487, -1, [
    new Q('004310', 'Wednesday One-liners Drink Mad Dog', 'Teen girl: Oh my god I lost an earring! And I\'m sober!', '', 1138802416)
  ])
  ,new S('31st & Ditmars, Brooklyn', 40.77612, -73.91075, -1, [
    new Q('006182', 'Wednesday One-Liners Tie the Knot', 'Man: If I had known how much work marriage was gonna be, I would\'ve said, \"Fuck the cow. Give me the milk for free.\"', 'Shannon', 1153972800)
    ,new Q('005434', 'He Gets Coupons for Bed, Bath & the Beyond', 'Old lady on bench #1: When he was alive, no mail. Now that he\'s dead, he gets mail every day!<br />\nOld lady on bench #2: Nobody cares til you\'re dead.', 'Cathy Albright<br />', 1147636832)
  ])
  ,new S('Mott & Bayard', 40.71563, -73.99852, 6, [
    new Q('003660', 'Heavenly Wednesday One-liners', 'Guy: Can I have a cigarette?...Fine, leave me here! Go to Hell! That\'s not a request it\'s a Commandment!', '', 1133416812)
  ])
  ,new S('43rd & Broadway', 40.75658, -73.98618, 16, [
    new Q('005747', 'Forget Signaling -- Put on Your Hazards', 'Tourist girl [standing in middle of busy sidewalk]: Oh, excuse me! [spins around] Oh! [turns around] Omigod! Like, I just ran into like four people and I\'m not even walking!<br />\nCity guy: Try walking.<br />\nTourist girl: What?<br />\nCity guy [reluctantly drawn in]: Look, in New York most people aboveground get where they\'re going by walking. The sidewalks are the main roads in the city.<br />\nTourist girl: [blank stare]<br />\nCity guy [getting frustrated]: If you were driving on a busy road, you wouldn\'t just stop or take random turns in traffic without checking your mirrors or signaling, right?<br />\nTourist girl: How do I signal?', '', 1149760832)
    ,new Q('005092', 'What a Jerk', 'Guy #1: I love her so much...I won\'t even jack off to her.<br />\nGuy #2: I guess I don\'t love her as much as you do.', '', 1145332818)
    ,new Q('004193', 'Wednesday One-liners Start Spreading the Word', 'Tourist woman: Now this is the <em>real</em> New York! This is the New York you see on TV!', 'charlene', 1137643243)
  ])
  ,new S('3rd between A & B', 40.723145, -73.98412, 1, [
    new Q('005205', 'It\'s Not You, It\'s Wednesday One-liners', 'Woman to her friend: The audacity of him tearing up this beautiful African-American pussy and not calling me afterwards.', '', 1146060032)
    ,new Q('003395', 'I\'m Thankful I\'m Alive', 'Drunk girl #1: Hey, who wants a Blow Pop?<br />\nDrunk guy: Um...I dunno.<br />\nDrunk girl #2: Don\'t. It\'s bad luck to take candy from the dead.<br />\nDrunk girl #1: ...Yeah, I guess you\'re right.', 'The Vouk', 1132848015)
  ])
  ,new S('Broadway & Astor', 40.7301, -73.99282, 12, [
    new Q('003835', 'Barkers Hawk Wednesday One-liners', 'Flyers guy: Video phones are $10, but I\'m free and single with a 2 year agreement!', 'mikey frenchman', 1134633648)
    ,new Q('003564', 'Overheard in New York: The Movie', 'Girl: I heard there\'s an Asian girl in the new <em>Harry Potter</em>.<br />\nGuy: Yeah.<br />\nGirl: So they are branching out.<br />\nGuy: Yeah...but she is kinda big.', 'sim choo', 1134057606)
    ,new Q('003432', 'Wednesday One-liners for Hump Day', 'Guy: ...she didn\'t give me a blowjob, she gave me a slowjob.', '', 1131609643)
  ])
  ,new S('94th & Broadway', 40.79338, -73.97284, 18, [
    new Q('004641', '\"That\'s not my definition of success.\"', 'Hobo: I\'m trying to get something to eat.<br />\nSuit: Well, you\'re obviously not going to be that successful without having any money.', '', 1142337612)
    ,new Q('004318', 'Wednesday One-liners Move to the Big Apple', 'Tourist woman:  There\'s another one of those doo-wanna ree-dahs. I see them everywhere.', '', 1138845622)
    ,new Q('002981', 'The Worst is Dissecting the Quick Brown Fox', 'HS girl #1: God, I hate English. It\'s so hard!<br />\nHS girl #2: Yeah, I just don\'t get this whole verb/noun thing.', 'Dunkee Hotay', 1129996824)
  ])
  ,new S('Madison & 50th', 40.75784, -73.97559, 16, [
    new Q('003383', 'Another Brilliant Brian Kinney Campaign', 'Ad guy #1: \"Up Your Budget\"? I don\'t get it.<br />\nAd guy #2: It\'s for the rental car company.<br />\nAd guy #1: But it makes you think of Up Your Butt. Is that the point? Budget wants people to think about stuffing things in their ass?<br />\nAd guy #2: I don\'t know.<br />\nAd guy #1: \"Look at me, I\'m stuffing things in my ass!\" \"We try harder, we\'re number two. We\'re stuffing things in our ass!\"...<em>Hertz</em>!', 'Kevin', 1132351215)
  ])
  ,new S('44th between 7th & 8th', 40.75792, -73.98743999999999, 16, [
    new Q('005582', 'It Once Gave Jon Stewart Heartburn', 'Lady: Do you have famous cheesecake?<br />\nWaiter: Yes, the cheesecake.<br />\nLady: Well is it famous?<br />\nWaiter gives blank stare.<br />\nLady: Because I only want it if it\'s famous.', 'Grant W', 1148608832)
  ])
  ,new S('14th & 2nd', 40.73233, -73.98493, 1, [
    new Q('005056', 'Humor is More Up Islam\'s Alley', 'Girl #1: Oh sht, a Jesus Bus!<br />\nGirl #2: They must be kidding...Oh my god, look at them, they really <br />\naren\'t kidding.<br />\nGirl #3: Christ in hell, I thought people just drove those things around to be funny.', '', 1145037627)
    ,new Q('003743', 'Wednesday One-liners: It\'s Time', 'Guy: ...And I said, \"<em>Bitch</em>, I\'m 34 and you\'re 28. I done lived <em>life</em>!\"', 'bia', 1133949641)
  ])
  ,new S('Spring & Bowery', 40.72091, -73.99372, 8, [
    new Q('004633', 'Wednesday One-liners with an Attitude', 'Teen boy: Okay. Let\'s find a cafe and talk shit.', '', 1141286401)
  ])
  ,new S('58th & 9th', 40.76858, -73.98524, 14, [
    new Q('004990', 'Wednesday One-liners for Adoptionists', 'Woman on cell: Read the Bible, stupid!', 'Trix', 1144274434)
    ,new Q('004774', 'Wednesday One-liners Speak Well English', 'Girl: I think \"y\'all\" is singular. \"Y\'alls\" is plural.', 'Jess McGins', 1142445633)
  ])
  ,new S('81st & 2nd', 40.77464, -73.95411, 21, [
    new Q('003984', 'Attack of the iPod People (NYC Short Stories)', 'Man on cell: She gave him an iPod. Can you believe it? It\'s like, just not cool for a <em>girl</em> to give a <em>guy</em> an iPod. A guy can give a girl an iPod. But it shouldn\'t happen the other way around. It\'s just not right.', '', 1137096000)
  ])
  ,new S('23rd & 2nd', 40.73787, -73.9809, 27, [
    new Q('003918', 'Iraqians and Cars: An Explosive Combo', 'Hobo: Hey buddy, can you spare a nickel?<br />\nCabbie: Yeah, do you accept credit cards?<br />\nHobo: Fuck you! I am here trying to live on the streets. Just take your customer wherever she\'s going...Don\'t you tip his sorry ass. He\'s a racist Iraqian.', 'Cat', 1136592034)
  ])
  ,new S('16th & 7th', 40.73987, -73.99875, 0, [
    new Q('005108', 'Wednesday One-liners for the Old', 'Old man: Don\'t worry, he won\'t bite. I\'d bite you first, and I left my dentures upstairs!', '', 1145448034)
  ])
  ,new S('8th & 16th', 40.74106, -74.00156, 0, [
    new Q('005294', 'Wednesday One-Liners for Homeland Security', 'Man using an ATM: Every time I use one of these things I feel like I\'m giving money to terrorists.', 'Emily', 1147255232)
    ,new Q('004702', 'Wednesday One-liners for Thanatos', 'Queer: My whole family\'s dropping dead and I\'m just tanning.', '', 1141869644)
  ])
  ,new S('116th & 2nd', 40.79699, -73.93779, 23, [
    new Q('004188', 'Wednesday One-liners Drink Red Rum', 'Gangsta chick: I\'m in love with you and you say you gonna shoot me in the face? What\'s up with that?', '', 1137607256)
  ])
  ,new S('Irving Plaza', 40.73587, -73.98739, 2, [
    new Q('005497', 'Teenage Lobotomy, the Aftermath', 'Queer: Who\'s Joey Ramone?<br />\nHipster girl: Oh my God, are you kidding me?<br />\nQueer: Uh, no. Who is he?<br />\nHipster girl: He\'s a singer! He was like, in some huge band in the \'80s!<br />\nQueer: What band?<br />\nHipster girl: Um...<br />\nQueer: See? You don\'t know who the hell he is either. You don\'t even know what band he was in.<br />\nHipster girl: It\'s on the tip of my tongue...<br />\nQueer: Sure.<br />\nHipster girl: Oh well, I can\'t think of it. I think he\'s dead now anyway. Who cares.', 'i hope they were joking<br />', 1148068832)
  ])
  ,new S('Clinton & Stanton', 40.72022, -73.98448, 8, [
    new Q('003736', 'The Olde English So You Can Rest Medicine', 'Drunk dude: Do you guys have any change?<br />\nSober dude: No.<br />\nDrunk guy: I just want to get a 40. I had one but it accidentally broke on my head. Which sucks real bad! I just need to get a 40 so I can sleep.', 'chite', 1135087203)
  ])
  ,new S('35th between 8th & 9th', 40.753445, -73.994405, 14, [
    new Q('003354', 'The Womb of Wednesday One-liners', 'Guy: You won\'t make fun of your mother? What kind of person are you?', 'Jesus', 1130990446)
  ])
  ,new S('4th & Bowery', 40.7271, -73.99162, 1, [
    new Q('004926', 'Wednesday One-liners Got Lucky', 'Guy on cell: Dude, I am so fcking horny right now...When I get home I am going to tear that sht up!', '', 1143705614)
    ,new Q('004041', 'The Annunciation of Wednesday One-liners', 'Dude: I hate the fucking Mormons. You drink alcohol, you go to Hell; premarital sex: Hell; everything you do: Hell, Hell, Hell.', '', 1136404850)
  ])
  ,new S('Outside of the Ars Nova Theatre, 54th & 10th', 40.76717, -73.98998, 14, [
    new Q('006115', 'Wednesday One-Liners Are Accident Prone', 'Peter Sarsgaard: That was like the time my sister got hit by her own school bus!', 'Danielle', 1152720000)
  ])
  ,new S('58th & Madison', 40.76295, -73.97186, 16, [
    new Q('005509', 'What with Sperm at $70 a Barrel...', 'Woman #1: So, you know Tanya...<br />\nWoman #2: Yeah, skinny little thing. What a waste of a fck!', 'Tom T<br />', 1148155232)
  ])
  ,new S('W Broadway', 40.71912, -74.00693, 4, [
    new Q('006184', 'Wednesday One-Liners Carry Razor Blades and a Mirror', 'Dude: America runs on cocaine.', 'ritajones', 1153951200)
  ])
  ,new S('56th & 6th', 40.76363, -73.97769, 16, [
    new Q('005328', 'I\'ve Got an HBO Special and I\'m Not Afraid to Use It', 'Little girl around 8 years old: I\'m going to kill you.<br />\nLittle girl #2: You can\'t. You don\'t have a knife.<br />\nLittle girl #1: I didn\'t mean violently. I meant humorously.', 'Nina<br />', 1146916832)
    ,new Q('003560', 'Dr. King Must Have Been Dreaming', 'Performer guy #1, #2 & #3: White people, you have nothing to be afraid of! We are only three black men! We cannot hurt all of you!', 'jeff', 1137405613)
    ,new Q('003367', 'I Always Wondered About Mike and Rudy', 'Guy #1: So I\'m trying to set Anthony up with this girl.<br />\nGuy #2: Wait a minute, I thought Anthony was gay.<br />\nGuy #1: Everybody does, but he\'s not. He just has a slight lisp.', 'El Cubano', 1132250406)
  ])
  ,new S('39th between 5th & 6th', 40.752235, -73.983875, 17, [
    new Q('004699', 'Wednesday One-liners for the Lookers', 'Girl: Nice pictures! They look nothing like you.', '', 1141855214)
  ])
  ,new S('78th & Lexington', 40.77427, -73.9594, 21, [
    new Q('004914', 'It\'s Quite a Bind', 'Woman #1: But not all Asian girls are pretty.<br />\nWoman #2: Oh I know, but he just thinks that, on a scale of 1-10, Asian girls start off with like a +10.<br />\nWoman #1: Oh, well that\'s good, because most white guys just see that they\'re Asian and don\'t consider whether they\'re really pretty or not.', '', 1144609231)
  ])
  ,new S('Washington Square Park', 40.730885, -73.997641, 12, [
    new Q('006147', 'Wednesday One-Liners Take Up Hobbies', 'Guy, to passersby: Game of chess? Play chess? Chess?...Also got chronic.', 'Phil', 1153303200)
    ,new Q('006089', 'Wednesday One-Liners Make Friends with the Purple Monkey in the Corner', 'Stoned chick: I\'ve got to do all the drugs I can today. I\'m going into rehab next week.', 'Matt M', 1152129600)
    ,new Q('005948', 'Those Shoes Say Otherwise', 'Woman holding baby: Excuse me, what did you say?<br />\nWoman with clipboard: I asked you if you would like to join the Democratic Party.<br />\nWoman holding baby: No, I\'m not poor!', '', 1151100032)
    ,new Q('005564', 'Wednesday One-liners Majored in Anthro', 'Black guy to Asian woman:  We fcking taught you people martial arts! Egypt? What!', '', 1148479232)
    ,new Q('005548', 'Sarcastic Anal Is the New Blow Job', 'College girl on cell: I need that like I need a dick in the ass.<br />\nRandom guy: I can help with that.<br />\nGirl, to guy: I was ... being metaphysical ... metaphorical?<br />\nGuy: I\'ll take it either way.<br />\nGirl: Yeah, sarcastic ... what she said [points to phone].<br />\nGuy: Well, I was being serious.', 'Lizzerd<br />', 1148400032)
    ,new Q('005526', 'Just Pretend to Be Surprised', 'Man: And if he\'s coming at me with his motherfcking knife, he\'s going out the window.<br />\nWoman: You ain\'t supposed to know about the knife.<br />\nMan: I don\'t give a sht.', 'Daniel<br />', 1148277632)
    ,new Q('005436', 'Ask Her If She Knows Lena', 'Girl: Are you guys from Russia?<br />\nGuy #1: Yes.<br />\nGirl: No way! My grandma\'s from Germany.', 'MP', 1147665632)
    ,new Q('005402', 'You\'ll Slide Right Off', 'Gay guy #2:  Ow, watch out. I waxed my whole chest this morning.', '', 1147348832)
    ,new Q('005384', 'Wednesday One-Liners Love Entertainment Weekly', 'Dude: I\'m going out with him and David Bowie on Wednesday night.', '', 1147284032)
    ,new Q('005379', 'Wednesday One-Liners in Altered States', 'Young boy: Mom, my problem is that I just can\'t pay attention for long enough to do my homework the right way. I mean, maybe it\'s\'s just the weed talking, but I\'d like to see someone.', '', 1147269632)
    ,new Q('005323', 'Olmstead Was a Genius with Pavement', 'Tourist guy: Look, honey! Here were are in wonderful Central Park!<br />\nTourist guy\'s wife: Really? I thought it was supposed to be bigger than this...<br />\nTourist guy: Well, what else could it be?', 'oli<br />', 1146880832)
    ,new Q('005290', 'Wednesday One-Liners Have an Announcement', 'Little boy: I am the Lord! TIMBER!', 'Marielle Clark<br />', 1146693632)
    ,new Q('005211', 'Wednesday One-liners Make Parenting Fast & Easy', 'Girl on cell: You are married and have kids. You can\'t just fck a bunch of guys because you think you missed out.', '', 1146124832)
    ,new Q('005124', 'This Bitch Is Gonna Occupy Rhineland', 'Crazy guy: Ain\'t you people heard of the Treaty of Versailles? I gots mothafckin\' rights, mothafckas!<br />\nNYU tour guide: Washington Square Park is the vibrant center of campus...<br />\nCrazy guy: Rights! You can\'t just be dropping mustard gas on me, like that mothafcka from Tennessee be doin\'. The Treaty of Versailles says I got rights!<br />\nTour mom: Oh my god! They have mustard gas here now? I <em>told</em> you this city wasn\'t safe.<br />\nCrazy guy: This bitch understands that I got rights!', 'Laura Mathis', 1145534432)
    ,new Q('005107', 'Wednesday One-liners for the Young', 'Crazy guy: Ah, I\'m being assaulted by a child! Ah! Ah! Wait, I\'m from Harlem, I should be chasing you! Argh, I\'m from Harlem, Argh! I wouldn\'t have kids; you have to buy them little red jackets, and that cuts into your beer money. You\'ve got them running all over your house while you\'re trying to smoke a joint! Kids should be drinking liquor at 12! Drink liquor, kid!', '', 1145440800)
    ,new Q('004769', 'Howie Mandel in 5 Years', 'Dealer guy: Hey man, buy some weed?<br />\nYuppie guy: Sure. And while I\'m at it, why don\'t I just not send my <br />\nkids to school, get them addicted to heroin, and leave them on the <br />\nstreet to die?<br />\nDealer guy: You sure you don\'t want some weed?', '', 1143856858)
    ,new Q('004927', 'The Wednesday One-liners K-Hole', 'Girl: Wow. I never knew bongs were so pretty. Oh, sorry, \"decorative tobacco pipes\".', '', 1143784837)
    ,new Q('004851', 'Wednesday One-liners by Storm Field', 'Dude: No way, fuck <em>you</em>, wind!', 'rhett', 1143036031)
    ,new Q('004841', 'How Was Your St. Paddy\'s Day, New York?', 'Robin Williams: If you\'re wearing a green hat like that I get to bitch-slap you.', '', 1142884801)
    ,new Q('004664', 'That\'s What He Said!', 'Chick #1: Hey, who was Yasser Arafat?<br />\nChick #2: Uh, wasn\'t he the president of Mexico?<br />\nChick #1: Kill me.', '', 1142539244)
    ,new Q('004774', 'Wednesday One-liners Speak Well English', 'Girl on cell: Oh my God, I am like so uncoherent today.', '', 1142445633)
    ,new Q('004510', 'Dude Flipped His Lid', 'Guy #1: You know the reason why human beings are not at the top of the food chain?<br />\nGuy #2: What?<br />\nGuy #1: Pez.', '', 1142265647)
    ,new Q('004699', 'Wednesday One-liners for the Lookers', 'Guy: <em>Damn</em> girl, you fine! Your hair is beautiful. I\'ll let you brush mine if I can brush yours.', '', 1141855214)
    ,new Q('003794', 'Robbie Sounds Like an Ashole', 'Girl #1: So, I don\'t know, I guess I\'m giving up manicures for Lent.<br />\nGirl #2: Really? Shit! I\'m not. Robbie would <em>not</em> be cool with that.', 'Katie M.', 1141200057)
    ,new Q('004600', 'That International Five Ring Circus', 'Guy #1: Did you see the Olympic Figure Skating last night?<br />\nGuy #2: Yeah, that one chick just kept falling, looked like Chevy Chase on <em>Saturday Night Live</em>.', 'Wade Crowder', 1141002057)
    ,new Q('004561', 'Wednesday One-liners for Fuck Machines', 'White chick: You gotta get to know me before you find out I\'m a slut.', '', 1140652837)
    ,new Q('004394', 'Welcome to George Bush\'s America', 'Chick: Hi, how much are these?<br />\nVendor hippie: Ten, or two for 18.<br />\nChick: Oh.<br />\nVendor hippie: Yea, on Macdougal they sell them cheaper, but they\'re made by Chinese kids who make one-fifty an hour. Capitalist bastards.<br />\nChick: Oh. Are you going to be here tomorrow?<br />\nVendor hippie: Well, tomorrow it\'s going to rain, and then for the next fifteen days the government is paying me to take ecstasy and play on the computer while they observe me.', 'Emily Leonard', 1140440447)
    ,new Q('004202', 'The Cancer Has Claimed His Funny Bone', 'Girl: Are you a heavy smoker?<br />\nGuy: What do you mean by \"heavy\"?<br />\nGirl: Is smoking the first thing you do when you wake up in the morning?<br />\nGuy: No, first, I cough. Then, I smoke.', 'chrissy', 1139058009)
    ,new Q('004319', 'Wednesday One-liners Are All Over the Map', 'Guy on cell: Damn, if I ever went on vacation with you I\'d take you to like <em>Somalia</em>. Fuck, yeah.', 'Lisa Taverna', 1138831202)
    ,new Q('004266', 'Wednesday One-liners Build Up an Appetite', 'Girl: So I actually tried garlic knots one day when I wasn\'t high and I was like, \"Wow, these <em>are</em> good...and there\'s really garlic on them, too!\"', 'buffa', 1138233607)
    ,new Q('003943', 'It\'s French for Steve', 'Nanny #1: Who were you named after, Paulette?<br />\nNanny #2: My father.<br />\nNanny #1: Oh, what was his name?<br />\nNanny #2: <em>Ette</em>.', '', 1136790034)
    ,new Q('004047', 'Wednesday One-liners\' Scenes from The City', 'Lady on cell: Okay, I\'m in Washington Square Park. Can you tell me how to get to Greenwich Village?', '', 1136426436)
    ,new Q('003897', 'In the Mood for Wednesday One-liners', 'Girl on cell: So, you know, I was just lying there, like with my face to the wall and stuff and he just whips out his dick and starts hitting me in the back of the head with it.', '', 1135238436)
    ,new Q('003887', 'Wednesday One-liners & the Entertainment Industry', 'Hobo: Are you still playin\' with those vampires, Buffy?', '', 1135180851)
    ,new Q('003633', 'He\'s Tricky with That Reverse Psychology', 'Hobo: How are you doin\'? Do you need some money? You need a dollar or two?<br />\nWoman: No thanks, I\'m okay.<br />\nHobo: Okay, god bless you.', 'Lisa', 1134316859)
    ,new Q('003658', 'Wednesday One-liners: The Pole', 'Guy: ...So I said, \"Nigga, if you gon\' suck my dick, then suck my dick!\"', '', 1133395222)
    ,new Q('003394', 'I\'m Thankful for My Health', 'Girl #1: Oh no, I can feel my pulse in my neck!<br />\nGirl #2: You can always feel your pulse in your neck, douchebag.<br />\nGirl #1: No, but it\'s, like, <em>really</em> strong.', '', 1132826435)
    ,new Q('003598', 'Wednesday One-liners Can\'t Dress Correctly', 'Tourist woman: ...But I thought that the Arc de Triomphe was in Paris.', '', 1132797610)
    ,new Q('003598', 'Wednesday One-liners Can\'t Dress Correctly', 'Teen girl: Uh, why is there an arc here?', 'Lauren', 1132797610)
    ,new Q('003459', '\"Stop throwing my hat in the air!\"', 'Girl: I mean, I was rivaling Mary Tyler Moore in her peak for cuteness, and he didn\'t even look at me.<br />\nGuy: I would totally freeze-frame you, if it\'s any consolation.', 'Colin Hartnett', 1132711240)
    ,new Q('003408', 'The Poop She Blames on the Dog', 'Girl #1: One time I farted and there was a cute boy there and I was mortified.<br />\nGirl #2: Yes! What did you say?<br />\nGirl #1: I blamed it on a homeless person!<br />\nGirl #2: Holy crap that\'s genius.', 'Shanon Kelley', 1132556414)
    ,new Q('003381', 'Chocolate, Peanut Butter Still Unaccounted For', 'Girl #1: So, how was your night last night?<br />\nGirl #2: Um, I\'m pretty sure I have jizz in my hair.', '', 1132416030)
    ,new Q('003165', '\"I thought you liked housework, Cinderella.\"', 'Girl: What happened to the raisinets?<br />\nGuy: I turned them into chocolate pudding and sent them to the ocean.<br />\nGirl: Ew. I thought you were supposed to be charming.', 'brookie', 1131854410)
    ,new Q('003435', 'Relationship Problems? Try Wednesday One-liners', 'Stroller chick on cell: So we\'re always having to deal with his erectile dysfunction...like every time it happens we have to have this like hour-long conversation talking about it. It\'s getting really old.', '', 1131573637)
    ,new Q('003282', 'Wednesday One-liners Keep It in the Family', 'Guy on cell: Yeah I know her, my sister went out with her when she was still a man.', '', 1130392823)
    ,new Q('003282', 'Wednesday One-liners Keep It in the Family', 'Girl: Sometimes, if I feel like it, I put on a Southern accent and pretend I\'m married to my cousin.', 'Robyn M.', 1130392823)
    ,new Q('003278', 'Wednesday One-liners Wave Around a Cup', 'Hobo: That\'s what the intellectuals are saying, \"Yo\' shit is so deep you gotta be a scuba diver to understand it!\"...Be safe.', 'Alice Yorke', 1130364042)
    ,new Q('003111', 'I Wish This Were the Presidential Debates', 'Hobo #1: But why would you want to go into space for a million dollars? Seems like a waste.<br />\nHobo #2: Because they haven\'t come out with hovertrains yet!', 'Kevin Cox', 1130184031)
    ,new Q('003065', 'They\'re Fleeing Hungry, Hungry Hobos', 'Tourist husband: Sure smells bad around here.<br />\nTourist wife: It says Dog Run.<br />\nTourist husband: A place where dogs race?', 'Innocent XXX', 1129896003)
    ,new Q('003191', 'Wednesday One-liners, Class of \'09', 'Guy: ..and it\'s like he goes to Stevens, so that means he\'s not a <em>real</em> NYU Student.', '', 1129737653)
    ,new Q('003182', 'WeDDnesDDay One-liners', 'Hobo: Be safe, everybody! Don\'t get no breast implants!', 'Tina Crystal Glass', 1129716049)
    ,new Q('003092', 'Wednesday One-liners v. The DEA', 'Dealer guy: Smoke weed? There\'s a student discount.', 'laura', 1129154409)
    ,new Q('003083', 'The Infinite Crisis of Wednesday One-liners', 'Guy: So you\'ve just been given the hardest job ever: transdimensional paperboy!', 'Cait O\'Connor', 1129125619)
  ])
  ,new S('Thompson & Bleecker', 40.72841, -73.99967, 12, [
    new Q('004107', 'Gimme Shelter, Wednesday One-liners', 'Hobo: I need some love. Any love? Any love? Somebody pretend that you love me.', 'Julia', 1137009624)
    ,new Q('003283', 'Wednesday One-liners Can Be So Rude', 'Dude: I\'m not dating you or any of your friends. It\'s just not worth the effort...all due respect.', '', 1130400040)
    ,new Q('003277', 'Wednesday One-liners Belong in a Cage', 'Woman: I think we\'re getting a dog instead of the elliptical.', '', 1130356832)
  ])
  ,new S('Maiden & Water', 40.70615, -74.00602, 5, [
    new Q('003513', 'Charlie and the Cigarette Factory', 'Suit #1: You know what movie they\'re filming over there?<br />\nSuit #2: I think it\'s a snuff film.', 'Angry Oscillations', 1133431230)
  ])
  ,new S('31st & Lexington', 40.74448, -73.98112, 3, [
    new Q('004696', 'Wednesday One-liners for Ed O\'Neill', 'Guy: It\'s either have lots of kids or marry lots of women...', 'SK', 1141891246)
  ])
  ,new S('1849 Bar, Bleecker St', 40.688471, -74.023886, -1, [
    new Q('006101', 'What Would Wednesday One-Liners Do?', 'Girl: You know, I don\'t think Jesus ever asked Mary Magdalene to kiss his balls.', '', 1152705600)
    ,new Q('004114', 'Wednesday One-liners Rx', 'Chick: He\'d <em>better</em> get tenure. Otherwise, there goes my hash connection.', 'djlindee', 1137052824)
  ])
  ,new S('168th & Broadway', 40.8411, -73.93987, 24, [
    new Q('005975', 'Better Get It To Go', 'Man: Kidding...', '', 1151265632)
    ,new Q('003960', 'Wednesday One-liners M.D.', 'Girl: It didnt even hurt when I peed in the cup. I have a vagina of steel!', '', 1135800048)
  ])
  ,new S('34th & 7th', 40.75097, -73.99063, 0, [
    new Q('006231', 'Wednesday One-Liners Have a History of Violence', 'Guy, to girl: If I wanted to be angry, I would have punched you in the face a long time ago.', '', 1153360800)
    ,new Q('004996', 'Wednesday One-liners Eat Wedding Cake', 'Woman: He cooks and he does dead people; what more could a motha want?', '', 1144310418)
    ,new Q('004859', 'Wednesday One-liners Will Miss Greenspan', 'Lady: When she traded her kid for the house, I lost all respect for her.', '', 1143079259)
    ,new Q('004841', 'How Was Your St. Paddy\'s Day, New York?', 'Hobo: God bless the Irish! And God bless John Gotti too!', '', 1142884801)
    ,new Q('004431', 'That Would Be Quite Some Strike', 'Hobo: Spare some change?<br />\nHipster dude: Uh, I gave some to the last guy.<br />\nHobo: Hey man, this ain\'t a unionized situation.', '', 1140746429)
    ,new Q('004464', 'Wednesday One-liners Distrust the Monotremes', 'Girl on cell: Oh my gosh, I just saw a fight with the security guard and the guy with the big dog! You know what his dog looks like?...His dog looks like a camel. It just hangs...Yes, a camel.', 'guy with big dog', 1140048006)
    ,new Q('004375', 'God Tells Wednesday One-liners to Kill People', 'Guy: Yeah, and you know what Allah spelled backwards is: <em>Halla</em>!', 'Karie T', 1139392849)
    ,new Q('004123', 'Let\'s Make Her Our Next Mayor', 'Chick: Yeah, fuck you too, cunty Mr. Crack Whore.<br />\nHipster guy: Lady, you need therapy.<br />\nChick: Man, you need to stop sucking dick. And a haircut.', 'Jesia Guera', 1138154426)
    ,new Q('003848', 'I Heard the Bells on Christmas Day...', 'Old lady #1: Even when they say \"happy holidays\" to me, I say \"merry Christmas\" back.<br />\nOld lady #2: Good for you.', 'Kenneth Grider', 1135537235)
    ,new Q('003746', 'Wednesday One-liners: It\'s All About Location', 'Tourist lady on cell: Um....I\'m on the corner of 7th and Fashion Avenue.', 'K. Colleran', 1134014456)
    ,new Q('003418', 'I\'m Thankful for My Intelligence', 'Suit: Thanksgiving is on a Friday, right?', 'Andrew Richter', 1132858815)
    ,new Q('003596', '...Butt It\'s Wednesday One-liners!', 'Woman: She\'s such a different person now that she\'s pooping. It\'s like night and day.', '', 1132783228)
    ,new Q('003492', '...With a Side Order of Wednesday One-liners', 'Girl: She doesn\'t want to go to <em>Little Italy</em> to find an Italian restaurant, she wants to go to <em>Olive Garden</em> in <em>Times Square</em>!', 'Shannon', 1132185605)
    ,new Q('003278', 'Wednesday One-liners Wave Around a Cup', 'Bag lady: Man, don\'t you know Sherlock Holmes was a Presbyterian? Dang.', '', 1130364042)
    ,new Q('003088', 'Wednesday One-liners, One Leg at a Time', 'Queer: I have thirteen outfit options and they all include sweatpants.', 'Jess McGins', 1129183219)
  ])
  ,new S('86th & Lexington', 40.77949, -73.95559, 21, [
    new Q('004998', 'Wednesday One-liners Need an Adapter', 'Woman: I need my computer. I\'m going skiing and don\'t have a computer.', 'Andy Hobin', 1144303230)
    ,new Q('004495', 'I Only Buy It for the Articles', 'Chick #1: ...So, like, now he ain\'t got no toes!<br />\nChick #2: He should be in National Geographic.', 'Reaper', 1142316002)
    ,new Q('004457', 'Wuxtry! Wednesday One-liners', '<em>AMNewYork</em> guy: Get your free newspaper! Why buy one when you are going to throw it away? The great thing about this is that it is free...<em>Take one</em>.', 'SK', 1140019224)
    ,new Q('004457', 'Wuxtry! Wednesday One-liners', '<em>AMNewYork</em> guy: <em>AMNewYork</em>! The free paper that covers New York like your security blanket!', 'Ronda McHenry', 1140019224)
    ,new Q('004190', 'Wednesday One-liners Aren\'t Quite Amiable', 'Crazy guy: Fuck that dude. He\'s a bitch tutti frutti!', '', 1137650458)
    ,new Q('004035', 'Wednesday One-liners for Bloodhounds', 'Chick on cell: I guess it\'s must be a cultural thing. I mean, maybe it doesn\'t smell <em>to them</em>.', '', 1136383214)
    ,new Q('003545', '\"Fine, but I compound interest daily.\"', 'Hobo: I need money for food.<br />\nGuy: Me too, mind if I borrow some from your cup?', '', 1133892012)
    ,new Q('003659', 'The Classy Ladies of Wednesday One-liners', 'Chick: It\'s so annoying! All of my friends really <em>hate</em> me!', 'Stephie Russell', 1133424014)
    ,new Q('003597', 'Wednesday One-liners v. Wade', 'Chick: Every month my uterus weeps--weeps!--at not being pregnant!', 'daleth93', 1132790440)
    ,new Q('003275', 'Wednesday One-liners Prefer Metro', '<em>AMNewYork</em> guy: <em>AMNewYork</em>! It\'s gonna start raining again if you don\'t take some <em>AMNewYork</em>!', 'nick', 1130342405)
  ])
  ,new S('27th & 3rd', 40.74134, -73.98132, 27, [
    new Q('004986', 'Wednesday One-liners Will Cost You', 'Salesgirl: Oh, I\'ll give him a discount, all right. The \"you\'re-a-thorn-in-my-side-now-just-buy-a-couch-already\" discount!', '', 1144245632)
    ,new Q('004565', 'Wednesday One-liners Got Late Night Munchies', 'Man on cell: I was just hoping they would let me eat it while I got a lap dance.', 'pete f.', 1140681647)
    ,new Q('004112', 'Wednesday One-liners for Noah', 'Guy: I know a lot of people who hate the brontosaurus stampede because they think it\'s too, you know, fake.', 'AWAG', 1137038418)
  ])
  ,new S('33rd & 7th', 40.75031, -73.99111, 0, [
    new Q('003962', 'Wednesday One-liners for Jung', 'Crazy guy: Liza Minnelli is incapable of love! Liza Minnelli is incapable of love!', '', 1135814443)
    ,new Q('003956', 'The Politics of Wednesday One-liners', 'Man: They\'ll just use your signature to get more people out of the country! That\'s why I never sign no petitions, they\'ll use your name and you will never know! If it is so bad in their country, why don\'t they go to United Nations?', '', 1135764057)
    ,new Q('003901', 'Remember That Whole Strike Thing?', 'Cop on megaphone: There is no transit strike in Boston, Philadelphia, or Washington DC. If you would like to get away from the strike, Amtrak entrance is at 33rd and 8th. For true New Yorkers, enter LIRR here. It\'ll be over soon, folks.', '', 1135303233)
  ])
  ,new S('2nd Avenue station', 40.72358364851732, -73.99077415466309, 1, [
    new Q('004810', 'Where Are They Now?: Evan Dando', 'Man #1: This subway smells like citrus fruit.<br />\nMan #2: Yeah, Mr. Lemonhead got killed here.<br />\nWoman: I peed on his face once.', 'Tourist in Town', 1143748807)
    ,new Q('004858', 'Wednesday One-liners Lost Their MetroCard', 'Old lady: Gentrification? What they need to do is gentrify the subways!', '', 1143072006)
    ,new Q('004576', 'Hobo Hits Bottom', 'Hobo: Do you have any spare change?<br />\nGuy #1: No.<br />\nHobo: Fuck you, you fuckin\' faggot.<br />\nGuy #2: Actually, he\'s the straight one, and you should be nicer if you expect people to give you money.<br />\nHobo: Fuckin\' faggot, you ain\'t got nothin on me!', '', 1142049658)
    ,new Q('004624', 'Wednesday One-liners Read Out', 'Guy: Yeah, after I slept with her brother\'s boyfriend, it got kinda awkward.', 'Hannah E-R', 1141214414)
    ,new Q('004560', 'Wednesday One-liners Like Cans of Beans', 'Hobo: Well, mathematically speaking, I\'m fucked.', '', 1140645642)
    ,new Q('004312', 'Priapic Wednesday One-liners', 'MTA guy: I said, \"When I get home I just tell her to sit on my dick!\"', '', 1138795214)
    ,new Q('003960', 'Wednesday One-liners M.D.', 'MTA guy: So my friend\'s wife left him for another man. What\'s he do? He smokes crack until he has a heart attack and dies.', 'Brian', 1135800048)
    ,new Q('003778', '\"This train will be going express. Next stop: Hell.\"', 'Speaker: Hello?<br />\nGuy: We\'ve been waiting for like an hour. Any trains coming?<br />\nSpeaker: Hold on, let me see...Hello, anyone there?<br />\nGuy: Yeah, we\'re here. There any trains coming?<br />\nSpeaker: There\'s an police investigation at Broadway. I think someone got pushed onto the tracks and run over.<br />\nGuy: But are there any trains coming?', 'Mikey J.', 1135360855)
    ,new Q('003890', 'Wednesday One-liners Sit on It', 'Chick: So I told my brother that he was a complete asshole,<br />\nbecause...you know, I\'m trying to be, like, sympathetic.', '', 1135159202)
    ,new Q('003491', 'Wednesday One-liners Aren\'t the Sharpest Knife', 'Chick: Yeah, this book, <em>Lions and Witches</em> and shit; I like to read weird shit and send it to my boyfriend in jail.', '', 1132192818)
    ,new Q('003275', 'Wednesday One-liners Prefer Metro', '<em>AMNewYork</em> guy: <em>AM Metro</em>...<em>AM Metro</em>...If you\'re getting evicted, read all about it. <em>AM Metro</em>, right here.', '', 1130342405)
  ])
  ,new S('Washington Square West', 40.73118, -73.99942, 12, [
    new Q('005141', 'Wednesday One-liners Paging Hugh Laurie', 'Fruit-lover: We can damn near make blind people see and we don\'t have an orange peeler?!', 'Sherri Lysy', 1146052832)
    ,new Q('005114', 'Wednesday One-liners for That Slither Lady', 'Queer on cell: Just because she\'s heinous doesn\'t mean I\'m not trying...Well, she weighs more, than, like, me...It\'s her attitude that makes her heinous, though.', 'ldbren', 1145476820)
    ,new Q('003750', 'Wednesday One-liners Are Stuffed', 'Hobo: Don\'t you modern peoples know that peanut butter sandwiches be yesterday\'s news?', 'Danielle Devine', 1134007215)
  ])
  ,new S('Canal & Broadway', 40.71938, -74.00189, 4, [
    new Q('005115', 'Wednesday One-liners Already Miss QAF', 'Hag: Well, tonight I\'m either hanging out with fags or lesbos.', 'red hed', 1145484053)
    ,new Q('004779', 'Wednesday One-liners See No UHO Money', 'Hobo: VCRS are history man, it\'s all about DVDs.', 'Marilyn Hayward', 1142467239)
    ,new Q('003864', 'Clean Yet Dirty (NYC Short Stories)', 'Teen girl #1: She once said to me, \"I was thinking about us kissing in the shower.\"<br />\nTeen girl #2: I hope you were wearing clothes.', '', 1137168028)
    ,new Q('003632', 'Those Are Totally Knockoffs', 'Bags woman: Ladies...Gucci, Prada, Louis! Ladies... <br />\nHot dog guy: Ladies, get your Gucci hot dogs here...Prada hot dogs!', 'Lori', 1134306016)
    ,new Q('003127', '\"Let me speak to your manager!\"', 'Hobo: Got any change?<br />\nGuy: Man, get a fucking job.<br />\nHobo: I got a fucking job, bitch!', '', 1130270423)
  ])
  ,new S('88th & Lexington', 40.78078, -73.95463, 21, [
    new Q('004996', 'Wednesday One-liners Eat Wedding Cake', 'Girl on cell: I swear to God, I\'m cursing their wedding day! This year was supposed to be about me...I don\'t care if it\'s my sister, <br />\nMom!', '', 1144310418)
  ])
  ,new S('Office, 39th between 8th & 9th', 40.75592, -73.99262999999999, 14, [
    new Q('003846', 'A Long, Rambling, Incoherent Scream', 'Manager guy: You looking for the perfect bag now?<br />\nDirector lady: There\'s nothing festive. I don\'t want to be seen walking with a Duane Reade bag. It screams beggar.', 'Frank I', 1134921624)
  ])
  ,new S('9th Street & 2nd Avenue', 40.72918, -73.98726, 1, [
    new Q('003586', 'Here\'s to Another Overheard Year!', 'Wheelbo: Happy new year! Happy new year!...<em>Fuck your mother</em>!', 'Eric', 1136109611)
  ])
  ,new S('Bleecker & Macdougal', 40.72915, -74.0012, 12, [
    new Q('005649', 'Wednesday One-Liners Say Goodbye to the Little White Men', 'Girl to sailor: Well, without your hat you\'re fcking ugly!', '', 1149069632)
    ,new Q('005633', 'Her Mane Is Obviously Fake', 'Dad: What are you going to name your new horse, honey?<br />\nLittle girl with My Little Pony: Skankbag!', 'Michelle<br />', 1148961632)
    ,new Q('005400', 'It\'s the Appalachian Trail, Now Take a Hike', 'Guy #1: So, is that Central Park over there? [points to a particularily wooded area across 6th avenue]<br />\nGuy #2: Nope.<br />\nGuy #1: So then it\'s Union Square, right?<br />\nGuy #2: Nope, it\'s neither.<br />\nGuy #1: So basically, those are just a bunch of trees?<br />\nGuy #2: Yup.', '', 1147399232)
    ,new Q('003589', 'Wednesday One-liners Got a Book Deal', 'Dude: I don\'t really like to read books, because then what if they make it into a movie and then you\'ve spoiled the movie?', 'oh miss lauren', 1132747258)
    ,new Q('002937', 'Girl #1 for Senator!', 'Girl #1: So he kept asking me to have sex last night.<br />\nGirl #2: Did you?<br />\nGirl #1: <em>No</em>, I told him, \"Look, I will not have sex with you. If you want a blowjob I will do that, but I will not have sex with you.\"...I mean what is a blowjob? Nothing at all.', '', 1128841249)
  ])
  ,new S('18th & Park', 40.73719, -73.98869, 13, [
    new Q('005461', 'What a Bitch', 'Girl on cell: And then she was all upset cuz she had gotten raped! [laughter] I know, well duh, what did she expect acting like that? Everyone knows you don\'t  take your dog to a dog park right after it ends its period!', 'Jen<br />', 1147788032)
    ,new Q('004630', 'Wednesday One-liners Subway Scenes', 'B&T chick: I\'m not part of the bridge and tunnel crowd. I take the PATH train in.', '', 1141264850)
  ])
  ,new S('5th Avenue & 11th Street', 40.73403, -73.99506, 12, [
    new Q('004995', 'Wednesday One-liners Bring It', 'Man: Ouch! Don\'t bite me. I\'ll put you in the microwave.', '', 1144288852)
  ])
  ,new S('42nd & Park', 40.75207, -73.97758, 16, [
    new Q('005568', 'Wednesday One-liners Behind Bars', 'Woman on cell: So, your man coming with you tonight, or he still locked up?', 'June L.', 1148522432)
    ,new Q('004790', 'Think Chaim Pocket', 'Tourist dude: What\'s a...knish?<br />\nTourist chick: I think it\'s like...a Hot Pocket?', 'JayBee', 1143525601)
  ])
  ,new S('96th & Broadway', 40.79459, -73.97169, 18, [
    new Q('005869', 'How Hollywood Hurts Our Youth', 'Kid on stool: Mom, can I jump off and be Naaaaaaacho?<br />\nMom: You already broke your arm. You can\'t be Nacho right now.', '', 1150560032)
    ,new Q('004457', 'Wuxtry! Wednesday One-liners', '<em>AMNewYork</em> guy: Motherfuckers, you betta check this shit out! Free paper, <em>AMNewYork</em>!', 'Lauren Lerner', 1140019224)
    ,new Q('004336', 'Then Came 40 Punches, Plus One for Luck', 'Hobo: Hey, man. I got your back.<br />\nGuy: Got my back on what?<br />\nHobo: I saw you park your car.<br />\nGuy: What are you, a fucking valet?<br />\nHobo: Listen, man. You got some change? I just wanna buy me a beer. I ain\'t gonna lie to you...Today\'s my birfday!', 'Dirty Mike', 1139875250)
    ,new Q('004262', 'The Wednesday One-liners Monologues', 'Chick on cell: I just described my pussy as \"vagically delicious,\" and I wanted to leave you a message because I thought you would appreciate that.', '', 1138183246)
  ])
  ,new S('42nd & 6th', 40.75482, -73.98412, 16, [
    new Q('005957', 'You Could Import Them', 'Salad wench: So, you got any kids?<br />\nQueer: Honey, what I do don\'t make babies.', '', 1151172032)
    ,new Q('004558', 'Wednesday One-liners for the Tots', 'Guy on cell: Stop calling him a nino! He got hair on his balls!', 'shmarls', 1140631248)
    ,new Q('003324', 'He\'s Not Allowed to Give Directions on Saturday', 'Tourist guy: Excuse me, do you know how to get to the PATH train?<br />\nHasidic man: Are you Jewish?<br />\nTourist guy: No.<br />\nHasidic man: Ask the policeman.', 'B. McClintock', 1131843605)
  ])
  ,new S('5th Avenue & 9th Street', 40.73284, -73.99592, 12, [
    new Q('005662', 'Wednesday One-Liners, the City and the Country', 'Twentysomething guy: The quality of life here is so bad...I mean, if you enjoy  drinking all night and having random sex, you\'ll like living in New York.', '', 1149134432)
    ,new Q('004444', 'It\'s Not Luck, It\'s Skill', 'Hobo: Can you spare some change? I need some money to get inebriated tonight. <br />\nGirl: I need all of the money I have to get myself inebriated tonight! <br />\nHobo: Well good luck, bitch!', 'Gwyneth', 1141732846)
    ,new Q('004380', 'Hmm, Hadn\'t Thought of It That Way Before', 'Guy #1: Dude, all this Groundhog Day shit is bullshit. It is impossible for something to not have a shadow. All things that move have shadows. If it don\'t move, then it don\'t have a shadow. Groundhog Day is bullshit.<br />\nGuy #2: Dude, you\'re a dumbass. Only living things have shadows.', 'Kori Hensell', 1139364041)
  ])
  ,new S('Office, 40th & 3rd', 40.74948, -73.97539, 3, [
    new Q('004989', 'Rapunzel\'s Wednesday One-liners', 'Chick: You know what I wish they had? Febreze for hair.', '', 1144267226)
    ,new Q('004695', 'Wednesday One-liners Love Jim Beam', 'Chick on phone: They really need to have places where you can get drunk with your pet. That would be so much fun.', '', 1141833618)
    ,new Q('004557', 'Chuck Woolery\'s Wednesday One-liners', 'Lady on phone: Yes, I\'m having dinner with him tonight...Really?...He didn\'t say anything about handcuffs.', '', 1140624001)
    ,new Q('003659', 'The Classy Ladies of Wednesday One-liners', 'Girl: Oh, I don\'t really feel bad. I just think it\'s good to say that sometimes so you don\'t look like an obnoxious girl.', '', 1133424014)
  ])
  ,new S('Morton between Greenwich & Hudson', 40.730999999999995, -74.00737000000001, 11, [
    new Q('003595', 'Wednesday One-liners Come Together', 'Girl on cell: Oh my god! Some old man just told me, \"Together, we will fight the world!\"', 'Jon Wetter', 1132776044)
  ])
  ,new S('Madison between 63rd & 64th', 40.766395, -73.96935500000001, 21, [
    new Q('003733', 'Perfume No. 5 to 10', 'Teen girl: You know that dream I keep having where I kill you on Madison Avenue? I think it\'s coming true.<br />\nMom: Oh look, the Chanel store!<br />\nTeen girl: Uh oh.', '', 1134943200)
  ])
  ,new S('7th & Bleecker', 40.73229, -74.00358, 11, [
    new Q('004320', 'Wednesday One-liners Watch VH1', 'Old woman: Oh, is Lil\' Kim in jail?', 'Sarah Doogs', 1138838409)
    ,new Q('003746', 'Wednesday One-liners: It\'s All About Location', 'Guy: Cunt. I\'m too hung over for your B&T shit.', '', 1134014456)
    ,new Q('003480', 'User ID: Golden_Gurlz', 'Guy #1: Yo, them pants is hot, where\'d you get \'em?<br />\nGuy #2: Muthafuckin\' eBay, nigga!', 'Eve\'s droppings', 1133186410)
  ])
  ,new S('45th between Broadway & 8th', 40.758565000000004, -73.98701, 16, [
    new Q('004266', 'Wednesday One-liners Build Up an Appetite', 'Chick on cell: This day is going by <em>so</em> fucking slow; it\'s only 1:30PM...My eye is going to fall out! So what do you want for dinner again?', '', 1138233607)
  ])
  ,new S('45th & 10th', 40.76154, -73.9941, 14, [
    new Q('004876', 'Tom Petty Has Some Ominous Backstory', 'Guy #1: Someone shouldn\'t be naked in your apartment if you don\'t know his name.<br />\nGuy #2: Unless he\'s a refugee.', 'Nick Salvato', 1144324831)
  ])
  ,new S('Hudson & West 11th', 40.73584, -74.00595, 11, [
    new Q('003956', 'The Politics of Wednesday One-liners', 'Old man: The way the world is set up today, you\'re Canadian.', 'King of All White Boys', 1135764057)
  ])
  ,new S('Whitehall & State', 40.70242, -74.01288, 5, [
    new Q('003767', 'Someone Get Monty Hall a Sweater', 'Vendor guy: Just buy it! Come on...<br />\nTourist guy: Chill out, we\'re thinking.<br />\nVendor guy: All right, all right. Half price? <em>All right</em>? Half price, now will ya just buy it?<br />\nTourist guy: Half? How come?<br />\nVendor guy: Because it\'s fucking 30 degrees, man, it\'s cold, I wanna <br />\ngo <em>home</em>! Buy it!', '', 1135281619)
  ])
  ,new S('Wendy\'s, 55th & 8th', 40.76541, -73.98383, 16, [
    new Q('005340', 'Calista Flockhart Must Feel So Forgotten', 'Chick #1: Well, no, you look better now, but you were never that skinny, I mean, I never looked at you like \"she needs a sandwich\", like...<br />\nChick #2: No, but I haven\'t gained any weight, really; my clothes still fit.<br />\nChick #1: But you were never grotesque, like what\'s her name.<br />\nChick #2: Nicole Ritchie.<br />\nChick #1: Yeah.', 'Duncan Pflaster<br />', 1146996032)
    ,new Q('003956', 'The Politics of Wednesday One-liners', 'Jamaican woman:  I can say whatevah da damn hell I want, dis is a free country! See dat\'s da problem wit dis country, don\'t no one use their voice! You got to use your voice!', '', 1135764057)
  ])
  ,new S('2nd Ave, between 4th & 5th', 40.726479999999995, -73.98921, 1, [
    new Q('005296', 'Wednesday One-Liners Should Be in a Museum', 'Guy: And he just kept talking about masturbating in the Guggenheim.', 'Bradford', 1147860032)
  ])
  ,new S('56th & Lexington', 40.76024, -73.96963, 16, [
    new Q('003240', 'Tarantino\'s Remake of The Sixth Sense', 'Guy: Chicago is obviously a better city than New York. New York is Tourist Central.<br />\nGirl: That\'s not true, there are still parts of the city that are untainted.<br />\nGuy: Yeah, like where?<br />\nGirl: I dunno, like, some places I still see a lot of graffiti and black people.', 'Becca', 1131292833)
  ])
  ,new S('50th & 5th', 40.75853, -73.97723, 16, [
    new Q('004009', 'The Getaway Vehicle Had 1 Horsepower', 'Chick: How much for a ride? <br />\nHansom guy: 45 dollars.<br />\nLady cop: This is the <em>last time</em> I\'m going to tell you, get off this street with this horse. If I see you one more time on this street I\'m taking the horse and I\'m locking you up! You hear me? I\'ll take this horse and I\'ll lock you up!<br />\nHansom guy: Ha, ha! Fuckin\' bitch.', '', 1137384050)
    ,new Q('003834', 'Wednesday One-liners Don\'t Look So Hot', 'Guy: Don\'t worry, I\'ve been turned down by girls much better-looking than you.', '', 1134619236)
  ])
  ,new S('Horatio & Eighth', 40.73874, -74.00342, 11, [
    new Q('004644', 'He Was Listening to The Who', 'Hobo: Nickel?  Dime?<br />\nYuppie guy: I can\'t hear you, asshole.', '', 1142409623)
  ])
  ,new S('Fulton & Nassau', 40.71022, -74.00775, 5, [
    new Q('005088', 'How Were Your Holidays, New York?', 'Chick on cell: Dude, let\'s go to church before we get fcked up. It\'s fckin\' Easter, you know!', '', 1145304034)
    ,new Q('003855', 'Presenting the New Catchphrases for 2006', 'Girl on cell: No, with the presents and the whatever, he is stressing me out! I mean, it\'s sheer stupidism. Or whatever.', '', 1136120422)
    ,new Q('003575', 'Probably at His Krispy Kreme Office', 'Lawyer guy: Don\'t worry about that, ma\'am. We\'re gonna make sure you don\'t have to worry about money for a long, long time.<br />\nHobo: Shit, you got some money? Let me hold a million dollars.<br />\nLawyer guy: Ha, ha, ha! No thank you, sir.<br />\nHobo: You ain\'t shit, nigga. Fuck you and your gay-ass hair. Where were you when I broke my leg, <em>Mista Lawya</em>?', 'Matt M', 1134100803)
    ,new Q('003391', 'I\'m Thankful I\'m a New Yorker', 'Girl #1: Where\'s Broadway?<br />\nGirl #2: Well, Broadway runs like the entire city from North to South.<br />\nGirl #1: But where\'s the part that has the famous stuff, like <em>Cats</em>?<br />\nGirl #2: Oh, I have no idea.', 'Velzzy', 1132869618)
  ])
  ,new S('88th & Columbus', 40.78777, -73.97122, 18, [
    new Q('003352', 'Wednesday One-liners for English Class', 'Old lady: Hussein lived in my house for a year! To learn English!  And he couldn\'t even fucking learn English!', '', 1130997600)
  ])
  ,new S('6th & C', 40.72349, -73.97928, 1, [
    new Q('004852', 'Wednesday One-liners Are Unclean...Unclean!', 'Girl on cell: That\'s not cleansing. Not eating anything ever is not a way of cleansing your body.', 'N. Dixon', 1143050438)
    ,new Q('004109', 'It\'s a Late Wednesday One-liners Lunch', 'Guy: I hate when people swallow their gum. My mom does that. You know, when you swallow your gum, it gets stuck in your heart.', '', 1137024012)
  ])
  ,new S('14th between 1st & 2nd', 40.73184, -73.98376, 1, [
    new Q('004850', 'Wednesday One-liners for Backdoor Beauties', 'Guy: What the hell did you leave for? She wants you to do her in the butt. Go back there and f_ck her in the ass!', 'Kevin A', 1143043252)
    ,new Q('003502', 'Wednesday One-liners for the Mishpokhe', 'Woman on cell: He\'s 19 and has 3 kids. One kid is 3 months and the other is 4 months.', 'Johnny Twisto', 1132207237)
  ])
  ,new S('7th between 42nd & 43rd', 40.756365, -73.986725, 16, [
    new Q('004773', 'Reach Out & Touch Wedneday One-liners', 'Girl: I\'m not saying touching a motherfucker\'s foot ain\'t intimate, but...', '', 1142438449)
  ])
  ,new S('4th & A', 40.72425, -73.98484, 1, [
    new Q('005960', 'Rosebuds or Cherry Blossoms?', 'Girl #1: Oh, look at the beautiful flowers.<br />\nGirl #2: They look like a man\'s asshole!', 'mikey', 1151337632)
    ,new Q('004699', 'Wednesday One-liners for the Lookers', 'Cashier chick:  My eyes were burning he was so ugly, I swear.', 'Kira', 1141855214)
    ,new Q('003984', 'Attack of the iPod People (NYC Short Stories)', 'Hobo: Can you spare some change?<br />\nGuy: No, sorry, I just spend my last penny on this iPod nano.', '', 1137096000)
    ,new Q('003890', 'Wednesday One-liners Sit on It', 'Guy: Aw, man. I rolled up a bunch of weed and shoved it up my asshole. It got me through airport security, but it was a <em>bad</em> idea.', '', 1135159202)
    ,new Q('003357', 'Wednesday One-liners Are Pre-Med', 'Woman on cell: Can you do me a favor? Just go over there and see if his pupils are like pinpoints. And if they are, tell him I\'m going to come over and beat the shit out of him.', 'Kristi', 1130976023)
    ,new Q('003051', 'Someone Needs to Hire a Closet Organizer', 'Woman: Okay, maybe your cousin\'s not gay...but he\'s more in touch with his inner faggot than any straight man I\'ve ever known.', '', 1129802425)
  ])
  ,new S('37th & 3rd', 40.74761, -73.97673, 3, [
    new Q('003313', 'It\'s Pronounced Schwartz (Happy Halloween!)', 'Drunk girl #1: So I think I am going to go as something I totally hate for Halloween.<br />\nDrunk girl #2: What are you going as?<br />\nDrunk girl #1: I think I am either going as a Jew or a Chinese person <br />\nor a tourist.<br />\nDrunk girl #2: Hey, you know I am Jewish, don\'t you?<br />\nDrunk girl #1: I don\'t care, I am definitely going as a Jew.<br />\nDrunk girl #2: Shots?', 'Brian McCormick', 1130767232)
  ])
  ,new S('Starbucks, 17th & Broadway', 40.7371, -73.99035, 13, [
    new Q('005809', 'Is It Straight?', 'Guy #1: My ass is killing me. <br />\nGuy #2: Really? Mine feels alright.<br />\nGuy #1: Well, you weren\'t doing what I was doing all day. It feels like someone ripped my ass off and stapled it back on.', 'ericaS', 1150200032)
    ,new Q('004623', 'Hair Today, Wednesday One-liners', 'Chick: <em>Omigod</em>...You should see the hair in my armpits.', '', 1141228829)
    ,new Q('004561', 'Wednesday One-liners for Fuck Machines', 'Guy on cell: So is this like a regular orgy, or do I need to bring a sleeping bag?', '', 1140652837)
    ,new Q('004011', 'Something\'s in the Air (Happy VD!)', 'Chick #1: So anyway, Happy Valentine\'s Day!<br />\nChick #2: Yay, right, I know.<br />\nChick #1: Well eat a lot of pussy for me!', 'Tuesday Girl', 1139911212)
    ,new Q('004157', 'Just Rub the Big Toe', 'Girl #1: Your room always smells so good, like coconuts and coffee.  It reminds me of the Caribbean. What kind of candles do you have?<br />\nGirl #2: That\'s not from a candle. The coconut is from the foot cream I use so my feet don\'t stink and the coffee smell is there because I spilled some on my carpet and never cleaned it up.<br />\nGirl #1: Oh...where can I get the foot cream, then?', '', 1138507235)
  ])
  ,new S('87th between 3rd & Lexington', 40.779825, -73.954285, 21, [
    new Q('005046', 'Wednesday One-liners Are Hired', 'Chick: I\'d rather lick that man\'s ass than go to work today.', '', 1144879252)
  ])
  ,new S('CompUSA, 37th & 5th', 40.75032, -73.98315, 3, [
    new Q('003176', 'Wednesday One-liners Rough It Up', 'Counter girl: Yo Charlie, if you touch me again I\'m gonna stab you in the head.', '', 1129773616)
  ])
  ,new S('42nd & 5th', 40.75346, -73.9809, 16, [
    new Q('005831', 'Wednesday One-liners, the Morning After', 'Chick on cell: I just fell asleep!  It\'s not like I\'m seeing other people.', 'Cresny', 1150308032)
    ,new Q('004989', 'Rapunzel\'s Wednesday One-liners', 'Guy: You know Spring is here when I shave my balls.', '', 1144267226)
    ,new Q('004777', 'Wednesday One-liners Lunch Hour', 'Dude: So I was looking in the freezer, right? And I pulled out this chicken that expired in 2004. The date on it was like, April 2004. But that\'s the thing about fresh chicken that you get wrapped up at the store. There\'s no frozen date, you know?', '', 1142460031)
    ,new Q('004295', 'Where Are They Now?: Susanna Hoffs', 'Chick: Do you know why I can\'t walk on this side of you on the sidewalk?<br />\nGuy: Why?<br />\nChick: You\'re gonna laugh...<br />\nGuy: I\'ll laugh no matter what.<br />\nChick: \'Cause this is not my side of the bed.<br />\nGuy: What? <br />\nChick: If we were laying on my bed I wouldn\'t be on my side.<br />\nGuy: <em>What</em>? Yes you would. If we\'re laying on our backs this would be your side of the bed.<br />\nChick: But I sleep on my stomach... <br />\nGuy: We\'re walking in the street, there is no bed!', 'King Porky21', 1140170447)
    ,new Q('003620', 'Here\'s Sam Champion with the Overheard Forecast', 'Girl: See, New York City doesn\'t get windy because all of the buildings block the wind. <br />\nGuy: Actually, all of buildings create wind tunnels. <br />\nGirl: Is that why it\'s so windy?', '', 1134410412)
    ,new Q('003598', 'Wednesday One-liners Can\'t Dress Correctly', 'Woman: Is this NYU?', '', 1132797610)
    ,new Q('003360', 'No Soup for Our Editor (A NYC Short Story)', 'Note: The Nazi was sold out of crab bisque, and all of the meaty soups except for mulligatawny.', '', 1131012051)
  ])
  ,new S('Hi-Life, 83rd & Amsterdam', 40.78572, -73.97644, 18, [
    new Q('004098', 'Christ, What \"Passion\"', 'Chick: You\'ve had the greatest sex with me. Right? <br />\nGuy: Yeah. I guess...', 'Hilla', 1137999630)
  ])
  ,new S('78th & 2nd', 40.77265, -73.95555, 21, [
    new Q('003889', 'Wednesday One-liners for Chosen People', 'JAP on cell: I did not spend five years at Temple Beth Harel to be known as \"The Happy Jew\"!', 'Johnny Tremain', 1135188041)
  ])
  ,new S('Commerce Bank, 42nd & 9th', 40.75841, -73.99265, 14, [
    new Q('004195', 'Women Have Needs, Wednesday One-liners', 'Girl on Nextel: Oh baby, you shoulda woke me up...We coulda done the do again.', '', 1137628851)
  ])
  ,new S('42nd & Madison', 40.7528, -73.97932, 16, [
    new Q('005242', 'It Works on Her Kids', 'Woman #1: And who the hell told you that junk!<br />\nWoman #2: It was Bessie.<br />\nWoman #1: Bessie! Oh I\'m gonna <em>slap</em> that bitch to <em>sleep</em>!', 'Ozzy VonHammer', 1146326432)
    ,new Q('004259', 'Wednesday One-liners or Best Offer', 'Girl: Yeah, so I was talking to the guys about getting a pull-out couch so I could stay over, but then Max said I would have to give sexual favors for money if I wanted to stay there.', 'John Sammos', 1138204822)
    ,new Q('003273', 'Last Call for Wednesday One-liners', 'Suit on cell: I\'m drunk but not as think as you drunk I am.', 'Tod Gimbel', 1130328009)
  ])
  ,new S('25th between 10th & 11th', 40.749565, -74.00467, 0, [
    new Q('003653', 'Incomplete Wednesday One-liners', 'Chick on cell: So the Rogaine worked on your eyebrows, right?', '', 1133352006)
  ])
  ,new S('Brooklyn Heights', 40.69140956667794, -73.99339199066162, -1, [
    new Q('005045', 'The Science That is Wednesday One-liners', 'Chick: It\'s awesome! So they really make you take it out to measure it?', 'da rat', 1144872012)
    ,new Q('004701', 'Wednesday One-liners Believe in Holy Ghosts', 'Girl: Please, I friended God on MySpace last night.', 'Lucy', 1141862435)
    ,new Q('004529', 'The Truth\'s Commercials Finally Try Subtlety', 'Hobo: So I beat her ass good! I told her, don\'t you ever say you\'ll leave me!...Hey man, you got an extra cigarette?<br />\nSuit: Nope, last one.<br />\nHobo: Come on, man, why can\'t we all love each other in unity? It don\'t cost much.', '', 1141498838)
    ,new Q('004624', 'Wednesday One-liners Read Out', 'Man: Girl you got to get yourself a life. I\'ve got a life. And, I got your man on top of it.', '', 1141214414)
    ,new Q('004555', 'Wednesday Ob/gyn-liners', 'Guy: Man, I think I\'ve licked my last cunt.', 'Josh Berry', 1140609625)
    ,new Q('004189', 'Wednesday One-liners Drop It Like It\'s Hot', 'Man on cell: Yeah man, the doctor said she\'s only 36 weeks pregnant, but the baby is at 40 weeks. She could drop that thing right quick.', 'Danielle Ulman', 1137578418)
    ,new Q('003937', 'Always Bragging About the Log Cabin', 'Hobo: Do you have some change for a homeless man?<br />\nSuit: Sorry.<br />\nHobo: Fucking faggot!<br />\nSuit: I\'m a fucking fag with a warm house.', '', 1136725244)
    ,new Q('003697', 'The Bitch of Brooklynwald', 'Chick #1: Is that the guy you were with last weekend?<br />\nChick #2: Keep your voice down. And please don\'t remind me.<br />\nChick #1: Why? He\'s not bad.<br />\nChick #2: He\'s not even law school hot. I\'ve <em>so</em> had to lower my standards for this group.<br />\nChick #1: I\'ve just started going out with Jewish guys.<br />\nChick #2: Ugh. Please. We\'re only here for another year and a half...I can hold out.', 'iiams', 1135130436)
    ,new Q('003748', 'Wednesday One-liners Have Language Problems', 'Tween girl: It\'s been long enough. They\'d have expunged that stuff from your record. That means they erase it.', 'Adam Nathan', 1133992814)
    ,new Q('003593', 'Wednesday One-liners Stand for Good Hygiene', 'Chick on cell: I\'m on my way...I didn\'t have time to bathe though, but I guess then it\'ll be more fun.', 'Da rat', 1132819244)
    ,new Q('003493', 'That\'s the Ticket, Wednesday One-liners', 'Bike guy: Hey, you ever gotten a ticket for going anal?', '', 1132149600)
    ,new Q('003147', 'Sadly, He Means His Boss', 'Dude #1: Women today, they\'re just like men. They\'re just more...upfront about things. They\'ll tell you what they want, and they aren\'t shy about it.<br />\nDude #2: Yeah?<br />\nDude #1: Yeah! And it\'s great, because it means I don\'t have to work as hard.', '', 1130580052)
    ,new Q('002908', 'When You\'ve Watched 30 Minutes of CBS', 'Cop: If the meter is broken, you can park there for an hour.<br />\nDriver guy: But how do you know when it\'s been an hour?', 'Jennifer Morehead', 1128657600)
  ])
  ,new S('Houston & 1st', 40.72296, -73.98852, 1, [
    new Q('004176', 'There Goes the Lady Bic', 'White guy: So, do you have any plans for this evening?<br />\nAsian girl: Yeah, being angry!<br />\nWhite guy: Oh, that sounds good.', 'Kristin', 1138780805)
    ,new Q('004262', 'The Wednesday One-liners Monologues', 'Hipster girl: Just tell him you have genital sores.', '', 1138183246)
    ,new Q('004043', 'Wednesday One-liners Love Bathroom Humor', 'Chick: I can\'t believe I\'m 23 and I still always pee on my hand.', '', 1136419215)
    ,new Q('003232', 'Let Me Guess: La Boheme', 'Hobo #1: You know what, man?<br />\nHobo #2: What\'s up?<br />\nHobo #1:  Yo, I balls out love opera.', 'Jonah Eller-Isaacs', 1131156046)
  ])
  ,new S('30th & 8th', 40.74968, -73.99532, 0, [
    new Q('004787', 'Deal or No Deal?', 'Vendor guy: Yo man, you 420 friendly? Here, here; here\'s my card. Call me up.<br />\nGirl: <em>Uh</em>, yeah sure. Can I get my change?<br />\nVendor guy: Oh, right, right. Sure. <br />\nDude: Hey man, can I get $4 worth of weed?<br />\nVendor guy: What? Man. What?<br />\nDude: $4 of weed, man.<br />\nVendor guy: What are you talking about, man? I don\'t sell weed. What kind of man do you take me for? Buy $4 of weed. man. I\'m offended. Especially in front of this beautiful girl. Asking for weed. Man, what\'s yo problem?', 'Justine', 1142532031)
  ])
  ,new S('50th & 11th', 40.76585, -73.9946, 14, [
    new Q('004385', 'Call a Doctor, Wednesday One-liners!', 'Guy on cell: You need to go to a doctor! And you need to bring your wife! Because there are two assholes between the two of you!', '', 1139450418)
  ])
  ,new S('115th & Broadway', 40.80736, -73.96451, 20, [
    new Q('005660', 'Wednesday One-liners May Need a Catheter', 'Woman: So I told him, if that\'s the urethra you got the wrong hole.', '', 1149112832)
    ,new Q('005643', 'They Have to Work Harder to Screw You During the Summer', 'Female student: Do you guys have any empty boxes that I could possibly have?<br />\nClerk: No, I\'m sorry.<br />\nFemale student: What about all of those empty boxes over there?<br />\nClerk: We sell boxes, so we\'re not allowed to give out boxes for free.<br />\nFemale student: Okay. How much are the boxes you\'re selling?<br />\nClerk: Actually, we\'re sold out.<br />\nFemale student: Okay, if you don\'t have any more boxes for sale, can I have some of those empty boxes over there?<br />\nClerk: No.', 'djlindee<br />', 1149026432)
    ,new Q('003662', 'Wednesday One-liners Rifle Through the Trash', 'Hobo: Can you spare the love and help a brotha out? Even some change. I\'ll remember it...I\'ll remember you when I win the lottery. I\'ll come looking for you in my helicopter.', '', 1133402459)
  ])
  ,new S('Penn Station', 40.749988, -73.992201, 0, [
    new Q('006116', 'Wednesday One-Liners Are Potty Trained', 'Woman on cell: Did you just say that you had a dream where Gene Wilder peed in your closet? Like, Willy Wonka, pissing on your clothes? Okay, I just wanted to make sure I heard correctly.', 'baffled', 1153958400)
    ,new Q('006231', 'Wednesday One-Liners Have a History of Violence', 'Woman: It\'s not like someone put a gun to your head and told you to fuck her!', 'Cha', 1153360800)
    ,new Q('006006', 'The United Colors of Wednesday One-Liners', 'White guy on cell: You\'re Japanese.  You should like Swiss.', 'Lizzerd', 1151510400)
    ,new Q('005947', 'Before the Ceremony Last Week, She Was Latina', 'Guido: Ya know, you\'re very cute. <br />\nAsian chick: Um, thanks?<br />\nGuido: Wanna sit with me on the train?<br />\nAsian chick: No, I\'m good.<br />\nGuido: Can I getcha numba?<br />\nAsian chick: Uh, no, sorry. I just converted. I, um, only go out with Asians now.', '', 1151092832)
    ,new Q('005930', 'Wow, the Guy from the Romance Novels!', 'Kid behind a guy in a Fubu jersey: Dad, who\'s Fubu?<br />\nDad: That\'s the guy\'s name, son', '', 1151006432)
    ,new Q('005925', 'Wednesday One-liners Watch What They Eat', 'Girl on cell: I don\'t want to talk about your eating disorder every fucking time we talk!', 'mondo man', 1150948832)
    ,new Q('005821', 'Wednesday One-liners for Special Events', 'Woman walking alone in a wedding dress and veil, on cell: Yeah, I got kicked out.', 'yum', 1150927232)
    ,new Q('005909', 'Sounds Like an Average Saturday Night', 'Large black man on cell: So, I figured out what happened. Ebony was at the drug house with the first lesbian, but then that other lesbian that she stole two dollars from came. So that\'s where you came in. And....hey? Are you there? Mom? Mom?', 'Lauren Sneath', 1150812032)
    ,new Q('005870', 'Watch Out for Her Switchblade and Spicy Cooking', 'White guy: Is it true that Mexicans carry knives?<br />\nMexican girl: Shut up before I bust into a stereotype on your ass.', 'Sol', 1150567232)
    ,new Q('005846', 'I Once OD\'ed on Ben-Gay (True Story)', 'Suit on cell: So I got some of that topical headache medicine.  You know, the cream that comes in a giant chapstick tube so you just rub it on your head without getting it on your hands.  Well, I don\'t know if it worked.  I got so much of it in my eyes that I had to spend the rest of the night in the emergency room.', '', 1150401632)
    ,new Q('005710', 'Wednesday One-liners in Suits', 'Suit on headset:  You know, I have been so gassy lately.', 'yum', 1150322432)
    ,new Q('005767', 'She Said Stupid, Not Comatose', 'Teen girl #1: I am <em>so</em> in the mood to get drunk tonight...<br />\nTeen girl #2: Yea! Tonight is such a good drunk night.<br />\nTeen girl #1: I can\'t wait to be drunk!<br />\nTeen girl #2: I can\'t wait to be stupid!<br />\nTeen boy: You guys say that every night. And have I gotten into either of your pants? No.', '', 1149904832)
    ,new Q('005147', 'The Natural Wonder of Wednesday One-liners', 'Chick: There are so many homeless people around today. Like they\'ve come out of hibernation or something.', 'isabelle', 1149696032)
    ,new Q('005709', 'Maybe That Worked on Your Mormon Girlfriend', 'Skinny white guy:  I\'m like, really excited for that Israel parade.  Like, I think it will be a really nice experience for me.<br />\nJewish girl:  Mmhmm.<br />\nSkinny white guy:  No, I\'m serious.  I love Jews.  And like, I\'m not just saying it to get into your pants.', '', 1149472832)
    ,new Q('005565', 'Wednesday One-liners Are From Mars', 'Borderline-crying woman on cell: No I don\'t want to go to a fcking bar, I want to be with you, you asshle!', 'gladly single', 1148544032)
    ,new Q('005382', 'The Long Arm of Wednesday One-Liners', 'Man on cell: Yeah! So this guy is dead.  And they keep driving aruond like a bunch of knuckleheads.  Just ridiculous. Well...Yeah...Yeah...Yeah..I\'m gonna go now.  [looks around nervously]', 'anna b', 1147298432)
    ,new Q('005384', 'Wednesday One-Liners Love Entertainment Weekly', 'No one does. Man shakes his head in disappointment and keeps walking.', '', 1147284032)
    ,new Q('005342', 'Wednesday One-Liners, Mixed Messages', 'Chick: You either hate it or you love it. I\'m in between.', 'Rachel Katz <br />', 1147262432)
    ,new Q('005338', 'Single and Won\'t Press Charges?', 'Girl #1: Do you ever have one of those days where you just want to fck someone up?<br />\nRandom guy: I\'m single!', 'alice c.<br />', 1146981632)
    ,new Q('005221', 'Poor Word Choice', 'Guy #1: I just left a major deposit sitting in that toilet.<br />\nGuy #2: You didn\'t flush it?<br />\nGuy #1: It was an automatic flusher and nothing happened. There was a guy waiting to go in and I just gave him a sht-eating grin when I walked out. I mean, what am I supposed to do?<br />\nGuy #2: I wouldn\'t use the term \"sht-eating grin\" the next time you tell that story.', '', 1146196832)
    ,new Q('005223', 'I\'m Late for My Exorcism', 'Old lady: Hey, you know what time it is? You got a face so pretty, I swear I\'ll have to cut you if you don\'t tell me what time it is.<br />\nGuy: Five thirty.', 'Romanoff', 1146204032)
    ,new Q('005207', 'Wednesday One-liners Make History Come Alive', 'Amateur historian: The English people that lived on the Island respected her because she is Italian, and the English respect Italians because they respected the Romans.', '', 1146096032)
    ,new Q('005135', 'That Dude Was So Hung Up on Rome', 'Girl on cell: Well you know, when in Rome.  Who said that, was it Jesus? I think it was Jesus.', 'Nathalie', 1145606432)
    ,new Q('005088', 'How Were Your Holidays, New York?', 'Guy on cell: Yeah, is it Mother\'s Day or something?...Oh, I think it\'s either Mother\'s Day or my mom\'s birthday, and I wasn\'t sure which...Are you sure it\'s not Mother\'s Day? Because there\'s a lot of people walking around Penn Station carrying flowers.', '', 1145304034)
    ,new Q('005074', 'God Help Us All (Happy Easter!)', 'Old man #1: Do you know why a bunny is connected to Easter?<br />\nOld man #2: No.<br />\nOld man #1: It\'s because Easter is about fertility and rabbits are animals that are always copulating.<br />\nOld man #2: Huh, I never heard about that.<br />\nOld man #1: Think about it. On Easter, you have the bunnies and the bunnies have eggs and the eggs have children in them.', 'Amanda Matteis', 1145192427)
    ,new Q('005055', 'Ah, the Reverse Donkey Punch', 'Man #1: It was kind of weird, she was going down on me and then...Well...She stuck her finger in my butt.<br />\nMan #2: You\'re kidding me! I didn\'t realize that Beth was like that.<br />\nMan #3: So what did you do?<br />\nMan #1: What could I have done? It kinda weirded me out.<br />\nMan #3: Man, if my girl ever did that, I think I\'d punch her in the face.', '', 1145030454)
    ,new Q('005041', 'Wednesday One-liners Tip One Back', 'Girl: Yeah, but if we\'re gonna drink, then I need to get some tampons.', '', 1144843246)
    ,new Q('004792', 'The Dreaded E Cup', 'Guy #1: Yeah, and she had tits like eggplants.<br />\nGuy #2: And they were hairy?<br />\nGuy #1: Yeah, the hairs were like this long and black.<br />\nGuy #2: That\'s fcking sick.', '', 1143540019)
    ,new Q('004691', 'Where Are They Now?: Dr. Laura', 'Bag lady: Can you spare some change?<br />\nWoman: No, I\'m sorry.<br />\nBag lady: Is that your boyfriend? Lose him.', 'Husband.', 1143194445)
    ,new Q('004855', 'Wednesday One-liners by Peter', 'Girl: So we\'re goin\' at it and he starts screaming and runs out of the bedroom, and I like follow him and he\'s standing there in the kitchen with his dick in a glass of milk.', '', 1143086433)
    ,new Q('004771', 'One-liners Are Due on Wednesday', 'Girl on cell: ...And I was like, \"Good thing you think I\'m pregnant.\"', '', 1142424039)
    ,new Q('004598', 'Algebra?', 'Guy #1: Yo man, he ain\'t got no job and he don\'t take care of his kids.<br />\nGuy #2: I know, but he\'ll learn the hard way; we did.<br />\nGuy #1: He been to prison twice already; what else he got to learn?', '', 1142200808)
    ,new Q('004727', 'Homer and Apu Share All the Time', 'Guy #1: Did you know Bush agreed to share nuclear technology with the Indians?<br />\nGuy #2: Why do Indians need it? Oklahaoma is already a part of the US.<br />\nGuy #1: Dude, Indians as in citizens of India, a country in Asia.<br />\nGuy #2: I was never good at history.<br />\nGuy #1: You mean geography.<br />\nGuy #2: Asshole.', 'margaret', 1141920045)
    ,new Q('004701', 'Wednesday One-liners Believe in Holy Ghosts', 'Girl: I know you\'re not religious, but do you believe in dinosaurs?', '', 1141862435)
    ,new Q('004694', 'Wednesday One-liners by Athletes, for Athletes', 'Guy on cell: I don\'t care who you fuck, <em>fuck</em> the whole football team if that\'s what gets you going, just stop fucking my little brother, you fucking skank...Okay, I love you too, hon.', 'JR Valhalla', 1141826404)
    ,new Q('004544', 'We Also Cure Christianity and Body Lice', 'Queer #1: Overheard made me straight.<br />\nQueer #2: Huh?<br />\nQueer #1: Overheard in New York, the website?<br />\nQueer #2: I know what it is. How the fuck could it make <em>you</em> straight?<br />\nQueer #1: Well, there was this <a href=\"http://www.overheardinnewyork.com/randomgifs/Banner68.jpg\">picture[1719]</a>....of a body without a head...and it looked like a guy...a hot one, so I emailed--<br />\nQueer #2: You emailed someone about a headless pic on a website?<br />\nQueer #1: Don\'t judge! You do it on Manhunt all the time! Whatever, so the guy who runs the website is all, \"No, it\'s a girl. Ha, ha, ha, you like girls.\" He revoked my gay card.<br />\nQueer #2: That\'s what you get for headless picture hunting on the internet.<br />\nQueer #1: Shut up, bottomboimanhattan24. You\'re one to talk.', 'I was nearly dying. I\'m not sure if the original story is true, but if so, this is hysterical.', 1141754446)
    ,new Q('004548', '\"Hobo\" is So 2005', 'Hobo #1: What are you doing here begging for something to drink? You come on, get out of there. <br />\nHobo #2: Shut up, you transie.', 'teresa barber', 1141704048)
    ,new Q('004631', 'Wednesday One-liners Flip Channels', 'Guy on pay phone: Hey Tom, it\'s Jerry.', '', 1141272056)
    ,new Q('004632', 'Elsewhere: Wednesday One-liners', 'Guy: Oh my god, you didn\'t say, \"Where is Massachusetts?\" or, \"How do you get to Massachusetts?\" You said, \"What is Massachusetts?\"', 'FAK!', 1141279236)
    ,new Q('004629', 'Wednesday One-liners Eat Churro', 'Teen boy: Yeah, I didn\'t like it. I mean, Puerto Rico is like the New York of Mexico.', '', 1141257627)
    ,new Q('004622', 'WWWednesday One-liners', 'Indian man: Did you see how that lady looked at me? It was like, \"What hole did that tribal crawl out of?\" I\'ll hit her with my motherboard!', '', 1141221616)
    ,new Q('004625', 'Wednesday One-liners Eat Pocky', 'Guy: The thing about Chinese weddings is that after you go to, like, three of them you realize you\'re not Chinese.', 'djlindee', 1141207201)
    ,new Q('004556', 'Color Me Wednesday One-liners', 'Teen girl on cell: I didnt wan\'t to take the bus because it takes forever, but I also didn\'t see a train coming from the black hole...', 'STD', 1140616838)
    ,new Q('004554', 'Wednesday One-liners Face It', 'Girl: Oh my god, I recognized that huge forehead from a mile away!', 'AMY', 1140602440)
    ,new Q('004377', 'Wednesday One-liners Could Use Some Color', 'Dude: Yeah, he was holding onto that so tight his knuckles were turning white...And he\'s black, so I mean, that\'s <em>gotta</em> be a tight grip for his knuckles to turn white...', '', 1139400006)
    ,new Q('004255', 'When Did Porn Get So Complicated?', 'Girl: So wait, it\'s garlic that you use?<br />\nGuy: Yes, who heard of scaring them with bologna?<br />\nGirl: Wasn\'t it in that movie?...Oh wait, that was robots.', '', 1139385622)
    ,new Q('004252', 'Make Room for One More, Bronx Science', 'Little boy #1: Can I have that dinosaur?<br />\nLittle boy #2: Only if you guess what number I have in my head, under 10, okay? Under 10!<br />\nLittle boy #1: Eleven?<br />\nLittle boy #2: No, under 10!<br />\nLittle boy #1: A hundred?', 'The Avalanches', 1139342429)
    ,new Q('004249', 'She Had a Case of the Sundaes', 'Guy #1: Yo, I can\'t believe that girl played you like that!<br />\nGuy #2: I know, I did everything for her.<br />\nWoman: Oh, no! Does somebody have a case of the Mondays?<br />\nGuy #2: Shut up, Miss Piggy.', 'J. Hudson', 1139270447)
    ,new Q('004319', 'Wednesday One-liners Are All Over the Map', 'Aussie woman on cell: No, I can\'t work today. I\'m in America...You know, America...No, I\'m on holiday in America...No, I\'m in New York; you know, America the country! Jesus!', '', 1138831202)
    ,new Q('004313', 'Wednesday One-liners Reek', 'Suit: Don\'t you love it when you can smell something burning in the subway?', 'STD', 1138816853)
    ,new Q('004268', 'Wednesday One-liners Wear Gross Sneakers', 'Hobo: Hey, do you have any change to spare?...Hey, that\'s a nice coat, can I have it?', 'Brian', 1138240805)
    ,new Q('004124', 'They Do Make TVs With Off Buttons Now', 'Guy: Omigod dude, the main detective guy from <em>Law & Order: SVU</em> guest stars as a pediatrician on <em>Scrubs</em>! I could never imagine him doing the things he\'s doing right now.<br />\nGirl: No dude, omigod, you know he was on <em>Oz</em> and he was a gay prisoner and he liked getting it in the ass and giving it too. That\'s extreme, man.', '', 1138176038)
    ,new Q('004120', 'He Should Be Hiring Skywriters', 'Teen girl: Wow, that\'s pretty big.<br />\nTeen guy: And it won\'t stop growing.<br />\nTeen girl: I think you need a doctor.<br />\nTeen guy: Oh yeah? What am I supposed to say? \"Hey doc, my penis just won\'t stop growing\"? Yeah, right.<br />\nTeen girl: Uh...maybe you shouldn\'t say that out loud.', 'Missy', 1138147256)
    ,new Q('004078', 'She\'s Mastered Basting in the Kitchen', 'Mom: ...so I was making a roast, but the thing was that I only had chicken stock gravy. Chicken stock gravy! So I <em>used</em> it! On the beef!<br />\nChick: You live on the edge, Mom.', 'djlindee', 1138053638)
    ,new Q('004076', 'She Went Down on Washington', 'Guy #1: If I had a dollar for every time I saw her blowing a guy...<br />\nGuy #2: You\'d have a lot of dollars?<br />\nGuy #1: One.', 'Amy Q.', 1138032036)
    ,new Q('004085', 'The Tuition Costs Are Overwhelming', 'Station lady: Go down those stairs over there, and the track is on your left. <br />\nOld woman: Where?<br />\nStation lady: Down those stairs, on your left. <br />\nOld woman: Thank you! I wish I had your job. <br />\nStation lady: You couldn\'t handle my job.', 'GregumsdaGreggy', 1137913229)
    ,new Q('004003', 'Only If You Get Into a Shower After', 'Girl #1: It\'s so cool that we get to ride the train all day for free.<br />\nGirl #2: Yeah, I guess so.<br />\nGirl #1: We should just ride it all day to like, take advantage.<br />\nGirl #2: Ha, ha! Oh my god, that\'s so Jewish.', 'October45', 1137744034)
    ,new Q('004190', 'Wednesday One-liners Aren\'t Quite Amiable', 'Man on cell: ...Fuck you! Fuck you!...Wait, is this Paige?...Fuck you!', '', 1137650458)
    ,new Q('004196', 'The Wednesday One-liners Brain Trust', 'Woman: Have you ever tried to talk about thesis statements to people who have their fingers up their noses?', 'Djlindee', 1137636008)
    ,new Q('004018', 'The Red Ones Swung Ohio for Bush', 'Dude #1: So, like I was saying, there are red ninjas, blue ninjas, green ninjas, and obviously black ninjas.<br />\nDude #2: Who the hell would want to be a green ninja?<br />\nDude #1: Maybe if you were in the jungle.<br />\nDude #2: Genius!', 'Derelyn', 1137459608)
    ,new Q('003973', 'The Anti-Semitic Ones Are Just Offensive', 'Mom: Well, I\'m going to church tomorrow.<br />\nDaughter: Say hi to Jesus for me. Grandma, you\'re not going?<br />\nGrandma: I stopped going when the priest stopped telling dirty jokes.', 'djlindee', 1137276024)
    ,new Q('003868', 'Lucifer\'s Minions are Everywhere', 'God Squad lady: Lord, help me. I don\'t know which way to turn.<br />\nGuy: Turn left.', '', 1137243627)
    ,new Q('004114', 'Wednesday One-liners Rx', 'Man: I keep waiting for them to come up with one named...like...\"Sextra.\" For people who want extra sex.', '', 1137052824)
    ,new Q('004108', 'The Shooting Death of Wednesday One-liners', 'Guy: I don\'t want to visit my miserable family unless it\'s for a funeral.', '', 1137031250)
    ,new Q('004108', 'The Shooting Death of Wednesday One-liners', 'Crazy guy: And then, of course, there was the human sacrifice. Yup. Human sacrifice with red bouncing balls.', 'Mary Beth Hanlon', 1137031250)
    ,new Q('004110', 'Wednesday One-liners Need to Know', 'Girl on intercom: Does anybody speak the language from China?', 'Abhir Adhate', 1137016850)
    ,new Q('004107', 'Gimme Shelter, Wednesday One-liners', 'Hobo: I wish I could fuck up the machine!', 'Matt Nedostup', 1137009624)
    ,new Q('003855', 'Presenting the New Catchphrases for 2006', 'Guy #1: Yesterday this girl said she wanted to throw herself in front of the train and I\'m like, \"This bitch is crazy.\"<br />\nGuy #2: Really?<br />\nGuy #1: I mean, I see that motherfucka coming and that shit ain\'t gonna happen, you know?<br />\nGuy #2: Maybe she was depressed.<br />\nGuy #1: Are you kidding? That shit is pancake style...bitch is crazy.', '', 1136120422)
    ,new Q('003963', 'Wednesday One-liners, Clothing Optional', 'Girl: Oh, Army men make me cream my panties.', 'Summer', 1135821627)
    ,new Q('003466', '...Of Peace on Earth...', 'He finishes his conversation and gets on the train.', '', 1135569627)
    ,new Q('003895', 'Hunger for Wednesday One-liners', 'Woman on cell: When I open this bag, there\'d better be potato chips in there or you owe me seventy million dollars. \'Cause I <em>love</em> potato chips.', 'Kevin', 1135209646)
    ,new Q('003893', 'Wednesday One-liners Witchy Women', 'MTA guy: I stepped/ran over the bitch\'s foot. Now she\'s saying I gave her a heart attack or a stroke or something. <em>Bullshit</em>!', 'Gian & JR', 1135231254)
    ,new Q('003896', 'Wednesday One-liners for the Holidays', 'Loudspeaker: Mr. Kris Kringle please come to the ticket counter. Mr. Kris Kringle.', '', 1135224025)
    ,new Q('003896', 'Wednesday One-liners for the Holidays', '<em>NY Post</em> guy: Get your <em>Post</em> here! Get your <em>Post</em>. Twenty-five cents! I ain\'t no Santa Claus!', 'Nick Draven', 1135224025)
    ,new Q('003886', 'The Wednesday One-liners Welcome to NY', 'Crazy lady: Welcome to Texas! This is where they teach black people how to play football! You saw it! You watched the Cowboys over the weekend! Welcome to Texas!', '', 1135173620)
    ,new Q('003834', 'Wednesday One-liners Don\'t Look So Hot', 'Queer: There are so many hot guys at that club; then they turn around and you realize they\'re dykes.', '', 1134619236)
    ,new Q('003653', 'Incomplete Wednesday One-liners', 'Girl: ...you see, your nose should eventually fall off because it\'s easier...', 'Special Agent K74', 1133352006)
    ,new Q('003393', 'I\'m Thankful That I\'m Free', '<em>AMNewYork</em> guy: <em>AMNewYork</em>!<br />\n<em>Metro</em> guy: <em>Metro</em> New York!<br />\nGuy #3: Free donuts!<br />\n<em>AMNewYork</em> guy: <em>AMNewYork</em>, <em>Metro</em> New York, free donuts, all at Penn Station, New York!', 'Jenny Lichtenwalner', 1132902013)
    ,new Q('003591', 'Wednesday One-liner Stare into the Abyss', 'Girl on cell: Tell me what to do before I kill myself.', '', 1132740018)
    ,new Q('003493', 'That\'s the Ticket, Wednesday One-liners', 'Guy on cell: I dunno what I just did but I just bought tickets.', 'Jess McGins', 1132149600)
    ,new Q('003315', 'Seems Bats Lose Their Sonar When They Get Old', 'The old woman then proceeded to walk in the completely opposite direction. Cop lady held it in for about 5 seconds before laughing.', 'mshorty', 1131984032)
    ,new Q('003358', 'Wednesday One-liners Are Not Quite PC', 'Black guy: <em>Waah</em>, I\'m a little white boy, I want the world!', '', 1130983236)
    ,new Q('003096', 'That\'s Why It\'s the Ironyvator', 'Dude #1: What\'re you even talking about?<br />\nDude #2: The thing with Cheryl.<br />\nDude #1: What\'s wrong with you? That was this <em>morning</em>! Get over it, already!<br />\nDude #2: Uh...what\'d you think I was talking about?<br />\nDude #1: The asshole who shoved past us on the escalator.<br />\nDude #2: Oh...I didn\'t notice.<br />\nDude #1: See? That kind of thing, that\'s what Cheryl was talking about. She has a point, you know.', '', 1129629612)
    ,new Q('003029', 'Henceforth to Be Known as the \"Ironyvator\"', 'Guy: It\'s like a conveyor belt for miserable people.', '', 1129622424)
    ,new Q('002998', 'Sounds Like It Worked Perfectly', 'Yuppie guy #1: Well, they\'re in that \"Baby-Coma mood\" for, like, the first, three or four months. You can basically plop \'em down anywhere, and they just stay there. It\'s cool.<br />\nYuppie guy #2: But what if it starts wailin\'?<br />\nYuppie guy #1: Oh, then you give it to the wife. You just say, kinda sweet-like, \"Someone wants his Mom-my.\"<br />\nYuppie guy #2: That works?<br />\nYuppie guy #1: That\'s what my brother-in-law said...But then again, he <em>is</em> divorced now.', 'Rory J. Thompson', 1129312858)
  ])
  ,new S('Co-Pilot Shoes, Broadway & Bond', 40.7272, -73.99526, 12, [
    new Q('004781', 'Your Prescription is Wednesday One-liners', 'Guy: I wonder if you cut your eyelids off, if they\'d still prescribe you sleeping medication?', 'Justin Montanino', 1142481636)
    ,new Q('003468', 'Probably in a Blog', 'Guy #1: ...so I heard that the more you think you know, the less you actually know.<br />\nGuy #2: Yeah, I think I read that somewhere.', 'Jenyc', 1133074825)
  ])
  ,new S('Port Authority', 40.756376, -73.99086, 14, [
    new Q('005813', 'If You Look Closely, You Can See Estelle Getty\'s Nipples', 'Quasi-thug #1: So if I got the first season, you would watch it with me?<br />\nQuasi-thug #2: Fuck yeah.  It\'s the fucking <em>Golden Girls</em>, yo.', 'djlindee', 1150228832)
    ,new Q('005797', 'Puerto Rican Day Parade, Bringing People Together', 'Hipster looking at parade thug boy wearing flag: Oh look, it\'s Puerto Rican Superman.<br />\nHipster\'s mom: Shhhh! He heard you.', 'Judy', 1150106432)
    ,new Q('005763', 'Every Long-Term Relationship Has Its Challenges', 'Amiable but very intoxicated hobo: I don\'t believe this, how long you been a seargent? <br />\nWorld\'s weariest transit copy: Eight years Miquel, you drunken jackass.', '', 1149868832)
    ,new Q('005173', 'Why You Should Never End a Date with a Proposition', 'Ghetto girl #1: He was like, \'I wanna see yo shirt on my bedroom floor\' and I was like, \'Is this a proposition?\' and he was like, \'What proposition?\' and I was like, \'Where\'s my ring?\' and he was like, \'Yo, bitch, I didn\'t steal any ring!\' And then he just left. <br />\nGhetto girl #2: I\'m gonna say this cause you\'re my friend: You\'re soooo ghetto.', '', 1145844032)
    ,new Q('004997', 'It Reeks of Wednesday One-liners', 'Girl: Geez, it smells so bad like tuna in here. I can not deal with the smell of tuna. I don\'t understand that whole pussy smell like tuna thing. My pussy\'s never smelt like tuna.', 'threadseven', 1144296004)
    ,new Q('004859', 'Wednesday One-liners Will Miss Greenspan', 'Chick on cell: I need you to give me a ride home when I get off the bus. My grandma has been standing in front of my house for over one hour...I bet you anything she needs money again.', '', 1143079259)
    ,new Q('004696', 'Wednesday One-liners for Ed O\'Neill', 'Woman on cell: Yeah, I\'m covered on his insurance even though we\'re not married...I know! We are domestic partners. And we\'re not even gay!', '', 1141891246)
    ,new Q('004635', 'How Was Your Ash Wednesday, New York?', 'Guy: You got something on your face.', '', 1141358420)
    ,new Q('004472', 'Nah, He Never Needs to Transfer', 'God Squad lady: Jesus is coming! <em>Jesus is coming</em>!<br />\nGirl: Well, is he going to be getting off the S train? \'Cause I\'ll just meet him there.', '', 1140980404)
    ,new Q('004440', '\"Do they fuck?\"', 'Guy #1: So what are you doing this weekend?<br />\nGuy #2: I am heading out for my niece\'s birthday party.<br />\nGuy #1: Nice. Is she hot?<br />\nGuy #2: Well she\'s only 3, but she has some cute 4 year old friends I could introduce you to.', 'Brian', 1140840055)
    ,new Q('004559', 'Wednesday One-liners City Scenes', 'Chick: wow, the down escalator is so much easier than the up one.', '', 1140638450)
    ,new Q('004330', 'Should Have Gone With \"Jewish Rabbi?\"', 'Guy #1: With that hat and beard you look like a Jewish rabbi.<br />\nGuy #2: Dude, it\'s not cool to make fun of people who <em>aren\'t</em> Jewish.', 'Justin', 1140483642)
    ,new Q('004458', 'Wednesday One-leyeners', 'Man: I know I seen you before. Listen to me, I know I have. I recognize you somehow. I know what it is: it\'s your fuckin\' eyes!', 'craigemorsels', 1140004823)
    ,new Q('004219', 'But All the Delivery Guys Are Over Here', 'Girl #1: You shouldn\'t waste all that food; there\'s people in countries like China who are starving and would love to eat that.<br />\nGirl #2: ...People in China don\'t starve; they have Chinese food there.', 'Carly', 1139025648)
    ,new Q('004115', 'That Reminds Me; I Need to Get a Gun', 'Thug guy: Yo, happy New Year\'s, man.<br />\nJanitor guy: New Year\'s is over, yo.<br />\nThug guy: Happy Mother\'s Day!', '', 1138442426)
    ,new Q('004082', 'Translation: You Need to Be Panted', 'Guy: Hi, I need to go to Nutley, New Jersey. I know that the 192 bus goes, but-- <br />\nTicket woman: Don\'t make yourself too comfortable, just ask.', 'rafael', 1137891657)
    ,new Q('003884', 'Scenes from the Strike', 'Woman: Is this what they mean by a transit strike?', 'Shayna Gentiluomo', 1135152000)
    ,new Q('003827', 'Did They or Didn\'t They, Wednesday One-liners?', 'Girl on cell: Yes, we had a good time....No, it wasn\'t weird or anything...Geez, it was <em>fine</em>! Listen, if I wanted to have sex with my ex-boyfriend I wouldn\'t be catching the 7:30 bus home, now would I?', 'jenn messick', 1134561617)
    ,new Q('003746', 'Wednesday One-liners: It\'s All About Location', 'Man on cell: Just got off the bus from Ithaca, New York. <em>What a shithole</em>!', '', 1134014456)
    ,new Q('003750', 'Wednesday One-liners Are Stuffed', 'Bus guy: There ain\'t nothin\' better than a pair of edible undies and a Yoo-hoo.', '', 1134007215)
    ,new Q('003275', 'Wednesday One-liners Prefer Metro', '<em>AMNewYork</em> guy: Free <em>New York Times</em>! Free <em>New York Times</em>!', '', 1130342405)
    ,new Q('003086', 'Wednesday One-liners Look Busted', 'Guido on cell: He was all like, \"When I was in Maine, I was going to model,\" and I was like, \"Yo, model for what? You\'re a fucking fat ugly bastard with hair like a rat\'s ass.\"', '', 1129140006)
    ,new Q('002935', 'Because America Needs More Armed Retards', 'Hetard: What did you do that for?<br />\nShetard: Because I love you.<br />\nHetard: Why do you love me?<br />\nShetard: If I have to answer that again this week, I will shoot myself.', 'Candi Deschamps', 1128960000)
  ])
  ,new S('35th & 6th', 40.75046, -73.98729, 17, [
    new Q('004625', 'Wednesday One-liners Eat Pocky', 'Bodega guy: Come get your umbrellas! 100% genuinely made in <em>China</em>!', 'jessicaxoxrabbit', 1141207201)
  ])
  ,new S('50th & 7th', 40.76109, -73.98327, 16, [
    new Q('003280', 'The Riddler Presents: Wednesday One-liners', 'Guy: How much do you think it would cost to rent a mechanical bull for a day?', 'devon', 1130378458)
  ])
  ,new S('21st between 7th & 8th', 40.743395, -73.99801500000001, 0, [
    new Q('005041', 'Wednesday One-liners Tip One Back', 'Little girl: Mommy, you sound drunk already.', 'John Minor', 1144843246)
  ])
  ,new S('Isola, 83rd & Columbus', 40.78454, -73.97361, 18, [
    new Q('005802', 'Once Again, Match.com Really Does Work', 'Bald, dorky white guy on date: What kind of Italian restaurant doesn\'t have Chicken Parmesan on the menu?<br />\nHomely-looking white girl on date: I know.', '', 1150156832)
  ])
  ,new S('56th between 5th & 6th', 40.76296, -73.97608, 16, [
    new Q('005042', 'Wednesday One-liners Cook the Afterbirth', 'Asian chick: Like you\'ve ever even <em>seen</em> a baby prostitute.', '', 1144850450)
  ])
  ,new S('10th & C', 40.72588, -73.97754, 1, [
    new Q('004777', 'Wednesday One-liners Lunch Hour', 'Latina: Everytime he smoke he expect me get him whatever he wanna eat. He just smoke a blunt and now he wants me to bring him a hamburger...Do I look like a fuckin\' McDonalds?', '', 1142460031)
  ])
  ,new S('9th between 37th & 38th', 40.755584999999996, -73.9947, 14, [
    new Q('003386', 'The Robohobos and Hoborgs Hit the Streets Today', 'Hobo: Beep. Beep. Beep.<br />\nFat woman: Stop it!<br />\nHobo: Beep. Beep. Beep.', '', 1132358434)
  ])
  ,new S('Ray Bari, 56th & 3rd', 40.75957, -73.968, 26, [
    new Q('005572', 'Wednesday One-liners, Minority Report', 'Girl on cell: Ya know, it\'s the smart people not having kids, or maybe having one or two.  Its the uneducated that are reproducing more uneducated people. You know that 64% of kids born today are minority. We should build that fence bewteen us and Mexico.', '', 1149753632)
  ])
  ,new S('45th between 8th & 9th', 40.75975, -73.989825, 14, [
    new Q('004852', 'Wednesday One-liners Are Unclean...Unclean!', 'Suit: You gotta come early, like 5 o\'clock, when they\'re still clean. You don\'t need another dick already in \'em.', 'JaeRizzle', 1143050438)
  ])
  ,new S('Broadway Pizza, 27th & Broadway', 40.74452, -73.98888, 0, [
    new Q('004159', 'Expropriated from the Black Man', 'Pizza guy: You can\'t get a slice, man. Your money is fake<br />\nDude: My money is real. I get it at the bank. Straight from the white man.', '', 1138539620)
  ])
  ,new S('14th & 3rd', 40.73328, -73.98719, 1, [
    new Q('005113', 'Wednesday One-liners Are All About Location', 'Girl: So where\'s the fun aisle?', '', 1145512803)
    ,new Q('004829', 'She Needn\'t Advertise Her Virginity', 'Chick #1: Hooray, I\'m free!<br />\nChick #2: You\'d better take your nametag off, then.<br />\nChick #1: Yeah, I don\'t want guys who come up to me being all, \"Hello, <em>Diana</em>.\"', 'Duncan Pflaster', 1144036836)
    ,new Q('004700', 'Wednesday One-liners Engage in Carnality', 'Drunk girl: I fucking love you! I wanna fuck your face!', 'Alanna Higgins', 1141884051)
    ,new Q('004507', 'Once, at the Roxy', 'Girl #1: So I told him, \"Uh-uh, no way, that\'s a one way exit!\"<br />\nGirl #2: Yeah, but have you ever seen a two way exit?', '', 1141372832)
    ,new Q('004477', 'Who\'s Your Daddy?', 'Man: Ay, Mami, looking good today... <br />\nWoman: Can\'t you see I am with my son? <br />\nLittle boy: You\'re his mommy too?', 'Constantino', 1141063240)
    ,new Q('004191', 'Wednesday One-liners for the Weathergirls', 'Guy: I really liked the wind on that block. It was bearable.', 'Lotus', 1137657616)
    ,new Q('003495', 'Wednesday One-liners Rev Her Engine', 'Hipster chick: Omigod, he\'s like <i>Adonis</i>...like a geeky, comic book-loving Adonis...', 'Peter H', 1132142421)
    ,new Q('003339', 'That\'s What Makes Them Grow', 'Guy: You always shit on my plants. <br />\nGirl: You fuckin\' shit on your own plants, asshole.', 'Ronen Trigoli', 1132041604)
  ])
  ,new S('42nd & 8th', 40.75721, -73.9898, 16, [
    new Q('005812', 'One Too Many Tarantino Films', 'Girl: I did, I saw Uma Thurman in <em>Les Mis</em>.<br />\nGuy: She wasn\'t in <em>Les Mis</em>.<br />\nGirl: Not on stage, on TV.<br />\nGuy: She wasn\'t in <em>Les Mis</em> on TV.<br />\nGirl: I<em> thought</em> it was her, or someone else with that cross-eyed look.', '', 1150221632)
    ,new Q('004930', 'You Need a Schtick to Walk', 'Tourist lady: Excuse me, can I get to the New York Public library on this bus?<br />\nMan: Yes.<br />\nTourist lady: About how far is it?<br />\nMan: It\'s a ten minute walk or a twenty minute bus ride.', '', 1144566018)
    ,new Q('004877', 'He Plays Solitaire', 'Guy #1: You are such a nerd.<br />\nGuy #2: You mean because I\'m on my laptop during sex?<br />\nGuy #1: What?', '', 1144339217)
    ,new Q('004779', 'Wednesday One-liners See No UHO Money', 'Hobo: Damn girl, you like a miniature Beyonce Caucasian-style.', 'Kate', 1142467239)
    ,new Q('004092', 'Peter Jackson Only Does Documentaries', 'Guy: This remake of King Kong was a good movie; did you ever see the <br />\noriginal?<br />\nGirl: Yeah, I didn\'t know it was a true story.', '', 1137286814)
    ,new Q('004114', 'Wednesday One-liners Rx', 'Man: Drugs don\'t kill people; umbrellas kill people.', 'Jackie Maron', 1137052824)
    ,new Q('003952', 'Wednesday One-liners From a Magical Place', 'Man: So yeah, he went away to a fairy commune, but I hear he\'s having a really good time.', '', 1135778411)
    ,new Q('003890', 'Wednesday One-liners Sit on It', 'Guy on cell: So I grabbed her ass. That\'s her fault right?...Good, I thought I was crazy.', 'Lynna', 1135159202)
    ,new Q('003464', 'Only 1 Month Until Illegal Christmas!', 'Street guy: Belts, watches, designer Bags! I got it all, step right up and buy, buy, <em>buy</em>! Everything just $10!<br />\nWASP woman: Careful, he probably stole most of it. Let\'s not buy anything that\'s been stolen.<br />\nWASP man: Sir, you know stealing is illegal?<br />\nStreet guy: Hey, fuck you, man. Get the fuck out, I didn\'t want your fuckin\' business anyways, faggot...stolen fucking goods for sale, stolen watches, stolen bads, stolen belts...!', 'John Doe Patriot', 1132988449)
    ,new Q('003183', 'That\'s a Nice Wednesday One-liners', 'Drunk girl: And he was talkin\' to me like, \"I suck. Oh my God, I suck,\" and I was all like, \"No, you don\'t. You really don\'t suck\", but in my head I was like, \"You so fuckin\' suck.\"', 'Peter Knittel', 1129744827)
  ])
  ,new S('48th & Park', 40.75589, -73.97483, 16, [
    new Q('004461', 'Wednesday One-liners & the Sin of Sloth', 'Businessman lady: I wish I could get paid to sit in a hole in the ground and smoke cigarettes.', 'Domi', 1140033648)
  ])
  ,new S('5th between 17th & 18th', 40.738185, -73.992005, 13, [
    new Q('003742', 'Wednesday One-liners Watch House', 'Lady on cell: Is colon cancer...terrible?', '', 1133978447)
  ])
  ,new S('Central Park South & 6th Avenue', 40.76568, -73.97625, 16, [
    new Q('003434', 'Wednesday One-liners Get There Somehow', 'British guy on cell: I\'m on Central Park South watching the marathon runners...ugh, these poor, poor bastards...bloody bleedin\' nipples everywhere.', 'Annie Murphy', 1131566447)
  ])
  ,new S('32nd & 7th', 40.7497, -73.99156, 0, [
    new Q('005612', 'English Is Shaky, Too', 'Girl #1: I thought that sign said rape instead of rapaya.<br />\nGirl #2: It\'s papaya, moron.<br />\nGirl #1: I don\'t speak Spanish that well!', '', 1148810432)
    ,new Q('004269', 'Wednesday One-liners Assume', 'Guy: Hey! Nice ass baby! Shit...looks like she\'s wearing a diaper under there!', 'Goodale', 1138226429)
    ,new Q('003586', 'Here\'s to Another Overheard Year!', 'News guy: Get your special AM Metro News! Special edition; last one for the year. Get two: one to read and one to frame.', 'Mary Beth Hanlon', 1136109611)
  ])
  ,new S('40th & 5th', 40.75219, -73.98182, 3, [
    new Q('004987', 'Wednesday One-liners Hit the Premiere', 'Tourist man on cell: It feels like I\'m walking through the Matrix.', '', 1144252832)
    ,new Q('004629', 'Wednesday One-liners Eat Churro', 'Chick: Oh, you know, it\'s okay, sometimes there\'s just too much pinata.', '', 1141257627)
    ,new Q('004109', 'It\'s a Late Wednesday One-liners Lunch', 'Suit: I mean, you\'re a cool guy; you have wavy hair, you chew gum.', 'Tom', 1137024012)
    ,new Q('002999', 'It Was One Hell of a Long Delivery', 'Twin girl #A: It\'s my birthday on Sunday...<br />\nUnique girl #1: Oh, so like, your sister was the one whose birthday it was Thursday. God, this must be so confusing for you guys.<br />\nUnique girl #2: Um, no, I highly doubt it is. They\'re twins; they were born on the same day! <br />\nUnique girl #1: Did your parents just change it on the birth certificate to make it less confusing...or what? I would\'ve just let you guys keep the different birthdays.', '', 1129320020)
  ])
  ,new S('St. Marks & 3rd', 40.72954, -73.98991, 1, [
    new Q('006349', 'Wednesday One-Liners Hang Around Home Depot', 'Guy: So tell me what those lesbian meetings are really about!', 'mariana', 1154520000)
    ,new Q('005822', 'The Unusual Proclivities of Wednesday One-liners', 'Hipster chick: I didn\'t get spat on. I wanted to real bad.  But it didn\'t happen.', 'robothater', 1150920032)
    ,new Q('005413', 'Kidding or Not Kidding?', 'Hobo lady:  It\'s gonna rain hard!<br />\nHobo guy:  I guess I\'ll get the soap ready.', '', 1147485632)
    ,new Q('005112', 'Wednesday One-liners is Fundamental', 'Woman: Did I say Barnes and Nobles? I work at Starbucks. Yeah, Starbucks.', 'George Sarantopoulos', 1145469639)
    ,new Q('004401', 'That Sounds Like It\'s About Wight', 'Teen guy #1: Well, I\'m French.<br />\nTeen girl: I\'m German.<br />\nTeen guy #2: Well, I\'m from Spain so I guess we\'re all from Europe.<br />\nTeen guy #1: Spain isn\'t in Europe.<br />\nTeen girl: Dude, yes it is. Europe is like its own continent.<br />\nTeen guy #1: I was talking about Europe the country, not that little <br />\nisland with England on it.', 'Katherine Gnadinger', 1140397202)
    ,new Q('004164', 'We\'ve Found Her Running Mate', 'Bike guy: Hey girl, I really like your red hair<br />\nChick: Yeah, me too. That\'s why I dye it. But I don\'t like it nearly as much as I like not being interrupted when I am tryng to talk to someone.', '~dana', 1138161652)
    ,new Q('004117', 'I Hope That Line Didn\'t Work', 'Girl: We can\'t have sex until we get married.<br />\nGuy: Sex is a form of marriage.<br />\nGirl: But we\'re not ready to get married.<br />\nGuy: Your mom.', 'spoons', 1138089635)
    ,new Q('003001', 'Well, He\'s Not in a Coma!', 'Girl: Yeah...but I have my period, so we can\'t have sex.<br />\nGuy: That doesn\'t matter. See? It just shows that I love you.<br />\nGirl: What it shows is that you want head.', 'Brock', 1129356013)
  ])
  ,new S('48th & 8th', 40.76104, -73.98704, 16, [
    new Q('006012', 'Wednesday One-Liners Need Rubber Sheets', 'Guy: I\'ve pissed the bed before.  Hell, [gesturing towards girl] I\'ve pissed on <em>her</em>!', '', 1151553600)
    ,new Q('003645', 'Someone Needs to Put That on a T-shirt', 'Guido on cell: Yeah, there was bitches dancin\' on the bar and shit...No, no, my fingers is cold...<br />\nBag lady: Fuck your fingers! I ain\'t got shoes on, ya dumb twink!', 'Fish the Magish', 1134504022)
  ])
  ,new S('114th & Broadway', 40.80665, -73.96479, 20, [
    new Q('005518', 'She\'s Home Studying for the SATs', 'Twentysomething guy at urinal #1: Damn, some of the girls getting trashed here are only in high school!<br />\nTwentysomething guy at urinal #2: Yeah, I\'m glad I didn\'t bring my wife.', '', 1148220032)
    ,new Q('004854', 'Wednesday One-liners Are for Boobs', 'Woman: I\'m sure there are people in this world who have a fetish for big boobs and juice boxes.', 'djlindee', 1143093646)
    ,new Q('004776', 'Wednesday One-liners Sport Beef Curtains', 'Woman: I have every confidence in her as a person, but that doesn\'t extend to her being able to contract her vaginal muscles into the shape of a whooping crane.', 'djlindee', 1142488809)
    ,new Q('004383', 'Wednesday One-liners Are Ready for Valentine\'s', 'Random Girl to her friend: This place is like online dating for losers.', 'Tom G.', 1139443231)
    ,new Q('003921', 'This Rorschach is Quite Revealing', 'Man #1: Hey man, why are you hanging out with her? She\'s a total dickbag.<br />\nMan #2: Dude, I\'m imagining like...a bag...of...like...dicks?', '', 1136800842)
    ,new Q('004045', 'A Pride of Wednesday One-liners', 'Guy: They were as gay as two dicks stuck together.', '', 1136448047)
    ,new Q('003356', 'Cyrano Presents: Wednesday One-liners', 'Guy: For the love of God! Just let me take a shower with you!', 'Fernando Martinez', 1130968848)
  ])
  ,new S('Moeshe\'s Falafal,  46th & 6th', 40.75738, -73.98227, 16, [
    new Q('005617', 'Good Thing His Friends Had His Back', 'Guy #1: Dude, he was so drunk, he was twisted. He\'d had like, I don\'t know, 25 shots.<br />\nGuy #2: 25 shots? Of what??<br />\nGuy #1: Of vodka I guess. He was sitting in his BMW holding the wheel and falling asleep.<br />\nGuy #2: He was driving??<br />\nGuy #1: Naw... Fcker was too drunk to realize he forgot to turn the car on.', 'Waiting for Falafal<br />', 1148817632)
  ])
  ,new S('78th & Madison', 40.77563, -73.96263, 21, [
    new Q('004927', 'The Wednesday One-liners K-Hole', 'Woman: Hey, so have you ever tried crack?', '', 1143784837)
  ])
  ,new S('PJ Liquor Warehouse, 207th & Broadway', 40.86774, -73.92119, 25, [
    new Q('005051', 'It\'s Like a Library for Drunks', 'Little boy: Mommy, you should try Black Swan.<br />\nMom: Why don\'t you be quiet for a little bit?', 'Andy Hobin', 1145001644)
  ])
  ,new S('49th & Madison', 40.75722, -73.97606, 16, [
    new Q('004849', 'Wednesday One-liners Rocket', 'Guy: Man. Stimulated by a 50 cent banana.', 'Karen Singer', 1143028806)
    ,new Q('004600', 'That International Five Ring Circus', 'Guy #1: Did you watch the Olympics over the weekend?<br />\nGuy #2: Yeah, I was very disappointed to hear about Michelle Kwan and her little injury.<br />\nGuy #1: It was a groin pull, wasn\'t it?<br />\nGuy #2: Do chicks even have groins?', '', 1141002057)
    ,new Q('004110', 'Wednesday One-liners Need to Know', 'White girl: Where the hell is the damn ice skating rink? Somebody tell me! I know you know!', '', 1137016850)
  ])
  ,new S('24th & 7th', 40.74475, -73.99517, 0, [
    new Q('004318', 'Wednesday One-liners Move to the Big Apple', 'Girl on cell: I don\'t know, somewhere on 7th. There are models everywhere, and I want to fucking kill myself.', '', 1138845622)
    ,new Q('003833', 'Wednesday One-liners Hate Project Runway', 'Girl: She is so cute. If she were a coat, I\'d wear her.', 'lovely666', 1134604824)
  ])
  ,new S('57th & Sutton', 40.75736, -73.96069, 26, [
    new Q('003356', 'Cyrano Presents: Wednesday One-liners', 'Dude on cell: Seriously, just don\'t shit where you eat...Oh yeah, yeah, you can fuck temps.', '', 1130968848)
  ])
  ,new S('2nd & 2nd', 40.74667, -73.97449, 3, [
    new Q('004878', 'He Read That Time Machine Book', 'Chick: Did you ever watch wrestling?<br />\nGuy: I used to watch it back when it was real.', '', 1143835201)
    ,new Q('004661', '\"Thank you for being a friend!\"', 'Chick #1: Who\'s that actress who plays Blanche Devereaux?<br />\nChick #2: Rue McClanahan!<br />\nChick #1: Okay, you can say it. You\'re not drunk enough yet.', 'Winnie Cooper', 1142596812)
    ,new Q('003502', 'Wednesday One-liners for the Mishpokhe', 'Father: It\'s a little boy just like you, except you\'re a little girl.', '', 1132207237)
    ,new Q('003211', 'Time to Change the Dressing on That Wound', 'Old man: Yeah, so the doctor told me to put mayonnaise on my head and cucumbers on my eyes. There\'s just so much you have to do. I was like, \"What is this, a fruit salad?\"<br />\nWoman: That\'s not a fruit salad, that\'s a Caesar salad.<br />\nOld man: Right, a Caesar salad. Anyway, about that truck.', 'Tibbie X', 1131141628)
  ])
  ,new S('Bloomingdale\'s, 59th & 3rd', 40.76153, -73.96658, 26, [
    new Q('005101', 'Iran Looks Promising for Us', 'Salesguy #1: If you could take over any country which one would you pick?<br />\nSalesguy #2: What do you mean, \"take over\"?<br />\nSalesguy #1: You know, weapons, resources, control the army, stuff like that.<br />\nSalesguy #2: That\'s a hard question. I mean, I\'m not that well traveled. People are so different in every country, different cultures.<br />\nSalesguy #1: Well, what if you could spend a year there, get to know the place?', 'Doug Tebay', 1145397610)
    ,new Q('003766', 'Here Comes Return Season', 'Guy: This sweater is <em>huge</em>!<br />\nGirl: Get fat.<br />\nSalesguy: Ha, ha! Wow, I needed that.', '', 1135634408)
  ])
  ,new S('13th & B', 40.72874, -73.97853, 1, [
    new Q('003357', 'Wednesday One-liners Are Pre-Med', 'Hipster guy: If I take off my pants and there\'s blood on my cock, it\'ll totally be your fault.', '', 1130976023)
  ])
  ,new S('Grove & Bedford', 40.73244, -74.00546, 11, [
    new Q('003896', 'Wednesday One-liners for the Holidays', 'Guy on cell: Decorations? What do you need decorations for? You\'re not Jewish...<em>What</em>? You converted? Well, I would congratulate you if I didn\'t already have so many Jew friends.', 'Richard Blakeley', 1135224025)
  ])
  ,new S('Bond & Bowery', 40.72566, -73.99214, 1, [
    new Q('003436', 'Wednesday One-liners Wander New York', 'Hobo: Yo, Japanese ho, I need to buy something from your asshole!', 'wecantdraw', 1131580830)
  ])
  ,new S('Pearl Street & Peck Slip', 40.70367, -74.01063, 5, [
    new Q('004043', 'Wednesday One-liners Love Bathroom Humor', 'Dude: Does that mean you actually get to <em>do</em> colonoscopies?', 'Rich Mintz', 1136419215)
    ,new Q('003884', 'Scenes from the Strike', 'Drunk guy: Just replace them with 10 lines of code: \"If subway station, stop. Otherwise, go.\"', '', 1135152000)
  ])
  ,new S('Orchard between Houston & Stanton', 40.722035000000005, -73.988215, 8, [
    new Q('004190', 'Wednesday One-liners Aren\'t Quite Amiable', 'Hipster guy: Don\'t talk about my people like that! <em>Pocahontas</em>? Bitch, I\'ll fuck you in the ass!', '', 1137650458)
  ])
  ,new S('Office, 55th & Park', 40.76026, -73.97162, 16, [
    new Q('003894', 'Wednesday One-liners Get Edumacated', 'Guy: I said, \"What do I need a sword for? I\'m going to math class!\"', '', 1135216846)
  ])
  ,new S('1st Avenue & 12th Street', 40.73001, -73.98356, 1, [
    new Q('004651', 'He Had That Barbie Look', 'Dude #1: We were discussing the Holocaust in my class, and there was this really hot guy in it, and all I could think about was fucking him.<br />\nDude #2: Fucking a guy in the Holocaust? Ew.', '', 1142503208)
    ,new Q('003435', 'Relationship Problems? Try Wednesday One-liners', 'Guy: The question is, are you bored of her or are you bored of yourself?', 'Jonathan Gordon', 1131573637)
  ])
  ,new S('Chelsea Flea Market, 25th & 6th', 40.74417, -73.99188, 0, [
    new Q('004378', 'Wednesday One-liners for Fashion Week', 'Guy: Well, I\'m kind of an itinerant tuxedo salesman.', '', 1139421628)
    ,new Q('003959', 'Wednesday One-liners and the Boy Parts', 'Guy: Fuck...a fuckin\'...duck!', 'Fuzz', 1135828827)
  ])
  ,new S('21st & 3rd', 40.73753, -73.98409, 2, [
    new Q('004404', 'Salesman II: No Refunds, No Exchanges', 'Girl #1: I think they should make a sequel to <em>Death of a Salesman</em>.<br />\nGirl #2: Are you retarded?', 'Caitlyn Howell', 1140552026)
    ,new Q('003498', 'Wednesday One-liners Are Quick to Thrown Down', 'Man on cell: Yeah, they ask you a lot of fool questions there, like if you hear voices in your head that tell you to kill people...Hell, no, I tell \'em I do it on my own!', '', 1132171212)
    ,new Q('003082', 'A-Rod Threw Too Many Interceptions', 'Guy #1: Well the Yanks definitely blew this one.<br />\nGuy #2: Yeah, no Super Bowl for them this year.', 'George Geotes', 1129089603)
  ])
  ,new S('Lispenard St', 40.71972, -74.00324, 4, [
    new Q('006528', 'And That\'s When I Got the Idea For the Fucks Capacitor', 'Queer: So I hit my head on the locker door at the gym, and I think I damaged my cervical cortex.<br />Chick: I fucking hate you.', 'fat dragon<br /><br /> <span>Headline by: Matthew Sahd Mohammed <br /></span>', 1153764000)
  ])
  ,new S('13th between 3rd & 4th', 40.735985, -73.99575, 12, [
    new Q('005146', 'The First Rule of Eagle Scouts:', 'Suit on cell: Yo man, it\'s Wednesday, are you ready to go get drunk and nail some bitches?... Hold on... What the fck? I\'m just in a manic rage and I want to destroy everything. What\'s so wrong with that, Dad?', '', 1145635232)
  ])
  ,new S('41st & Broadway', 40.75501, -73.98667, 17, [
    new Q('004265', 'Wednesday One-liners Run to the WC', 'Woman on cell: So did they pee pee in the potty?', '', 1138248046)
    ,new Q('003984', 'Attack of the iPod People (NYC Short Stories)', 'Guy #1: Man, you got one of those iPod nanos?<br />\nGuy #2: Man, I didn\'t pay for it. I\'m a <em>player</em>!', '', 1137096000)
    ,new Q('004111', 'Wednesday One-liners by Eve Ensler', 'Woman on cell: Jesus! You are such a fucking narcissistic cunt-licking hippie!', '', 1137045607)
  ])
  ,new S('Central Park', 40.773457, -73.972793, 19, [
    new Q('006287', 'Wednesday One-Liners Say the Neon Lights Are Bright', 'Ghetto teen, watching Sutton Foster sing \"You\'ve Got Possibilities\" from <em>It\'s a Bird, It\'s a Plane, It\'s Superman!</em>, the musical: Maybe these crackers be famous, but it\'s Broadway. This shit sucks.', 'warren freeman', 1153915200)
    ,new Q('006125', 'Wednesday One-Liners Live Beyond Their Means', 'Hobo, to baby in stroller: You\'re a fucking moron, kid, wasting all your money on that shit!', 'PeggyG.', 1153908000)
    ,new Q('006231', 'Wednesday One-Liners Have a History of Violence', 'Thug, to his girlfriend: Yo, I don\'t care if you a girl or not. I will bust you in the head with a rock.', '', 1153360800)
    ,new Q('006099', 'Wednesday One-Liners Have a Price on Their Heads', 'Blond yuppie on cell: That\'s so cute!  But did he really just get out of jail?', '', 1152741600)
    ,new Q('006118', 'Xenophobic Wednesday One-Liners', 'Woman with white dog to woman with black dog: He\'s only barking because he isn\'t used to seeing that kind of dog.', '', 1152712800)
    ,new Q('005963', 'F-ing Canadians and Their Fake Money', 'Woman: How much will a tenner-worth be?<br />\nDealer: Ehh, I think it\'s fifteen bucks.', 'Fin dog mcsexy pants', 1151208032)
    ,new Q('005814', 'Gay Guys Prefer Hardwood', 'Girl #1: Ben\'s hot, but I think he\'s gay.<br />\nGirl #2: No way. Why?<br />\nGirl #1: He asked me if my carpet matches my drapes.<br />\nGirl #2: I don\'t think he\'s gay.<br />\nGirl #1: Oh yeah?<br />\nGirl #2: Call him up and tell him he can chew on your carpet!<br />\nGirl #1: What?', '', 1150250432)
    ,new Q('005816', 'Ironic War Is the Best Kind', 'Woman on cell: Yeah, the kitty pushes the others around. He\'s a real tyrant... Uh-huh. Guess what she named him: Osama.', '', 1150243232)
    ,new Q('005776', 'That\'s How She Got in That Lipliner Brawl', 'Little girl: Mom, can I have some water?<br />\nMom: Girl, don\'t <em>make</em> me open my purse, you don\'t know what\'ll come out.', 'Michael', 1149969632)
    ,new Q('005673', 'It\'s a Really Long Story', 'Tweenie boy #1: Michael Jackson SUCKS! <br />\nTweenie boy #2: Well, did you hear his music when he was black? <br />\nTweenie boy #1: Michael Jackson was <em>black</em>?!', 'nas<br />', 1149213632)
    ,new Q('005663', 'Wednesday One-liners, Baby Chic', 'Woman: Actually, now that they\'ve started talking, the twins are much less creepy.', '', 1149127232)
    ,new Q('005645', 'The Answer Is Shtting in the Wind', 'Man on a park bench #1: Betcha never seen a dandelion turn from yellow to white. Even catch one half-way in between.<br />\nMan on a park bench #2: Betcha ain\'t never seen no baby pigeons. Ain\'t noboby never seen no baby pigeons. See all them big fat ones? Where\'s the babies at?', '', 1149040832)
    ,new Q('005639', 'The Whole City Is a Bit Left of Center', 'Tourist lady: Excuse me, is this Central Park?<br />\nNew York man: Uh, yes, this is.<br />\nTourist lady: Are you sure?  It seems a little off-center to me.', 'Off-center Dog Walker<br />', 1148997632)
    ,new Q('005601', 'Weigh Two Long', 'Scrabble girl:  \"Gooeesay\" is <em>so</em> not a word.<br />\nScrabble guy: That\'s \"guise.\"<br />\nScrabble girl:  Ha!  Well, smart guy, you spelled it wrong.  \"Guys\" is spelled G-U-Y-S.<br />\nScrabble guy: Are you serious?<br />\nScrabble girl:  Sorry, there\'s no way I\'m letting you get away with that after you wouldn\'t give me any points for \"Steve.\"<br />\nScrabble guy: How long have we been dating?', 'Uncle Joe<br />', 1148731232)
    ,new Q('005440', 'Hope Her Charger Has a Really Long Cord', 'Hippy girl: So yeah, we are gonna be living in this yurt for a year without electricity or running water or anything. It\'s all about getting back to our roots and stuff.<br />\nGuy: No electricity or anything? What if you have to call someone or something?<br />\nHippy girl: I\'ll just use my cell phone.', 'Kelly Ernst<br />', 1147687232)
    ,new Q('005438', 'Even the Words Get Skinny', 'Girl # 1, looking at a picture: omg, I\'m so fat<br />\nGirl #2: No.. you are just ano now. <br />\nGirl #3: It\'s ani, not ano.<br />\nGirl #1: No, it\'s def ano.', 'Neither Ani nor Ano<br />', 1147658432)
    ,new Q('005401', 'She\'ll Be Here All Week', 'Woman: Hey, when\'s that movie <em>Snakes on a Plane</em> ever gonna come out?<br />\nOld man: What? What\'s that?<br />\nWoman: Maybe it\'s just a joke. Like the \"L\" in Samuel \"el\" Jackson\'s name. I think that\'s a joke too, like, what is he? Samuel \"the\" Jackson?<br />\nOld man: Who\'s that?<br />\nWoman: Just eat your hot dog, dad.', 'Kershinator<br />', 1147370432)
    ,new Q('005316', 'I Love the Buzz', 'Blonde: You know what? I wish I was a bird.<br />\nBrunette: So you could fly far, far away?<br />\nBlonde: No, so I could sit on electrical fences and not get shocked.', 'Bay Jyington', 1146830432)
    ,new Q('005290', 'Wednesday One-Liners Have an Announcement', 'Old guy: The Viagra\'s working!', 'Robb Briggs', 1146693632)
    ,new Q('005285', 'He Got the Idea from Dr. Phil', 'Guy #1: Yeah, she wouldn\'t shut up so I peed on her.<br />\nGuy #2: Just what I would have done, bro.', '', 1146628832)
    ,new Q('005198', 'Skeletor Seeks Special Lady for Play, Maybe More', 'Skinny girl: I have to start getting serious about anorexia.<br />\nFriend: Yeah, seriously!', '', 1146016832)
    ,new Q('005145', 'Maybe He Already Packed It', 'Man on bike: I seem [pause] to have misplaced [pause] my fudge.', 'Lane & Oliver<br />', 1145786432)
    ,new Q('005126', 'Try the Toaster', 'Guy to girl: So, that\'s why you broke up?  I don\'t blame you -- you gotta microwave them first, otherwise they\'re too spongey.', 'newyorkette<br />', 1145548832)
    ,new Q('005108', 'Wednesday One-liners for the Old', 'Woman: He was all over me. He said he couldn\'t get enough of me!...Of course he has Alzheimer\'s.', '', 1145448034)
    ,new Q('005054', 'His Text Messaging is Quite Primitive', 'Girl: Omigod! I saw you on the internet!<br />\n<a href=\"http://home.nc.rr.com/edeyo/ninjas_killed.jpg\">Hobo[1454]</a>: You\'re like the hundredth person to tell me that tonight.', '', 1145023222)
    ,new Q('004873', 'WWMJD (What Would Miss J. Do?)', 'Mom: Honey, smile!<br />\nTeen girl: Supermodels don\'t smile.', 'D. Lowy', 1144317633)
    ,new Q('004928', 'The NYC Sights of Wednesday One-liners', 'Tourist guy: I\'m at Grand Central Park.', 'M. Green', 1143691230)
    ,new Q('004852', 'Wednesday One-liners Are Unclean...Unclean!', 'Lady: Dammit, how many times have I told you? Don\'t lick the bird shit!', 'Mike Scott', 1143050438)
    ,new Q('004690', 'I Don\'t Hear Her Complaining, Jan', 'Power walker guy: Do you have any brothers or sisters?<br />\nPower walker lady: Yeah, 27. <br />\nPower walker guy: How many?<br />\nPower walker lady: I am number 14 of 28 children.', 'jo mo packward', 1142784009)
    ,new Q('004533', 'Isn\'t That Nice?', 'Tourist lady: Everyone has been so nice in New York; not what I expected.<br />\nWoman: We are nice, just self-absorbed.', 'Renaissance Chick', 1142604047)
    ,new Q('004662', 'Would She Rather Catch Toes?', 'Girl #1: Whatever, you never even let me put my feet on the furniture when I stay with you.<br />\nGirl #2: That is because your feet were covered with warts!<br />\nGirl #1: Warts that I caught from the Mother Wart that was on your foot!', '', 1142517630)
    ,new Q('004618', 'Lot\'s Wife Had a Different View', 'Guy: I\'ll have a pretzel.<br />\nVendor man: What kind?<br />\nGuy: Plain.<br />\nVendor man: No salt?<br />\nGuy: No. With salt.<br />\nVendor man: Salt is not plain.<br />\nGuy: Okay, with salt. Is that extra?<br />\nVendor man: No, salt is salt. The other is plain. Like white people.', 'Collegiate Cutie', 1142287255)
    ,new Q('004531', 'Yeah, Clip Those Wrinkled Mudflaps', 'Old lady #1: Oh, how awful! You cut your dog\'s ears. How horrible! How\'d you like to have your ears trimmed?<br />\nOld lady #2: I would.', 'Robert Hall', 1141509649)
    ,new Q('004464', 'Wednesday One-liners Distrust the Monotremes', 'Woman: No, well, she\'s half Maltese and half Labrador. I call her a matador...You know, to make fun of all those doodle breeds.', 'j-mo.', 1140048006)
    ,new Q('004205', 'One to Spare', 'Man: Yeah, he broke his leg.<br />\nWoman: Oh, really? That\'s too bad.<br />\nMan: Oh, it\'s okay though, he broke both of them.', 'Christopher Benton', 1138896020)
    ,new Q('004318', 'Wednesday One-liners Move to the Big Apple', 'Little girl: I thought you said New York was crappy. This isn\'t crappy, I think it\'s quite beautiful.', 'Rych', 1138845622)
    ,new Q('004110', 'Wednesday One-liners Need to Know', 'Girl: What happens to the leaves if you just leave them on the ground? They just die, right?', '', 1137016850)
    ,new Q('003680', 'Later That Night: Tiger v. Anaconda', 'Girl #1: I cut myself shaving.<br />\nGirl #2: That sucks. I shaved my twat.<br />\nGirl #1: What about your legs? <br />\nGirl #2: Nope.<br />\nGirl #1: Then why your junk?<br />\nGirl #2: I was bored <br />\nGirl #1: So you shave random things when bored?<br />\nGirl #2: Yep! Besides, I guess my twat needed it the most. It was a damn jungle down there; I could almost hear the tiger roar.', '', 1134712839)
    ,new Q('003593', 'Wednesday One-liners Stand for Good Hygiene', 'Girl: You can tell the Upper West Side from Brooklyn because there isn\'t shit everywhere.', '', 1132819244)
    ,new Q('003502', 'Wednesday One-liners for the Mishpokhe', 'Father lecturing his 7 or 8 year old son: \"You don\'t share your peepee with anyone\"', '', 1132207237)
    ,new Q('003428', 'Ironically, She Hates Chunky Monkey', 'Chick: I could never run a whole marathon.<br />\nGuy: Maybe if you were chasing a Ben and Jerry\'s truck.', '', 1131523255)
    ,new Q('003355', 'Wednesday One-liners Smoke, Shoot and Sniff', 'Teenage girl: My mom is such a crack whore! How do you ground your kid for finding your pot? Who keeps their pot in their daughter\'s jacket, anyway?', '', 1130961612)
    ,new Q('003355', 'Wednesday One-liners Smoke, Shoot and Sniff', 'Chick on cell: ...Yeah, but I\'m a whore and set fire to her driveway while we were on shrooms.', '', 1130961612)
    ,new Q('003149', 'That\'s Not Why He\'s Always Cleaning Himself', 'Teen boy: My puppy is probably going to die soon.<br />\nTeen girl: Aw, when?<br />\nTeen boy: Probably by next September, he\'ll be a corpse.<br />\nTeen girl: Wait, why?<br />\nTeen boy: He has obsessive-compulsive disorder.', '', 1130515200)
    ,new Q('003282', 'Wednesday One-liners Keep It in the Family', 'Teen chick: Yeah, but he\'s not even really that important. I mean, he\'s nothing special. He\'s just my mom\'s husband.', 'Mandy Lynn', 1130392823)
    ,new Q('003279', 'Yum! Wednesday One-liners', 'Girl: I once brought brownies to a concert and everyone thought they were pot brownies but I was just hungry for brownies.', 'Holly Kaye', 1130371247)
    ,new Q('003072', 'The Secret Comedian Cells Spring Into Action', 'Woman: It\'s a pity about that actress who stabbed someone with her knife. What\'s her name? ...Um...Reese?<br />\nChick: Witherspoon?<br />\nWoman: No! With her knife!', 'Emilia', 1129845600)
    ,new Q('003072', 'The Secret Comedian Cells Spring Into Action', 'Girl: Jesus Christ, these fucking...', '', 1129845600)
    ,new Q('003083', 'The Infinite Crisis of Wednesday One-liners', 'Man on cell: If it weren\'t for the soap suds I wouldn\'t have super-powers.', '', 1129125619)
  ])
  ,new S('51st & 2nd', 40.7555, -73.96807, 15, [
    new Q('004869', 'She Gave Him a Hand, At Minimum', 'Guy #1: Oh, that really sucks. So she wouldn\'t even blow you? After all that?<br />\nGuy #2: Nope.<br />\nGuy #1: Did she at least finish putting up those shelves in your closet?', 'Kiere Walker', 1144159228)
  ])
  ,new S('Blockbuster, 56th & 1st', 40.75764, -73.9634, 26, [
    new Q('004246', 'Save That for the Model UN', 'Girl #1: Look at the clerk...You know what they say about Chinese<br />\nclerks... <br />\nGirl #2: Shh, Jord, let\'s not be racist in public.', '', 1139306450)
  ])
  ,new S('88th & West End', 40.79017, -73.97691, 18, [
    new Q('003492', '...With a Side Order of Wednesday One-liners', 'Teen boy: But how do they get the peanuts into the shells?', 'Liane Graham', 1132185605)
  ])
  ,new S('103rd & Broadway', 40.79906, -73.96846, 18, [
    new Q('004194', 'Wednesday One-liners for the Thespians', 'Black chick: I\'m the oldest of all my siblings. I feel like Moesha.', 'Fatty mcFingers', 1137621637)
  ])
  ,new S('54th between 6th & 7th', 40.762985, -73.980035, 16, [
    new Q('004985', 'Wednesday One-liners for Other Places', 'Girl: Ah, I can\'t make it that date. That\'s the same day as the lay-in for the children of Uganda.', 'Ryan', 1144238449)
    ,new Q('003182', 'WeDDnesDDay One-liners', 'Doorman: She stopped by to let me pet her dog, but all I wanted to do was squeeze her tits.', '', 1129716049)
  ])
  ,new S('91st & Columbus', 40.78965, -73.96986, 18, [
    new Q('005210', 'Wednesday One-liners: Not Ready for the Olympics', 'Guy:  If you were playing Risk, and you were Charles Darwin, would you place all of your armies on the Galapagos Islands?', 'John Bardes<br />', 1146110432)
    ,new Q('003832', 'Wednesday One-liners Aren\'t in the Best of Health', 'Teen guy: Yeah, so my doctor said to me:, \"You\'re a pussy.\"', 'Ally', 1134612036)
    ,new Q('003181', 'Wednesday One-liners and the Boob Tube', 'Teen girl: Snoopy is not a smurf!', 'Ele', 1129788004)
    ,new Q('003006', 'I\'m Never Going to Figure Out This Dumb Language', 'Translated from the Spanish.', 'Jane T.', 1129658400)
  ])
  ,new S('Bowery & Houston', 40.72424, -73.99266, 1, [
    new Q('005820', 'Wednesday One-liners, Dates Gone Wrong', 'Girl on cell: The alcoholic who waved a shotgun at you on Valentine\'s Day?  That\'s who\'s taking you to the Al-Anon meeting?', '', 1150956032)
  ])
  ,new S('85th & 2nd', 40.77717, -73.95225, 21, [
    new Q('005650', 'Wednesday One-liners Have No Manners', 'College kid on cell: He used my razor to shave his balls....I didn\'t know what to do, I just stood there.', 'Omar', 1149688832)
    ,new Q('004108', 'The Shooting Death of Wednesday One-liners', 'Old lady: ...and then my dad stabbed him. And that\'s when it all went to shit.', 'David B.', 1137031250)
  ])
  ,new S('Automatic Slims, Washington  & Bethune', 40.73695, -74.00825, 11, [
    new Q('005598', 'Don\'t Get Me Started on Asian Women and Their Boxes', 'Guy, about to hit on girl: Hey. [looks down at his sleeve as it slides into some bar toe-jam]<br />\nGirl: What\'s wrong?<br />\nGuy: I just got something on my favorite sweatshirt. [starting to get really stressed]<br />\nGirl: I don\'t know if you know about this, but there\'s these metal boxes you put you clothes in and it will clean them.<br />\nGuy stares blankly at her.<br />\nGirl: Or, if you\'re really lazy like me, you can just take it someplace and have a short Asian woman use the box for you.<br />\nGuy still looks at her, confused.<br />\nGirl leaves bar.', '', 1148709632)
  ])
  ,new S('20th & 8th', 40.74341, -73.99986, 0, [
    new Q('004564', 'Wednesday One-liners Miss St. Elsewhere', 'Old man: Tobacco kills. Cancer cures smoking. Think about it.', 'Grant Willing', 1140674402)
  ])
  ,new S('2nd Avenue between 51st & 52nd', 40.75581, -73.96784, 15, [
    new Q('002929', '\"That\'s Jacks the Ripper, love.\"', 'American girl: So when does Kitty\'s plane get in?<br />\nBritish guy: I don\'t know...I think 12:30. I\'m really nervous about her moving in.<br />\nAmerican girl: Why?<br />\nBritish guy: Because you know she is going to expect me to marry her.<br />\nAmerican girl: Well, you need to get married. You need to have little Jack the Rippers running around.', '', 1128744000)
  ])
  ,new S('89th & Madison', 40.78278, -73.95743, 21, [
    new Q('003662', 'Wednesday One-liners Rifle Through the Trash', 'Hobo: Yeah, \'cause I wanna buy a sandwich. Please help me buy a sandwich. Please, it\'s for a birthday, that sandwich. Oh yeah, gimme all that change. I love you! I love you! I love you!...Don\'t be bendin\' over to pick up nothing. Don\'t be bendin\' over pickin\' up nothing off the floor. Don\'t be playin those games with me. Respect yo\'self!', 'Lucy & Janie', 1133402459)
  ])
  ,new S('Office, 45th & 3rd', 40.75268, -73.97305, 15, [
    new Q('002986', 'I\'m Pretty Sure That\'s Noman', 'Man: That\'s a nice necklace.<br />\nWoman: Thank you. It\'s something my sister brought back from...either Acapulco or the Poconos, whichever one\'s an island.', '', 1129096802)
  ])
  ,new S('Rector & Greenwich', 40.70798, -74.0136, 5, [
    new Q('004797', 'Seems the Rancor is Alive', 'Dad: Do you think <em>I</em> want to talk about princesses 24 hours a day?<br />\nLittle girl: No.<br />\nDad: What do you think <em>I</em> want to talk about?<br />\nLittle girl: <em>Star Wars</em>.', '', 1143547204)
    ,new Q('003659', 'The Classy Ladies of Wednesday One-liners', 'B&T lady: I\'m sorry, I live in a house; I don\'t have to worry about people \"revolving\" in.', 'Dan C.', 1133424014)
  ])
  ,new S('\"Jim Hanley\'s Universe, 33rd & 5th', 40.74777, -73.98505, 3, [
    new Q('003960', 'Wednesday One-liners M.D.', 'Man: You know if you catch a cold at <em>your</em> age, it could be a problem.', '', 1135800048)
  ])
  ,new S('Bleecker & West 10th', 40.734, -74.00457, 11, [
    new Q('003889', 'Wednesday One-liners for Chosen People', 'Woman: That\'s the sport Jews totally dominated, at first.', 'Susie Felber', 1135188041)
  ])
  ,new S('Water St', 40.70453, -74.00834, 5, [
    new Q('005799', 'Better Luck Next Time', 'Desi kid #1: Shit I didn\'t know Brooklyn was this advanced.<br />\nDesi kid #2: Isn\'t that the Water Street dorm?<br />\nDesi kid #1: Oh yeah...<br />\nDesi kid #2: We didn\'t quite make it off Manhattan, it seems.', 'Innocenti', 1150128032)
  ])
  ,new S('Greenwich & Charles', 40.73428, -74.00716, 11, [
    new Q('003421', 'She\'s Training for the Sextathlon', 'Guy: Hey, you\'re limping! Did you run the marathon or something?<br />\nGal: No, I fell doing a kegstand.', '', 1131422409)
  ])
  ,new S('Essex & Delancey', 40.71863, -73.98816, 8, [
    new Q('003431', 'Wednesday One-liners Are #1!', 'Mom: You know the more you cry the more you have to pee!', 'smoon', 1131602403)
  ])
  ,new S('3rd Avenue & 11th Street', 40.73131, -73.98862, 1, [
    new Q('004973', '\"You call that Spanish?\"', 'Girl #1: What did your mom give you for your birthday?<br />\nGirl #2: Oh, just money.<br />\nGirl #1: When are you gonna go shopping?<br />\nGirl #2: I\'m gonna save it. I spent too much money this weekend celebrating.<br />\nGirl #1: What better to spend it on if not clothes and booze?<br />\nGirl #2: I don\'t know. Donate it to starving children in Ecuador or something.<br />\nGirl #1: Blah, blah, blah.', '', 1144720848)
    ,new Q('004987', 'Wednesday One-liners Hit the Premiere', 'Girl: I liked it, but there was like, too much cinematography.', 'Robet Olsen', 1144252832)
    ,new Q('004625', 'Wednesday One-liners Eat Pocky', 'Drunk girl: You\'re Chinese and a virgin. Can I shake your hand?', 'Elliott Bradley', 1141207201)
    ,new Q('004461', 'Wednesday One-liners & the Sin of Sloth', 'Man: Hey, can I get this mail? And pay for my box? I drink a lot and today\'s my sober day; I want to get all my errands done.', '', 1140033648)
    ,new Q('003948', 'The Bell Made the Assault Sound Whimsical', 'Guy: Ooh, remember that time you got raped there?<br />\nGirl: Yeah! Why did we ride bikes, anyway?', '', 1136959213)
    ,new Q('003875', 'What Every Girl Longs to Hear', 'Guy: You could try working out.<br />\nGirl: I <em>do</em> work out.<br />\nGuy: Are you going to take that hip-hop class?<br />\nGirl: No.<br />\nGuy: I think I\'m going to take that hip-hop class just so I can <em>serve you</em>. I\'m going to go down there and <em>serve you</em>.', '', 1136304019)
    ,new Q('003829', 'Wednesday One-liners Starring Toothy Tile', 'Guy on cell: I\'m seeing <em>Bareback Mountain</em>.', '', 1134554452)
    ,new Q('003829', 'Wednesday One-liners Starring Toothy Tile', 'Guy: Is <em>Bareback Mountain</em> sold out?', '', 1134554452)
    ,new Q('003367', 'I Always Wondered About Mike and Rudy', 'Hobo: Of course Bloomberg is fucking gay. All the gays are Republican.', 'Jim Ed Tabors', 1132250406)
    ,new Q('002923', 'Make That Flapjack Nice and Sticky', 'Guy #1: Yeah man, she\'s kind of a hippie. I mean, her name is Maple.<br />\nGuy #2: Maple? You should tap that shit.', 'thejosh', 1128700819)
  ])
  ,new S('Hunter College High School, 94th & Park', 40.7852, -73.95339, 21, [
    new Q('004199', 'It\'s an Auditorium, Not a Nebula', 'Dad: Could you tell me where the auditorium is? <br />\nSecurity guy: It\'s on the second floor. <br />\nDad: Wait, you mean it\'s actually in the building?', '', 1138766448)
  ])
  ,new S('Fordham University, Rose Hill', 40.861602, -73.885567, -1, [
    new Q('005378', 'Wednesday One-Liners Take It Off', 'Guy: Are we really not going to get to see your asshle?', 'Chris V', 1147320032)
    ,new Q('005111', 'Wednesday One-liners, Chronic Matriculators', 'Guy on cell: <em>You teach literature in a school and you talk about the President</em>? At least he\'s done something with his life.', 'Jess McGins', 1145462425)
    ,new Q('005068', 'Looks Like Mean People Do Suck', 'Guy: Are you going to the gym after this?<br />\nGirl: Are you going to the mean house?<br />\nGuy: That was, without a doubt, the lamest comeback I have ever heard in my life.', 'Jessica R', 1145127618)
    ,new Q('004988', 'Wednesday One-liners Spell It \"Aminals\"', 'Professor guy:  Love is just a hornet\'s nest of emotions! You\'re in love! You\'re jealous! You want to kill the person they\'re with!...No one else feels this way?', 'Sarah Doogs', 1144260014)
    ,new Q('004989', 'Rapunzel\'s Wednesday One-liners', 'Guy: Yo, his last girlfriend had a thicker happy trail than mine.', '', 1144267226)
    ,new Q('004926', 'Wednesday One-liners Got Lucky', 'Guy: Yeah, so he hooked up with this girl, but he can\'t remember her name or what she looked like. He says all he can remember is that she had a red bra.', 'Sarah Doogs', 1143705614)
    ,new Q('004808', 'That Stone was Pure Gall', 'Guido #1: She was givin\' me lip, so I returned the favor by pissing on her face.<br />\nGuido #2: For real dog, that\'s what you gotta do.<br />\nGuido #1: I had to go anyways, so it was really two birds and a stone.', 'Scotty H', 1143727251)
    ,new Q('004780', 'Wednesday One-liners Found \"The One\"', 'Guy: We met up with these girls last week and hooked up with one of their friends in the bathroom. We then went to her friends and told them we tagged teamed her. <em>Man</em>, they were pissed.', 'Scott Hoberg', 1142474402)
    ,new Q('004694', 'Wednesday One-liners by Athletes, for Athletes', 'Guy: Yeah, man. You can do whatever you want in football and not get arrested. I could try to kill you right now, and nothing.', 'Sarah Doogs', 1141826404)
    ,new Q('004535', 'His Colon is the Real Winner', 'Girl: Do you have any exciting plans for tonight?<br />\nGuy: No. Do you want to have a hot dog eating contest?<br />\nGirl: Not so much, since I\'m a vegetarian.<br />\nGuy: I guess I win, then.', 'Andrea', 1141520424)
    ,new Q('004635', 'How Was Your Ash Wednesday, New York?', 'Girl: For lent, I\'m giving up chocolate and Facebook.', '', 1141358420)
    ,new Q('004631', 'Wednesday One-liners Flip Channels', 'Professor guy: The day a TV reaches out and touches us, watch out! Much less if we add fragrance. That would be a disaster, wouldn\'t it?', 'Jess McGins', 1141272056)
    ,new Q('004627', 'Wednesday One-liners Go Potty', 'Girl: You\'re so lucky I didn\'t have my UTI. I would\'ve wet my pants!', '', 1141243223)
    ,new Q('004632', 'Elsewhere: Wednesday One-liners', 'Guy: I do what I want; I\'m an Egyptian!', 'Sarah Doogs', 1141279236)
    ,new Q('004623', 'Hair Today, Wednesday One-liners', 'Girl: I don\'t even know <em>why</em> she has a straightener. Her hair\'s <em>so</em> curly. She, like, needs a perm. You know, \'cause perms for us are, like, curly, they\'re straight for curly people.', '', 1141228829)
    ,new Q('004558', 'Wednesday One-liners for the Tots', 'Professor lady: Well, did you all know that Osama bin Laden was one of about 50 children? That could actually explain some things about him, you know, not getting enough attention as a child. Maybe if he had been one of three instead, we wouldn\'t have so many problems, ha, ha, ha!...Please don\'t repeat this to anyone.', 'Grace Aldridge', 1140631248)
    ,new Q('004562', 'Wednesday One-liners Get Baked', 'Professor guy: But I took ecstasy by accident, I was 43 years old. It\'s kind of harmless; it\'s cute, it\'s got a butterfly on it.', '', 1140660024)
    ,new Q('004467', 'Wednesday One-liners Belt It Out', 'Professor guy: Willie Nelson smokes pot like a rastafarian, by the way.', 'Jess McGins', 1140062431)
    ,new Q('004011', 'Something\'s in the Air (Happy VD!)', 'Girl #1: I hate Valentine\'s Day. It\'s so stupid.<br />\nGirl #2: I\'ll buy you flowers.<br />\nGirl #1: I just wanna have sex.<br />\nGirl #2: That\'s what I meant, I\'ll go down on you.', 'Jess McGins', 1139911212)
    ,new Q('004250', 'I Think We Need a Translator', 'Queer: What\'s missionary?<br />\nChick: Like regular.', 'Jess McGins', 1139328041)
    ,new Q('004320', 'Wednesday One-liners Watch VH1', 'Professor guy: Billy Joel, wow. He\'s got about 10 shows coming up. I bet the stage production budget is through the roof. I\'d drive a car onto stage...and smash it into a tree.', 'Jess McGins', 1138838409)
    ,new Q('004167', 'Take It Up with Saint Peter', 'Girl: Why do I have to die, why can\'t you die?<br />\nGuy: <em>No</em>.<br />\nGirl: Well...that\'s not fair.', 'Joe', 1138694424)
    ,new Q('004177', '\"Tell me you didn\'t fall asleep!\"', 'Guy: I could be fired for 8 counts of sexual harassment last night.<br />\nGirl: Yeah, and that\'s just on me alone.<br />\nGuy: Oh man, really?<br />\nGirl: Yeah, but you bought me a drink, so it\'s okay.', 'Jess McGins', 1138672814)
    ,new Q('004059', 'That\'s Mom\'s Nickname', 'Girl: Say, for instance, if somebody killed your mother and you killed theirs to get back at him--<br />\nGuy: Don\'t even <em>suggest</em> such a thing! You\'re talking to fucking Oedipus here.', 'Matthew Smith', 1137715223)
    ,new Q('004196', 'The Wednesday One-liners Brain Trust', 'Guy: This is just bullshit. Or whatever the Hebrew for \"bullshit\" is.', 'Jess McGins', 1137636008)
    ,new Q('004110', 'Wednesday One-liners Need to Know', 'Professor guy: One of the ways I learn about the world is through the sense receptors on my tongue.', 'Jess McGins', 1137016850)
    ,new Q('004041', 'The Annunciation of Wednesday One-liners', 'Professor guy: I know I should seek authorization from something called a \"Class Dean,\" or alternatively, the Pope.', 'Jess McGins', 1136404850)
    ,new Q('003960', 'Wednesday One-liners M.D.', 'Girl: If I were bulimic and you were Rain Man, maybe our lives wouldn\'t be so sad.', '', 1135800048)
    ,new Q('003962', 'Wednesday One-liners for Jung', 'Professor guy: At the end of every semester I want to retire. But I\'ve gotten better...I used to want to kill myself.', 'Jess McGins', 1135814443)
    ,new Q('003775', 'Dangerous Showers There, Too', 'Professor guy: ...Then he was sent to Buchenwald. Have any of you visited any of the camps?<br />\nGirl: I did.<br />\nProfessor guy: Yeah? Did you visit Buchenwald?<br />\nGirl: No.<br />\nProfessor guy: Did you visit one in Germany?<br />\nGirl: No.<br />\nProfessor guy: Did you visit one in Europe?<br />\nGirl: No, it was in America.<br />\nProfessor guy: Are you talking about a summer camp?<br />\nGirl: Yeah.', 'Maggie B.', 1135346436)
    ,new Q('003687', 'America\'s Next Top Meteorologists', 'Chick #1: Yeah, and the grasshoppers caused Hurricane Katrina.<br />\nChick #2: <em>Did they really?</em><br />\nChick #3: Right, of course they did.', 'hockeygurl', 1133791246)
    ,new Q('003398', 'If You Don\'t Get It, Ask an Appeaser', 'Professor lady: What is your favorite fruit? <br />\nGirl #1: J\'aime manger les pommes.<br />\nGirl #2: Isn\'t the rule if it grows underground it\'s a vegetable?', '', 1132596036)
    ,new Q('003179', 'Will Wednesday One-liners Ever Find True Love?', 'Girl: You\'re going to break up with him just because you <em>think</em> he might be going to jail?', '', 1129752046)
    ,new Q('003085', 'Wednesday One-liner Grrls', 'Girl: Well, tell Joe my fist has a suggestion for his face.', '', 1129118436)
    ,new Q('002985', 'Technically Since Early Saturday Morning', 'Guy #2: That\'s just wrong.<br />\nGirl #2: You just don\'t understand, it\'s love.<br />\nGuy #2: Yeah, it\'s been love since Friday night at the bar.', 'Jess McGins', 1129104032)
  ])
  ,new S('Staten Island Ferry', 40.6669025988096, -74.04107093811035, -1, [
    new Q('005831', 'Wednesday One-liners, the Morning After', 'Chick: I\'m no whore. I told him, the closest you\'re getting to getting me from behind, you know, doggie style, is licking your own balls and humping my leg.', 'stuck in great kills', 1150308032)
    ,new Q('005204', 'Wednesday One-liners Are Cooking with Gas', 'Girl on cell: ... a roma tomato, lime... I mean lemon, either one... omigosh, this is the wrong number! [hangs up]', '', 1146081632)
    ,new Q('004995', 'Wednesday One-liners Bring It', 'Mom: Now you children behave or else I\'ll fck you up.', '', 1144288852)
    ,new Q('004818', '\"...Just like I tell my dad.\"', 'Mom: Hold my hand! It\'s too crowded for you to let go of my hand!<br />\nDad: He think he grown, but he ain\'t grown yet.<br />\nMom: I know, waking up all early in the morning.<br />\nDad: Next time he does that, thinkin\' he\'s all grown, tell him to change his own shtty Pamper.', 'J. Noelle', 1143799200)
    ,new Q('004918', 'Wednesday One-liners Turn It Up a Notch', 'Guy on cell: No son, I already done told you I won\'t have a threesome with you and your girl! I don\'t play that sht! Now I\'m coming to your house later to get my weed and my money and I don\'t never want to speak to you again!', '', 1143633634)
    ,new Q('004633', 'Wednesday One-liners with an Attitude', 'Guy on cell: Do you have a lawyer\'s number handy? I\'m gonna sue that fuck Smiley!', 'Johnny Drongo', 1141286401)
    ,new Q('004283', 'Throw Momma from the Train 2: The Kids', 'Dad: You don\'t want <em>that</em>, do you? Go look at it again and tell me what you see...Well, what do you see?...Is it beautiful?<br />\nLittle boy: Yeah.<br />\nDad: Okay.', 'David D.', 1139529620)
    ,new Q('004386', 'Wednesday One-liners Are Killer', 'Tween girl: Hey Daddy, wouldn\'t it be funny if I choked on a piece of <br />\nfoil and I fell out the window and I drowned and I died and a shark came and an octopus and a duck and I died?', '', 1139457646)
    ,new Q('004266', 'Wednesday One-liners Build Up an Appetite', 'Walkie talkie: Attention all units, attention all units...Does anyone want Chinese food?', 'Clara', 1138233607)
    ,new Q('003435', 'Relationship Problems? Try Wednesday One-liners', 'Guy on cell: So, she said she would kill you if you left her? Well, that\'s okay. Look at Sunny. She said she\'d kill me, too, and I\'m fine. I mean, if you want to leave her, just do it...I\'m not saying you should, I\'m just saying if you want to...I saw her ugly mother yesterday...God, I have to go to Staten Island. I fuckin\' hate Staten Island. Let\'s move to California.', '', 1131573637)
    ,new Q('003354', 'The Womb of Wednesday One-liners', 'Woman: It\'s amazing how I raised three kids. I don\'t have a brain in my head.', 'Nicole', 1130990446)
  ])
  ,new S('7th & C', 40.72407, -73.97886, 1, [
    new Q('004191', 'Wednesday One-liners for the Weathergirls', 'Guy: The sun is nice today.', 'Seung', 1137657616)
  ])
  ,new S('45th & 9th', 40.76035, -73.99124, 14, [
    new Q('003192', 'Wednesday One-liners Love Margot Kidder', 'Chick: And Janet...is she out of the mental hospital?', 'Matt Wurgaft', 1129730443)
  ])
  ,new S('143rd & Broadway', 40.82508, -73.95129, 22, [
    new Q('004039', 'Wednesday One-liners Are a Real Turn-on', 'Guy: She could only get him to hook up with her if she let him wear her makeup.', 'Djlindee', 1136368837)
    ,new Q('002991', 'You\'re No JonBenet, Sister', 'Girl: Am I the cutest?<br />\nGuy: Maybe...are we including dead people?', 'djlindee', 1129284023)
  ])
  ,new S('Rockefeller Center', 40.7588954203221, -73.9790153503418, 16, [
    new Q('005861', 'Have an Inconvenient Day', 'Tourist: Is this the way to the subway?<br />\nGuard: No. You need to go west of 49th. <br />\nTourist: Can I go down there anyway?<br />\nGuard: No. There\'s a special event.<br />\nTourist: Please? We\'re from California.<br />\nGuard: No. Welcome to New York.', '', 1150509632)
    ,new Q('005303', 'An English Muffin?', 'Big guy: Yo, it\'s like I was stuck between a rock and butter.<br />\nLittle girlfriend: I think you mean you were stuck between a rock and a hard place.<br />\nBig guy: No, who would want to be stuck next to a huge pile of butter?', 'Allison', 1146736832)
    ,new Q('005301', 'Wednesday One-Liners and the Lying Liars That Tell Them', 'Woman on cell, sitting on a bench, smoking: I\'ll be there as fast as I can, I\'m running...', '', 1146722432)
    ,new Q('005095', 'That Depends on Phase Three', 'Girl: Wow! Did you see the rack on her?<br />\nGuy: Where?<br />\nGirl: Over there...<br />\nGuy: Man! You\'re not kidding!<br />\nGirl: See what I do for you? Who\'s the best girlfriend ever?', '', 1145354427)
    ,new Q('003989', 'Well, It\'s Gone Now; Timber!', 'Little girl: I hate that tree.', 'melanie segal', 1136703637)
    ,new Q('003963', 'Wednesday One-liners, Clothing Optional', 'Guy: You can have the wool thong, free, if you ice skate with the naked elves.', 'Autumn', 1135821627)
    ,new Q('003956', 'The Politics of Wednesday One-liners', 'Guy: He\'s not a citizen. He doesn\'t even have a tip on one of his fingers.', 'Adam Robbins', 1135764057)
    ,new Q('003309', '...Their Old Familiar Carols Play...', 'Woman: We were playing Christmas music last night. If you listen to the words, a lot of those songs really mean something.', '', 1135548006)
    ,new Q('003707', 'Not As Old-fashioned As Taking a Punch', 'Girl #1: So I said I\'m not sure if I\'m gonna take his last name; it seems really old-fashioned.<br />\nGirl #2: What\'d he say?<br />\nGirl #1: He said an engagement ring is old-fashioned, but I took that.', '', 1134799237)
    ,new Q('003634', 'Dreaming of a White Christmas', 'Girl: Yep. That\'s a big ass tree all right.<br />\nGuy: Mm-hmm.<br />\nGirl: Yeah, okay, great, big ass tree. I\'m freezing, can we go to Starbucks now?', '', 1134453636)
    ,new Q('003458', 'It\'s a White Thing; You Wouldn\'t Understand', 'Girl #1: I bought him white eyelashes and white lipstick but I don\'t know how much he\'s willing to let me put on him.<br />\nGirl #2: Does he do drag?<br />\nGirl #1: Well, he used to; when he lived in San Francisco, back when he danced. But he did it more for the kink than anything else.', '', 1133096458)
    ,new Q('003590', 'Wednesday One-liners for Tomorrow', 'Tourist woman: Yeah, they regrow a new one every year.', 'Sternel', 1132768812)
    ,new Q('003228', 'Hey, It\'s Kind of What They Came Here For', 'Tourist guy: Excuse me, where is the subway?<br />\nNY guy: Sorry, I don\'t speak English.', '', 1131148826)
    ,new Q('003280', 'The Riddler Presents: Wednesday One-liners', 'Foreign guy: Hey, is this where the Rangers play?', '', 1130378458)
  ])
  ,new S('113th & Broadway', 40.80611, -73.96544, 20, [
    new Q('004561', 'Wednesday One-liners for Fuck Machines', 'Old lady: No, Henry, trust me. You were never a fuck machine, and I certainly did know how to fake it.', '', 1140652837)
    ,new Q('003279', 'Yum! Wednesday One-liners', 'Bag lady: You know why no one likes you? Because you are so fucking ugly. You hear me? You are so fucking ugly! Fucking ugly!...Hey you, you want to buy a slice of pizza? It\'s hot and it\'s fresh.', '', 1130371247)
  ])
  ,new S('53rd between 5th & 6th', 40.761070000000004, -73.97746, 16, [
    new Q('004554', 'Wednesday One-liners Face It', 'Suit on cell: He ain\'t licking my forehead. He can lick your forehead all you want, not mine.', 'Tim Masterson', 1140602440)
  ])
  ,new S('140th & Broadway', 40.82322, -73.95264, 22, [
    new Q('006271', 'Wednesday One-Liners Get Around', 'Woman: The problem is that men are paradoxically both a reason to be celibate and to have large amounts of sex.', '', 1153375200)
    ,new Q('005735', 'It\'s Important to Have Principles', 'Girl #1: Was he attractive at least?<br />\nGirl #2: I wouldn\'t sleep with people who aren\'t attractive.<br />\nGirl #1: Well, I\'ve slept with people who weren\'t attractive.<br />\nGirl #2: Yeah, me too.', 'djlindee', 1149638432)
    ,new Q('003274', 'Wednesday One-liners GOTTA MAKE', 'Woman on cell: Damn! How <em>big</em> is your ass that you used up all of my toilet tissue?', '', 1130335229)
  ])
  ,new S('Union Square Regal Cinemas', 40.73447832156747, -73.99081707000732, 12, [
    new Q('005088', 'How Were Your Holidays, New York?', 'Mom: I am so thirsty, I really would like a Coke. Only two more days \'til I can get one. Do you think this is how Jesus felt when he was in the desert for 40 days?', 'Audrey', 1145304034)
    ,new Q('003963', 'Wednesday One-liners, Clothing Optional', 'Guy: Those boots are all the rage in rehab.', '', 1135821627)
    ,new Q('003763', 'Desperately Trying to Prove He Doesn\'t Suck', 'Teen boy #1: Get some straws! <br />\nTeen boy #2: Nah man, I\'m allergic.', 'Talia & Syd', 1135310416)
    ,new Q('003832', 'Wednesday One-liners Aren\'t in the Best of Health', 'Guy: You should tell that AIDS joke at work. But tell it before someone with AIDS tells it because it\'ll be funnier when they say it.', 'kgy extraordinaire', 1134612036)
    ,new Q('002947', 'And Go Back to Frisco with Your Pathetic Friends', 'Girl: Shoot! I\'m sorry.<br />\nGuy: So where are you from? Because I know it\'s not New York if you say \"shoot!\".', 'Jeff Hubbard', 1129226412)
  ])
  ,new S('9th & B', 40.72627, -73.98035, 1, [
    new Q('004857', 'Wednesday One-liners Are on the Other Line', 'Guy: Yeah, well, that\'s what I do, perpetually disappoint people. Call my father.', 'JillyNYC', 1143064823)
  ])
  ,new S('5th between 49th & 50th', 40.758215, -73.977455, 16, [
    new Q('004110', 'Wednesday One-liners Need to Know', 'man: ...And what the <em>hell</em> is this \"knowledge is power\" thing?', 'Shaun Wilson', 1137016850)
  ])
  ,new S('Madison between 28th & 29th', 40.744299999999996, -73.985475, 2, [
    new Q('003687', 'America\'s Next Top Meteorologists', 'Eva Pigford: I\'m even wearing a bra and I\'m still cold.', '', 1133791246)
  ])
  ,new S('149th & Amsterdam', 40.82775, -73.94575, 22, [
    new Q('004988', 'Wednesday One-liners Spell It \"Aminals\"', 'Man: One day these guys robbed this motherfcker. They threw a small dog into the window and when the dog was killing this little dog they stole <em>everything</em>. Motherfcker was still shaking the dead dog in it\'s mouth when the dude got home.', '', 1144260014)
  ])
  ,new S('23rd Street & Broadway', 40.7414, -73.98928, 13, [
    new Q('006098', 'Wednesday One-Liners Do It Standing Up to Be Safe', 'Chick on cell: I know it\'s sick, but I\'m so excited that I can have unsafe sex now!', 'Becka Dash', 1152756000)
    ,new Q('003279', 'Yum! Wednesday One-liners', 'Queer: French fries over co<em>caine</em>, muthafucker are you <em>crazy</em>?', '', 1130371247)
  ])
  ,new S('63rd & 5th', 40.76673, -73.97121, 21, [
    new Q('003350', 'Schneider\'s Wednesday One-liners', 'Girl on cell: So he left his wooden spoon at my house...<em>What the fuck am I gonna do with a wooden spoon</em>?...Oh, right.', '', 1130925638)
  ])
  ,new S('Water & Fulton', 40.70726, -74.00399, 5, [
    new Q('003750', 'Wednesday One-liners Are Stuffed', 'Girl: My aunt fell asleep on a bus once...someone put a cookie in her <br />\nmouth.', 'Kate R', 1134007215)
    ,new Q('003750', 'Wednesday One-liners Are Stuffed', 'Girl on cell: Hi, I recieved my FreshDirect order this morning, and I ordered one regular eggplant but instead I got <em>fifteen limes</em>. So I was just wondering what I was supposed to do about this. Thanks, bye!', '', 1134007215)
  ])
  ,new S('Grand & Havemayer', 40.71276, -73.95678, -1, [
    new Q('005736', 'Steal This Irony', 'Puerto Rican teenager hanging with his homies: Yo GIMME YOUR BIKE!<br />\nHipster riding by on his BMX: Gimme your haircut! I like your crispy hairlines!', 'lil pirate', 1149645632)
  ])
  ,new S('West Broadway & Houston', 40.72688, -73.99996, 7, [
    new Q('004036', 'Wednesday One-liners, Princess Edition', 'Suit: Oh, man. <em>Star Wars</em>. Once you get up to <em>Jedi</em>...Oh, man.', 'Gus', 1136390436)
  ])
  ,new S('University & 12th', 40.73391, -73.99281, 12, [
    new Q('005783', 'Were They Piercing?', 'Frat boy #1: Did you see that?!<br />\nFrat boy #2: What?<br />\nFrat boy #1: That guy just fcked you with his eyes.', 'Eyefcker\'s straight friend', 1150005632)
    ,new Q('004705', 'SimStepson', 'Guy #1: Why don\'t we make him escaping a bank robbery?<br />\nGuy #2: Okay, he just robbed a bank and now he\'s eating lunch with his girlfriend.', 'reggae sarkar', 1144108822)
    ,new Q('004103', 'Wednesday One-liners is Just a Number', 'HS guy: I swear, someday I\'m going to say, \"I hit on the hottest girl today,\" and someone\'s gonna come up and say, \"Another fourth grader?\".', '', 1136995252)
    ,new Q('003353', 'Long, Thin Wednesday One-liners', 'Girl: No, that\'s not what that was. That was a dildo holder.', '', 1131004811)
  ])
  ,new S('Blake & Todd, 45th & Vanderbilt', 40.75434, -73.97697, 16, [
    new Q('005411', 'Just Add Earwax', 'Twentysomething girl:  What is the nastiest thing you can think of?<br />\nTwentysomething guy: A bloody vagina fart.', 'Nick Bradham<br />', 1147464032)
    ,new Q('004460', 'Wednesday One-liners Don\'t Get None', 'Woman: Do not name that child Lester if you ever want him to lose his virginity!', 'Anna', 1139997602)
  ])
  ,new S('56th & 9th', 40.76722, -73.98622, 14, [
    new Q('003185', 'Do You Believe in Soulmates?', 'Drunk girl: I need to put on lipstick.<br />\nSober guy: Why?<br />\nDrunk girl: Because I have a guy coming to see me...he has hair and is taller than me.', '', 1131991246)
  ])
  ,new S('48th & 7th', 40.75985, -73.98421, 16, [
    new Q('004712', '\"No, like trial and error.\"', 'Yuppie guy: I want to have three kids. First a boy, then two girls.<br />\nGirl: What if it doesn\'t happen in that order?<br />\nYuppie guy: There are ways to make it happen.<br />\nGirl: Oh, like, different positions?', '', 1142920823)
  ])
  ,new S('Elevator, 14th Street & 8th Avenue', 40.73974, -74.00252, 11, [
    new Q('003841', '\"Then whose wallet did I lift?\"', 'Guy: So he finally got the guy away from the mark.<br />\nGirl: Wait, who\'s the mark?<br />\nGuy: The new guy she\'s fucking.', '', 1135987208)
    ,new Q('002880', 'Haven\'t You Pissed Off God Enough Already?', 'Queer #1: She\'s kinda bummed...Her parents split; her dad\'s marrying another man.<br />\nQueer #2: Luckily, that\'s not atypical.', '', 1128636050)
  ])
  ,new S('13th between 1st & 2nd', 40.73115, -73.984265, 1, [
    new Q('003496', 'Wednesday One-liners Shoot Skeet', 'Guy: You\'re about to get a face full of cum, bitch!', '', 1132164009)
  ])
  ,new S('68th & 2nd', 40.76623, -73.96023, 21, [
    new Q('004352', 'Mark Felt Hands Over His Title', 'Teen girl #1: So I was like, \"Ew dude, stop, you\'re too small. I don\'t even feel nuttin\'!\"<br />\nTeen girl #2: Yo, he gotta be at least 10 inches for me to even consider it.', 'Monique', 1140091213)
  ])
  ,new S('Whole Foods, Union Square', 40.73574654072402, -73.99184703826904, 12, [
    new Q('006182', 'Wednesday One-Liners Tie the Knot', 'Girl on cell: It\'s <em>marriage</em>, not racism.', 'Phe', 1153972800)
    ,new Q('005233', 'She Prefers Meateaters', 'Bagboy: What\'s with all the bruises?<br />\nCashier girl: My boyfriend likes to bite.<br />\nBagboy: What? You dating vampires now but you still won\'t go out with Tommy?', 'next in line', 1146247232)
    ,new Q('004942', 'She Listened to Michael Jackson', 'Guy #1: Who is that playing?<br />\nGuy #2: Norah Jones.<br />\nGuy #1: Isn\'t she the one who started something?<br />\nGuy #2: Started what?<br />\nGuy #1: Like didn\'t she stand up on a bus?', '', 1144771224)
    ,new Q('004933', 'This is More of a Bodega Conversation', 'Italian lady: I think soemtimes I even like coming grocery shopping more for the music they play than the food selection they have. <br />\nSpanish guy: Eh, they never have any reggaeton.<br />\nItalian lady: Oh, are you sure it\'s not in the pasta section?', '', 1144587646)
    ,new Q('004490', 'Less Seeds', 'Chick: I wanna get some juice.<br />\nGuy: What juice?<br />\nChick: POM juice.<br />\nGuy: Oh, please.<br />\nChick: What\'s wrong with POM juice?<br />\nGuy: It tastes like pussy.<br />\nChick: Like <em>my</em> pussy?', '', 1141128012)
    ,new Q('004565', 'Wednesday One-liners Got Late Night Munchies', 'Woman on cell: Jesus Christ, this is like Russia in the 19th century only instead of toilet paper and soap, people are lined up to buy brie and pate.', '', 1140681647)
    ,new Q('004313', 'Wednesday One-liners Reek', 'Eddie Kaye Thomas: Well, we had the whole deodorant issue in our <br />\nrelationship and we still fell in love.', 'Stella Stare', 1138816853)
    ,new Q('004260', 'It\'s Not Looking Good, Wednesday One-liners', 'Guy: Yeah, me neither; if you are ugly you at least have to be nice.', '', 1138190426)
    ,new Q('003779', 'Show Us Your Teats!', 'Guy: Um, are you disappointed that I don\'t have tits?<br />\nGirl: I mean, a little.<br />\nGuy: Why? You looking to suckle?', 'Kate Elizabeth Queram', 1135368026)
    ,new Q('003888', 'Wednesday One-liners Are in Business', 'Cashier girl: ...We\'re going to overcharge you $17.83; will that be debit or credit?', 'Adriane  S', 1135166452)
    ,new Q('003713', 'Hopes, Dream and Opportunities for the Future?', 'Hipster girl #1: I mean, I feel bad for not finishing him, but I didn\'t want to break the tradition. He\'s never been finished before right?<br />\nHipster girl #2: Never, and I think he\'s a little traumatized ever since that girl threw up on his...you know.', '', 1134910853)
  ])
  ,new S('E 68th & 3rd ave', 40.76717, -73.96248, 21, [
    new Q('005304', 'He Should\'ve Given Her a Break on the Water', 'Girl: How much is the water?<br />\nNewstand guy: $1.25. Do you want a bag?<br />\nGirl: No thanks.<br />\nNewstand guy: What about a straw?<br />\nGirl: No.<br />\nNewstand guy: How about me?', '', 1146744032)
  ])
  ,new S('34th & 2nd', 40.74478, -73.9759, 27, [
    new Q('004376', 'Wednesday One-liners Like Cuckoo Clocks', 'Crazy guy: Don\'t fuck with the Mayflower, people! When will you learn?', 'Hello Clairice', 1139414427)
  ])
  ,new S('Build-A-Bear, 5th & 46th', 40.75602, -73.97904, 16, [
    new Q('005742', 'Wednesday One-liners, Fun Activities for Kids', 'Pregnant woman on cell: Mom, I gotta go. I can\'t find Jason and I need to take him home before he plays Hide and Go Soil Yourself behind the stuffer machine.', 'Anna Lindgren<br />', 1149703232)
  ])
  ,new S('Catherine & Madison Street', 40.71208, -73.99694, 6, [
    new Q('003588', 'Wednesday One-liners, It\'s My First Time', 'Man on cell: Oh, she was a virgin? Did she bleed and everything?...Oh, it was tight though, right?  Kinda like an Indian.', '', 1132761619)
  ])
  ,new S('Starbucks, 6th & Waverly', 40.73292, -74.00008, 12, [
    new Q('004273', 'She\'s Got the Whole Package', 'Teen girl #1: Damn, I\'m so glad I went out with you and not your<br />\nbrother. <br />\nTeen girl #2: Aw baby, me too. <br />\nTeen girl #1: I mean, you have like three times the personality and<br />\nten times the looks. <br />\nTeen girl #2: Oh yeah, I know!', '', 1139493602)
    ,new Q('003278', 'Wednesday One-liners Wave Around a Cup', 'Guy: He paid homeless people to fight with each other and then he filmed it. He ended up going to jail, which is probably good, because that\'s a horrible thing to do. But I want to do that with clowns, because I don\'t like clowns.', 'alyssa', 1130364042)
    ,new Q('003177', 'Wednesday One-liners are New to the Area', 'Drunk college guy: I remember, the first time I came to this city, I threw up on a pedestrian.', 'Abby Nydam', 1129766419)
  ])
  ,new S('CVS, 32nd & 5th', 40.74716, -73.98553, 3, [
    new Q('004519', '\"It\'s to make stripes, you storetard.\"', 'Guy: Yo, you got rolling papers?<br />\nStore lady: I don\'t know. What is that?<br />\nGuy: You know, Zig-Zag.<br />\nStore lady: I don\'t know, what is that for?', 'Abbey Leroux', 1141423205)
  ])
  ,new S('26th & 2nd', 40.73977, -73.97952, 27, [
    new Q('004516', 'She Made Her Own Uggs', 'Girl #1: I wanted to see if it was possible to walk here from campus in 20 minutes.<br />\nGirl #2: So is it?<br />\nGirl #1: No, it took me 22, and I think my boots are filled with blood.', '', 1141416052)
    ,new Q('004243', 'That Depends on the Flavor', 'Guy #1: I think you just stepped in pee, there.<br />\nGuy #2: Ew.<br />\nGuy #1: I think it was human.<br />\nGuy #2: Ew. It was kind of greenish.<br />\nGuy #1: Maybe it was antifreeze. Don\'t lick your shoe or anything. Not that you should if it was pee, I mean.', '', 1139284838)
  ])
  ,new S('7th between A & B', 40.725555, -73.98237, 1, [
    new Q('004259', 'Wednesday One-liners or Best Offer', 'Chick on cell: He says it\'s better, but I just say it\'s cheaper.', '', 1138204822)
  ])
  ,new S('51st & 9th', 40.7641, -73.98851, 14, [
    new Q('005952', 'Who Said Anything About a Small Dick?', 'Queer #1: My friend Sarah is usually into guido jock boys, and it never works out.  Now she\'s with a short guy with a belly who\'s losing his hair, and she\'s never been happier.<br />\nQueer #2: I guess, but having a short fat guy with a small dick fuck your asshole until it bleeds just isn\'t the same.', '', 1151085632)
    ,new Q('005927', 'CSI: Wednesday One-liners', 'Asian tranny on cell: But we never smelt nothing cause we didn\'t even know the body was there!', '', 1150905632)
    ,new Q('005537', 'White Rapping Is Actually a Symptom', 'White guy #1: Ready, I\'magonna freestyle. <br />\nWhite guy #2: Bullsht, dawg.<br />\nWhite guy #1: Oooh girl dat ass is big and round and I like to hit it on the ground --<br />\nPassing black male: Give it up, cracker.<br />\nWhite guy #2: You gotta listen to me. Like the time with the syphilis, man, sht.', 'Lauren Michelle', 1148335232)
    ,new Q('004037', 'Step on the Scale, Wednesday One-liners', 'Queer on cell: What? He got fat? He was so hot!...Oh, he stopped doing crystal? Figures...Is he still interested in you? But he was so hot when he was doing crystal.', 'Brad Evan', 1136376048)
    ,new Q('003959', 'Wednesday One-liners and the Boy Parts', 'Guy: People are obsessed with black cock. I mean, the minute I take it out to actually <em>use</em> the damn thing, I\'ve got 20 people around me!', '', 1135828827)
  ])
  ,new S('70th & 3rd', 40.76844, -73.9616, 21, [
    new Q('003629', 'The Bedwetting She\'s Made Her Peace With', 'Woman: ...I am just trying to figure out why you thought it was okay for you to pack for a weekend at my parents\' home, in a backpack.<br />\nMan: What\'s wrong with my backpack? You know I don\'t own an overnight bag.<br />\nWoman: How can your only alternative be a fucking backpack? You can\'t understand how that would be embarrassing for me? Jesus, Adrian, you\'re 37 years old and you\'re still traveling with a <em>backpack</em>?', 'K. Bumsted', 1134327620)
  ])
  ,new S('Irving Place & 15th', 40.73464, -73.98829, 2, [
    new Q('004628', 'Nuts for Wednesday One-liners', 'Chris Noth: I talked to her for 10 minutes and figured out she was crazy.', '', 1141250439)
    ,new Q('003533', 'In About 20 Minutes', 'Guy #1: Would you like to sign a petition for the Marijuana Party?<br />\nGuy #2: Sure...So when\'s the party?', 'Amar', 1133575219)
  ])
  ,new S('86th & 3rd', 40.77881, -73.95398, 21, [
    new Q('004628', 'Nuts for Wednesday One-liners', 'Crazy lady: That\'s good luck, you know. I step in dog shit all the time. I used to play the horses. One time I stepped in dog shit and then I won $750. You should learn to step in more dog shit.', '', 1141250439)
    ,new Q('004376', 'Wednesday One-liners Like Cuckoo Clocks', 'Crazy codger: These are the pills they give me at the doctor\'s. Oh, my goodness. Oh, my goodness! They turn my blood to stone. I have need other blood to make up for it...<em>Kangaroo blood</em>! And elephant blood. Kangaroo blood and elephant blood. Oh, I\'m telling you. How long do I have to wait to open an account?', '', 1139414427)
    ,new Q('004247', 'She Worked the INS in McDonaldland', 'Crazy lady: Yo! Uh...man!<br />\nHot dog guy: Yes?<br />\nCrazy lady: Why aren\'t you serving me?<br />\nHot dog guy: I just placed your order, ma\'am.<br />\nCrazy lady: Well I used to work in immigration, so you best be doing that shit quick like right? Shit, I was immigration, okay? I know people, all right?<br />\nHot dog guy: Like who?<br />\nQueer: Kenneth Cole?<br />\nCrazy lady: <em>No</em>! I know Diedre. Now don\'t be playing these crazy mindgames with me! I\'m prepared. I have a gun.<br />\nHot dog guy: That\'s very nice. That\'ll be 5.98 total, ma\'am.<br />\nCrazy lady: Fuck you. I\'m gone now. You can\'t see me!<br />\nQueer: Faggot, just go away.', 'Ben Bleiberg', 1139313616)
    ,new Q('003865', 'Son of the Moongoloid', 'Toddler boy: Look, Daddy! The airport!<br />\nDad: That\'s the moon, Milo.', 'Claire Keaveney', 1136174404)
    ,new Q('003748', 'Wednesday One-liners Have Language Problems', 'Black guy: Bitch, you don\'t speak no Arabic.', '', 1133992814)
  ])
  ,new S('55th & 7th', 40.76422, -73.981, 16, [
    new Q('003431', 'Wednesday One-liners Are #1!', 'Dude: So then he pissed on my car seat and shouted \"Fire!\".', '', 1131602403)
  ])
  ,new S('47th & 5th', 40.75664, -73.97858, 16, [
    new Q('006095', 'Wednesday One-Liners: Cha-ching!', 'Guy on cell: Don\'t play games with me or I\'ll break your fuckin\' nose. Have you got the money? Where\'s the fuckin\' money?', 'Adam Bertocci', 1152165600)
    ,new Q('004696', 'Wednesday One-liners for Ed O\'Neill', 'Hasidic guy on cell: She told me she wants to make it with 2 cock and a pussy...What can I say? She\'s my wife, I want her to be happy.', '', 1141891246)
    ,new Q('004593', 'That Sounds More Like Polish', 'Cop: How do you say \"dog\" in Spanish?<br />\nStarbucks guy: <em>Perro</em>.<br />\nCop: Okay. How do you say \"dog\" in Mexican?<br />\nStarbucks guy: <em>Usted es un idiota</em>.', '', 1141783258)
    ,new Q('004549', 'That\'s the Official New York Passport', 'Suit: Goddamn piece of fucking shit.<br />\nOld lady: Geez.<br />\nSuit: What\'s your fucking problem?<br />\nOld lady: The dumbing down of our language; everyone is so crude. Suit: Where are you from, the Little House on the Prairie?<br />\nOld lady: I\'m from New York, you fucking asshole.', 'Anne Turner', 1141711243)
    ,new Q('003983', '\"Now can you point me to Yoko\'s house?\"', 'Teen girl: Excuse me, have you ever read <em>The Catcher in the Rye</em>?<br />\nCop: Yes.<br />\nTeen girl: Do you know where the ducks go in the winter? The ones in Central Park; do you know where they fly to?<br />\nCop: Oh, yeah. They just go to the duck house.', '', 1137204014)
  ])
  ,new S('28th & 10th, Crobar', 40.75083, -74.00189, 0, [
    new Q('005752', 'Now He Tells Me', 'Guy #1 peeing in urinal moans loudly.<br />\nGuy #2 peeing in urinal: You ok, man?<br />\nGuy #1 peeing in urinal: God, I should have used a condom!', '', 1149840032)
    ,new Q('004262', 'The Wednesday One-liners Monologues', 'Chick on cell: I\'m PMSing, so like, don\'t take it personally.', 'Olga Kogan and Aubrie Dillon', 1138183246)
  ])
  ,new S('33rd & 1st', 40.74308, -73.97403, 27, [
    new Q('004703', 'Wednesday One-liners Belong in a Zoo', 'Spanish guy: I see you walking all those dogs. What is that called, again?', 'Dr. Flora', 1141876850)
  ])
  ,new S('Office, 28th & 5th', 40.74467, -73.9873, 2, [
    new Q('004859', 'Wednesday One-liners Will Miss Greenspan', 'Woman: Damn, girl, you workin\' hard. What type of reward you gettin\'? Monetary or bootitary?', '', 1143079259)
    ,new Q('004770', 'Wednesday One-liners Miss Lilith Fair', 'Woman: What? I\'m supposed to watch a lesbian show just because I am one? I don\'t watch any black shows either.', '', 1142416803)
    ,new Q('003657', 'Wednesday One-liners: The Hole', 'Suit on cell: The only moist rainforest left is between her legs.', '', 1133388045)
    ,new Q('003589', 'Wednesday One-liners Got a Book Deal', 'Receptionist woman: I swear, if Freud was still alive, he\'d write one more book...about me.', '', 1132747258)
  ])
  ,new S('Lafayette & Houston', 40.72513, -73.99526, 7, [
    new Q('003595', 'Wednesday One-liners Come Together', 'Guy on cell: ...call me back within a 10 minute radius or I\'ll be on the train!', 'Pete', 1132776044)
  ])
  ,new S('John & Gold', 40.70823, -74.00647, 5, [
    new Q('003474', 'Careful, You Might Get a Ticket', 'Guy: If you could marry Dave Matthews right now, would you?<br />\nGirl: Yeah, I would; I would piss on his face!<br />\nGuy: What?<br />\nGirl: Yeah, I heard he likes that.', 'Jon Margolis', 1133031621)
  ])
  ,new S('Wendy\'s, 56th & 8th', 40.76603, -73.98337, 16, [
    new Q('004927', 'The Wednesday One-liners K-Hole', 'Girl: What do you mean, you don\'t smoke weed? That\'s mainly what niggas be doin\' these days!', 'Melissa Gluzband', 1143784837)
    ,new Q('004683', 'Collect \'Em All!', 'Girl #1: When I got on the bus today, there was a needle on the seat next to me and I didn\'t know what to do with it!<br />\nGirl #2: Yeah, there could have been syphilis on it or something...<br />\nGirl #1: Yeah, I was thinking more like AIDS, but sure.', '', 1142794805)
  ])
  ,new S('Elevator, 37th & 8th', 40.75408, -73.99212, 17, [
    new Q('003804', 'She Got Her Lobotomy Playing Operation', '\"Actress\" #1: I have tennis elbow.<br />\n\"Actress\" #2: You do?<br />\n\"Actress\" #1: ...Well, I don\'t know what tennis elbow is.', '', 1135742451)
    ,new Q('003896', 'Wednesday One-liners for the Holidays', 'UPS man on cell: So tell my aunt I\'m gonna be late to da house for dinner, I gotta go to a Christmas party and bag this fuckin\' shorty!', 'freddie kimmel', 1135224025)
    ,new Q('003894', 'Wednesday One-liners Get Edumacated', 'Maintenance guy: \"Iraqis take part in election\"? Man, who cares what they do. We\'re not gonna change \'em. The Tali-van, the Tali-van...put \'em in a van and tally \'em.', '', 1135216846)
  ])
  ,new S('34th between 8th & 9th', 40.752775, -73.994895, 0, [
    new Q('004689', 'Getting Stroked (A NYC Short Story)', 'Girl: Was it wrong that I totally didn\'t enjoy that at all?<br />\nGuy: Uh...<br />\nGirl: I mean it was like every song is exactly the same and they\'re just a bunch of 6 1/2 foot tall guys in leather jackets.', '', 1141617658)
  ])
  ,new S('Speedy Deli, 32nd & Broadway', 40.74828, -73.98819, 0, [
    new Q('006271', 'Wednesday One-Liners Get Around', 'Girl on cell: It doesn\'t matter how many people I\'ve had sex with...If I can remember each of their names, then it isn\'t a lot.', 'Tommy', 1153375200)
    ,new Q('004673', 'She Couldn\'t Stomach the Taste of Sure', 'Lady #1: I didn\'t know what to do, so I took a used tissue out. But I <br />\nwas so embarrassed.<br />\nLady #2: It\'s better than letting it drip on the table.<br />\nLady #1: Yeah...<br />\nLady #2: Sometimes the office gets so hot, people come in tank tops.<br />\nLady #1: I know.<br />\nLady #2: One time I went to a meeting and a drip of sweat fell from my head. I was mortified.<br />\nLady #1: Oh my god.<br />\nLady #2: Now I make sure I stand in an air-conditioned room for 15 <br />\nminutes before going to a meeting. That was one of the most terrible days of my life.', 'deckard', 1142654436)
    ,new Q('004465', 'Wednesday One-liners See NYC', 'Woman: New Yorkers are so tall and robust because of all the roach parts they eat.', '', 1140055207)
  ])
  ,new S('25th between 6th & Broadway', 40.74359, -73.99051, 0, [
    new Q('003354', 'The Womb of Wednesday One-liners', 'Little girl: Momma <em>no</em>! Don\'t walk away! Someone might <em>take</em> me!', 'Manhattman', 1130990446)
  ])
  ,new S('70th & Madison', 40.77047, -73.96638, 21, [
    new Q('004563', 'Clothes Make the Wednesday One-liners', 'Old man: Are they nice ties? Yes! Are they the nicest ties I have ever seen? No! Let\'s go!', 'Ryan Summers', 1140667250)
  ])
  ,new S('Office, Hudson & Houston', 40.72876, -74.00709, 7, [
    new Q('004762', 'It Took Him a Whole Year', 'Guy #1: Man, how you gonna play like a kid came on to you? A four year old can\'t even get it up.<br />\nGuy #2: How do you know? You hit on a four year old?<br />\nGuy #1: Nah, man. I was one.', 'Michele', 1143468048)
    ,new Q('004854', 'Wednesday One-liners Are for Boobs', 'Mail guy: Man, I got my fried chicken at Popeye\'s; their breasts are mad big. They like double Ds.', 'Paw Lee', 1143093646)
    ,new Q('004841', 'How Was Your St. Paddy\'s Day, New York?', 'Guy: Have you ever been on the East Side on St. Paddy\'s day? I was there last year, and there were guys--grown men--wearing business suits and everything, just pissing in the middle of the street. It was magical.', 'Frumious Bandersnatch', 1142884801)
    ,new Q('003962', 'Wednesday One-liners for Jung', 'Old man: He\'s <em>crazy</em>, but he ain\'t dangerous. <em>Crazy</em>. Sometimes he prances in the middle of the street wearing a g-string! A ladies\' g-string! Doing the gay thing!', '', 1135814443)
  ])
  ,new S('5th & 16th', 40.73731, -73.99266, 13, [
    new Q('005301', 'Wednesday One-Liners and the Lying Liars That Tell Them', 'Woman on cell in line at Au Bon Pain: I am <em>literally</em> in the elevator on my way up to the office now. Can I call you back?', '', 1146722432)
    ,new Q('003181', 'Wednesday One-liners and the Boob Tube', 'Lady: He was working for Time-Warner so he got me a cable box. Then when we broke up, he took it back. Not because he didn\'t want to pay the $10 a month, but because he couldn\'t stand the thought of another man watching his cable box.', 'Courtney', 1129788004)
  ])
  ,new S('47th & 3rd', 40.75393, -73.97213, 15, [
    new Q('004713', '\"No, Old York.\"', 'Old woman: Excuse me sir, do you have the time?<br />\nSuit: 8:45.<br />\nOld woman: Is that New York time?', '', 1142971236)
    ,new Q('004264', 'Wednesday One-liners Read 1 Corinthians', 'Businessguy: Those hi-tech bloggers are <em>evangelists</em>!', 'Jamie', 1138262412)
    ,new Q('003446', 'He\'s Also Homer Simpson, Apparently', 'Barista guy: You can\'t bring that dog in here.<br />\nDude: What kind of coffee do you have today?<br />\nBarista guy: I\'m not telling you what kind of coffee we have until you get that dog out of here. <br />\nDude: No really, what kind of coffee do you have today?<br />\nBarista guy: Is that a working dog?<br />\nDude: Yeah...<br />\nBarista guy: Are you blind?<br />\nDude: Yeah...', 'Cait', 1132675232)
  ])
  ,new S('12th & 5th', 40.73467, -73.99459, 12, [
    new Q('005967', 'That Explains the Boots but Not the Crop', 'College girl: Oh. Did you use to ride horses as a kid?<br />\nJappy guy: No. I\'m just rich', 'Mehler', 1151236832)
    ,new Q('004840', 'He\'s About Six Million Short', 'Guy #1: You should feel honored to live in New Jersey.<br />\nGuy #2: I like living in Jersey. It just really sucks commuting here every day.<br />\nGuy #1: It\'s like the Jews being kosher. It\'s the price you pay for being chosen.', '', 1144094435)
    ,new Q('004459', 'The Wednesday One-liners Class Struggle', 'Girl: I know you made it. Look at you. You got a BlackBerry. Yeah, you made it. You got that good-smelling leather.', 'Thirsty Violet', 1140026437)
    ,new Q('003813', 'Just Don\'t Spell It \"Heil\"', 'Law chick #1: I assume you passed the corporate accounting exam?<br />\nLaw guy: Yeah, somehow. I couldn\'t get the balance sheet to add up so I just added $130,000 in cash to assets to make it balance. It was a total Hail Mary but it worked...Wait, can you do a Hail Mary at a Jewish law school?<br />\nLaw chick #2: Sure you can. There\'s less interference.', '', 1135864807)
    ,new Q('003832', 'Wednesday One-liners Aren\'t in the Best of Health', 'Woman: ...and I don\'t care if you were unhappy, unhealthy, and addicted, it was more fun for me to talk to you over the phone.', 'Matthew Cameron', 1134612036)
    ,new Q('003662', 'Wednesday One-liners Rifle Through the Trash', 'Hobo: So how about some change for your <i>favorite</i> homeless guy?', '', 1133402459)
  ])
  ,new S('Houston & A', 40.72229, -73.98627, 1, [
    new Q('004917', 'Wednesday One-liners Flick the Clicker', 'Girl on cell: I know I promised...I\'m sorry, I just felt that getting laid for the first time in almost a year was slightly more important than remembering to TiVo <em>The Sopranos</em> for you.', '', 1143626433)
    ,new Q('004103', 'Wednesday One-liners is Just a Number', 'Hipster guy: She was really depressed when she turned 19. No more  <br />\n\"barely legal.\"', 'Peter', 1136995252)
    ,new Q('004046', 'Wednesday One-liners Order Scotch, Rocks', 'Dude: I was like, \"Hwah!\" Like, \"<em>Hwah</em>!\" I was like Hercules! Like Hercules! It was cool. I was drunk.', '', 1136433624)
    ,new Q('003597', 'Wednesday One-liners v. Wade', 'Guy on cell: If I were pregnant with you, I would have a late term abortion. Just to see the look on your face.', 'the bfd', 1132790440)
    ,new Q('003370', 'That\'s What They\'re Calling Anal Now', 'Girl #1: I love a little ethnicity...<em>in the penis</em>!<br />\nGirl #2: Totally, I heart the foreigners. The best I\'ve ever had was a Frenchie.<br />\nDrunk guy: <em>What</em>? Hold on. <em>You fucked a scrunchie</em>?', '', 1132221636)
    ,new Q('003094', 'I\'m Hungee for Wednesday One-liners', 'Contractor guy: We need a new door and a new jamb. Maybe a little jelly, too.', '', 1129168856)
  ])
  ,new S('59th & 1st', 40.7596, -73.96197, 26, [
    new Q('003593', 'Wednesday One-liners Stand for Good Hygiene', 'Girl on cell: Ew, that makes me want to spit in his eyeball.', '', 1132819244)
  ])
  ,new S('23rd & 7th', 40.74408, -73.99567, 0, [
    new Q('004997', 'It Reeks of Wednesday One-liners', 'Girl: Don\'t worry, don\'t worry...You <em>don\'t</em> smell like the subway.', 'Luke', 1144296004)
  ])
  ,new S('23rd & 9th', 40.74647, -74.00133, 0, [
    new Q('004023', '\"...I didn\'t have to chop it down.\"', 'Girl: ...so I used to buy my drugs from a guy who would keep them in his prosthetic leg.<br />\nGuy: You mean his stump? Didn\'t that freak you out, having his stump all on your blow?<br />\nGirl: No.', 'jose angel araguz', 1137351610)
  ])
  ,new S('4th between B & C', 40.722765, -73.981335, 1, [
    new Q('003831', 'Wednesday One-liners Filled the Ark', 'Man: Don\'t play with that; dogs <em>pee</em> on ice. It\'s piss!', 'Kevin S.', 1134590452)
  ])
  ,new S('Cooper Square', 40.72799, -73.99117, 1, [
    new Q('004458', 'Wednesday One-leyeners', 'Vendor guy: Here, take one. Just give it a listen. Listening\'s the new reading...You don\'t even have to use your eyes!', '', 1140004823)
  ])
  ,new S('7th Avenue & 13th Street', 40.73785, -74.0002, 11, [
    new Q('003892', 'Wednesday One-liners Ignore the UHO', 'Hobo: And here comes Miss Leona Helmsley! Only rich people pay taxes in this country!', '', 1135195221)
    ,new Q('003609', 'Yeah, So the Rest of Us Can Start', 'Hipster guy: Hey, asshole!<br />\nYuppie guy: Watch it.<br />\nHipster guy: I hope you have to watch your fuckin\' children die!<br />\nHipster girl: Honey, you <em>really</em> have to stop saying that to <br />\npeople.', '', 1134180054)
  ])
  ,new S('21st between 5th & 6th', 40.74092, -73.992135, 13, [
    new Q('003190', 'She\'s Got Wednesday One-liners Down There', 'Teen boy: Yo, man! If I were you, I would sit in the middle and eat both of them out at the same time! I don\'t care if she your girlfriend.', '', 1129723239)
  ])
  ,new S('Conway\'s, 35th Street & Broadway', 40.75068, -73.9878, 17, [
    new Q('004563', 'Clothes Make the Wednesday One-liners', 'Girl: Let me look. I\'m, like, the Sherlock Holmes of underwear.', '', 1140667250)
  ])
  ,new S('42nd & Broadway', 40.7558, -73.98643, 16, [
    new Q('005065', 'Is That New York or Jerusalem Time?', 'Lady #1: So she telling me that every year on Good Friday, at the time he passed away, 3 o\'clock, it gets dark.<br />\nLady #2: That\'s deep.', 'Alex Gordon', 1145059206)
    ,new Q('004945', 'Real News for Real Leaders', 'Tourist woman #1: Oh, well I cannot believe that. I cannot believe that they would write that!<br />\nTourist woman #2: What did it say?<br />\nTourist woman #1: \"Bush to Appoint Someone to Run Country\"! It\'s just so ignorant! And to get front page too!<br />\nTourist woman #2: ...Are you sure this was a real newspaper?', 'conor sweeney', 1144792844)
    ,new Q('004779', 'Wednesday One-liners See No UHO Money', 'Hobo: Yo! Can I have my skateboard back?', 'Anthony Guiry', 1142467239)
    ,new Q('004700', 'Wednesday One-liners Engage in Carnality', 'Girl on cell: And he kept saying, \"I don\'t wanna use a condom this time\" and yada yada, so I was like, \"Whatever, let\'s just do it, then\"...I was tired of arguing with him.', 'Nameless', 1141884051)
    ,new Q('004694', 'Wednesday One-liners by Athletes, for Athletes', 'Teen boy: Wait, do you mean NASCAR racing or running racing? I don\'t<br />\ncare, they\'re both stupid.', '', 1141826404)
    ,new Q('003976', 'The Non-suicide Bombers', 'Chick: What\'s that smell?<br />\nGuy: Either someone farted or it\'s terrorism.', '', 1137074427)
    ,new Q('003969', 'Only If You Pee Aggressive; P-ee Aggressive', 'Tween girl #1: Oh my god! They, like, totally have TVs in the bathrooms here! <br />\nTween girl #2: Oh my god! You can so watch TV while you are peeing or whatever. <br />\nTween girl #3: Except it\'s only, like, sports and stuff. <br />\nTween girl #1: Yeah, I don\'t really like sports. Except cheerleading. Is that sports?', '', 1136923228)
    ,new Q('003780', 'Hence the Baseball Tickets', 'Guy #1: Before I forget, I got four Yankee tickets for us tomorrow night. I\'m gonna bring my father. <br />\nGuy #2: Did you get these tickets from a scalper?<br />\nGuy #1: Yeah.<br />\nGuy #2: Well, the Yankees don\'t play in December. Neither does any other team. Baseball season ended almost two months ago, dumbass. You got fuckin duped. How much did you pay for these?<br />\nGuy #1: Ah, shit. Like a hundred bucks. <br />\nGuy #2: Dumbass.<br />\nGuy #1: Then why did my father ask me to get tickets for tomorrow night\'s game if they\'re not even playing?<br />\nGuy #2: I don\'t know. He\'s probably a dumbass like you. You\'re a whole family of dumbasses.', '', 1135677656)
  ])
  ,new S('109th & Madison', 40.79554, -73.9481, 23, [
    new Q('006088', 'Wednesday One-Liners Bring Home the Bacon', 'Black guy, to white guy: Wake up, sleepy cracker! It\'s Monday; time for work!', '', 1152115200)
  ])
  ,new S('3rd & A', 40.72363, -73.98528, 1, [
    new Q('005158', 'I\'d Have to Grab My Own Package', 'Lady: If the doormen went on strike, what would they do?<br />\nGuy: They would stand outside their buildings and picket.<br />\nLady: How is that different from their job other then the fact that <br />\nthey would be holding a sign?', '', 1145728832)
  ])
  ,new S('49th & 7th', 40.76046, -73.98374, 16, [
    new Q('006184', 'Wednesday One-Liners Carry Razor Blades and a Mirror', 'Thug on cell: Will I accept payment in what? In coke? Fuck no, I won\'t accept an eight-ball as payment. No. No way, bitch, I don\'t care how pure it is. Uh-uh, the only coke I do comes in five dollar rocks. I can\'t afford to get hooked on that expensive shit.', '', 1153951200)
    ,new Q('006093', 'Wednesday One-Liners Aren\'t So Vanilla', 'Suit on cell: Yeah, I know.  Did I tell you about the dominatrix?', '', 1152151200)
    ,new Q('004889', 'Don\'t Listen, It\'s a Trick!', 'Tourist lady: Excuse me, can you tell me which way Times Square is?<br />\nGuy: Um...really? Turn around lady.', 'Gregory', 1144483242)
    ,new Q('004423', '\"Wow, That\'s Awesome\"?', 'Guy #1: You know what we need? A nice breeze.<br />\nGuy #2: What the fuck are you talking about? It\'s cold as balls.<br />\nGuy #1: I was being ironic.<br />\nGuy #2: That\'s not ironic. Ironic is like...shit, I don\'t know. Like that song.<br />\nGuy #1: Naw, man. That\'s what people think, but ironic is when you say some shit but you mean some other shit.<br />\nGuy #2: Motherfucker, that\'s facetious.<br />\nGuy #1: Yeah...Then what\'s ironic?<br />\nGuy #2: How the fuck should I know? You the nigga with the GED.', '', 1140703212)
  ])
  ,new S('55th between 5th & 6th', 40.76232, -73.976535, 16, [
    new Q('005471', 'Wednesday One-liners Want a Date', 'Limo driver: If you were my girl I\'d quit lying and cheating.', 'turned off', 1147903232)
    ,new Q('003636', 'He Can\'t Look Himself--Glaucoma', 'Old man: A-ha! I got it. I want to be with a younger woman!<br />\nGuy: No, no you don\'t! Why? Why?<br />\nOld man: Are you kidding me? Look at them.', '', 1134338429)
  ])
  ,new S('21st & 6th', 40.74159, -73.99374, 13, [
    new Q('004103', 'Wednesday One-liners is Just a Number', 'Guy: Well, she was like 35, so she wasn\'t <em>hot</em>...', '', 1136995252)
    ,new Q('003834', 'Wednesday One-liners Don\'t Look So Hot', 'Woman: When she smiles, things <i>flake</i>.', 'Emily', 1134619236)
  ])
  ,new S('Washington Place & 6th', 40.73231, -74.00052, 12, [
    new Q('003593', 'Wednesday One-liners Stand for Good Hygiene', 'Woman: It\'s so dirty there, it\'s just disgusting they have that silly string pile in the yard and it\'s so dirty they never clean it up. I mean jeez, they must have silly string all over the house too. And they never clean it. It\'s really everywhere.', '', 1132819244)
    ,new Q('003344', 'Me Fail English?', 'Man #1: The Tet Offensive was just confusing.<br />\nMan #2: Not really. I understood it completely.<br />\nMan #1: Well, let me use an analogy: it would be like if tomorrow, we went into Baghdad and removed all the troops. Is that how it was?<br />\nMan #2: Maybe; I don\'t know what analogy means.', 'Gradie Smith', 1130904040)
  ])
  ,new S('34th & 9th', 40.75337, -73.99631, 0, [
    new Q('004992', '50 States plus Wednesday One-liners', 'Woman: If we are going to go to Hawaii I need to get my passport updated right quick.', '', 1144281607)
  ])
  ,new S('24th Ave & 29th St, Astoria', 40.77299, -73.91642, -1, [
    new Q('005377', 'The Guy Needs to Work on His Youth Marketing', '10-year-old white boy: He thinks all dark people are Osama Bin Laden.<br />\n10-year-old brown boy: That is a disgrace to me. I\'m not even Hindu, yo.', 'kelly', 1147248032)
  ])
  ,new S('49th & 10th', 40.76405, -73.99227, 14, [
    new Q('005042', 'Wednesday One-liners Cook the Afterbirth', 'Chick: Omigod, I totally want an Asian baby. Asians make the best mixers. Like vodka.', 'Uncle Jimmy', 1144850450)
  ])
  ,new S('39th & 3rd', 40.74885, -73.97584, 3, [
    new Q('005779', 'See, He\'s Giving You the Talon', 'Little Boy, running towards pigeon on sidewalk: RAWWWWWR!<br />\nMother: Sweetie, they\'re not afraid here. This is New York.', 'erin', 1149984032)
    ,new Q('004475', 'Nigga, Please!', 'White guy #1: What\'s she look like?<br />\nWhite guy #2: She\'s really hot, she\'s black.<br />\nWhite guy #1: You mean African-American.<br />\nWhite guy #2: No, I don\'t.<br />\nWhite guy #1: But you said she\'s black.<br />\nWhite guy #2: Right, she\'s Sicilian. She\'s neither African nor American.<br />\nWhite guy #1: Well, her family must have come from Africa at some point.<br />\nWhite guy #2: Yeah, like 1000 years ago.<br />\nWhite guy #1: Ok, then she\'s African.', '', 1141315217)
  ])
  ,new S('Henry Street & Love Lane, Brooklyn Heights', 40.69588, -73.99377, -1, [
    new Q('005474', 'Wednesday One-liners Think They Had Fun', 'Girl on cell: Hey [Kate], it\'s [Angie]. I was just wondering what the fck I did last night. Call me later.', 'sarah', 1147924832)
  ])
  ,new S('Spring & Wooster', 40.72415, -74.00113, 7, [
    new Q('003862', 'Daddy\'s Favorite Second Choice', 'Barbershop quarter guy: Hey, she\'s walking on the outside. That means she\'s available. Tell that guy you\'re with that walking on the outside means you\'re available.<br />\nGuy: Um, she\'s my sister.', '', 1136815202)
  ])
  ,new S('North Moore & Varick', 40.71977, -74.0068, 4, [
    new Q('004850', 'Wednesday One-liners for Backdoor Beauties', 'Hobo: I am the most famous butt-crack in the world.', 'Adam Levison', 1143043252)
  ])
  ,new S('Prince & Wooster', 40.72537, -74.0001, 7, [
    new Q('004195', 'Women Have Needs, Wednesday One-liners', 'Store guy: French girls will just come up to your apartment and get naked fast.', 'soho sleepwalker', 1137628851)
  ])
  ,new S('12th & Broadway', 40.7332, -73.99113, 12, [
    new Q('006091', 'Wednesday One-Liners Are So Deep They Cause Bladder Infections', 'Guy: I mean, I don\'t want any bok choy in my chakra.', 'aryn', 1152172800)
    ,new Q('005916', 'Not Quite Ready for the Vows Page', 'Girl: We\'re together.<br />\nGuy: We are?<br />\nGirl: For now.', 'Tina T. Lin', 1150862432)
    ,new Q('005610', 'She\'s Really Got a Handle on That Death Thing', 'Girl #1: The worst thing about when your favorite author dies is, you\'re <em>never</em> going to get any new books from them.<br />\nGirl #2: Yeah!', '', 1148796032)
    ,new Q('003988', 'Reminiscing About His Youth', 'Man #1: Your kid actually wants to go to the doctor?<br />\nMan #2: Yeah, he can\'t stop thinkin\' about \'em.<br />\nMan #1: Thinking about what?<br />\nMan #2: <em>Boobs</em>! He can\'t stop thinking about boobs!', '', 1137124842)
  ])
  ,new S('7/11, 82nd & 3rd', 40.77621, -73.95587, 21, [
    new Q('004047', 'Wednesday One-liners\' Scenes from The City', 'Tween girl: Iced coffee, sushi...they should totally open all over the world.', 'Stef A.', 1136426436)
  ])
  ,new S('Office, John & Pearl', 40.70742, -74.00537, 5, [
    new Q('004798', 'Giving Racism the Boot?', 'Italian woman #1: He looks like a sand digger! <br />\nItalian woman #2: What\'s that, like a bug?<br />\nItalian woman #1: No, you know, a sand digger.<br />\nItalian woman #2: What\'s that?<br />\nItalian woman #1: A camel jockey! That\'s what people in Bay Ridge call them, sand diggers, because they are always shoveling sand in the desert.', '', 1143871247)
  ])
  ,new S('Ollie\'s, 84th & Broadway', 40.78701, -73.97749, 18, [
    new Q('003749', 'Wednesday One-liners for the Family Gals', 'Old woman: Excuse me, but will you tell your daughter to <em>stop</em> pointing her spoon at me?\"', '', 1134000007)
  ])
  ,new S('29th & 10th', 40.75143, -74.00145, 0, [
    new Q('005115', 'Wednesday One-liners Already Miss QAF', 'Girl: Look at the line...There are <em>no</em> girls on it; you know what that means?', '', 1145484053)
  ])
  ,new S('82nd & Lexington', 40.77689, -73.95748, 21, [
    new Q('003957', 'An Assault of Wednesday One-liners', 'Guy: I don\'t care what you say...if you stick your dick in a sleeping girl, it is rape!', '', 1135836030)
  ])
  ,new S('30th & Park', 40.74457, -73.98324, 2, [
    new Q('004772', 'Wednesday One-liners Play for Pay', 'Man on cell: Don\'t you have any hookers with <em>tits</em>?', '', 1142431223)
    ,new Q('004320', 'Wednesday One-liners Watch VH1', 'Chick: If we see Robbie Williams tonight, I\'m gonna die.', '', 1138838409)
    ,new Q('003833', 'Wednesday One-liners Hate Project Runway', 'Lady on phone: You don\'t know how many times I have to tell him, \"You have to keep your pants on!\"', '', 1134604824)
  ])
  ,new S('Attorney & Houston', 40.72115, -73.98303, 1, [
    new Q('005790', 'That Wasn\'t You', 'NYU chick: Oh my god, I think it was the worst night of my life. When they found me, I was passed out on the toilet with my pant around my ankles. I\'d thrown up into them.', '', 1150099232)
  ])
  ,new S('47th & Broadway', 40.7594, -73.9851, 16, [
    new Q('005649', 'Wednesday One-Liners Say Goodbye to the Little White Men', 'Girl on cell: It\'s Fleet Week here, so I\'m getting laid.', 'Rachel', 1149069632)
    ,new Q('004920', 'Ego & Hubris & Wednesday One-liners', 'Hipster girl: Y\'know, we just have to come to terms with the fact that sometimes we are just too fabulous for the places we are in.', 'snoopdogs', 1143648053)
    ,new Q('003190', 'She\'s Got Wednesday One-liners Down There', 'Drunk guy: For the last time, a chick with a dick is a hermaphrodite!', '', 1129723239)
  ])
  ,new S('W 4th & Mercer', 40.7288, -73.99506, 12, [
    new Q('006286', 'Hi, My Name is Bill, and I\'m a Wednesday One-Liner', 'Guy: All we\'re gonna do anyway is drink in my basement. Fuckin\' suburbia.', '', 1153944000)
    ,new Q('004693', 'Wednesday One-liners Like Balla', 'Guy: I really just want to call it abstract realism,', '', 1141819208)
    ,new Q('004332', 'The Bottom of His Class', 'Chick: I\'ve already slept with 6 professors and it\'s only two weeks<br />\ninto the semester.<br />\nGuy: <em>Tell</em> me about it. I slept with this one prof last night...he really taught me a thing or two.', 'Timothy Leary', 1138946408)
  ])
  ,new S('Greenwich & North Moore', 40.7201, -74.01014, 4, [
    new Q('005872', 'Maybe After Eight or Nine Stellas', 'Skinny JAP: Omgosh! Let\'s go watch the World Cup! Like, we\'ll see witchcraft...magic...stuff.<br />\nFat JAP: Oh yeah, totally. That stuff from Harry Potter.', 'Alyson Leigh', 1150581632)
    ,new Q('003263', 'Then Explain West New York', 'Girl: So where do you live?<br />\nGuy: In Jersey City.<br />\nGirl: Is that in Jersey?', '', 1131444025)
  ])
  ,new S('Carmine & Bedford', 40.72986, -74.00395, 11, [
    new Q('006088', 'Wednesday One-Liners Bring Home the Bacon', 'Man in suit, on cell: It\'s manly to want to take care of your family.', '', 1152115200)
  ])
  ,new S('60th & 3rd', 40.76216, -73.96612, 21, [
    new Q('004770', 'Wednesday One-liners Miss Lilith Fair', 'Woman: So I turned a group of 7 year old girls completely bulldyke today.', '', 1142416803)
  ])
  ,new S('35th & 8th', 40.75285, -73.99299, 17, [
    new Q('004859', 'Wednesday One-liners Will Miss Greenspan', 'Chick on cell: I don\'t want an intern making my f_ckin\' coffee, much less produce my f_ckin\' show.', '', 1143079259)
    ,new Q('004774', 'Wednesday One-liners Speak Well English', 'Dude on cell: See, we were what you call the <em>escape</em> goats...You ever heard that expression?', 'Jenny O\'Brian', 1142445633)
    ,new Q('004555', 'Wednesday Ob/gyn-liners', 'Woman: I\'m going to be the oldest person to ever have a sex change on 8th Avenue...by an unprofessional!', 'Someone who felt really bad that he found that so funny.', 1140609625)
  ])
  ,new S('McDonalds, 23rd & Madison', 40.74087, -73.98803, 13, [
    new Q('005099', 'She Used It to Buy a Clue', 'Lady: Naw. This quarter say Pennsylvania on the back.<br />\nMcChick: Yes, ma\'am. It\'s a commemorative quarter.<br />\nLady: Yeah. But it say Pennsylvania. See?<br />\nMcChick: Yes. Those are the new quarters.<br />\nLady: All right. But if I find out I can\'t spend this, I\'m bringin\' it back in here.', 'Will McLaughlin', 1145383204)
  ])
  ,new S('Bleecker & Perry', 40.73529, -74.00494, 11, [
    new Q('005075', 'Pets Are for the Petty', 'Guy #1: Hey, watch it! Jerk!<br />\nGuy #2: Get a bigger dog, asshle!<br />\nGuy #1: Be a smaller person!', 'Zell', 1145203200)
    ,new Q('003183', 'That\'s a Nice Wednesday One-liners', 'Guy on cell: I\'m making a concerted effort to be nicer to dwarves.', '', 1129744827)
  ])
  ,new S('4th St, between 1st & 2nd', 40.72568, -73.988245, 1, [
    new Q('006379', 'Wednesday One-Liners Set the Bar Low and Then Step Over It', 'Girl: I\'m going to make out with someone tonight. I\'ve already decided.', 'Ted', 1154527200)
  ])
  ,new S('34th between 6th & 7th', 40.750375000000005, -73.989215, 0, [
    new Q('003996', 'We\'ve Found the Real Killer', 'Man #1: You dropped your glove, sir.<br />\nMan #2: That\'s how they caught O.J. Simpson, man!', 'Queenie', 1137978015)
  ])
  ,new S('9th between 1st & A', 40.72772, -73.98378, 1, [
    new Q('005891', 'That\'s Going to Be Great Advice in Kindergarten', 'Little kid: Mommy...Mommmmmyyyyyy! I have got to poop!<br />\nMom: Would you please just crap in your pants and quit screaming about it already!', 'Katie', 1150704032)
  ])
  ,new S('West 3rd and Sullivan', 40.73005, -73.99936, 12, [
    new Q('005394', 'No Wonder It Smells Fowl', 'Customer: Are both those tuna?<br />\nDeli guy: Yes.<br />\nCustomer: What\'s the difference?<br />\nDeli guy: This tuna is chicken.', 'Kimmy Yo<br />', 1147356032)
    ,new Q('004571', 'The Ant & the Grasshopper (NYC Edition)', 'Promoter guy: Come see a great comedy show tonight! The tickets are just $5! <br />\nChick: I can\'t, I have to study. <br />\nPromoter guy: Oh come on, you don\'t have to study. <br />\nChick: I actually do, sorry. <br />\nPromoter guy: Studying will never get you anywhere.<br />\nChick: Yeah, I\'ll remember that next time I\'m selling $5 tickets in the snow.', 'sarahbelle', 1141747252)
  ])
  ,new S('50th & Park', 40.75714, -73.97392, 16, [
    new Q('004451', 'We\'d Think It\'s Performance Art', 'Guy #1: I just need a few dollars to get on the train. I lost my wallet.<br />\nGuy #2: Sorry, I\'m broke. I don\'t have anything.<br />\nGuy #1: Everyone in this city is broke! No one wants to help anyone! They wouldn\'t piss on you if you were on fire!', 'Ethan', 1140926425)
  ])
  ,new S('85th & Amsterdam', 40.787, -73.97552, 18, [
    new Q('005071', 'It\'s Yes When Dad Remembers Visitation', 'Little boy #1: Do you live on the Upper West Side?<br />\nLittle boy #2: Well, technically yes and technically no.<br />\nLittle boy #1: Okay, see you tomorrow.', '', 1145160043)
    ,new Q('004695', 'Wednesday One-liners Love Jim Beam', 'Drunk guy: I wanna be a lady!', 'SK', 1141833618)
    ,new Q('003086', 'Wednesday One-liners Look Busted', 'Man on cell: So my kid is ugly, what can I do?', 'SK', 1129140006)
  ])
  ,new S('Broadway & 172nd', 40.84393, -73.93905, 24, [
    new Q('003091', 'Wednesday One-liners Go On a Bender', 'Guy on cell: Yeah, that was me, totally making out with the toilet last night.', 'boozeweasel', 1129176037)
  ])
  ,new S('13th & 3rd', 40.7326, -73.98769, 1, [
    new Q('005358', 'If You Listen You Can Hear Them Calling', 'Girl: Did you just say \"jubble\"? That can\'t be a real word.<br />\nGuy: It\'s like, silent onomatopoeia.<br />\nGirl: There\'s no such thing as silent onomatopoeia. The very definition of the word \"onomatopoeia\" contradicts silence.<br />\nGuy: Well, it\'s like the sound that boobs would make if they made sound. They\'d go \"jubble, jubble, jubble.\"<br />\nGirl:  I\'m afraid I\'m going to have to smack you now. Seriously.', '', 1147118432)
    ,new Q('003432', 'Wednesday One-liners for Hump Day', 'Girl on cell: Oh, that\'s good. Fall asleep on his dick. Goodbye.', 'Stef Super', 1131609643)
  ])
  ,new S('88th & 2nd', 40.77916, -73.95079, 21, [
    new Q('004383', 'Wednesday One-liners Are Ready for Valentine\'s', 'White guy:: I wanna call her hunchback and fuck her all at the same time.', 'Phillipe Nascimento', 1139443231)
  ])
  ,new S('45th & Lexington', 40.75335, -73.97466, 16, [
    new Q('004780', 'Wednesday One-liners Found \"The One\"', 'Suit on cell: It\'s sex: somebody\'s always taking advantage of someone else...Oh shit, this girl just gave me a look. That\'s gonna be on Overheard tomorrow, I just know it.', '', 1142474402)
    ,new Q('004457', 'Wuxtry! Wednesday One-liners', '<em>Sun</em> guy: Get your <em>New York Sun</em>! I hear it\'s better than pot, man.', 'Anthony Enriquez', 1140019224)
    ,new Q('004066', 'He Gives Great Presence', 'Girl #1: I mean, when you think about it, he\'s really not that good looking, and kind of an asshole. I don\'t even know why I\'m so attracted to him.<br />\nGirl #2: Because he\'s here...and you\'re you.', 'Anne O.', 1138910407)
    ,new Q('003092', 'Wednesday One-liners v. The DEA', 'Girl on cell: No, I don\'t have any of <em>those</em> drugs...No, I don\'t need them. Everyone I sleep with, sleeps with me willingly.', '', 1129154409)
  ])
  ,new S('Burritoville, 77th & 2nd', 40.77201, -73.95601, 21, [
    new Q('006147', 'Wednesday One-Liners Take Up Hobbies', 'Middle-aged woman: I really never cared for skiing, but I was so alone in my marriage, I found it was a great way to meet men.', '', 1153303200)
    ,new Q('004318', 'Wednesday One-liners Move to the Big Apple', 'Chick: I\'m like the Chrysler Building; I\'m so underrated! But I\'m <em>not</em> like the Empire State Building. I don\'t want you <em>in</em> me, I just want you to look at me from afar.', 'Susie Lalonde', 1138845622)
  ])
  ,new S('89th & Broadway', 40.79015, -73.97493, 18, [
    new Q('006178', 'Wednesday One-Liners Gone Wild', 'Girl in red leather pants, on cell: Yeah, but you have to bring a leather outfit, otherwise you won\'t get any clients.  Everyone there is a biker or otherwise they are latex fetishists.', 'ejuliast', 1152748800)
  ])
  ,new S('23rd & 5th', 40.74152, -73.98959, 13, [
    new Q('004564', 'Wednesday One-liners Miss St. Elsewhere', 'Guy: I\'ve been using paper towel to blow my nose and now it\'s all chapped. Like my ass.', 'Kate Elizabeth Queram', 1140674402)
    ,new Q('004209', 'My Mother The Car Will Drive Us There', 'Guy: ...and then we\'ll go to Hell\'s Kitchen.<br />\nGirl: <em>The TV show</em>?', '', 1138939258)
    ,new Q('004267', 'Wednesday One-liners Make Great Pets', 'Woman on cell: Everyone has a fucking pit bull...it\'s like everyone on MySpace suddenly got a pit bull.', 'Michal', 1138219229)
    ,new Q('003954', 'Wednesday One-liners Are The Model Minority', 'Asian chick: Just a little too much makeup, skirt too short, and <em>bam</em>! \"Fucky-sucky, me love you long time.\"', 'Manhattman', 1135771241)
  ])
  ,new S('Broadway & Pine', 40.70836, -74.01123, 5, [
    new Q('003438', '...Goodwill to Men', 'Charity mugger: Hey! My name\'s Lisa and I\'d like to talk to you about donating to North Shore Animal League--<br />\nGuy: Let me be honest, Lisa. I work in customer service. That means for 8 hours a day, I have to be polite to everyone I speak with and this is my lunch hour. It\'s the one hour of my day where I\'m not forced to be nice. I\'m sure you\'re a nice girl, but why don\'t you fuck off?', 'Mr. X-mas Tree', 1135580435)
  ])
  ,new S('Mercer & Bleecker', 40.72691, -73.99667, 12, [
    new Q('004492', 'Overheard in the Headlines: The Blizzard of \'06', 'Girl #1: You know, I\'ve never had sex in the snow.<br />\nGirl #2: Huh. Me neither.', 'Will', 1140184834)
    ,new Q('004110', 'Wednesday One-liners Need to Know', 'Woman: I mean, what am I supposed to do with a gross of used condoms?', 'Courtenay Hameister', 1137016850)
    ,new Q('003620', 'Here\'s Sam Champion with the Overheard Forecast', 'Chick #1: My mom told me that it gets colder when it\'s windy. <br />\nChick #2: Your mom is retarded. She only thinks that it\'s colder when it\'s windy because the wind makes it seem like it could be colder so she thinks it\'s colder...obviously.<br />\nChick #1: You\'re such a bitch! I hate it when you\'re right!', 'Laura Mathis', 1134410412)
    ,new Q('003356', 'Cyrano Presents: Wednesday One-liners', 'Guy: If I don\'t get pussy soon I\'m gonna sue you.', 'Darin Smith', 1130968848)
  ])
  ,new S('65th & Madison', 40.76733, -73.96868, 21, [
    new Q('004873', 'WWMJD (What Would Miss J. Do?)', 'Girl #1: Let\'s take a picture! It\'ll be cute! Hee, hee, hee.<br />\nGirl #2: No way! I just ate!', 'gabe wigrom', 1144317633)
  ])
  ,new S('Grand Central', 40.752751, -73.977277, 16, [
    new Q('004995', 'Wednesday One-liners Bring It', 'Guy: It\'s like, what do you think, \'cause you\'re standing in front of me I\'m gonna bite your ass? Unless you\'re a woman, I ain\'t biting your ass.', '', 1144288852)
    ,new Q('004987', 'Wednesday One-liners Hit the Premiere', 'Hobo: I fcked Tony Curtis in the ass!', 'Macaire Montini', 1144252832)
    ,new Q('004987', 'Wednesday One-liners Hit the Premiere', 'Crazy man: So you agree. Top Gun <i>is</i> the greatest movie ever.', '', 1144252832)
    ,new Q('004753', 'In a New York State of Mind', 'Director man: Excuse me, we\'re <em>trying</em> to shoot this scene, please move out of the way.<br />\nChick: Excuse me? <em>I\'m</em> trying to catch a motherfcking train. I think you can film a movie some other damn place, but I\'m trying to catch a motherfcking train and this is where they keep them: in Grand fcking Central.', 'Susan Elliott', 1143475236)
    ,new Q('004852', 'Wednesday One-liners Are Unclean...Unclean!', 'Tourist woman: The sight and smell of it was so disgusting! I was<br />\nlike, \"Is this porn?\"', 'Iris Puffybush', 1143050438)
    ,new Q('004640', 'They Go from Top to Bottom', 'Girl #1: I am, like, so obsessed with Asian guys. He is so great. I would so date him.<br />\nGirl #2: Date him? But he\'s gay.<br />\nGirl #1: Those are my favorite kind of Asians.', '', 1142366425)
    ,new Q('004514', 'We End with Revelation', 'Chick #1: So I need to get me a Bible.<br />\nChick #2: Why? Aren\'t you atheist?<br />\nChick #1: They say Bible paper makes good rolling paper for your joints.<br />\nChick #2: Really?<br />\nOld lady: You two are disgusting.', 'Glynnis O', 1141394402)
    ,new Q('004633', 'Wednesday One-liners with an Attitude', 'Man: You know they are going to give me a gold leaf for putting up with you.', '', 1141286401)
    ,new Q('004559', 'Wednesday One-liners City Scenes', 'Mom: Honey, this train station is very crowded. That is why they call it Grand Central Station.', '', 1140638450)
    ,new Q('004558', 'Wednesday One-liners for the Tots', 'Mom: People steal children out of this place every single day of the year.', '', 1140631248)
    ,new Q('004465', 'Wednesday One-liners See NYC', 'Girl on cell: Yeah, no, I didn\'t get called back. I\'m in Grand Central<br />\nright now, and there is this guy on the floor and he\'s totally bleeding all over the place. I gotta go. I want falafel and I\'m broke as shit. I love you, Mom.', '', 1140055207)
    ,new Q('004382', 'Wednesday One-liners Are Upright Citizens', 'Chick: The churro guy is not the most honest person in the world.', 'samir', 1139464819)
    ,new Q('004375', 'God Tells Wednesday One-liners to Kill People', 'Woman on cell: My brother tells me that you love the baby Jesus. I love the baby Jesus.', '', 1139392849)
    ,new Q('004234', 'The Fragrance is Called Impending', 'Woman: Do you like the perfume I\'m wearing?<br />\nMan: It smells like a sanitary napkin...Before it\'s used, of course.', 'Christina Rusnak', 1139144415)
    ,new Q('004217', 'Nice is for France', 'Tourist lady: Um, I have a non-train related question.<br />\nMTA guy: What?<br />\nTourist lady: Is there a nice place to get some coffee or tea around here?<br />\nMTA guy: Yeah, outside.', 'rod vanderlaan', 1139018443)
    ,new Q('004265', 'Wednesday One-liners Run to the WC', 'Dad: The third rail will make you go buzz...My friend knew a guy who got drunk, pissed on the track, electrocuted himself and died.', '', 1138248046)
    ,new Q('004258', 'Wednesday One-liners Fantasies', 'Guy: \"Close my eyes and think of England?\" In all my born days, I never thought someone would ever say that to me...Then, I met you.', '', 1138197631)
    ,new Q('004193', 'Wednesday One-liners Start Spreading the Word', 'Teen girl: New York is the best country in the world.', '', 1137643243)
    ,new Q('004014', 'He Also Envies Civility and Decency', 'Guy #1: Oh my god, I know. I heard Versace is having a huge sale!<br />\nMan: Shut up, you damn queer!<br />\nGuy #2: He\'s just mad because he can\'t even <em>spell</em> Versace.', 'Nikki Starr', 1137513635)
    ,new Q('003980', 'She\'s Read Too Much Barnum to Fall for That', 'Chick on cell: I can\'t even figure out how to get the fuck out of here!<br />\nGuy: Try the big ass door labeled \"exit.\"', 'Rose Fox', 1137232829)
    ,new Q('003832', 'Wednesday One-liners Aren\'t in the Best of Health', 'Girl #2: Yeah, well, I got tired of throwing up.', 'Listening Intently', 1134612036)
    ,new Q('003595', 'Wednesday One-liners Come Together', 'Guy on cell: What about when my wife moves out and I have no possessions? No possessions!...Will you want to sleep with me <em>then</em>?...<em>On the floor</em>?...With no possessions?', '', 1132776044)
    ,new Q('003187', 'A Constant Erection is a Curse, Not a Goal', 'Man #1: How hot is this weekend nanny?<br />\nMan #2: I get wood whenever I pass within 10 feet of her.<br />\nMan #1: And Lucy doesn\'t get why you\'re spending more time on the weekends there now?<br />\nMan #2: She\'s clueless. Now my goal is for her to hire someone equally as hot for the weekdays.', '', 1131357643)
    ,new Q('003273', 'Last Call for Wednesday One-liners', 'Man on cell: Well, I\'m tired, a little drunk, hungry, and I just got laid in the bathroom of a very nice bar. It\'s been a good night.', '', 1130328009)
    ,new Q('003029', 'Henceforth to Be Known as the \"Ironyvator\"', 'Guy #1: Get out of the way! You\'re in the walking lane and<br />\npeople are trying to pass. <br />\nGuy #2: What walking lane? Only an idiot would walk on an elevator. People who walk are idiots.<br />\nGuy #1: This is called an escalator.', 'Nicole Victoria', 1129622424)
  ])
  ,new S('Reade St', 40.71542, -74.00755, 4, [
    new Q('006003', 'Wednesday One-Liners are Off the Map', 'Guy: Oh my God, look. There is a Duane Reade on the corner of Duane and Reade.', '', 1151496000)
    ,new Q('004189', 'Wednesday One-liners Drop It Like It\'s Hot', 'Woman on cell: That\'s bullshit! You know what I am saying? I mean, it\'s not my fault he signed the birth certificate.', 'Michael Krauss', 1137578418)
  ])
  ,new S('Stanton & Ludlow', 40.72122, -73.98777, 8, [
    new Q('005595', 'He\'ll Have to Take Remedial Machismo', 'Hipster with small dog: I used to be in the Navy. What is your training?<br />\nSailor: I\'ll be on a sub, learning to shoot nuclear warheads. <br />\nHipster: Sht man, that\'s intense. <br />\nSailor: I know, I\'m not really into violence.', 'Dan Levin<br />', 1148688032)
  ])
  ,new S('8th & Broadway', 40.76766, -73.98214, 16, [
    new Q('005141', 'Wednesday One-liners Paging Hugh Laurie', 'Chick: . . .and the hotline to tell me what my incurable disease is is only open from like 7 to 9! And like, you can\'t tell me my blood is dirty and then have the hotline close!', 'Jenna I', 1146052832)
    ,new Q('005115', 'Wednesday One-liners Already Miss QAF', 'Guy: She was way too Christian and I was way too gay.', 'A good listener', 1145484053)
    ,new Q('005052', 'It\'s a Pit, But With a Killer Vibe', 'Tour chick: Have you been to Ground Zero yet?<br />\nTeen girl: You mean the club?', '', 1145008824)
    ,new Q('004796', 'He Means Musketeers (Kit-Kats Are an Orgy)', 'Tween boy: Would you like to buy some candy?<br />\nWoman #1: No.<br />\nWoman #2: No thanks.<br />\nTween boy: Okay, how about a threesome?', 'rhett', 1143554451)
    ,new Q('004480', 'I\'m Thinking Tisch', 'Girl: How do you like NYU so far?<br />\nGuy: I like it a lot.<br />\nGirl: So, are you at least bi-curious yet?', 'Kelvin M Loh', 1141041645)
    ,new Q('004554', 'Wednesday One-liners Face It', 'Guy on cell: Hold on one second, I\'m getting exfoliated.', 'Kristi', 1140602440)
    ,new Q('003962', 'Wednesday One-liners for Jung', 'Crazy lady: You\'re gonna die, fat fuck! You\'re gonna fuckin\' die! And your fat friend too!', '', 1135814443)
    ,new Q('003076', 'What, It\'s Only Okay for Pancakes?', 'Girl: Oh hey, that\'s my high school mascot!<br />\nGuy: What, a black woman?', '', 1130007659)
    ,new Q('002990', 'The Black Flag is at Half-mast', 'Teen girl: Man this sucks. Where are all the punks?', 'Mary', 1129212028)
    ,new Q('003089', 'Wednesday One-liners Yearning to Breathe Free', 'Chick: I got the grant money and it was $1,000. And it was almost rude, to pay $1,000 for a purse when there are people starving.', '', 1129190401)
  ])
  ,new S('86th & Columbus', 40.78647, -73.97217, 18, [
    new Q('003893', 'Wednesday One-liners Witchy Women', 'Guy: \"What the hell is my problem?\" What the hell is <em>my</em> problem? That is like if I took a big shit on your head, and you had shit running all down your face, and I asked you, \"What the hell is your problem?\"', 'Durie O', 1135231254)
  ])
  ,new S('82nd & 2nd', 40.77527, -73.95365, 21, [
    new Q('003926', 'Dimebag, Handbag', 'Queer #1: I don\'t think I\'m as self-destructive as everybody actually thinks I am.<br />\nQueer #2: Perpetually relying on substances tells me you can\'t handle things on your own.<br />\nQueer #1: I wouldn\'t say I rely on them. They\'re more like an accessory, like a handbag or a purse.', 'McCarton Ackerman', 1136682014)
  ])
  ,new S('63rd & Madison', 40.76608, -73.96958, 21, [
    new Q('004411', 'They\'ve Also Banned Subliminal Messages', 'Man: It\'s Al Hirschfeld, a famous artist.<br />\nWoman: Oh yeah. You don\'t see a lot of his work anymore.<br />\nMan: Yeah, \'cause he\'s dead.', 'Christy Ann Coppola', 1140537638)
  ])
  ,new S('Bedford & N 5th', 40.71673, -73.95891, -1, [
    new Q('005786', 'Dickishness Is Hereditary (and Dominant)', 'Guy #1: Is he sterile?<br />\nGuy #2: I hope so, he turned out to be kind of a dick later.', 'severed dreams', 1150027232)
  ])
  ,new S('74th & Amsterdam', 40.77992, -73.98069, 18, [
    new Q('004920', 'Ego & Hubris & Wednesday One-liners', 'Girl: I thought that when I met Jay he would tell me I\'m not good enough and walk away.', 'Ron Shomer', 1143648053)
  ])
  ,new S('8th Street & 6th Avenue', 40.73362, -73.99955, 12, [
    new Q('005730', 'Taking Anti-Authoritarian a Step Too Far', 'Skater kid #1: I don\'t like this whole \"valet\" thing, man.<br />\nSkater kid #2: You don\'t trust them?<br />\nSkater kid #1: I DON\'T TRUST ANYONE!', '', 1149609632)
    ,new Q('005315', 'But They Weren\'t Asking You', 'Girl to her friends: What are we doing here?<br />\nRandom guy: Well, I\'m glad the kids are still asking all the right existential questions.', 'Mansoor Khan<br />', 1146823232)
    ,new Q('004819', 'It\'s Going to Be Published Last Year', 'Dude: I\'m looking for this non-fiction book.<br />\nStore guy: What is it?<br />\nDude: <em>How to Build a Time Machine</em>.', '', 1143828053)
    ,new Q('004379', 'Wednesday One-liners Could Use a Scrubbing', 'Thug guy: You know what I really liked about her, yo? She was <em>mad</em> clean, dog. Mad clean.', 'Marco Formosa', 1139428849)
    ,new Q('003960', 'Wednesday One-liners M.D.', 'Woman on cell: Not only have you not taken care of this doctor thing, you didn\'t even marry one.', '', 1135800048)
    ,new Q('003812', 'Get to Unironic Unwrapping, New York!', 'Hipster guy: Hey, can you wrap that? <br />\nCashier guy: Sure. <br />\nHipster guy: Do you have any funny wrapping paper that says stuff like \"Sorry your dad died\" or something? <br />\nCashier guy: Uh...no. <br />\nHipster guy: Oh, damn. Well, do you have anything funny or weird or something? <br />\nCashier guy: Well, we have one with little kids riding big flying books through clouds shaped like cute little animals. <br />\nHipster guy: Yeah, no, I don\'t think that will work. I don\'t need to wrap it, right? <br />\nCashier guy: Uh...I guess not. <br />\nHipster guy: I just wanted it to be special and funny, and like ironic. <br />\nCashier guy: Well, you can urinate on it. That would be really special and downright hilarious. <br />\nHipster guy: Uh....okay, I\'ll get the flying books paper.', 'm-co', 1135526401)
    ,new Q('003892', 'Wednesday One-liners Ignore the UHO', 'Hobo: Please help me out. It\'s my birthday, sir.', '', 1135195221)
    ,new Q('003431', 'Wednesday One-liners Are #1!', 'B&T guy: Just go to Urban Outfitters and take a piss in the dressing room then.', '', 1131602403)
    ,new Q('003089', 'Wednesday One-liners Yearning to Breathe Free', 'Hipster guy on cell: Nah, we\'re just wandering the streets. Like vagrants.', '', 1129190401)
  ])
  ,new S('Dunkin\' Donuts, 93rd & 1st', 40.78131, -73.94613, 21, [
    new Q('004591', 'Bright Lights, Big Sprinkles', 'Businessman lady: I\'ll have a light latte please, with brown sugar. You <em>do</em> have brown sugar, don\'t you? <br />\nCountergirl: Um, no.  <br />\nBusinessman lady: Well, then give me your finest, finest grade sugar, all right? <br />\nCountergirl: Oh. Sure.', 'Gina Loiacono', 1141970446)
  ])
  ,new S('16th between 7th & 8th', 40.740465, -74.000155, 0, [
    new Q('006187', 'Wednesday One-Liners Aced Anatomy 101', 'Ghetto chick: When she\'s asleep, I\'m gonna squat on her brain.', 'alyssa', 1153929600)
  ])
  ,new S('57th and 3rd', 40.76021, -73.96745, 26, [
    new Q('005108', 'Wednesday One-liners for the Old', 'Girl: I think it\'s \"Alzheimer\'s\"; they\'re old but it\'s not \"Oldsheimer\'s\".', '', 1145448034)
  ])
  ,new S('36th & 8th', 40.75346, -73.99255, 17, [
    new Q('006436', 'Then We Realized That in the Time We\'d Spent Arguing, We\'d Driven Across It', 'Chick: We were trying to name all fifty states. And I was like, \"Is Delaware a state?\" and then three other people asked the same thing!', 'not minding my own business', 1153828800)
  ])
  ,new S('14th & 1st', 40.73135, -73.98259, 1, [
    new Q('004926', 'Wednesday One-liners Got Lucky', 'Chick: Because what he doesn\'t realize is that tall girls like getting fcked. A lot.', 'Corocet', 1143705614)
    ,new Q('003002', 'A Whole New Level of Decadence', 'Girl: Oh, so he\'s a total stoner?<br />\nGuy: Yeah, he only does coke when you shove it up his nose.', '', 1129334439)
  ])
  ,new S('Vanderbilt & 42nd', 40.75241, -73.97838, 16, [
    new Q('003457', 'Non-shiny Buttons Aren\'t Legal Tender', 'Guy #1: She\'s like a dull child acting out. It\'s so transparent to everybody but her, that we know who she is talking about. <br />\nGuy #2: I wonder if they pay her in shiny buttons.', 'Joe Jervis', 1133010000)
  ])
  ,new S('23rd & 6th', 40.74287, -73.99278, 13, [
    new Q('005750', 'She Wears Anti-Gravity Espadrilles', 'Suit on cell: Well you should be careful, remember what happened last time... Well you have to remember, she can eat whatever she wants and not gain weight, you gain weight... Whaaaaat? You think you weigh less than 130? Okaaaaaay.', '', 1149768032)
    ,new Q('005580', 'The Bob Really Frames Her Chins', 'Woman:  Oh, wow, Gloria, you dyed your hair! You look so much younger!  You look great!  [To man] Joe, you remember Gloria, right?  Doesn\'t her hair look great?<br />\nJoe: Yeah, but she\'s still fat!', '', 1148587232)
    ,new Q('005544', 'Until My Message Is Heard', 'Assistant: Probably not, I don\'t see them as Miracle Whip people.<br />\nBoss: How many times do you have to tell that story?', 'Dave<br />', 1148385632)
    ,new Q('004556', 'Color Me Wednesday One-liners', 'Queer: She must have been white because if she was Puerto Rican, she would have slapped me!\"', 'Emily', 1140616838)
    ,new Q('003901', 'Remember That Whole Strike Thing?', 'Girl #1: Oh, thank God they have that there. As if I really thought I was getting on the E train.<br />\nGrl #2: Well, some people might not know.<br />\nGirl #1: Bullshit. That is fucking gay.', '', 1135303233)
    ,new Q('003601', 'Give Me Abs or Give Me Death', 'Guy #1: Hey man, do you want these chips?<br />\nUrchin boy: No.<br />\nGuy #2: I guess beggars <em>can</em> be choosers.', 'Mathew J', 1134129637)
    ,new Q('003250', 'Get Ready to Be Afraid! (Happy Halloween)', 'Guy: Yo, that Hamburgler\'s a scary motherfucker, \'cause you never know what that nigga be sayin\'. He be all \"robble robble robble robble\" and shit!', 'Tacologic', 1130752806)
  ])
  ,new S('6th between 1st & A', 40.725930000000005, -73.985085, 1, [
    new Q('004540', 'It\'s Like Carnegie Hall That Way', 'Hipster guy: Have you ever walked all the way to Avenue D? <br />\nHipster girl: Yeah...like once.<br />\nHipster guy: I\'ve never been down that far. But I want to.<br />\nHipster girl: You will one day.', 'ochimama', 1141563606)
  ])
  ,new S('27th & 6th', 40.74541, -73.99098, 0, [
    new Q('004672', 'More Like France', 'Dad: Do you know what a eunuch is?<br />\nTeen boy: Sure, it\'s a place in Germany.<br />\nDad: No, it is a man whose balls have been cut off.<br />\nTeen boy: In Germany?', '', 1142640032)
    ,new Q('003435', 'Relationship Problems? Try Wednesday One-liners', 'Woman on cell: Oh yeah? Oh yeah? Well <em>fuck you</em>, Eric! I\'ll see you in court! And you know what else? I ain\'t even gonna <em>go</em> to the clinic now. So, how you like me now, huh? <em>How you like me now</em>?', 'bronxelf', 1131573637)
  ])
  ,new S('26th & Park', 40.74204, -73.98494, 2, [
    new Q('006107', 'Wednesday One-Liners Have Trouble Re-Folding the Map', 'New Yorker: ...and then the tourists paused near the construction of the <em>New York Times\' </em>new building, and one, who was I guess their leader, pointed to it and said, \"Everyone, that\'s Ground Zero.\"', '', 1153332000)
    ,new Q('004312', 'Priapic Wednesday One-liners', 'Guy: My penis does the work of ten men.', '', 1138795214)
    ,new Q('003499', 'Wednesday One-liners Are Captive-bred', 'Hipster girl: A pigeon hits me square in the face <em>one</em> time, and <em>I\'m</em> the freak?', '', 1132214410)
    ,new Q('003335', 'The Comics Section is a Real Gas', 'Girl #1: ...and I went on the American Nazi Party website, and it\'s--<br />\nGirl #2: I know! It\'s hysterical.', 'Kevin Stone', 1131976820)
  ])
  ,new S('Cab, 75th & 2nd', 40.77075, -73.95694, 21, [
    new Q('003884', 'Scenes from the Strike', 'Suit: Where are you going?<br />\nGuy: Why does it matter to you? I never got in someone else\'s cab before. <br />\nSuit: How about an area: Midtown, Downtown, West Side?<br />\nGuy: Maybe if you got into a cab on a downtown avenue and not 2nd Avenue, you would have your own cab.', '', 1135152000)
  ])
  ,new S('1st Avenue between 3rd & 4th', 40.72488, -73.987275, 1, [
    new Q('003241', 'Exactly What You\'d Expect a Bottom to Say', 'Fratboy #1: Let\'s go to Karma; I heard it\'s awesome.  <br />\nFratboy #2: Yeah, Karma is so much better than Sutra.', '', 1131336026)
    ,new Q('003019', 'Then Miss Hannigan Beats \'Em Like There\'s No Tomorrow', 'Drunk guy: I lost my voice last night; I haven\'t lost my voice since high school.<br />\nSober guy: Only little bitches lose their voice.<br />\nDrunk guy: True.', '', 1129500021)
  ])
  ,new S('67th & Columbus', 40.77421, -73.98114, 18, [
    new Q('005674', 'She\'s Even Had a Few Pas de Trois', 'Dancer chick into cell: City Ballet? [to dancer guy]  City Ballet.<br />\nBoth dancers crack up.<br />\nDancer chick into cell: You would! You City Ballet whore!', '', 1149220832)
    ,new Q('004992', '50 States plus Wednesday One-liners', 'Guy: Yeah, so we just moved to Jersey, and we got a new SUV, so as you can see, things are going really great now.', '', 1144281607)
  ])
  ,new S('52nd between 2nd & 3rd', 40.75659, -73.96873, 15, [
    new Q('003894', 'Wednesday One-liners Get Edumacated', 'Construction guy on cell: Nah man, he axed for some <em>zoh-zoh</em>...Yeah, we all know whah dat means.', 'Truckstop', 1135216846)
  ])
  ,new S('Ludlow St', 40.71789, -73.98949, 8, [
    new Q('005832', 'Wednesday One-liners Need a Tan', 'Latina: Shit, where\'d all these white people come from?', 'Caroline McGraw', 1150300832)
    ,new Q('005379', 'Wednesday One-Liners in Altered States', 'Girl at bar: I have this friend, Carrie.  She\'s REAAALLLY funny.  She takes pills.', 'LiAps', 1147269632)
  ])
  ,new S('Mulberry between Grand & Hester', 40.718734999999995, -73.99763, 10, [
    new Q('003280', 'The Riddler Presents: Wednesday One-liners', 'Man: Free shopping bags! Anyone want a free shopping bag?', '', 1130378458)
  ])
  ,new S('Bleecker & 11th', 40.73596, -74.00514, 11, [
    new Q('003750', 'Wednesday One-liners Are Stuffed', 'Queer: Don\'t those people realize those muffins actually suck?', '', 1134007215)
    ,new Q('002896', 'Because You Red States Don\'t Smell So Good', 'Tourist woman #1: This is a really quaint neighborhood!<br />\nTourist woman #2: Yeah, but it\'s really expensive. A small one-bedroom apartment is like $1,000 a month!<br />\nTourist woman #1: Oh, my! Why would someone pay that?', '', 1128722402)
  ])
  ,new S('7th Street & 1st Avenue', 40.72698, -73.98577, 1, [
    new Q('003888', 'Wednesday One-liners Are in Business', 'Man on cell: That sounds great. If I\'m fired, I\'ll call you right back.', '', 1135166452)
    ,new Q('003357', 'Wednesday One-liners Are Pre-Med', 'Asian girl on cell: ...and they aren\'t even real doctors. You know how I know that? \'Cause they told me I was gonna lose my arm.', '', 1130976023)
  ])
  ,new S('Greene & Prince', 40.72501, -73.99933, 7, [
    new Q('003749', 'Wednesday One-liners for the Family Gals', 'Mom: No, you know what marijuana smells like. Not cocaine.', 'marieke', 1134000007)
  ])
  ,new S('Yankee Stadium', 40.8269947772609, -73.92786026000977, -1, [
    new Q('005965', 'Even the Fans Inject', 'Dad: Ok, ok, it\'s two outs, we\'ll go after this batter.<br />\nBoy: Dad, I want water!<br />\nDad: You know what I see? An impatient little boy who can\'t wait five minutes.<br />\nBoy: You know what I see?  Someone who\'s gonna have their face broken because they didn\'t have any water!', 'Becka Dash', 1151222432)
    ,new Q('005854', 'Hobo Humor Goes Right Over Their Heads', 'Hobo: Hey there, mister.<br />\nCleveland guy: Is he serious?<br />\nCleveland girl: I don\'t know. What do we do?<br />\nHobo: Smile, folks! It\'s a joke! I need a whole six-pack!', 'Gave him five dollars', 1150459232)
    ,new Q('005853', 'Witty, Experienced -- What Could Be Bad?', 'Hootchie: A-Rod\'s so hot. Do you see the lips on him? Jeter\'s so hot. Tino was the hottest of them all. Even that Knoblauch was cute, remember him? Hell, I\'d sleep with any of the Yankees. But you know, I\'d draw the line at Yogi Berra.', '', 1150452032)
    ,new Q('005757', 'His Pirate Fetish Revealed (He Plays the Parrot)', 'Guy: She\'s like so angry at the world.<br />\nGirl: I know right. It\'s not my fault that she has a lazy eye. I am like seriously considering getting her an eye patch.<br />\nGuy: Dude. That would be awesome.', '', 1149804032)
    ,new Q('005431', 'Makes Perfect Sense to Me', 'Suit #1: So she got really mad at me when I was trying to break up with her, she was like \"You\'re breaking up with me cause you like me <em>too </em>much?\" And I was like \"Ya, totally.\" She just didn\'t understand.<br />\nSuit #2: Dude, thats rough.', 'two rows back<br />', 1147615232)
    ,new Q('005298', 'Wednesday One-Liners Take Me Out', 'Drunk guy: Jesus Christ! My Grandma catches better than you! And she can\'t even speak English! Or is alive!', 'Renee B.', 1146715232)
    ,new Q('004441', '\"Stop proving it.\"', 'Teen boy: Wow, look, my feet are bigger than yours!<br />\nDad: So what? My dick is bigger than yours!', 'Sarah', 1140937257)
    ,new Q('003558', 'Dog: I know, right?', 'Girl #1: Look, that policewoman has a seeing-eye dog! Isn\'t that cool?<br />\nGirl #2: Oh yeah, cool, they have them here for that anti-terrorism shit.  <br />\nCop lady: ...Is she friggin\' kidding me?', 'Tara B', 1133798419)
  ])
  ,new S('10th St between 1st & A', 40.7283, -73.98334, 1, [
    new Q('004751', 'He\'s Channeling the President', 'Crazy guy: Yeah, I don\'t have to remember. I know. What are you looking at? I\'m gonna kill you, you keep it up, I\'m gonna kill you. I don\'t need to be no CIA, FBI, Special Agent Man, whatever the fck you got. I battle evil! I\'m gonna kill you. <br />\nMan from window: Shut up!<br />\nCrazy guy: Fck you. I battle <em>evil</em>! I battle evil every day. You\'re a coward. I\'m gonna blow up that building. I don\'t like evil. I\'m a peaceful man and I battle evil. <br />\nMan from window: Go away then.<br />\nCrazy guy: <em>I battle evil</em>!', 'A guy trying to be invisible while standing right next to the crazy guy', 1143432019)
  ])
  ,new S('Joe\'s Pizza, Carmine & 6th Ave', 40.73053, -74.00173, 12, [
    new Q('005607', 'Must Be Last Comic Standing Season', 'Guy #1: Hey. Is it hailing out?<br />\nGuy #2: Hail yeah!<br />\nSilence for a few seconds.<br />\nGuy #2: I said...<br />\nGuy #1: I heard you. Shut up.', 'james clunie', 1148774432)
    ,new Q('003436', 'Wednesday One-liners Wander New York', 'Hobo: I\'m the CEO of panhandling, motherfucka...Give me $20.', 'Will', 1131580830)
  ])
  ,new S('Midtown Comics, 40th & 7th.', 40.75474, -73.9879, 17, [
    new Q('005363', 'What Do You Expect in a Comic Shop?', 'Friend #1: There\'s a virgin.<br />\nFriend #2: What?<br />\nFriend #1: There\'s a virgin.<br />\nFriend #2: What?<br />\nFriend #1: There\'s a Virgin record store out by Times Square. We should go.<br />\nFriend #2: Yeah.', '', 1147154432)
    ,new Q('004995', 'Wednesday One-liners Bring It', 'Suit on cell: ...so they buried her head under the sand, and y\'know, <i>finally</i> someone digs it back up.', 'Pitr', 1144288852)
    ,new Q('004561', 'Wednesday One-liners for Fuck Machines', 'Junkie girl: I was supposed to be at work at 6:30 but I fell asleep on the train so since I\'m late I said, \"Fuck it, I\'m gonna get some McDonalds.\"...It\'s because he was trying to fuck me while I slept last night...I didn\'t sleep for four nights and he\'s trying to fuck me while I\'m sleeping...He should have been happy, I gave it to him twice last night...and once each to two of his friends...You know I\'m a stripper and a model too.', '', 1140652837)
  ])
  ,new S('83rd & Broadway', 40.78638, -73.97797, 18, [
    new Q('003564', 'Overheard in New York: The Movie', 'Guy: Can I just say, maybe <em>Zorro</em> shouldn\'t be the first American movie you see.', '', 1134057606)
  ])
  ,new S('82nd & Columbus', 40.78391, -73.97409, 18, [
    new Q('004193', 'Wednesday One-liners Start Spreading the Word', 'Jewish mom: You guys live in a very silly place. Brooklyn. That\'s silly. Everyone left with the Dodgers.', 'Dirt \"Chainsaw\" Dog', 1137643243)
    ,new Q('003642', 'Here in New York We \"Learn\" Things', 'Dude: You\'re not from New York, are you?<br />\nChick: No, I\'m not.<br />\nDude: Thought not. You\'re too nice.<br />\nChick: That\'s the second time I\'ve heard that today.', 'Kevin Eliasen', 1134370816)
  ])
  ,new S('64th & 3rd', 40.76467, -73.9643, 21, [
    new Q('003920', '#1 Went Where #2 Goes', 'Girl: I had four vibrators.<br />\nGuy: You had four vibrators?<br />\nGirl: Yeah, and I was using the blue one to massage his neck.', 'peter', 1136606448)
  ])
  ,new S('55th & 9th', 40.76658, -73.98668, 14, [
    new Q('005311', 'Original Pitch for The Apprentice', 'Guy #1: Man, I am so done with her.<br />\nGuy #2: Really?<br />\nGuy #1: Yeah. I woke up one morning and looked at her and I knew I was done. Next contestant on my fck show please.', 'Matt Innes<br />', 1146794432)
    ,new Q('004779', 'Wednesday One-liners See No UHO Money', 'Hobo: Yeah man, that\'s good shit. Except for those white-ass American bandstand drummers. Whoever heard of fucking Clark Kent playing bongos?', '', 1142467239)
  ])
  ,new S('West 4th Street station', 40.7320231106533, -74.00070905685425, 12, [
    new Q('004926', 'Wednesday One-liners Got Lucky', 'Tween girl: I never worry about fcking, honey.', 'Lindsey Wheeler', 1143705614)
    ,new Q('004851', 'Wednesday One-liners by Storm Field', 'Girl: ...I mean, who doesn\'t like being warm? It\'s not like they call it \"Global Sweltering\"! So who cares?', 'Katie', 1143036031)
    ,new Q('004102', 'Wednesday One-liners Can\'t Hold a Tune', 'Guy: I might as well put pom poms on my ass, sparklers in my ears, and sing <em>I Will Survive</em>.', '', 1136988007)
    ,new Q('003894', 'Wednesday One-liners Get Edumacated', 'Grandma: It\'s called \"graffiti.\" People write it.', 'Rich Mintz', 1135216846)
    ,new Q('003745', 'Tuesday One-liners...Psyche!', 'Man: Outta my way! Outta my way! Make up your scrambled minds!', '', 1134028826)
    ,new Q('003655', 'Wednesday One-liners Are None Too Bright', 'Guy: Yo! You dropped something! Right here...you dropped something...Man, what are you, stupid? You\'re gonna miss the train!', 'Colin', 1133344831)
    ,new Q('003258', 'I Knew Something Was Up with That German Lady', 'Girl: I want to see that.<br />\nGuy: What\'s it about?<br />\nGirl: The war in Europe.', '', 1131451241)
  ])
  ,new S('Union Square West', 40.73676, -73.99058, 13, [
    new Q('003177', 'Wednesday One-liners are New to the Area', 'Tween girl: Are there two Union Squares?', '', 1129766419)
  ])
  ,new S('6th Ave & 12th St', 40.73601, -73.99781, 12, [
    new Q('005318', 'Cosmo Quiz Says No Go', 'Tall girl: First of all, you\'re short. Second of all, you\'re selling CDs on the sidewalk.', '', 1146844832)
  ])
  ,new S('79th & 1st', 40.77233, -73.9527, 21, [
    new Q('004774', 'Wednesday One-liners Speak Well English', 'Chick on cell: I was like, \"Oh?\" And she was like, \"Blah, blah, blah.\"<br />\nAnd I was like, \"Huh?\"', 'Alan Cross', 1142445633)
  ])
  ,new S('Office, 29th & Madison', 40.74461, -73.98525, 2, [
    new Q('004047', 'Wednesday One-liners\' Scenes from The City', 'Suit: They\'re like the Rockefellers of Staten Island.', '', 1136426436)
  ])
  ,new S('Madison & 91st', 40.78403, -73.95651, 21, [
    new Q('005663', 'Wednesday One-liners, Baby Chic', 'Friend to new mother with infant: All babies look <em>great </em>in black. Did you know that?', 'Kelly Smith', 1149127232)
  ])
  ,new S('Smith &  Wyckoff, Cobble Hill', 40.68609, -73.99089, -1, [
    new Q('005744', 'Wednesday One-liners, Fashion Dos and Don\'ts', 'Guy on cell: No, no. You can wear hats on the internet.', '', 1149724832)
  ])
  ,new S('Rivington & Ludlow', 40.72007, -73.98837, 8, [
    new Q('006349', 'Wednesday One-Liners Hang Around Home Depot', 'Amateur sociologist: I think a lesbian counts for two gay people because they\'re rare.', '', 1154520000)
  ])
  ,new S('5th Avenue & 10th Street', 40.73342, -73.9955, 12, [
    new Q('004753', 'In a New York State of Mind', 'Suit: Bless you.<br />\nChick: Who the fck are you?<br />\nSuit: You sneezed.<br />\nChick: Whatever, do <em>not</em> talk to me again.', '', 1143475236)
    ,new Q('004698', 'Wednesday One-liners Take Home Ec', 'Guy on cell: Yeah, you can braid...But can you macrame?', 'Jaclyn Renee', 1141840804)
    ,new Q('003648', 'Then Beverly Cleary Bringing Up the Rear', 'Guy #1: Can you think of anyone who, in their prime, was hotter than Jessica Alba is right now?<br />\nGuy #2: Oh, yeah, totally. Like, Bridget Bardot, and Apollonia in <em>Purple Rain</em>.', 'Christina Walker', 1134489647)
    ,new Q('003661', 'Wednesday One-liners Watch Too Much TV', 'Guy: Well, I\'d let Jessica Alba give me head, but she\'d have to be wearing gold hoop earrings and chew gum. You know, totally porno.', 'Christina Walker', 1133409622)
    ,new Q('003094', 'I\'m Hungee for Wednesday One-liners', 'Old Jewess: When Fatso eats, the world dies.', 'danie lara', 1129168856)
  ])
  ,new S('58th & 5th', 40.76363, -73.9735, 16, [
    new Q('005214', 'Sounds Like a Nice Druish Boy', 'Girl #1: I think true love is when you know someone isn\'t perfect but you still think they are.<br />\nGirl #2: I thought love was when you could still feel butterflies in your heart even after he tells you he thinks he\'s an elf. <br />\nGirl #1: I keep forgetting that actually happened.<br />\nGirl #2: Yeah, and not to you.<br />\nGirl #1: Yeah, I don\'t know how I would have taken it.', '', 1146139232)
  ])
  ,new S('51st & Madison', 40.75847, -73.97513, 16, [
    new Q('003516', 'It Was a Meeting, Not a Holocaust', 'Suit #1: That was a pretty good meeting...<br />\nSuit #2: Yeah, we got a lot done.<br />\nHobo: Was Liam Neeson in it?', 'BDA', 1133460042)
  ])
  ,new S('Broadway between Bleecker & Houston', 40.725925000000004, -73.99633, 12, [
    new Q('004195', 'Women Have Needs, Wednesday One-liners', 'Girl on cell: But I really want Chase...I guess I\'ll have to call him back and tell him to put it in my butt.', 'John Spicer', 1137628851)
  ])
  ,new S('West 3rd & Mercer', 40.72817, -73.9956, 12, [
    new Q('003894', 'Wednesday One-liners Get Edumacated', 'Girl on cell: Yeah, the white stuff? It comes out of your body...Yeah, like when you\'re, like, having sex and it\'s the white stuff that comes out of you...', 'Miss Chung', 1135216846)
    ,new Q('003416', 'Tell That to Sarah Jessica Parker', 'Dude #1: So I\'m totally fighting with Mark--<br />\nDude #2: You mean physically fighting, or metaphysically fighting?<br />\nDude #1: Metaphysically. But does it make a difference?<br />\nDude #2: Well, dude, you can\'t get punched in the face, metaphysically.', 'Dev Nille', 1132617637)
  ])
  ,new S('Lafayette & Great Jones', 40.72726, -73.9936, 12, [
    new Q('004630', 'Wednesday One-liners Subway Scenes', 'Guy: Oh, you\'re missing out! The L train is the one with waiter service.', '', 1141264850)
  ])
  ,new S('27th & 8th', 40.74778, -73.99669, 0, [
    new Q('004652', 'Or, Snap Into a Slim Jim', 'Guy #1: She be sucking my dick, and she all in a motherfuckin\' hurry and shit. She gotta take it easy, she got to slow down.<br />\nGuy #2: No, no, no. Shit. She\'s got to savor the flavor. Yeah.', '', 1142395209)
    ,new Q('004698', 'Wednesday One-liners Take Home Ec', 'Girl: They were making out on a sewing machine.', '', 1141840804)
  ])
  ,new S('Waverly & Mercer', 40.72996, -73.99407, 12, [
    new Q('005525', 'First, He Gave Away All His Chewtoys...', 'Guy #1: Anyways, how\'s Coco?<br />\nGuy #2: I don\'t have Coco anymore man. I got a new dog.<br />\nGuy #1: Really? What happened to Coco?<br />\nGuy #2: Coco hung himself.', 'Noah Lagin<br />', 1148248832)
    ,new Q('003832', 'Wednesday One-liners Aren\'t in the Best of Health', 'Guy on cell: He\'s going to get really better, really soon. But don\'t hold it against me if he dies.', 'helen r.', 1134612036)
    ,new Q('003564', 'Overheard in New York: The Movie', 'Girl: So for the last half-hour of <em>The Sisterhood of the Traveling Pants</em> I couldn\'t stop crying. Then everybody in the theater turned around and laughed at me.', 'Stu', 1134057606)
    ,new Q('003434', 'Wednesday One-liners Get There Somehow', 'Guy: Wait, we\'re on streets with <em>names</em> now?', '', 1131566447)
    ,new Q('003346', 'How Was Your Halloween, New York?', 'Hipster girl: You know that guy Adam? That I....screwed? Well, he got arrested on Halloween for having a gun that looked like a gun.', '', 1130918410)
  ])
  ,new S('Park Ave S & E 25th', 40.74143, -73.98538, 2, [
    new Q('005744', 'Wednesday One-liners, Fashion Dos and Don\'ts', 'Girl: I didn\'t know my brother was going to be at the party!  And he was in a sarong!', '', 1149724832)
    ,new Q('004631', 'Wednesday One-liners Flip Channels', 'Guy on cell: I have the same birthday as Burt Reynolds and he didn\'t invite you to his fucking party so you better be coming to mine!', 'Ethan', 1141272056)
  ])
  ,new S('18th between 6th & 7th', 40.740435, -73.99645, 0, [
    new Q('003827', 'Did They or Didn\'t They, Wednesday One-liners?', 'Chick on cell: So I saw Damien last night...Yeah, he tried to sleep with me...No, I told him, \"Damien, I\'m not going to fuck you in the apartment where you live with your girlfriend <em>slash</em> fiance <em>slash</em> whatever!', '', 1134561617)
  ])
  ,new S('Duane Reade, Broadway between 88th & 89th', 40.789835, -73.97516999999999, 18, [
    new Q('003749', 'Wednesday One-liners for the Family Gals', 'Toddler girl: <em>Gum</em>! I want <em>gum</em>!...I want it for my<br />\ntushy...<em>Please</em>? I want it for my <em>tushy</em>!', '', 1134000007)
  ])
  ,new S('54th & 6th', 40.76238, -73.9786, 16, [
    new Q('004562', 'Wednesday One-liners Get Baked', 'Businessman lady on cell: And I was like, \"Hello! I was totally a speed freak in college; I think I can handle TheraFlu Day!\"', 'Steven Strafford', 1140660024)
    ,new Q('004561', 'Wednesday One-liners for Fuck Machines', 'Businesslady on cell: Crazy monkey sex?', '', 1140652837)
    ,new Q('004110', 'Wednesday One-liners Need to Know', 'Suit on cell: I\'m going to have to think about this because when I don\'t I never have any plans.', 'Bouncer', 1137016850)
    ,new Q('003175', 'Wednesday One-liners Buy Heeb Magazine', 'Man: ...And the ACLU spends all its time trying to remove \"under God\" from the Pledge of Allegiance. Do you think they\'ll ever go after school closings on Jewish holidays?', '', 1129795200)
  ])
  ,new S('Bowery & 3rd', 40.72635, -73.99174, 1, [
    new Q('005389', 'Wednesday One-Liners Like Side Dishes', 'Guy: I like my dick with a little pussy on the side.', '', 1150279232)
    ,new Q('004269', 'Wednesday One-liners Assume', 'Guy: ...so I had my finger in there, and that\'s when I had to ask myself: \"When did I become an ass man?\"', 'Andy D', 1138226429)
    ,new Q('003856', 'The Lenapes Return to Manhattan', 'Hobo: Hey! Help a brother out?  <br />\nGuy: Sorry, we have to go. Have a good night.<br />\nHobo: <em>How</em>?', 'gibberish', 1136239211)
    ,new Q('003366', 'Come Back, Maple Syrup!', 'Girl #1: Ew! It smells like period!<br />\nGirl #2: That\'s so gross! Stop saying that!', '', 1131019250)
  ])
  ,new S('JCC, 76th & Amsterdam', 40.78118, -73.97975, 18, [
    new Q('005938', 'And Because They\'re a Great Way to Have Tuna', 'Incredibly Jappy woman #1: I\'m looking forward to using these bath melts I  made.<br />\nIncredibly Jappy woman #2: Bath melts?<br />\nIncredibly Jappy woman #1: Yeah, I call them bath melts because \"bath bombs\" really doesn\'t seem PC.', 'Kimberly Ballinger', 1151056832)
  ])
  ,new S('Precious Nails, 94th & 3rd', 40.78387, -73.9503, 21, [
    new Q('005653', 'Wednesday One-liners Make Me Sick', 'Black lady: I don\'t eat fried food. Grease is the enemy. When I was pregnant with my daughter, I wanted fried food all the time. This one day, I left work to go eat some fried fish, and I ate it. And I stayed there. And you know what happened? The grease came up and the fish stayed down.', '', 1149076832)
  ])
  ,new S('MoMA', 40.76141465055142, -73.97721290588379, 16, [
    new Q('005740', 'The Art of Wednesday One-liners', 'Loud girl: I would like to see something a little bit more modern. This isn\'t modern enough for me.', '', 1150351232)
    ,new Q('005296', 'Wednesday One-Liners Should Be in a Museum', 'MoMA security guard: No, we just have modern art here.', '-=Ed.', 1147860032)
    ,new Q('005172', 'I Guess He Never Called', 'Teen girl #1: The only time I ever gave head I was really drunk. I just remember when he started cumming, I jumped up and screamed \"Ew, gross!\" <br />\nTeen girl #2: Ha, ha, ha. Who was it? <br />\nTeen girl #1: Well, that\'s why I think third base is disgusting. I just skip over it. <br />\nTeen girl #2: Who was it? <br />\nTeen girl #1: In conclusion, don\'t go to third base. Ever. <br />\nTeen girl #2: Alright.', '', 1145829632)
    ,new Q('004781', 'Your Prescription is Wednesday One-liners', 'Security lady: You don\'t need no doctor\'s note to shave your ass.', 'craigycreg', 1142481636)
    ,new Q('004569', 'Snugly Inside Mom, No Doubt', 'Dad: All I know is right now, somewhere, an artist is sitting back and laughing at us.<br />\nLittle girl: Or if he\'s in Australia, he might be sleeping.', '', 1142028003)
    ,new Q('004697', 'Wednesday One-liners Wear Heatherette', 'Man: Keep an eye on my purse.', '', 1141848022)
    ,new Q('004562', 'Wednesday One-liners Get Baked', 'Old lady on cell: <em>Forest View rehab</em>!', 'Jdog', 1140660024)
    ,new Q('004465', 'Wednesday One-liners See NYC', 'Dad: Wow, this is just like Great Adventure. Where are all the rollercoasters?', 'Amy and Hanna', 1140055207)
    ,new Q('004154', 'Dynamism of a Foreskin is Unsettling', 'Girl: I think its a complete failure as an expression of ideology, but it is aesthetically pleasing.<br />\nGuy: What, circumcision?<br />\nGirl: No, Futurism.', 'Ian W.', 1138593622)
    ,new Q('004196', 'The Wednesday One-liners Brain Trust', 'Guy: I definitely liked Picasso more when he was freaking out.', 'Lily S', 1137636008)
    ,new Q('004047', 'Wednesday One-liners\' Scenes from The City', 'Security guy: I made that.', '', 1136426436)
    ,new Q('003274', 'Wednesday One-liners GOTTA MAKE', 'European man: There was a sign by the exhibit saying, \"Do not touch.\" I didn\'t want to touch it; I was repulsed by it! I wanted to piss on it, but not touch it.', 'Lish', 1130335229)
  ])
  ,new S('Hudson & Bank', 40.73653, -74.00584, 11, [
    new Q('004267', 'Wednesday One-liners Make Great Pets', 'Hipster guy: You know, now that I don\'t have a girlfriend, I should get a dog. Isn\'t that how it works?', '', 1138219229)
  ])
  ,new S('114th & Amsterdam', 40.8055, -73.96203, 20, [
    new Q('004286', 'More Like a Hater', 'Girl: So was he, like, a player?<br />\nGuy: Who, Charlie?<br />\nGirl: No, that Genghis Khan guy.', '', 1140580808)
  ])
  ,new S('41st & Lexington', 40.75077, -73.97653, 3, [
    new Q('004780', 'Wednesday One-liners Found \"The One\"', 'Man: Hey, ladies...Want to have a twosome?', 'Spike', 1142474402)
  ])
  ,new S('9th & A', 40.72725, -73.98266, 1, [
    new Q('004841', 'How Was Your St. Paddy\'s Day, New York?', 'Dude on cell: Hey, it\'s Tim. Yeah, I had kind of a rough time getting up this morning and just wanted to say I\'m sorry for anything I did last night...So how are you?', 'this was the morning after St. Patrick\'s Day', 1142884801)
    ,new Q('004633', 'Wednesday One-liners with an Attitude', 'Girl: That Ryan guy is so hot, I\'d totally do him. I\'d fuck him so hard. But only if, like, he never talked. Because he\'s an asshole.', '', 1141286401)
  ])
  ,new S('9th Street & 6th Avenue', 40.73413, -73.99918, 12, [
    new Q('006105', 'Wednesday One-Liners\' Excrement Adventure', 'Crazy guy: And I\'m just gonna take a shit in his fucking mouth.', 'Zak Santucci', 1153324800)
    ,new Q('004703', 'Wednesday One-liners Belong in a Zoo', 'Chick: But I\'ve always wanted to tell you, you\'re a peacock to me. I mean, you remind me of a peacock. Never mind.', 'mel', 1141876850)
    ,new Q('004555', 'Wednesday Ob/gyn-liners', 'Teen girl: You know I was thinking, if you ever wanted to like take some weed on vacation, you could just like make a fake tampon and...you know where I\'m going with that one.', 'rebecca', 1140609625)
  ])
  ,new S('Houston & Suffolk', 40.72165, -73.98471, 1, [
    new Q('004306', 'Year of the Jackass', 'Guy: This is, like, the third time they\'ve made me feel stupid in public. God, I hate Chinese people!', 'Duncan Pflaster', 1138604406)
    ,new Q('002947', 'And Go Back to Frisco with Your Pathetic Friends', 'Guy on cell: Yeah, yeah, it\'s pretty cool out here I guess...you should totally come visit...It\'s just...sometimes I feel like New York is just one big Ann Arbor.', 'jesse', 1129226412)
  ])
  ,new S('Lobby, Sullivan between Prince & Spring', 40.72586, -74.00286500000001, 7, [
    new Q('003620', 'Here\'s Sam Champion with the Overheard Forecast', 'Queer #1: Oh my god! It must be freezing outside! Look how many layers that guy is wearing!<br />\nQueer #2: I think he\'s homeless.', '', 1134410412)
  ])
  ,new S('33rd & Park', 40.74644, -73.98192, 3, [
    new Q('005289', 'Wednesday One-Liners Like a Good Time', 'Girl on cell: To answer your question, yes, I had a good time last night. I enjoyed being picked up and spun around. I didn\'t like the cigarette burns on my arm, but other than that, I had a good time.', 'LDubbs<br />', 1146686432)
    ,new Q('005117', 'Wednesday One-liners Should Take an Anatomy Class', 'Guy: And as I walked out the door I said to her, \"One last thing - if your pussy is so good, why don\'t you eat it yourself?\"', '', 1145498432)
    ,new Q('002901', 'These Chairs Are Really Uncomfortable', 'Old Chinese lady:  Let\'s go in here!<br />\nOld white guy: It\'s a fucking Door Store! We don\'t need a fucking door.<br />\nOld Chinese lady: They sell furniture!<br />\nOld white guy: Then they should call it fucking Furniture Store.', 'Mary Beth', 1128628815)
  ])
  ,new S('2nd & 1st', 40.72426, -73.99082, 1, [
    new Q('005581', 'I Call Him Redd Foxxy', 'Black guy #1: She wanted to suck my dick watching <em>Sanford and Son</em> at 2AM.<br />\nBlack guy #2: White niggas don\'t understand the principle in that. There ain\'t nothing wrong with that.', 'Errol Stairpath<br />', 1148601632)
  ])
  ,new S('135th & 5th', 40.81273, -73.93766, 22, [
    new Q('003376', 'Spoken Like a True Pimp', 'Woman: People pickin\' on you in school? Where are your friends? Who you roll with?<br />\nLittle boy: I\'m in the second grade!', '', 1132336857)
  ])
  ,new S('1st Avenue & 10th Street', 40.72877, -73.98445, 1, [
    new Q('003890', 'Wednesday One-liners Sit on It', 'Asian chick: So she is dating bubble asses now?', 'Asif', 1135159202)
    ,new Q('003552', 'Once She Pops, She Can\'t Stop?', 'Yuppie girl #1: Oh my god....did you see Haley the other day? She is totally preggers.<br />\nYuppie girl #2: Don\'t you mean <i>Pringles</i>?', '', 1133784021)
  ])
  ,new S('Office, 71st & Park', 40.77048, -73.96443, 21, [
    new Q('003295', 'She Has Six Months Left to LiveJournal', 'Doctor guy: Okay, we have the chest x-ray and it explains what\'s going on. See this lesion? It is pretty impressive.<br />\nPatient lady: \"Impresssive\"? Is that a medical term? Am I gonna have to google that, too?', 'Next exam room', 1132286442)
  ])
  ,new S('Canal & Mulberry', 40.71715, -73.99857, 6, [
    new Q('004063', 'He\'s Got a Point', 'Girl: Hey honey, slow down. My feet hurt and I\'m cold.<br />\nGuy: Why don\'t you shut the fuck up and walk? I want to go the fuck home, bitch.', 'BabyGirl', 1137808849)
    ,new Q('004044', 'Wednesday One-liners by Onan', 'Girl on cell: Maybe we should just get her a vibrator that says \"I Love New York\" and kill two birds with one stone.', '', 1136440836)
    ,new Q('003802', 'Dude, That\'s Yesterday\'s News', 'Man: You wore red panties to your brother\'s funeral?<br />\nWoman: Yeah, I wore green shoes too...You wanna say something about it?<br />\nMan: Oh...very...Christmasy.<br />\nWoman: I thought you were Jewish?<br />\nMan: Well, I <i>am</i>. But I\'ve <i>heard</i> of Christmas before!', '', 1135623638)
  ])
  ,new S('19th between 6th & 7th', 40.741025, -73.996015, 0, [
    new Q('003274', 'Wednesday One-liners GOTTA MAKE', 'Guy on cell: Yo money, I will piss on your girlfriend if ya want me to.', 'Marc Adam Smith', 1130335229)
  ])
  ,new S('13th & 6th', 40.73666, -73.99734, 12, [
    new Q('004268', 'Wednesday One-liners Wear Gross Sneakers', 'Hobo: Can you spare a dime? Do I look like Malcolm X to you? Do I look like Brother Malcolm? If Brother Malcolm was here, would you give him a dime? <em>Hell no</em>!', 'Peter', 1138240805)
    ,new Q('004108', 'The Shooting Death of Wednesday One-liners', 'Woman: Sorry it took me so long; I had to move. That lady smelled.  Like an old person. She smelled like my grandmother right before she died.', '', 1137031250)
    ,new Q('004038', 'Wednesday One-liners Check the Thermostat', 'Chick: My uterus is frozen!', 'Emilicious', 1136397617)
    ,new Q('003598', 'Wednesday One-liners Can\'t Dress Correctly', 'Tourist lady: <em>Ooh</em>! Look at this street. It\'s just like <em>You\'ve Got Mail</em>.', 'Bryan', 1132797610)
  ])
  ,new S('Virgin, Union Square', 40.73460839643972, -73.99083852767944, 12, [
    new Q('004910', 'She Sounds Very Pretty Herself', 'Girl #1: I\'m funny.<br />\nGirl #2: No you\'re not.<br />\nGirl #1: Yes I am. Everyone says I\'m hilarious.<br />\nGirl #2: Of course they do. That\'s because you aren\'t pretty.', 'djlindee', 1144512003)
    ,new Q('004011', 'Something\'s in the Air (Happy VD!)', 'Guy: Yo...if I had to choose between VD and a girlfriend...I\'d choose VD.', 'Angel', 1139911212)
    ,new Q('004138', 'I Vote for the No Kids', 'Guy: I\'m like your gay boyfriend.<br />\nGirl: Kind of.<br />\nGuy: ...only without the gay sex part, of course.<br />\nGirl: Yes, and without the sense of style.<br />\nGuy: I don\'t know if I\'d say that...<br />\nGirl: See, you\'re just very emotional. But you should really work on the style, \'cause it\'s the best thing about the gay.', '', 1138327211)
    ,new Q('003663', 'Y Kant Tori Fans Read', 'Girl #1: That\'s weird, they don\'t have any Tori Amos here.<br />\nGirl #2: Have you checked under \"A\"?<br />\nGirl #1: Why would it be under \"A\"?', '', 1134813635)
    ,new Q('003265', 'I Found Unfunny Dickhole\'s Doppelganger', 'Girl: Guys, I saw a doppelganger for Justin Case today!<br />\nGuy: Yeah me too, his name is Justin Time.', '', 1131458456)
  ])
  ,new S('West 4th & Greene', 40.72917, -73.99581, 12, [
    new Q('003884', 'Scenes from the Strike', 'A couple is parked on the side of the road with the engine running.  The wife has her window open to smoke. A hobo walks up to the car like it\'s a cab and says: Goin\' uptown?', 'Lisa & Coco', 1135152000)
  ])
  ,new S('Madison between 39th & 40th', 40.751185, -73.98046500000001, 3, [
    new Q('003884', 'Scenes from the Strike', 'Guy: Hey, I finally figured out how to get in on time: Stop the trains from running.', 'Kira', 1135152000)
  ])
  ,new S('22nd & Broadway', 40.74057, -73.98942, 13, [
    new Q('005334', 'I\'m About to Anticlimax', 'Guy #1 eating an ice cream cone: Look at these babes.<br />\nGuy #2 eating an ice cream cone: Look at these jugs.<br />\nGuy #1: Look at these bombs.<br />\nGuy #2: Holy shit! Russian Scuds!<br />\nGuy #1: Look at these torpedos!<br />\nGuy #2: Look at these fun bags!<br />\nGuy #1: Oh yeah! Oh yeah! What a babe! <br />\nGuy #2: Yeah, but her friend has to do something with that can.', 'Eric Wenstrom<br />', 1146960032)
    ,new Q('004405', 'Twister is Easier with Corpses', 'Suit #1: So how many tombstones do we have?<br />\nSuit #2: Four.<br />\nSuit #1: All right. So we got the client, the CPA and the attorney...We gotta figure out how to get one more person involved.', 'E.B. Dresner', 1140472853)
    ,new Q('003748', 'Wednesday One-liners Have Language Problems', 'Woman: Did you say \"Mr. Happy Hands\"?', 'Peter H', 1133992814)
  ])
  ,new S('29th St & 30th Ave, Astoria', 40.76597, -73.92434, -1, [
    new Q('006012', 'Wednesday One-Liners Need Rubber Sheets', 'Fat, middle-aged female crossing guard:  Every time I do that I shit the bed.', 'JimmyJohn', 1151553600)
  ])
  ,new S('83rd & 2nd', 40.77591, -73.95318, 21, [
    new Q('003521', 'They\'ve Got Everything in Common', 'Girl #1: Oh my god, he is <em>so</em> cute.<br />\nGirl #2: Yeah, I told you he was like, totally hot.<br />\nGirl #3: Yeah, he is. But he is <em>so</em> drunk, and <em>such</em> a walking STD!<br />\nGirl #2: I know. I\'m drunk too, though.', 'Mr Gemini', 1133510455)
  ])
  ,new S('Bleecker & 6th Ave', 40.72972, -74.00218, 12, [
    new Q('005420', 'Some People Take Things Way Too Seriously', 'Queer #1: So the whole time you were married you weren\'t going out with men?<br />\nQueer #2: Nope.', '', 1147536032)
    ,new Q('004126', 'More Like 2-3 Weeks', 'Queer: But wait, is English a race?<br />\nGuy passerby: Holy shit, that\'s going on Overheard tomorrow.', 'Guy passerby #2<br />', 1138168833)
  ])
  ,new S('16th & 3rd', 40.73461, -73.98623, 2, [
    new Q('004774', 'Wednesday One-liners Speak Well English', 'Doorman guy: Do you think I\'m stupid because I work here? I know a lot of big words.', '', 1142445633)
    ,new Q('004701', 'Wednesday One-liners Believe in Holy Ghosts', 'Hipster guy: It was like, way underground. I think it was in Hell.', 'E.B. Dresner', 1141862435)
  ])
  ,new S('Varick & Spring', 40.72565, -74.00579, 7, [
    new Q('004185', 'Wednesday One-liners Aren\'t a Perfect Fit', 'Woman: In all this time you\'ve only had three things to talk about, and they were all things that I told you!', 'Chilectra Selva', 1137614443)
    ,new Q('003963', 'Wednesday One-liners, Clothing Optional', 'Chick: That\'s the second time I\'ve been invited to a strip club today.', '', 1135821627)
  ])
  ,new S('24 Prince, Prince Street', 40.722884, -73.994567, 9, [
    new Q('004179', 'Dude, Talk to Your Godfather', 'Man #1: Yo! You just picked your nose! You\'re not gonna wash your hands first?<br />\nMan #2: Why? It\'s not like I picked your nose.', 'Steve D', 1138708845)
  ])
  ,new S('65th & Park', 40.76662, -73.96695, 21, [
    new Q('004919', 'Wednesday One-liners Got It in Pearl', 'Chick: I mean, I\'ve always <em>heard</em> of guys who whacked off on the subway...', 'HowYooDoon', 1143640853)
  ])
  ,new S('125th & Lexington', 40.80437, -73.93744, 23, [
    new Q('005062', 'That\'s What Got Him There in the First Place', 'Wheelchair guy: Hey, let me see that football.<br />\nDude: No, sorry.<br />\nWheelchair guy: What, are you afraid I\'m going to run away with it?', 'brian corcoran', 1145080819)
    ,new Q('005041', 'Wednesday One-liners Tip One Back', 'Guy: He was so drunko he didn\'t even know he was dead.', 'Rodney C.', 1144843246)
    ,new Q('004290', 'And Then She\'ll Need Stitches', 'Woman #1: So I told him, \"Nigga, you can\'t touch none of this!\"<br />\nWoman #2: Ha, ha. Girl, what you need is a horse dick!', 'Johnny Tremain', 1139587241)
    ,new Q('004362', 'Can Anyone Spare Food or a Quarterback?', 'Hobo #1: Who\'s gonna win? Who\'s gonna win?<br />\nHobo #2: I\'ll tell you who\'s gonna win. The Seattle Steelers.', 'Mel', 1139198422)
  ])
  ,new S('71 Irving Place Coffee & Tea Bar', 40.736722, -73.986773, 2, [
    new Q('005941', 'With His Girlfriend and Her Drug Dealer, As Usual', 'Mom: So I talked to the lawyers this morning, honey, and when school is done, we\'re going to move into the Hampton house.<br />\n5-year-old son: Is Daddy coming?<br />\nMom: No sweetie, he is going to stay in the city.', 'DBG', 1151071232)
  ])
  ,new S('West 3rd Street & 6th Avenue', 40.73105, -74.00142, 12, [
    new Q('004702', 'Wednesday One-liners for Thanatos', 'Girl: No, it should have disintegrated by now, except for, like, the bones and stuff. I\'m so excited!', '', 1141869644)
    ,new Q('004557', 'Chuck Woolery\'s Wednesday One-liners', 'Chick on cell: Well, what do you want to do later?...Okay...Okay, how about we watch porn, have sex, and then go to the planetarium, in that order?', 'djlindee', 1140624001)
    ,new Q('004241', '\"Yeah, but I\'m not a pedophile.\"', 'Girl #1: I really wasn\'t into him; he was too young.<br />\nGirl #2: What are you talking about? You\'re a rapist.', '', 1139299231)
    ,new Q('004268', 'Wednesday One-liners Wear Gross Sneakers', 'Hobo: Why you got a skirt on?  Why you showin\' your legs? You know guys like legs, I bet you don\'t even have a pussy under there!', 'JessicaStacyh', 1138240805)
    ,new Q('004043', 'Wednesday One-liners Love Bathroom Humor', 'Guy: Girl, I wanna suck the fart right out your ass.', 'Paul Silva', 1136419215)
    ,new Q('003469', 'Welcome to the Jungle', 'Black girl: I didn\'t want to say this in there, but have you noticed how all Mexican men working in bars and restaurants look the same? <br />\nWhite girl #1: Well I bet they all think that white women look the same.<br />\nWhite girl #2: Well all elephants probably look the same to gorillas.', '', 1133200843)
  ])
  ,new S('18th & Irving', 40.73645, -73.98697, 2, [
    new Q('003143', 'It\'s Chappaqua', 'Hobo: Come on out, Democrats. Admit it. You fucked up. Admit it. You voted for John Kerry. You fucking Democrats. You voted for someone who likes to dress up like a pixie.<br />\nDude: I wonder what the address is on his voter registration card.', '', 1130486422)
  ])
  ,new S('A between 2nd & 3rd', 40.72331, -73.98552000000001, 1, [
    new Q('004561', 'Wednesday One-liners for Fuck Machines', 'Guy: What do you do to top double-teaming? Fuck a corpse?', '', 1140652837)
  ])
  ,new S('60th & Columbus', 40.76982, -73.98433, 18, [
    new Q('004905', 'This One\'s Eau de Toilette', 'Girl #1: I know it smells kind of cheap, but I like it because it\'s the perfume I was wearing when I lost my virginity.<br />\nGirl #2: I thought you were wearing Ralph when you lost it.<br />\nGirl #1: No, that was my <em>other</em> virginity.', 'Lindsay Hall', 1144706431)
    ,new Q('004484', 'She\'s Dating a Big Window', 'Girl #1: I hate my haircut. But it might just be in pictures. I need to look at myself in the mirror for a few hours.<br />\nGirl #2: Like you do every day?<br />\nGirl #1: Yeah, I\'m a little vain.', 'Jess McGins', 1141365611)
    ,new Q('002874', 'What Matters, Literally, is the Motion of the Ocean', 'Teen girl #1: And they went on a boat trip to see whale sperm.<br />\nTeen girl #2: Whale sperm?  Are they really big?', 'James Brummel', 1128614421)
  ])
  ,new S('6th & B', 40.72448, -73.98162, 1, [
    new Q('004461', 'Wednesday One-liners & the Sin of Sloth', 'Guy: Dude, all I want to do is play tennis and see my analyst.', 'David James Stewart', 1140033648)
    ,new Q('003247', 'Unless They Get Disowned (Happy Halloween!)', 'Guy: So you still going to be an elf for Halloween?<br />\nGirl: No, actually I\'m going to be a fairy, but fairies are part of the elf family.', '', 1130796005)
  ])
  ,new S('14th & B', 40.72942, -73.97802, 1, [
    new Q('004103', 'Wednesday One-liners is Just a Number', 'Queer: I\'ll totally let him molest me...if only I were 15 again!', 'Big Pisces', 1136995252)
    ,new Q('003955', 'Wednesday One-liners Get Paid for It', 'Drunk chick: You look so good. Like, I would cast you. Like, I would write, like, crackwhore roles just for you.', 'djlindee', 1135792822)
    ,new Q('003566', 'The Time is Such a Rare, Expensive Commodity', 'Hobo: Do you have time?<br />\nHipster guy: Yeah, and I also have a job that earned me money to buy a watch so I could have the time.', 'Reid', 1133712007)
    ,new Q('003122', 'Careful or Trebek Will Grab Your Potpourri', 'Teen boy #1: I can read lips; that guy said he liked to suck cock.<br />\nTeen boy #2: You mean, \"What is, \'I like to suck cock\'?\"', 'meghan', 1130248827)
  ])
  ,new S('Clinton & Rivington', 40.71908, -73.98506, 8, [
    new Q('004538', 'Ride \'Em, Cowgirl!', 'Chick #1: Yeah, but I can\'t keep fucking him.<br />\nChick #2: Why not?<br />\nChick #1: Because I\'m not in love with him.<br />\nChick #2: Oh. Well, how did you fuck him till now?<br />\nChick #1: Usually with me on top.', '', 1141531253)
  ])
  ,new S('Hudson & Front', 40.70224, -73.98117, -1, [
    new Q('004925', 'Wednesday One-liners Count Calories', 'Cop: You know what you see when the Pillsbury Doughboy bends over?...Donuts.', '', 1143684023)
  ])
  ,new S('41st & 9th', 40.75785, -73.99308, 14, [
    new Q('003472', 'The Third Kind of Irony', 'Little boy: I ate a nail once.<br />\nMom: I remember that. I think it came out in your diaper.', 'Cait O\'Connor', 1133064012)
  ])
  ,new S('2nd between A & B', 40.722505, -73.984605, 1, [
    new Q('004320', 'Wednesday One-liners Watch VH1', 'Guy: You know you have reached the lowest point of all human existence when there\'s a telethon featuring only John Denver music.', 'djlindee', 1138838409)
  ])
  ,new S('72nd & Broadway', 40.77877, -73.98207, 18, [
    new Q('005327', 'It\'s Hand Cream, But Whatever Works', 'Long Island woman #1: What is this?<br />\nLong Island woman #2: Trust me; it\'s good for you. I mean, look at these people...Have you ever seen them fat?!', 'DJ Lee, one of \'these\' people<br />', 1146909632)
    ,new Q('004633', 'Wednesday One-liners with an Attitude', 'Mom: If you don\'t come back here and apologize right now, you\'re going into the trashcan again!', '', 1141286401)
    ,new Q('004109', 'It\'s a Late Wednesday One-liners Lunch', 'Man on pay phone: <em>What do you want</em>? <em>Do you want some soup</em>? <em>What</em>?...Answer me!', '', 1137024012)
    ,new Q('004047', 'Wednesday One-liners\' Scenes from The City', 'Bike guy: Hey, jaywalker! You\'re a jaywalker! The light was red, you\'re not supposed to cross the street! Jaywalker! Get out of her way, everybody, she\'s more important than you! <em>Jaywalker</em>!', 'Isaiah Tanenbaum', 1136426436)
    ,new Q('003731', 'All Set with the Webbed Feet', 'Teen girl #1: Hey, we could go as the Teenage Mutant Ninja Turtles.<br />\nTeen girl #2: Yeah, that\'s a good one <br />\nTeen girl #1: You\'d only need a mask...They\'re frogs, right?', '', 1134964856)
    ,new Q('003532', '\"What the pluck are you talking about?\"', 'Woman: Why the fuck would you put a chicken in the juice machine?<br />\nMan: It\'s common sense.', 'Alexei Lebedev', 1133546417)
  ])
  ,new S('1849, Bleecker Street', 40.736886, -74.005538, 11, [
    new Q('004160', 'He Was Speaking to the Toilet', 'Drunk guy: You\'re the best lookin\' thing in here.<br />\nWaitress: Number 1, I\'m not a thing. Number 2, thanks!', 'Chumbodonk', 1138550437)
  ])
  ,new S('53rd & 1st', 40.75574, -73.96478, 15, [
    new Q('005471', 'Wednesday One-liners Want a Date', 'Guy: Man, we gotta get you on a J-Date sometime soon.', 'Pam, Lauren, and Gloria', 1147903232)
  ])
  ,new S('Random House cafeteria, 56th & Broadway', 40.76546, -73.98202, 16, [
    new Q('004019', '\"Yeah, I\'ve got a hot blind date tonight.\"', 'Hobo: Hey look, I almost forgot my umbrella!...I came all the way back from the liquor store to get it. Hey look, a quarter!<br />\nDude: Your day keeps getting better, doesn\'t it?', 'Katherine', 1137528033)
    ,new Q('003668', 'They Do Have Lots of Wings in Asia', 'Girl #1: I feel like shit. I think I\'ve got the Asian Bird Flu.<br />\nGirl #2: Don\'t you mean Avian Bird Flu?<br />\nGirl #1: Whatever.', 'K.M', 1134993643)
    ,new Q('002906', '\"Wet Dream\" Seems Gayer', 'Guy: It\'s really been my dream to start writing for <em>Teen Vogue</em>.<br />\nChick: That is quite possibly the gayest sentence ever uttered.', 'djlindee', 1129881614)
  ])
  ,new S('13th & Broadway', 40.73397, -73.99095, 12, [
    new Q('005514', 'Two Kilos? She Wishes', 'Black guy:  Two for Akeelah.<br />\nGerman girlfriend:  What?  What are you buying?  Two kilos for what?<br />\nBlack guy:  No.  Akeelah.<br />\nGerman girlfriend:  I don\'t understand.  Two kilos of what?  That makes no sense.<br />\nBlack guy, rolling his eyes:  No!  Akeelah! Akeelah!. Akeelah! Two for Akeelah!<br />\nGerman girlfriend:  I still don\'t understand.  <br />\nBlack guy:  Akeelah and the frickin\' Bee!!!<br />\nGerman girlfriend:  OHHHHH!', '', 1148184032)
    ,new Q('004194', 'Wednesday One-liners for the Thespians', 'Girl: I had a few drags on New Year\'s Eve, and woke up the next morning sounding like Tara Reid.', '', 1137621637)
    ,new Q('004005', 'Too Bad She Can\'t Be a Hottie', 'Chick #1: So how did your trial go?<br />\nChick #2: It went well, it went my way.  <br />\nChick #1: That\'s great.<br />\nChick #2: Yeah. The guy was actually nice; well, he was listed as a violent felon, but...<br />\nChick #1: A nice violent felon?<br />\nChick #2: Ha, ha...yeah. He tried to play the \"my 88 year old dad and my wife and kids are here, I\'m in rehab trying to clean up my life\" card. But I put him on the stand for the whole day and caught him in all these lies.', '', 1137373223)
    ,new Q('003647', 'That Got Her Raped Last Time', 'HS guy: Would you like to buy a bag of M&M\'s to support our basketball team?<br />\nChick: Sorry.<br />\nHS guy: Come on, just one bag, we\'re raising funds for our team--<br />\nChick: Sorry. I\'m sorry.<br />\nHS guy: \"Sorry\", what is that, \"sorry\"? Why don\'t you just say \"no\" if you mean no? Why don\'t you just say \"<em>no</em>\"?', 'Lily', 1134518456)
  ])
  ,new S('7th between 40th & 41st', 40.755044999999996, -73.987685, 17, [
    new Q('004633', 'Wednesday One-liners with an Attitude', 'Black woman: \'Cause all I\'m sayin\' is, what\'s your passion? What\'s your passion? \'Cause all your passion right now is bitchy.', 'carolita johnson', 1141286401)
  ])
  ,new S('21st & 9th', 40.74519, -74.00228, 0, [
    new Q('006005', 'Wednesday One-Liners Rise from the Dead', 'Guy on cell: And you got the vampires from where?', '', 1151503200)
    ,new Q('003492', '...With a Side Order of Wednesday One-liners', 'Guy: This coffee tastes like closet.', '', 1132185605)
  ])
  ,new S('Christopher & 7th', 40.73361, -74.00282, 11, [
    new Q('004698', 'Wednesday One-liners Take Home Ec', 'Man on pay phone: Naw, naw! You gotta tell him! We ain\'t down with the broomstick!', '', 1141840804)
    ,new Q('004335', 'This Turducken is Awful Gamey', 'Hobo: Can you help me get something to eat?<br />\nGuy: Yeah, I got a slingshot in my bag. You prefer pigeon, rat, or squirrel?', 'Colin', 1139889611)
  ])
  ,new S('50th & 9th', 40.76348, -73.98899, 14, [
    new Q('004622', 'WWWednesday One-liners', 'Chick: Yeah, so now there are nudie pictures of me out on the internet.', 'Max Krueger', 1141221616)
    ,new Q('004180', 'The Psychic Already Knows', 'Girl: <em>Oh my god</em>, I have to tell you something but you cannot, absolutely tell anybody else! <em>You swear</em>?<br />\nQueer: Oh my god, yes. I promise it\'s just between you, my psychic and my shrink!', '', 1139479222)
    ,new Q('003890', 'Wednesday One-liners Sit on It', 'Man on cell: Yeah, his jokes are going to backfire and bite him in the ass. I\'m going to plant the seed because I am the devil.', '', 1135159202)
  ])
  ,new S('105th & Amsterdam', 40.79973, -73.96622, 18, [
    new Q('004852', 'Wednesday One-liners Are Unclean...Unclean!', 'Guy on cell: I can feel the juice runnin\' down my leg. It\'s leaking <em>again</em>!', 'inge', 1143050438)
  ])
  ,new S('St. Marks between 2nd & 3rd', 40.729060000000004, -73.9888, 1, [
    new Q('004073', 'That\'s Just What They Said About Jesus', 'God Squad guy: Jesus is the answer! Come to Jesus and he\'ll hold you in his arms! Come home to Jesus!<br />\nGuy #2: <em>By the way, just so you know, the rest of us all think you\'re fucking nuts</em>!', '', 1137945610)
  ])
  ,new S('17th & 6th', 40.73926, -73.99544, 13, [
    new Q('003502', 'Wednesday One-liners for the Mishpokhe', 'Man on pay phone: Hello! This is Roland!...Your son!!!', 'Becka Dash', 1132207237)
  ])
  ,new S('77th & Columbus', 40.78064, -73.97644, 18, [
    new Q('004961', 'Winners & Losers (NYC Short Stories)', 'Girl #1: I can\'t believe you hang out with that guy...All of your friends are such losers!<br />\nGirl #2: Well, I hang out with you, don\'t I?<br />\nGirl #1: I think that proves my point more than it does yours.', '', 1144972817)
  ])
  ,new S('Barnes & Noble, 81st & Broadway', 40.78512, -73.97893, 18, [
    new Q('004556', 'Color Me Wednesday One-liners', 'Mom: Imagine if you were black. Wouldn\'t you feel invisible?', 'SK', 1140616838)
    ,new Q('004197', 'There\'s an SAT Question Here Somewhere', 'Guy #1: You mean the roommate who sleeps naked on the top bunk?<br />\nGuy #2: No, that\'s Bobby. I\'m talking about Steve. He\'s the one who farts all the time. <br />\nGuy #1: My bad.', 'Dr. X', 1139047211)
  ])
  ,new S('West 4th Street & 6th Avenue', 40.73169, -74.00097, 12, [
    new Q('005295', 'Wednesday One-Liners Are Ready for 2008', 'Hobo shuffling through his belongings, to no one in particular: I\'m starting to feel like a Democrat.', 'Rebecca Sills', 1146650432)
    ,new Q('005109', 'We Come Full Circle', 'Girl #1: Oh my god! I just heard that Katie Holmes had her baby! Katie Holmes had her baby, everyone!<br />\nGirl #2: Xenu commands you to shut the fck up while I\'m on the phone with my dealer.', 'Robin M.', 1145437723)
    ,new Q('004918', 'Wednesday One-liners Turn It Up a Notch', 'Asian girl: What the fck is your problem? I gave up cursing for Lent, but since I know I\'ll be forgiven for this: what the fck is your fcking problem, you fcking motherfcker? There is so much fcking space on this fcking street and you have to be up my fcking ass? Go fck yourself, you fcking asshle!', '', 1143633634)
    ,new Q('004776', 'Wednesday One-liners Sport Beef Curtains', 'Lesbian: My clit isn\'t that big, but it is perfect. It\'s very active.', '', 1142488809)
    ,new Q('003660', 'Heavenly Wednesday One-liners', 'Girl on cell: I\'ve decided to start answering my phone with \"I am the God of hellfire.\"', '', 1133416812)
    ,new Q('003390', 'I\'m Thankful for My Family', 'Man on cell: You stupid little bitch!...That\'s right I want a better report card next year.', 'Scott Hoffman', 1132880408)
    ,new Q('003196', 'He Was a Very Foolhardy Investor', 'Hobo: Spare some change?...<em>Why are you so selfish</em>?<br />\nMan: Why are you so poor?', 'David B.', 1130853649)
    ,new Q('003279', 'Yum! Wednesday One-liners', 'foreign guy: One chicken Kentucky.', '', 1130371247)
  ])
  ,new S('Josephina, 63rd & Broadway', 40.77142, -73.98229, 18, [
    new Q('004997', 'It Reeks of Wednesday One-liners', 'Mom: Yeah, I do smell something annoying.', '', 1144296004)
  ])
  ,new S('Christopher Street', 40.73292, -74.00718, 11, [
    new Q('003163', 'Flame Retardant (Happy Halloween!)', 'A mom points to the window of a sex shop, at a jacked mannequin wearing a mask and feather boa. She says: Hey honey, maybe  <em>that\'s</em> what you could be for Halloween. <br />\nLittle boy: No, Mommy. I want to be a fireman.', 'Jon', 1130810456)
  ])
  ,new S('105th & Madison', 40.79292, -73.94999, 23, [
    new Q('004996', 'Wednesday One-liners Eat Wedding Cake', 'Man on cell: Baby, if you wanna be my wife, you gotta get yourself domesticated.', '', 1144310418)
  ])
  ,new S('Central Park South', 40.76457, -73.97364, 16, [
    new Q('005539', 'Chicks and Ducks and Geese Better Scurry', 'Girl: So I\'m not the biggest comic fan, but these were from the thirties and I open it up and HELLO DONALD DUCK with an erection!<br />\nGuy: Whoa, porno.<br />\nGirl: Yeah, it was $4.95 which I totally had, but I mean...there was even this poem. \"This is the tale of Donald Duck, he just wants a duck to fck.\"<br />\nGuy: Was he...you know?<br />\nGirl: Circumcised?', '', 1148371232)
    ,new Q('005141', 'Wednesday One-liners Paging Hugh Laurie', 'Woman: Hello?? Preemie? How\'s your vagina??', '', 1146052832)
  ])
  ,new S('John & Water', 40.70679, -74.00503, 5, [
    new Q('005305', 'Boobs? That\'s What You Came Up With?', 'Guy: [really loudly] Fck! Sht! Boobs!<br />\nGirl: Stop it! Screaming profanities isn\'t going to get you on Overheard in New York. <br />\nGuy: But today\'s our last day in the city and it\'s my last chance!<br />\nGirl: So you develop Tourette\'s? <br />\nGuy: Shhh! Stop calling me a tourist!', 'Gillian<br />', 1146751232)
  ])
  ,new S('44th & Broadway', 40.75725, -73.98584, 16, [
    new Q('005515', 'That\'s When She Gets Off Work', 'Guy: What\'s in the steamed little juicy buns?<br />\nFour-fingered Chinese waitress: 10 minute longer.', '', 1148198432)
    ,new Q('005041', 'Wednesday One-liners Tip One Back', 'Man: But what I still don\'t understand is how some people don\'t enjoy getting drunk?', '', 1144843246)
    ,new Q('004924', 'Wednesday One-liners Read Vogue', 'Receptionist lady: Well, the good thing is that if she goes on her honeymoon in the United States there will be a Victoria\'s Secret wherever she goes.', 'geo decas', 1143676838)
    ,new Q('004700', 'Wednesday One-liners Engage in Carnality', 'Teen girl: I wanted to fuck his eyes!', '', 1141884051)
    ,new Q('003290', '\"Domo arigato!\"', 'White chick: Oh, I\'ve been meaning to ask you...how do you say \"hello\" in Korean?<br />\nAsian chick: I don\'t know; I\'m Chinese, bitch!', '', 1133316054)
  ])
  ,new S('46th & 8th', 40.75978, -73.98795, 16, [
    new Q('005567', 'Wednesday One-Liners Are Being Watched', 'Guy: I went to high school with you. I was a senior when you were a freshman. I used to look at your pantylines in gym class.', '', 1149674432)
    ,new Q('004190', 'Wednesday One-liners Aren\'t Quite Amiable', 'Guy on cell: Okay, so first of all, Gallagher fucking sucks!', '', 1137650458)
    ,new Q('004184', 'Wednesday One-liners on Telemundo', 'Guy on cell: So how many Mexicans <em>are</em> trying to seduce you?', '', 1137592840)
    ,new Q('003499', 'Wednesday One-liners Are Captive-bred', 'Drunk guy: You see, girls are the most irrational species...except for alligators, \'cause they\'re wicked irrational.', '', 1132214410)
    ,new Q('003493', 'That\'s the Ticket, Wednesday One-liners', 'Man on cell: Yeah, I\'m going to see a farce tonight...It\'s gonna be awesome. Wait, what\'s a farce? That\'s a comedy, right? Right?', 'Chad', 1132149600)
  ])
  ,new S('Bleecker & Sullivan', 40.72878, -74.00044, 12, [
    new Q('004917', 'Wednesday One-liners Flick the Clicker', 'Chick: She\'s like a human Muppet...But not <em>sexually</em>.', '', 1143626433)
    ,new Q('004072', 'Marcia Cross: The E! True Hollywood Story', 'Drunk chick #1: I have the best blind date story ever.<br />\nDrunk chick #2: Oh yeah?<br />\nDrunk chick #1: My sister\'s friend flew from Australia to LA for a blind date, and she ended up flying to Aruba with the guy and marrying him like a week later.<br />\nDrunk chick #2: Wow. That\'s awesome!<br />\nDrunk chick #1: But I think she was just, like, 35 and desperate to get married.', 'djlindee', 1137859257)
    ,new Q('003757', 'Pass the Dutchie Hobo Left-hand Side', 'Hobo: Hey man, you got some change? I\'m saving up for a bag of weed?<br />\nGuy: No! I prefer to pay for it myself!<br />\nHobo: <em>Yeah</em>?...Well, I don\'t!', '', 1135108802)
  ])
  ,new S('Starbucks, Astor Place', 40.7304783951045, -73.99111747741699, 12, [
    new Q('005619', 'That\'s Why Kofi Annan Ordered that Rug', 'Girl #1 It\'s beautiful, where was it made?<br />\nGirl #2: [checks label on sweater] Made in Indonesia.<br />\nGirl #1: Oh, well with all of the bad sht going on down there, you wanna buy as much as you can while you still can.', '', 1148868032)
    ,new Q('005559', 'Wednesday One-liners Have Cool Spiny Backs and Tiny Tiny Brains', 'Teen girl: You know, I don\'t think I even <i>believe</i> in dinosaurs.', 'Paul', 1148515232)
    ,new Q('004565', 'Wednesday One-liners Got Late Night Munchies', 'Girl: We\'re moving on to outer space--which is, metaphorically, cheese.', 'Alcestis', 1140681647)
    ,new Q('004053', 'If You Have to Ask...', 'Guy: I just geeked out my profile by a million percent. What do you think?<br />\nGirl: Hold up, let me check...<br />\nGuy: So what do you think?<br />\nGirl: Yeah, that Evangelion child shit is weird.<br />\nGuy: Like how weird?', 'Zah', 1137837608)
    ,new Q('003885', 'Not a Creature was Stirring', 'Dude: There are about 20 mice running around the glassed-in area over there.<br />\nStore guy: Oh yeah. We know. Every Starbucks has mice.<br />\nStore chick: They\'re cute!', 'The Tep', 1135494004)
  ])
  ,new S('4th St & 1st Ave', 40.72518, -73.98706, 1, [
    new Q('005561', 'Wednesday One-liners in Black and White', 'Hobo to parked white-on-white Mini Cooper: Hate car! Racist car! Bigot car!', 'benjamen walker', 1148529632)
  ])
  ,new S('57th & Madison', 40.76226, -73.97235, 16, [
    new Q('005383', 'Wednesday One-Liners\' New Fall Line', 'Pronounciation-impaired middle-aged guy: ... he was talking about this place <em>Her-mees</em>. And I was like <em>Her-mees</em>?  It\'s not <em>Her-mees</em>, you retard -- it\'s <em>Her-may</em>.', '', 1147305632)
  ])
  ,new S('Starbucks, 41st & Madison', 40.75213, -73.97979, 3, [
    new Q('003347', 'Wednesday One-liners & That Vision Thing', 'Barista chick: She looks like she could be your wife, you know? Because she\'s got your eyes.', 'Matthew Dvorin', 1130940013)
  ])
  ,new S('Montague & Henry', 40.69479, -73.9943, -1, [
    new Q('006007', 'Wednesday One-Liners Missed the Pride Parade', 'Bartender: I have absolutely no desire to go to work and make ginger cosmos for a bunch of proud gays.', '', 1151517600)
  ])
  ,new S('51st & 5th', 40.75915, -73.97677, 16, [
    new Q('005955', 'Scenes from Madame Tussaud\'s', 'Tourist #1: Ha! Look at her, she\'s trying to look just like Bernadette Peters.<br />\nTourist #2: That <em>is</em> Bernadette Peters and she <em>heard</em> you. Can we go now?', 'A tourist who\'s not clueless.', 1151352032)
    ,new Q('004633', 'Wednesday One-liners with an Attitude', 'Assistant chick: I just can\'t like somebody that I dislike so much!', '', 1141286401)
    ,new Q('004022', 'Man: Shut up, you damn queer!', 'Teen girl: Is that the Italian Embassy? I think it is. I\'m pretty sure that\'s the Italian Embassy.<br />\nMom: I have no idea.<br />\nTeen girl: I think it is. No...Oh, that\'s Versace.<br />\nMom: What\'s Versace?<br />\nTeen girl: It\'s like Coach...or Prada. <br />\nMom: You always know about the expensive brands.', 'jen the phenomenon', 1137520819)
  ])
  ,new S('42nd between 7th & 8th', 40.756615, -73.988385, 16, [
    new Q('004337', 'Stupid Tourists: Epidemic or Illusion?', 'Old man: Is that a theater?<br />\nOld woman: No, it\'s a McDonalds.', 'Adam Grosswirth', 1139882405)
    ,new Q('004310', 'Wednesday One-liners Drink Mad Dog', 'Guy: That\'s because you\'re a mean drunk, and nobody loves you.', '', 1138802416)
    ,new Q('003276', 'Wednesday One-liners Need an Accountant', 'Guy: Can you feel the love tonight? If so, come over here and make this program and Simba doll a part of your Circle of Life. And this...this isn\'t just a regular Simba doll; this one comes with <em>stickers</em>. I bet you Just Can\'t Wait to be King...of stickers. I have never been more excited...in my entire life.', '', 1130349657)
  ])
  ,new S('78th & Broadway', 40.78312, -73.98038, 18, [
    new Q('006123', 'Wednesday One-Liners Have a Combined IQ of Forty Eight', 'Girl: He took me to a Japanese restaurant.  I got the chicken karaoke.', 'E  HAGEN', 1152763200)
  ])
  ,new S('West Broadway between Thomas & Duane', 40.71684, -74.00816, 4, [
    new Q('003028', 'Then a Colony, and Then an Island', 'Girl: Didn\'t you say pubic hair came back in style?<br />\nGuy #1: Yes, thank god. I hated the Brazilian wax. Made me feel like a pedophile.<br />\nGuy #2: What\'s a Brazilian wax?<br />\nGirl: It\'s when everything goes. Totally bare.  <br />\nGuy #1: Yeah. Brazilian originally meant \"ass wax only.\"<br />\nGuy #2: And then it became a country?', '', 1129615206)
  ])
  ,new S('6th & A', 40.72545, -73.98397, 1, [
    new Q('005162', 'It\'s Always Awkward When You\'re Upside Down', 'Girl #1: I hung out with Jeff last night, this guy I just met.<br />\nGirl #2: Yeah, did you have sex with him?<br />\nGirl #1: NOOO! I just met him, I only gave him a blow job. I know we\'ll run into each other again and I didn\'t want things to be awkward.', 'Kristen May Anastasia', 1145757632)
    ,new Q('003955', 'Wednesday One-liners Get Paid for It', 'Drunk guy on cell: So she\'s a whore; can we get past that?', 'Johnny Tremain', 1135792822)
  ])
  ,new S('58th & 8th', 40.76738, -73.98235, 16, [
    new Q('003366', 'Come Back, Maple Syrup!', 'Bicyclist guy #1: Oh god, yo dude let\'s get the fuck out of here. It stanks, New York City smells.<br />\nBicyclist guy #2: Yo man, I told you America stinks. You should move to Jamaica.', '', 1131019250)
  ])
  ,new S('144th & Broadway', 40.82571, -73.95084, 22, [
    new Q('006271', 'Wednesday One-Liners Get Around', 'Girl on cell: You had a threesome with the mayor of <em>what</em>?', 'McFreaky', 1153375200)
  ])
  ,new S('52nd between 6th & 7th', 40.761735, -73.98095, 16, [
    new Q('004633', 'Wednesday One-liners with an Attitude', 'Girl on cell: Hi, I got your email. I just wanted to let you know that I hate you and I\'ll never forgive you. Bye!', 'mb', 1141286401)
  ])
  ,new S('American Burger, 32nd & 6th', 40.74849, -73.9887, 0, [
    new Q('005166', 'Bad Habit', 'Nun: Can you spare some change for St. Patrick\'s Orphanage? <br />\nAsian girl #1: Sorry <br />\nAsian girl #2: Sorry <br />\nNun: Damned chinks are all the same.', 'Alex Gray', 1145779232)
  ])
  ,new S('53rd & 8th', 40.76416, -73.98476, 16, [
    new Q('006090', 'Wednesday One-Liners Were Young and Needed the Money', 'Guy: You\'ll never even see a vagina in your life. I can at least pay for it.', 'Jess McGins', 1152136800)
    ,new Q('004462', 'Wednesday One-liners Give Bad Gifts', 'Dude on cell: ...and he\'ll give her a hat, and it\'ll just be a big <br />\ndiamond that sits on her head.', 'Katherine', 1140069658)
    ,new Q('004036', 'Wednesday One-liners, Princess Edition', 'JAP: I like, didn\'t even know I had a middle name until my bat-mitzvah.', '', 1136390436)
    ,new Q('003534', 'At Least She Said \"Please\"?', 'Girl: Can I get a pack of Camels, please?<br />\nCashier guy: Sure...Need a lighter?<br />\nGirl: No, thanks.<br />\nCashier guy: Matches?<br />\nGirl: I\'m all set.<br />\nCashier guy: Receipt?<br />\nGirl: No.<br />\nCashier guy: A bag?<br />\nGirl: Can I get the fuck out of your store, please?', '', 1133568008)
  ])
  ,new S('82nd & Broadway', 40.78576, -73.97846, 18, [
    new Q('005114', 'Wednesday One-liners for That Slither Lady', 'Tween girl: I need to work on my abs.', 'Craig Briskin', 1145476820)
    ,new Q('004626', 'Wednesday One-liners By the Book', 'Teen girl: Where\'s your section for books about hippies?', '', 1141236049)
    ,new Q('004563', 'Clothes Make the Wednesday One-liners', 'Store guy: I have been a bartender and a waiter but I have never been the host. There is no way to estimate how long it will take to fit someone\'s breast into a bra. This is an art, not a science, people!', 'heidi schmid', 1140667250)
    ,new Q('003870', 'Urns Aren\'t Dishes', 'Old woman: Ann-Margret is a tramp.<br />\nOld man: How can you say that? Ann-Margret is a dish!<br />\nOld woman: A petri dish, maybe.', '', 1136271637)
  ])
  ,new S('Elevator, 6th & Spring', 40.72555, -74.00453, 7, [
    new Q('004559', 'Wednesday One-liners City Scenes', 'Guy: So I was down on Canal, buying some of that perfume my wife likes for Valentine\'s. Some of that Chanel; usually it\'s $45 a bottle! But I talked this guy down to $25. I got it home, but before I give it to my wife, I spray a little on my hand--and it smells exactly like roach spray!', '', 1140638450)
    ,new Q('003500', 'Wednesday One-liner Brought a Half Keg', 'Construction guy on cell: Yeah SoHo, you know?...I think they call it that because it\'s south of Houston. You wanna come down here and have some drinks with some models or what?', '', 1132200007)
  ])
  ,new S('3rd Avenue & 12th Street', 40.73195, -73.98816, 1, [
    new Q('005042', 'Wednesday One-liners Cook the Afterbirth', 'Girl: I\'m not sure, but we are thinking of putting the baby in the closet; it\'s small but we can fit a crib in there and keep the door open.', '', 1144850450)
    ,new Q('003749', 'Wednesday One-liners for the Family Gals', 'Mom: How can you be cold? Your body is ninety-eight degrees.', 'Orion', 1134000007)
  ])
  ,new S('70th & Amsterdam', 40.7773, -73.98261, 18, [
    new Q('003864', 'Clean Yet Dirty (NYC Short Stories)', 'Man #1: You smell great!<br />\nMan #2: Thanks. I haven\'t bathed since eleven.', '', 1137168028)
  ])
  ,new S('Stuyvesant High School, Chambers Street', 40.71782663841088, -74.01431322097778, 4, [
    new Q('004871', 'There\'s Even a Website for It', 'Teen girl: You know, relationships are a lot like the British government. The queen thinks she\'s in charge, but the prime minister has all the power.<br />\nTeen boy: I wonder if people in the real world are subjected to this kind of conversation.', '', 1144202449)
    ,new Q('004926', 'Wednesday One-liners Got Lucky', 'Teen boy: Well, I definitely know that French people say \"Oui, oui!\" when they have sex, which is kind of funny. It sounds like \"Wheeee!\"', 'Mary Button', 1143705614)
    ,new Q('004754', 'Must Be Visiting from Bronx Science', 'Teen girl #1: You shouldn\'t chew gum; it makes you stupider. <br />\nTeen girl #2: Oh yeah?<br />\nTeen girl #1: Yeah, I heard that somewhere.<br />\nTeen girl #2: Well, I heard somewhere that you\'re an idiot. No, wait, that was right here.', '', 1143421241)
    ,new Q('004850', 'Wednesday One-liners for Backdoor Beauties', 'Teen boy: Yo, wouldn\'t it be ill if someone could fart Axe?', 'Mary Button', 1143043252)
    ,new Q('004037', 'Step on the Scale, Wednesday One-liners', 'Girl: Like, I tried anorexia last year, and I only lasted, like, six months.', '', 1136376048)
    ,new Q('003574', 'That Makes Stuy the Medina', 'Asian guy #1: Yeah, but I\'ve only been to Chinatown like...once or twice.<br />\nAsian guy #2: Still, it\'s like Muslims. You only have to go to Mecca once, but you still went.', 'Susan A', 1133899211)
  ])
  ,new S('25th & 7th', 40.74537, -73.99472, 0, [
    new Q('004133', 'Shave and a Haircut, Four Twits', 'Hipster guy #1: No way! I thought I passed you the other day, but thought, \"Nah, it couldn\'t be him, he wouldn\'t grow his hair that long.\"<br />\nHipster guy #2: Yeah. No. I grew it out, man.<br />\nHipster guy #1: You look like Axl Rose!<br />\nHipster guy #2: It\'s more of a Southern rock thing really. Like a My Morning Jacket look.', '', 1138298448)
  ])
  ,new S('12th between A & B', 40.728585, -73.980165, 1, [
    new Q('004710', 'Your Jokes Are So Lame, FDR is Jealous', 'Little boy #1: Your pants are so tight, your balls have asthma.<br />\nLittle boy #2: But that\'s my joke...', '', 1142863223)
  ])
  ,new S('Pitt & Rivington', 40.71829, -73.98246, 8, [
    new Q('004106', 'Wednesday One-liners, Rated G', 'Woman on cell: My psycho fucking children! You\'re going to send my ass to the crazy house, and I\'ll kill every one of you before my ass goes to the crazy house!', '', 1136973605)
  ])
  ,new S('Verb Cafe, Bedford & N 7th, Williamsburg', 40.71109, -73.96345, -1, [
    new Q('005873', 'Amazing Insight. Wanna Screw?', 'White guy: There are many Africans where I live.  I like them, because they\'re more spiritual.<br />\nChinese girl: They\'re closer to nature.', 'Outmacked', 1150588832)
    ,new Q('005681', 'His Favorite Is The Two Towers', 'Hipster girl #1: Why would someone tell you that right after meeting you?<br />\nHipster girl #2: Honestly, why can\'t you just say your favorite movie is <em>The Lord of the Rings </em>instead of <em>Lord of the Rings </em>porn?', '', 1149278432)
    ,new Q('005167', 'It\'s Because FTL Killed 40% of His Brain Cells', 'Guy #1: The horse?<br />\nGuy #2: SJP.<br />\nGuy #1: S...J...<br />\nGuy #2: Oh, for God\'s sake: Sarah Jessica Parker! Don\'t be so innuendo-challenged; nobody will invite you anywhere!', '', 1145793632)
  ])
  ,new S('Sutton Place, 53rd & 2nd', 40.75674, -73.96717, 15, [
    new Q('005623', 'They Must\'ve Rehearsed That for Weeks', 'Drunk guy: Hey there!  Have we met before?  I\'m sure we have.<br />\nSober girl: No, we haven\'t.<br />\nDrunk guy: Yeah we have!  Where do I know you from?<br />\nSober girl: No where.  We\'ve never met.<br />\nDrunk guy: YES, we have!  I know we have!<br />\nSober girl: Yeah, now that you mention it.  We have met.<br />\nDrunk guy: See!  I told you.  Where did we meet again?<br />\nSober girl: Your dreams, drunkie.', '', 1148839232)
  ])
  ,new S('Madison & 26th', 40.74275, -73.98659, 2, [
    new Q('005843', 'If She Remembers Thundercats, It\'s Time for Assisted Living', 'Girl:  I can\'t believe they\'re making a live action <em>Transformers</em> movie.<br />\nGuy:  Whatever, I will definitely go see it.<br />\nGirl:  Are you even old enough to remember <em>Transformers</em>?<br />\nGuy:  Of course, I\'m only three years younger than you.  <br />\nGirl:  Yeah, but that doesn\'t mean you were old enough to be conscious of <em>Transformers</em>. My brothers are your age and they don\'t remember the show that well.<br />\nGuy:  You do realize every time you ask me that it doesn\'t make me seem young, right? It just makes you seem old.', 'DL', 1150372832)
    ,new Q('003874', 'That\'s Why God Uses It as Punishment', 'Girl #1: You\'re going off the pill? What about STDs and AIDS?<br />\nGirl #2: Yeah, and babies!<br />\nGirl #1: STDs and AIDS are worse than babies.<br />\nGirl #2: True.', 'K8', 1136077243)
    ,new Q('003596', '...Butt It\'s Wednesday One-liners!', 'Construction guy: The last time he got a piece of ass was when his finger poked through the toilet paper!', '', 1132783228)
  ])
  ,new S('72nd & Columbus', 40.77739, -73.9788, 18, [
    new Q('004262', 'The Wednesday One-liners Monologues', 'Chick: Well, I\'m not going to eat just anyone\'s pussy, but I\'m going to <em>start</em> with strangers.', 'Adam Davis', 1138183246)
    ,new Q('003839', '\"Well, you speak in oxymorons!\"', 'Girl: I\'m feeling a little Rubenesque today.<br />\nGuy: Ruben Studdard?<br />\nGirl: You\'re a dipshit.', '', 1135972857)
    ,new Q('003254', 'Hit a Little Close to Home There, Sister?', 'Guy: Okay, so I know a female dog is called a bitch, but what is a male dog called?<br />\nGirl: Um, that would be a dog. Idiot.', 'Stephanie S', 1131472848)
    ,new Q('003093', 'Wednesday One-liners Ain\'t Very Smoove', 'Girl: ...and then he stuck his finger in my ass! Has that ever happened to you before?', '', 1129161610)
  ])
  ,new S('187th & Ft. Washington', 40.85514, -73.93688, 24, [
    new Q('005711', 'Strange How You Never See Them Together', 'Little boy #1: I\'m telling you, Elvis lives, man.<br />\nLittle boy #2: Where\'s my mom?', 'yum<br />', 1149508832)
  ])
  ,new S('30th & Broadway', 40.74677, -73.98846, 0, [
    new Q('003283', 'Wednesday One-liners Can Be So Rude', 'Chick on cell: I called her Tina because you guys always call her Tina...Well, how was I supposed to know it was some kind of secret bitch code for \"skanky ho\"?', '', 1130400040)
  ])
  ,new S('2nd Avenue & 13th Street', 40.73165, -73.98544, 1, [
    new Q('003498', 'Wednesday One-liners Are Quick to Thrown Down', 'Girl on cell: I couldn\'t imagine myself stabbing someone...although I would understand if someone stabbed me.', 'Anhela', 1132171212)
  ])
  ,new S('McDonalds, 41st & 7th', 40.75535, -73.98747, 17, [
    new Q('004166', 'Just Browsing', 'McGirl: Welcome to McDonalds, may I take your order?<br />\nMan: No thanks, I\'m not hungry.', '', 1139727623)
  ])
  ,new S('38th & 6th', 40.75229, -73.98595, 17, [
    new Q('005476', 'Wednesday One-liners and the Arts', 'Irate man on cell: It\'s all the same.  Because Art and Commerce merged in \'92. [Pause, yelling on the other end of the line]  That\'s when the NWA album came out.', 'Erin Sparling', 1147896032)
  ])
  ,new S('23rd between Park & Madison', 40.740505, -73.987165, 13, [
    new Q('005382', 'The Long Arm of Wednesday One-Liners', 'Cop in passing squad car: Be sure to wash your hands!', '', 1147298432)
  ])
  ,new S('169th & Broadway', 40.84172, -73.93944, 24, [
    new Q('003431', 'Wednesday One-liners Are #1!', 'Woman: If she don\'t pee, I\'m gonna kill her. Oh yeah, oh yeah, make her pee!', 'Babs Monroe', 1131602403)
  ])
  ,new S('18th & 8th', 40.74224, -74.00071, 0, [
    new Q('006011', 'Wednesday One-Liners for Pride Week, Part II', 'Club-hopper: I don\'t like that bar. But it\'s a good scene if you want a 700-pound gay Republican sitting on your face.', 'Sebastian White', 1151546400)
    ,new Q('004555', 'Wednesday Ob/gyn-liners', 'Chick on cell: A vagina joke, eh? Let\'s see where you\'re going with this.', '', 1140609625)
    ,new Q('004355', 'On the Plus Side, His Mom is Cher', 'Drunk girl #1: I met a guy last night!<br />\nDrunk girl #2: Oh yeah? Do tell.<br />\nDrunk girl #1: Well, um, it\'s not <em>exactly</em> accurate to say that he had a Jay Leno caricature face.', 'Jas', 1140163204)
    ,new Q('004315', 'The Language of Wednesday One-liners', 'Drunk girl: Look at those steps! They\'re so steep! They should be called \"steeps\"!', 'Jas', 1138824003)
    ,new Q('004312', 'Priapic Wednesday One-liners', 'Queer: The national penis is enormous.', 'zooella jones', 1138795214)
    ,new Q('004045', 'A Pride of Wednesday One-liners', 'Girl: Can we deal with one faggot at a time?', '', 1136448047)
  ])
  ,new S('3rd Ave between 11th & 12th', 40.731629999999996, -73.98839, 1, [
    new Q('005562', 'Baby Got Wednesday One-liners', 'Well-dressed woman to well-dressed  man: It\'s not my ears, it\'s your ass.', 'Heather DuCharme', 1148500832)
  ])
  ,new S('3rd & Thompson', 40.72967, -73.99862, 12, [
    new Q('004919', 'Wednesday One-liners Got It in Pearl', 'Girl: I don\'t like body fluids unless it\'s my own.', 'krak256', 1143640853)
  ])
  ,new S('49th & 8th', 40.76166, -73.9866, 16, [
    new Q('004319', 'Wednesday One-liners Are All Over the Map', 'Woman on cell: You tell them my name because I am well-known in California! And I will fuck yo ass up!', 'Shaun Mc', 1138831202)
    ,new Q('003749', 'Wednesday One-liners for the Family Gals', 'Mom: Look, I told you, you can\'t just run out into the street. You\'re going to get hit again.', 'Brian Calandra', 1134000007)
    ,new Q('003598', 'Wednesday One-liners Can\'t Dress Correctly', 'German woman: New Yorkers are so serious. This is what I expected to see in a European city where people are smarter and don\'t smile for no reason.', 'Babs Monroe', 1132797610)
    ,new Q('003095', 'Get to Atoning, New York', 'Smoker guy #1: ...I won\'t be in on Thursday cause of Yom Kippur.<br />\nSmoker guy #2: You can\'t come to work?<br />\nSmoker guy #1: Can\'t work, can\'t eat, can\'t drink.<br />\nSmoker guy #2: Can\'t eat or drink anything?<br />\nSmoker guy #1: Nothing from sundown to sundown.<br />\nSmoker guy #2: Jesus!<br />\nSmoker guy #1: Wrong.', '', 1129204841)
  ])
  ,new S('Post Office, 34th & Lexington', 40.74639, -73.97972, 3, [
    new Q('005648', 'She Needs a Change After All the Big Black Men', 'Girl #1: What\'s with all the little white men?<br />\nGirl #2: The Navy guys?<br />\nGirl #1: White, Jesus.<br />\nGirl #2: What?<br />\nPause<br />\nGirl #1: In those little costumes... don\'t you just want to jump them?', 'love them sailors', 1149062432)
    ,new Q('004542', 'Unlike Iraq, That War Had a Solution', 'Girl #1: It\'s not that I hated history, I just hated all the<br />\nmemorization. All the names, and dates, and places. And the wars! I mean, how am I supposed to remember whether Hitler was in World War I or World War II?<br />\nGirl #2: I think he had his own war.', 'Fat Clown', 1141653627)
    ,new Q('004565', 'Wednesday One-liners Got Late Night Munchies', 'Mailwoman: Give me some of the cheese. No, not that, the American...the Americano...the yellow stuff. I don\'t worry about no gym so you can put more than that on. You\'re skinny, I\'m fat. I can tell you don\'t love that cheese.', 'Spooner', 1140681647)
    ,new Q('004461', 'Wednesday One-liners & the Sin of Sloth', 'JAP: Well, he was old. I don\'t think he was attractive, but I couldn\'t tell because I was tired.', '', 1140033648)
    ,new Q('004375', 'God Tells Wednesday One-liners to Kill People', 'Cabbie on cell: America is too nice for Muslim people. That is why they will suffer.', 'John Auld', 1139392849)
  ])
  ,new S('Duane Reade, 7th Street & 6th Avenue', 40.69922, -73.97326, -1, [
    new Q('003817', 'A Mini, No Doubt', 'Guy: Hey, they have some with a vibrating cock ring!<br />\nGirl: Our sex life is complicated enough already.<br />\nGuy: But you know how I love little electronic gadgets.<br />\nGirl: I\'ll buy you an iPod.', 'Calliope', 1135886424)
    ,new Q('003094', 'I\'m Hungee for Wednesday One-liners', 'Brit guy: Would you just hurry up and pick out a popcorn? It\'s not that hard, they are all the same, and stop giving into the American culture of having so many to choose from, it\'s just fucking popcorn.', '', 1129168856)
  ])
  ,new S('Fulton & Gold', 40.70909, -74.00551, 5, [
    new Q('004986', 'Wednesday One-liners Will Cost You', 'Guy: So they actually <em>paid</em> for you to go to math camp?', '', 1144245632)
    ,new Q('003090', 'Wednesday One-liners Just Don\'t Understand', 'Mother: Stop crying!...And you wonder why I hit you and shit.', '', 1129147253)
  ])
  ,new S('Macdougal & 8th', 40.73292, -73.998, 12, [
    new Q('004775', 'What\'s in a Name, Wednesday One-liners?', 'Guy: Yeah! This one coke dealer I met was like, \"Hey! My name is James, but you can call me Negro.\" I didn\'t like him.', 'the cheese monkey', 1142496033)
    ,new Q('004263', 'Wednesday One-liners Read InStyle', 'Black woman: Now <em>that\'s</em> my <em>interior</em> life. Fishnet stockings, woo!', 'Rich Mintz', 1138255218)
  ])
  ,new S('145th & Broadway', 40.82646, -73.95054, 22, [
    new Q('005289', 'Wednesday One-Liners Like a Good Time', 'Man: The evening would have ended fine had he not shat on her floor.', 'Ginpalace', 1146686432)
  ])
  ,new S('53rd & Lexington', 40.75836, -73.971, 16, [
    new Q('004685', 'Chloe Sevigny Must Be Twins', 'Guy #1: And I didn\'t even go to first base with her. I wouldn\'t give her the satisfaction.<br />\nGuy #2: Yeah. We were with the ugliest girls in the world that night.', '', 1142751631)
    ,new Q('004383', 'Wednesday One-liners Are Ready for Valentine\'s', 'Suit on cell: I know you had sex with Mickey Mouse, but leave the dog alone!', '', 1139443231)
    ,new Q('004385', 'Call a Doctor, Wednesday One-liners!', 'Suit on cell: They were able to delay the surgery two days by shoving the intestines back through the hole...That\'s good news!', 'Wini Barron', 1139450418)
    ,new Q('004268', 'Wednesday One-liners Wear Gross Sneakers', 'Hobo: Spare change, please?...Have a nice day...I\'m sorry you can\'t read...Have a nice day.', 'Shannon', 1138240805)
    ,new Q('003083', 'The Infinite Crisis of Wednesday One-liners', 'IT guy: You may have great super-powers, but you all need to be existing in the same dimension for them to be powerful.', 'Chester Greene', 1129125619)
  ])
  ,new S('86th & Madison', 40.78085, -73.95883, 21, [
    new Q('003749', 'Wednesday One-liners for the Family Gals', 'Little boy: Ha, ha, ha, ha! You can\'t see the future!', 'Ricky Chawla', 1134000007)
  ])
  ,new S('11th & University', 40.7333, -73.99334, 12, [
    new Q('005486', 'I Know Shakespeare, and He Didn\'t Say It -- That God Guy Did', 'Girl #1 As Shakespeare once said \"Thou shall not kill.\"<br />\nGirl #2  No, that would be God.', '', 1148004032)
    ,new Q('004624', 'Wednesday One-liners Read Out', 'Little boy: That girl is mad gay.', 'Collin', 1141214414)
    ,new Q('004190', 'Wednesday One-liners Aren\'t Quite Amiable', 'Chick: No, girl! She called you \"bitches\", plural, which means she like thinks you\'re like more than one person or something!', 'p', 1137650458)
  ])
  ,new S('Borders, 57th & Park', 40.76155, -73.97068, 16, [
    new Q('004626', 'Wednesday One-liners By the Book', 'Lady: There was a guy that was helping me before. He\'s really smart and it\'s like he was reading my mind. Do you know where I can find him?\"', 'Catherine', 1141236049)
  ])
  ,new S('Office, 66th & Columbus', 40.77359, -73.9816, 18, [
    new Q('004703', 'Wednesday One-liners Belong in a Zoo', 'Woman on phone: It\'s about bugs. Well, it\'s about burying bugs.', 'MojoSaves', 1141876850)
    ,new Q('003395', 'I\'m Thankful I\'m Alive', 'Girl: Don\'t die while I\'m gone, okay?<br />\nGuy: Why not?', '', 1132848015)
  ])
  ,new S('Lexington between 84th & 85th', 40.77848, -73.95632, 21, [
    new Q('003651', 'Wednesday One-liners Don\'t Speak Truth', 'Man on cell: Ma...<em>Ma</em>! Look, Ma, I really can\'t talk right now. I\'m seriously stuck in traffic...it\'s gonna be at least another two hours before I can get up there for dinner, okay?...Ma! The FDR is blocked all the way...listen, I have no way to speed this up.', 'Katia', 1133359207)
  ])
  ,new S('Broadway between 80th & 81st', 40.784805, -73.97916000000001, 18, [
    new Q('004464', 'Wednesday One-liners Distrust the Monotremes', 'Old man: Lady, honestly I just don\'t give a shit about those fuckin\' elephants. But that guy, he\'s about to bite into an elephant\'s cock!', 'Donald Levit', 1140048006)
  ])
  ,new S('15th & 8th', 40.74043, -74.00202, 0, [
    new Q('004397', 'More Like Shylock', 'Hobo: Can you spare some change?<br />\nGirl: No sir, sorry.<br />\nHobo: \"Sir\"? \"<em>Sir</em>\"? Where you going? Fucking Buckingham Palace, Sherlock?', '', 1140364839)
    ,new Q('003582', 'Jesus Has Been Bitching for 2,000 Years', 'Girl #1: I can\'t believe how cold it got. And on my birthday of all days!<br />\nGirl #2: Well, in the weather\'s defense, it was cold yesterday too.', '', 1133928023)
    ,new Q('003234', '\"Things That a Wife Would Say\"?', 'Guy #1: Alanis Morissette wrote a song called <em>Under Rug Swept</em>? That\'s like Dylan Thomas! Wait, no, that\'s <em>Under Milk Wood</em>. <br />\nGuy #2: I have officially fired you from talking.', '', 1131134438)
  ])
  ,new S('Vernon & 50th, Long Island City', 40.74149, -73.95456, -1, [
    new Q('005382', 'The Long Arm of Wednesday One-Liners', 'Police officer in police car over loudspeaker: Fraaaaan.', '', 1147298432)
  ])
  ,new S('St. Marks Place', 40.72813686316017, -73.98654699325562, 1, [
    new Q('005108', 'Wednesday One-liners for the Old', 'Guy: I mean, I\'m old school, but I\'m not, like, colonial times!', 'Little Edie', 1145448034)
    ,new Q('005096', 'I Would Have Waited All Day', 'Little boy: Mom, is South America a continent?<br />\nMom: Well, it\'s...there\'s North America and South America.<br />\nLittle boy: Yeah, is South America a continent?<br />\nMom: Uh, no. No, it\'s not a continent, it\'s...Um...', '', 1145361614)
    ,new Q('004816', 'Worst Bat Mitzvah Ever', 'Girl #1: Stuart kissed me full on the mouth.<br />\nGirl #2: Did he mean it?<br />\nGirl #1: He said it was an accident; he was going for my cheek.<br />\nGirl #2: That happened to me once when I was kissing my father.', '', 1143784810)
    ,new Q('004926', 'Wednesday One-liners Got Lucky', 'Man: I still trust you, even though you\'ve slept with my brother.', '', 1143705614)
    ,new Q('004376', 'Wednesday One-liners Like Cuckoo Clocks', 'Crazy guy: I\'m not your brother, and your skin\'s an ugly color!', 'Leela Corman', 1139414427)
    ,new Q('004377', 'Wednesday One-liners Could Use Some Color', 'Chick: Yeah, but he wasn\'t really white, he was Russian.', '', 1139400006)
    ,new Q('004268', 'Wednesday One-liners Wear Gross Sneakers', 'Hobo: <em>Arrh</em>, spare some change for a homeless pirate!', 'Rob Smith', 1138240805)
    ,new Q('003745', 'Tuesday One-liners...Psyche!', 'Crazy man: Psychology <em>that</em>! You know how to fuck the devil, but you don\'t know how to use your fuckin\' mind!', '', 1134028826)
    ,new Q('003656', 'A Pink Triangle of Wednesday One-liners', 'Chick: God, you can\'t even tell the dykes from the hipsters anymore.', 'Rose Fox', 1133380834)
    ,new Q('003426', '\"The L Word\" is Wednesday One-liners', 'Queer: So like at this ACLU thing, there was supposed to be this lesbiany woman named Nick there...', 'Jenyc', 1131537627)
    ,new Q('002924', 'These Boobs Make Quite a Pair', 'Woman #1: Saline?<br />\nWoman #2: Yep!', '', 1128765637)
  ])
  ,new S('Church & Liberty', 40.70969, -74.01168, 5, [
    new Q('004107', 'Gimme Shelter, Wednesday One-liners', 'Hobo: Don\'t buy a two-headed snake for hundred forty thousand! Waste you money like that? You crazy? Twenty dollas you can pet my two-headed snake right now!', '', 1137009624)
  ])
  ,new S('145th & St. Nicholas', 40.82402, -73.94477, 22, [
    new Q('003276', 'Wednesday One-liners Need an Accountant', 'Black woman on cell: Listen nigga, I want my money. And don\'t just be giving it to me in drips and drabs...I want a <em>lump sum</em>, motherfucker. A luuuuump sum!', '', 1130349657)
  ])
  ,new S('28th & 7th', 40.74724, -73.99337, 0, [
    new Q('004379', 'Wednesday One-liners Could Use a Scrubbing', 'Girl: You\'ve been with nothin\' but <em>dirty bitches</em>!', 'queenbee', 1139428849)
    ,new Q('003400', 'Dude So Just Blew It', 'Girl: Ew, look at that bug by the curb. That\'s no regular roach.<br />\nGuy: Yeah, that\'s not a New York roach, it\'s like a Middle Earth roach.', 'Randolph Hernandez', 1132426820)
  ])
  ,new S('Madison Square Garden', 40.75018302371518, -73.99199724197388, 0, [
    new Q('005442', 'Why Asian Girls Hate Memoirs of a Geisha', 'White girl #1: Yes.', '', 1147694432)
    ,new Q('005151', 'Duh, Kennedy\'s Buried Under the Kennedy Center', 'Guido: Hey you talk to me like that again, and I\'ll talk to my people, who\'ll talk to your people. And I\'ll have you buried under Yankee Stadium with JFK.<br />\nOther guy: Don\'t you mean under Giants Stadium with Jimmy Hoffa?<br />\nGuido: Whatever!', '', 1145664032)
    ,new Q('004850', 'Wednesday One-liners for Backdoor Beauties', 'Girl: You fart and you lie about it.', '', 1143043252)
    ,new Q('004629', 'Wednesday One-liners Eat Churro', 'Girl: Oh my god, now that I\'m back from Mexico water here tastes so <br />\ngood. When I go out with friends they\'re all about tequila, but I just bust out the water.', 'Jessica Pretty', 1141257627)
    ,new Q('004388', 'Afghanistan is an Early Olympic Favorite', 'Guy: So then why are guys from the Eastern Europe and black guys so good at basketball?<br />\nDad: Natural selection.<br />\nGuy: What?<br />\nDad: They\'ve had to fight to survive. It weeds out the physically inadequate.<br />\nGuy: Give me a break. It\'s the ghetto, not some Hobbesian state of nature; they\'re not cavemen living in anarchy up there.', '', 1140505207)
    ,new Q('004467', 'Wednesday One-liners Belt It Out', 'Drunk guy: Sing us a song you\'re the rich motherfucker! Sing us a song tonight!', '', 1140062431)
    ,new Q('004229', 'Or Worse, in the Next Book', 'Girl: We had this huge fight. It was awful. All the screaming and stuff and public.<br />\nGuy: Really? In the street and stuff?<br />\nGirl: Yeah. It\'s so embarassing.<br />\nGuy: Wow. You\'ll probably end up on that Overheard site.', 'Waiting in Line', 1139256025)
    ,new Q('003444', 'Bridge v. Tunnel', 'Woman: Do your gay thing and get us up ahead of this line full of teenage girls!<br />\nQueer: All right! \"Girl...I need to get me a t-shirt! Move this Long Island trash outta my way!\"<br />\nTeen girl: Please! Whateva Jersey!<br />\nWoman: Oh my god! She knew you were from Jersey!', 'J.Mo', 1132956009)
    ,new Q('003494', 'Wednesday One-liners Bear a Resemblance', 'Chick: How does your hair always look so nice, and mine makes me look like I got fucked?', 'Casey', 1132156856)
    ,new Q('003357', 'Wednesday One-liners Are Pre-Med', 'UPS guy: I heard it was okay to drink your own pee. But it\'s bad to<br />\noffer it to someone else.', 'Ty!', 1130976023)
  ])
  ,new S('87th & 2nd', 40.77854, -73.95125, 21, [
    new Q('005568', 'Wednesday One-liners Behind Bars', 'Hobo collecting bottles: Man, I\'m getting too skinny, I gotta go back to jail.', 'Wagner crew', 1148522432)
    ,new Q('004391', 'Where Are They Now?: Mr. Drummond', 'Hobo: Where the fuck is Park Avenue? <em>What is going on</em>? What the fuck? <em>Where the fuck is Park Avenue</em>?<br />\nGirl: If you just take a right at the next street and keep going, you\'ll hit it.<br />\nHobo: I don\'t fucking care! If I had a gun I\'d fucking shoot you! <em>Pow</em>!', '', 1140386416)
  ])
  ,new S('66th & Broadway', 40.77392, -73.98235, 18, [
    new Q('004260', 'It\'s Not Looking Good, Wednesday One-liners', 'Chick on cell: I saw a woman with half a head. Literally half a head. She had this indentation in her left hemisphere where they had taken out her skull to remove her brain. I almost barfed. But I didn\'t.', 'Kaitlen', 1138190426)
    ,new Q('003278', 'Wednesday One-liners Wave Around a Cup', 'Hobo: Y\'all got a dollar? I\'m too lazy to work!', 'liza', 1130364042)
  ])
  ,new S('10th between University & Broadway', 40.80197, -73.95394, 22, [
    new Q('003176', 'Wednesday One-liners Rough It Up', 'Guy on cell: Yeah, so I\'ll see you tomorrow...damn, my back hurts where you broke that bottle last night', '', 1129773616)
  ])
  ,new S('10th & Broadway', 40.87122, -73.91406, 25, [
    new Q('004615', 'The Dualstar Diet', 'Hobo: Spare some change, miss?<br />\nHipster girl: I have some food. It\'s still warm, you want it?<br />\nHobo: No, thanks. I\'m on a special diet. I don\'t eat food.', 'Anna Wolinsky', 1142190015)
    ,new Q('004462', 'Wednesday One-liners Give Bad Gifts', 'Girl on cell: It\'s like, I don\'t know what to buy, because it might be<br />\nfor a guy or a girl. Like, I\'m going to be the one that ends up with a<br />\nblack double-ended dildo...No, they\'re gross and veiny and--Ugh, just no!', 'robyn', 1140069658)
    ,new Q('003565', 'The Consignment Clothes Sure Add to the Look', 'Girl #1: Quick, we have to get that cab!<br />\nGirl #2: Omigod I can\'t believe we\'re running in public!<br />\nGirl #1: We\'re <em>so</em> homeless!', '', 1133722836)
    ,new Q('003123', 'You\'ll Just Be Blueballed', 'Drunk girl: I love scrotum!<br />\nGuy: Dude, we should completely ask her to come home with us.', 'danie', 1130313630)
    ,new Q('003131', 'That\'s Where the Magic Comes Out Of', 'Girl #1: I really hate Melissa Joan Hart.<br />\nGirl #2: How come?<br />\nGirl #1: I don\'t know...her lazy eye really bugs me.', '', 1130292025)
  ])
  ,new S('25th & 2nd', 40.73916, -73.97997, 27, [
    new Q('005090', 'He Should\'ve Joined the Army', 'Guy #1: Don\'t throw away that Gatorade bottle! I gotta do something.<br />\nGuy #2: ...Right now?<br />\nGuy #1: Yeah!<br />\nGuy #2: There\'s a pizza place right there!<br />\nGuy #1: They won\'t let me use theirs! Don\'t you throw that bottle away!', '', 1145318423)
  ])
  ,new S('Saint Marks Place', 40.72858, -73.98769, 1, [
    new Q('004315', 'The Language of Wednesday One-liners', 'Lady: I really hate it how this ATM says, \"Can we help you with anything else?\", and one of the options is, \"Sure!\" What kind of <em>language</em> is that?', 'C.', 1138824003)
    ,new Q('004310', 'Wednesday One-liners Drink Mad Dog', 'Girl: I was <em>so</em> wasted last night. I think I gave a blowjob to a hobo in the park.', '', 1138802416)
    ,new Q('003958', 'Conflict Fuels Wednesday One-liners', 'Guy: You know how Hiroshi is: he won\'t fuck off if you ask nicely. You\'ve got to get in his face about it.', '', 1135843206)
    ,new Q('003826', 'Reeks of Wednesday One-liners', 'Guy: ...and I swear, my pee smells like Chai now.', '', 1134576009)
    ,new Q('003283', 'Wednesday One-liners Can Be So Rude', 'Guy on cell: Then all of a sudden she got, like, self-respect and shit.', '', 1130400040)
  ])
  ,new S('99th & Amsterdam', 40.79597, -73.96897, 18, [
    new Q('003867', 'Really, Really, Really Sloppy Seconds', 'Hobo: Excuse me, miss, can I have a kiss?<br />\nGirl #1: Um, no. I have to go. Bye!<br />\nHobo: Well, what about your friend?<br />\nGirl #2: ...No. What am I to you, next in line?', 'Ally', 1136185205)
  ])
  ,new S('12th Street & 7th Avenue', 40.73721, -74.00064, 11, [
    new Q('004941', 'He Keeps Going in Circles', 'Hobo: How many people you run over in that thing today?<br />\nHalf a man: None yet, although I could come back later.', '', 1144778437)
    ,new Q('003334', 'He\'s Going Back to Reclaim His Throne', 'Hobo: Can any one spare $99? I\'m trying to get to Hawaii.', 'Zimmy', 1133229653)
    ,new Q('003088', 'Wednesday One-liners, One Leg at a Time', 'Woman on cell: Hey! Hey can you hear me? Listen, I have the extra pair of underwear from the colonoscopy and I forgot to take them out of my bag...', '', 1129183219)
  ])
  ,new S('View Bar, 22nd & 8th', 40.74462, -73.99899, 0, [
    new Q('005574', 'Wednesday One-liners Are Made to Last', 'Chick on cell: The thing is, he doesn\'t freeze meat. Yeah, it\'s an issue.', 'Sebastian White', 1149091232)
    ,new Q('005429', 'Number Three, Step Forward', 'Queer #1:  Do you know anyone named Jonathan who is here tonight?<br />\nQueer #2:  I know five Jonathans who are here tonight.  Why?<br />\nQueer #1:  Because this guy named Jonathan just came up and started making out with me and then left.<br />\nQueer #2:  That sounds like all five Jonathans.', '', 1147600832)
  ])
  ,new S('14th between 5th & University', 40.735585, -73.99265500000001, 12, [
    new Q('006095', 'Wednesday One-Liners: Cha-ching!', 'Hobo: God, lady, I\'m not asking for a million dollars; I\'m just asking for some change!', 'theNJl', 1152165600)
  ])
  ,new S('Columbia University', 40.809018, -73.96127, 20, [
    new Q('006089', 'Wednesday One-Liners Make Friends with the Purple Monkey in the Corner', 'Teenage girl: Yeah, she sucks now that she\'s a crack addict', 'An offended crack addict', 1152129600)
    ,new Q('005905', 'Anthropology Majors at 4AM', 'Chinese guy: I hear people in third world countries are so hungry they eat people.<br />\nWhite girl: I know. I wonder, like, whether they have a conscience about it.<br />\nChinese guy: Well, I imagine they don\'t eat their own children, you know? Probably just someone else\'s. It would be easier to do that, I think.<br />\nWhite girl: Yeah, I totally agree.', '', 1150725632)
    ,new Q('005727', 'Still Not Coed', 'Guy at register: So, where do you go to college?<br />\nGirl checking out with mom: Erm, Wellesley.<br />\nGuy at register: Oh no way! I went to Wellesley! How is it these days?', '', 1149588032)
    ,new Q('005441', 'Are You Sure You\'re in the Class?', 'Girl #1: That Major English Texts class is ridiculous. You had to memorize soo much.<br />\nGirl #2: You\'re not even in that class! I\'m in that class...so I would know. You shouldn\'t be complaining!<br />\nGirl #1: I\'m the TA, asshle.', 'Gabrielle E Wolf<br />', 1147680032)
    ,new Q('005381', 'Every Wednesday One-Liner Is Sacred', 'Columbia girl on the lawn: And then it exploded and there was semen all over the road.', '', 1147276832)
    ,new Q('005356', 'So You Smoked Yesterday?', 'Girl #1: I heard Columbia Snacks is actually a pot service. <br />\nGirl #2: What, like they sell weed and stuff?<br />\nGirl #1: No, pots for dorm plants. Yeah, weed, girl. They just want to up the GPA here. <br />\nGirl #2: Huh?<br />\nGirl #1: Don\'t you know weed boosts your smarts? It\'s a <em>proven</em> fact that weed makes you dumber the day after. <em>But</em> it\'s also proven that it makes you <em>much much</em> smarter the day after that.', 'Gabrielle E Wolf', 1147096832)
    ,new Q('005353', 'That Old Line Again', 'Girl #1: I just got waxed. Feel my legs, they\'re sooo soft.<br />\nGirl #2: Ooohhh. Sooo smooth.<br />\nGirl #1: Yeah, you should feel my cooch.', 'Gabrielle E Wolf<br />', 1147060832)
    ,new Q('005291', 'Wednesday One-Liners, Exotic People and Places', 'Girl on cell: The African continent is just <em>swarming</em> with Jewish people, and he\'s never met a single one!', 'amused Jewish girl<br />', 1146700832)
    ,new Q('005168', 'That\'s Why They Call It a . . . Never Mind', 'Chick #1: Ahh!  Why am I, like, sweating?<br />\nChick #2: What is your shirt made of, cotton?<br />\nChick #1: Well, it\'s from Forever 21, so it\'s probably dead Chinese children.', 'Magnolia Thunderpussy<br />', 1145800832)
    ,new Q('005119', 'A Woman\'s Right to Choose Wednesday One-liners', 'Workout chick: Don\'t worry, your standards are just off because you dated a fetus. Want some ice cream?', '', 1145520032)
    ,new Q('005113', 'Wednesday One-liners Are All About Location', 'Girl: No, there aren\'t any fire escapes in this building. At least not any that we have access to.', '', 1145512803)
    ,new Q('005112', 'Wednesday One-liners is Fundamental', 'Professor guy: If I were you,--and I am just that, a time-shifted version of you--I would open the book to Appendix C.', '', 1145469639)
    ,new Q('004987', 'Wednesday One-liners Hit the Premiere', 'Fratboy: <em>Teen Wolf II</em> was the pinnacle of civilization.', 'djlindee', 1144252832)
    ,new Q('004917', 'Wednesday One-liners Flick the Clicker', 'Girl: You know, the first time my boyfriend and I had sex, it was because of <em>Golden Girls</em>.', 'Jen B.', 1143626433)
    ,new Q('004920', 'Ego & Hubris & Wednesday One-liners', 'Chick: I can\'t believe his head is as big as mine. I <em>never</em> meet people with heads as big as mine.', 'A-riz', 1143648053)
    ,new Q('004746', 'Must Be a Quadriplegic or Something', 'Girl #1: It would be so crazy if we were all in an alternate universe and then saw ourselves hanging out here like we always do.<br />\nGuy: Then you would have to have sex with yourself.<br />\nGirl #2: What?<br />\nGirl #1: I mean, if I could have sex with myself, I probably would.', 'Adrienne Walters', 1143252003)
    ,new Q('004774', 'Wednesday One-liners Speak Well English', 'Girl: I\'ve been busy dissertationing.', 'Gina Costanza', 1142445633)
    ,new Q('004700', 'Wednesday One-liners Engage in Carnality', 'Meathead: If I don\'t come back with a spring break STD I\'m going to be disappointed with myself.', '', 1141884051)
    ,new Q('004632', 'Elsewhere: Wednesday One-liners', 'Professor guy: The French language has very little accentation, and I <br />\nbelieve that\'s why French musicians sometimes have trouble with rhythm. It also explains why French people can\'t skateboard.', 'Julia Kite', 1141279236)
    ,new Q('004439', 'The Other Kind of Baby Shower', 'Girl #1: ...but I mean, it would have been <em>so</em> cute if we <em>had</em> gotten pregnant at the same time...<br />\nGirl #2: Yeah, i\'m kinda bummed...<br />\nGirl #1: We would totally get our abortions together!<br />\nGirl #2: Oh my god, we would!', 'Penelope Galleon', 1140832835)
    ,new Q('004564', 'Wednesday One-liners Miss St. Elsewhere', 'Girl: See this weird thing that showed up on my leg in Africa? Kind of looks like ringworm.', '', 1140674402)
    ,new Q('004561', 'Wednesday One-liners for Fuck Machines', 'Guy: But you were disappointed that you didn\'t get molested. Admit it...Oh my god, that was a joke! God, you are sexually repressed!', 'Pete Grantis', 1140652837)
    ,new Q('004463', 'Wednesday One-liner Cotton to Book Learnin\'', 'Lady: I\'ll talk to you later...Yeah, I\'m going home to smoke a J and<br />\ngrade.', 'djlindee', 1140040858)
    ,new Q('004384', 'The Oldest Wednesday One-liners Profession', 'Girl: You sleep with everyone. You\'re such a nice person!', 'Jessica', 1139472049)
    ,new Q('004242', 'He Thinks That Means a Blanket', 'Girl: Do you ever think about us? Like, how many more of us there are than of you?<br />\nProfessor guy: Of course. That\'s why I always pack heat.', 'Jeff', 1139292021)
    ,new Q('004239', 'Just Don\'t Expect a Ride Home', 'Girl #1: No, dude, I\'m telling you, all the men going to Paris right now are so gay.<br />\nGirl #2: Oh my god, that\'s so not true. Johnny Depp lives there. Totally not gay. <br />\nGirl #1: Yeah, I guess...<br />\nGirl #2: Trust me, you\'ll find someone to lose your virginity to there. I\'m sure most of them are just, like, metro or bi, anyway.', 'Pam Jones', 1139187617)
    ,new Q('004311', 'Wednesday One-liners Like Bareback', 'Guy: I am the best at gay chicken. I am undefeated.', '', 1138809630)
    ,new Q('004269', 'Wednesday One-liners Assume', 'Girl on cell: Yeah, it was great. He had to watch her slap my ass and make out with me.', 'Elizabeth Psyck', 1138226429)
    ,new Q('003950', 'He Was Happy on the Insides (Now Outside)', 'Guy: You know what\'s really gross? Seeing the rats that get run over by the subway cars. They\'re all split open and stuff.<br />\nGirl: This one time I saw a rat get washed up on the shore. He was missing all his skin.<br />\nGuy: Did he look happy?<br />\nGirl: No.', '', 1137934815)
    ,new Q('003789', 'Food Was Scarce in Indiana', 'Girl #1: Okay, what should I get? The Gombee burger sounds good. Hey, that kinda sounds like Gandhi...except he probably wouldn\'t want to eat the burger. Remember that time he was on that hunger strike?<br />\nGirl #2: Aren\'t cows like, sacred to Hindus or something?<br />\nGirl #1: Oh! That\'s probably why he wouldn\'t have wanted to eat it.', '', 1137225655)
    ,new Q('003947', 'For Everything Else, There\'s MasterCard?', 'Guy #1: Remember that time last week when I like fucking killed Frank?<br />\nGuy #2: Huh?<br />\nGuy #1: When I fucking killed Frank?<br />\nGuy #2: Who?<br />\nGuy #1: Frank.<br />\nGuy #2: Oh, ha, ha! Priceless.', '', 1136779231)
    ,new Q('003938', 'I Wonder If Suit Needs a Hag', 'Girl #1: So yeah, it was really cold out there, and he had to keep<br />\nbuilding fires cause they had no heat.<br />\nGirl #2: What?<br />\nGirl #1: Yeah, and also they had to keep this tea kettle on top of the<br />\nfireplace so it wouldn\'t get dry.<br />\nGirl #2: What? Who lives like that?<br />\nGirl #1: What? They live in the country.<br />\nGirl #2: Yeah, but they had to like, chop wood. Who lives like that? I have heat.<br />\nGirl #1: Yeah, that\'s \'cause you live on the Upper East Side.', '', 1136736003)
    ,new Q('004041', 'The Annunciation of Wednesday One-liners', 'Girl: I just have to keep reminding myself: God won\'t care if I get an F.', '', 1136404850)
    ,new Q('003850', 'It Was a New Wave of Terror', 'Professor guy: And who was Sadat?<br />\nChick: Leader of Egypt?<br />\nProfessor: And what was he doing in 1981?<br />\nChick: Being assassinated?', '', 1136163618)
    ,new Q('003959', 'Wednesday One-liners and the Boy Parts', 'Jock: Do you think you can have an orgasm just from stimulation of the balls?', 'Brian Mullin', 1135828827)
    ,new Q('003738', 'He Had a Crunk Attack', 'Girl #1: My brother\'s started taking marijuana and I\'m worried cause he\'s only 17.<br />\nGirl #2: I\'m so anti-drugs because my dad\'s brother died of a drug overdose.<br />\nGirl #1: Was it a marijuana overdose?', '', 1135324848)
    ,new Q('003894', 'Wednesday One-liners Get Edumacated', 'Chick on cell: I just wrote a paper comparing the relationship between Hannibal Lecter and Starling to the relationship between Elizabeth and Mr. Darcy.', '', 1135216846)
    ,new Q('003894', 'Wednesday One-liners Get Edumacated', 'Guy: So, yeah, she\'s going to graduate early, and go right into a life of indentured sexual servitude.', '', 1135216846)
    ,new Q('003887', 'Wednesday One-liners & the Entertainment Industry', 'Guy: Girl, you ain\'t Whitney Houston. Damn, Whitney Houston ain\'t even Whitney Houston! She\'s Bobby Brown.', 'Julia Kite', 1135180851)
    ,new Q('003889', 'Wednesday One-liners for Chosen People', 'Girl: And it\'s so weird to ask Jews if they are German. I just feel weird doing it, because of the Nazis and all.', '', 1135188041)
    ,new Q('003685', 'Mr. Pringles is a Murderer in the Eyes of God', 'Speaker girl: Any questions?<br />\nAudience girl: Were you able to find out about how much women paid for the abortion procedures?<br />\nSpeaker girl: About $200 a pop.', 'Julia Kite', 1134763218)
    ,new Q('003557', '\"Have they set a date?\"', 'Guy #1: Yeah, I\'m going home again next month. My parents are sort of obsessed with me because I\'m an only child.<br />\nGuy #2: <em>You\'re an only child</em>? Oh man, I feel so bad for your parents. They are going to be <em>so</em> depressed when you die.', 'Shoshana', 1134741657)
    ,new Q('003606', 'Then Explain That St. Ignatius Menorah', 'Guy #1: She\'s really religious, she even goes to a Jesuit school.<br />\nGirl #1: Oh! Like JTS?<br />\nGirl #2: <em>What</em>?<br />\nGirl #1: What? Isn\'t Jesuit another word for Jewish? Like Orthodox or something?<br />\nGuy #1: Um, no.', '', 1134187214)
    ,new Q('003547', '\"...This mayonnaise sure tastes funny!\"', 'Girl: What are you eating?<br />\nGuy: I don\'t know, I was just like, \"Put whatever you want on bread.\"', 'helena vozhd', 1133906414)
    ,new Q('003563', 'It Was Actually His Brother...\'s Mom', 'Lady #1: Did Simon really sleep with his sister?<br />\nLady #2: No, he was just hallucinating.', 'Mhla', 1133827228)
    ,new Q('003537', 'He Means a Very Upset Infant', 'Guy: ...And she had the nerve; she didn\'t even ask me to be her friend. She just sent me her profile!<br />\nChick: Omigod, you should <em>so</em> send her a frowny.', 'djlindee', 1133625614)
    ,new Q('003658', 'Wednesday One-liners: The Pole', 'Guy: There\'s just something about potato chips that I don\'t want my penis near them.', 'Mike Lock', 1133395222)
    ,new Q('003598', 'Wednesday One-liners Can\'t Dress Correctly', 'Guy: Call it \"Tom\'s\". If you call it \"the Seinfeld Restaurant\" the tourists win.', '', 1132797610)
    ,new Q('003401', 'Hair Today, Heard Tomorrow (NYC Short Stories)', 'Girl #1: I\'m getting my hair cut when I go home next week. I don\'t trust New York hairdressers. Last time, they charged me too much and gave me a crappy cut where one side was longer than the other.<br />\nGirl #2: It was probably some sort of hipster thing, that\'s why it cost so much.<br />\nGirl #1: What, like I\'m paying a licensing fee to rebroadcast her creativity on my head?...I guess so.', 'Julia Kite', 1132581655)
    ,new Q('003494', 'Wednesday One-liners Bear a Resemblance', 'Tween boy: They all kind of look like hipsters.', '', 1132156856)
    ,new Q('003341', 'Five Minutes Until Mutual Handjobs', 'Guy #1: Dude, I know this is kinda gay, but I played The Sims last night <em>naked</em> and it was awesome.<br />\nGuy #2: Oh, that\'s solid. I watch TV naked all the time. Not recently, though. I\'ve been studying for my econ midterm constantly, and you can\'t be naked in the library.<br />\nGuy #1: That sucks, \'cause it\'s like...being naked just always feels better.<br />\nGuy #2: Totally. Ceteris paribus, I say, \"do it naked.\"', '', 1132106403)
    ,new Q('003150', 'Just Transition Him Over to Blow', 'Fratboy #1: Dude, if he like, never went out at all and studied all the time, he could get As.<br />\nFratboy #2: Yeah, but what\'s the point in that?<br />\nFratboy #1: What does he want to do again?<br />\nFratboy #2: Well, he\'ll never be good at business because he can\'t hold his liquor. <br />\nFratboy #1: We\'ll have to help him out.', '', 1130565637)
    ,new Q('003106', 'The Carggite Totally Blew Her Cover', 'Guy #1: Polo is like, the hardest sport to play on the planet.<br />\nGuy #2: Uh huh.<br />\nGirl: Aside from space travel.', '', 1130104834)
  ])
  ,new S('52nd & Lexington', 40.75774, -73.97145, 16, [
    new Q('004266', 'Wednesday One-liners Build Up an Appetite', 'Chick on cell: Yeah, if I\'m really hungry it doesn\'t matter about morals anymore, I\'ll just dive right into bacon, anything. <em>Totally</em> forget about the vegan thing. So for god\'s sake don\'t ever leave me alone with bacon. Or human.', '', 1138233607)
  ])
  ,new S('15th between 6th & 7th', 40.73863, -73.997785, 0, [
    new Q('003896', 'Wednesday One-liners for the Holidays', 'Dad: Ooh, look at Grandma! She got a snowball in the face!', 'Peter Kenway', 1135224025)
  ])
  ,new S('Union Square East', 40.7352, -73.99011, 2, [
    new Q('005971', 'It\'s Ok, We All Have Short Attention Spans, Too', 'Little English girl: Where are we now, Mummy?<br />\nEnglish Mummy: We\'re in New York, in America.<br />\nLittle English girl: [sigh] We\'re still in America?', 'Manhattman<br />', 1151258432)
    ,new Q('005899', 'Time for New Friends', 'Girl #1: How much does he want?<br />\nGirl #2: Ten dollars.<br />\nGirl #1 to gypsy cab:  Fuck you!  I\'d rather drag my friend home on her face than pay you ten dollars!', 'Jim', 1150790432)
    ,new Q('005760', 'Maybe ThugLover12 Isn\'t the Best Alias for You', 'Queer #1: So when he showed up I was surprised because he was kinda gangsta.<br />\nQueer #2: Ok, so what\'s wrong with that?<br />\nQueer #1: Well, I guess I should have expected it because his profile said he was from the Bronx... but I mean you can still be from the Bronx and be Americanized.', '', 1149854432)
    ,new Q('004047', 'Wednesday One-liners\' Scenes from The City', 'Promoter guy: Take one, throw it out! Take one, throw it out! Hear me, folks? Take one, throw it out!', '', 1136426436)
    ,new Q('003958', 'Conflict Fuels Wednesday One-liners', 'Dude: ...Elizabeth calls me out on my bullshit. That\'s why we\'re dating. It has nothing to do with her.', 'James J. Williams III', 1135843206)
  ])
  ,new S('Starbucks, 29th & Broadway', 40.74603, -73.98859, 0, [
    new Q('004921', 'Wednesday One-liners Turn Up the Radio', 'Woman: I\'m dying. Elvis says I\'m not, but I know I am.', 'SK', 1143655252)
  ])
  ,new S('7th Ave & Greenwich', 40.73654, -74.00111, 11, [
    new Q('005519', 'Adam Sandler Was Misunderstood, Too', 'Punk rock girl: I\'m pretty sure they knew it was satirical.<br />\nPunk rock guy: They didn\'t think it was satirical, they think you actually think that.<br />\nPunk rock girl: But it was parody!<br />\nPunk rock guy: It was bullsht!', '', 1148227232)
  ])
  ,new S('98th & Broadway', 40.7959, -73.97076, 18, [
    new Q('005041', 'Wednesday One-liners Tip One Back', 'Little boy: Daddy, please don\'t buy more beer.', 'Alison R.', 1144843246)
    ,new Q('003657', 'Wednesday One-liners: The Hole', 'Tween boy: I want some pussy but I\'m a virgin-ass nigga.', 'leeza', 1133388045)
  ])
  ,new S('Barnes and Noble ladies\' room, 48th & 5th', 40.75728, -73.97813, 16, [
    new Q('004841', 'How Was Your St. Paddy\'s Day, New York?', 'Chick: I didn\'t come all the way from New Jersey to watch a fucking parade; I came here to drink!', '', 1142884801)
    ,new Q('004221', 'They Should\'ve Picked a Subtler Password', 'Girl #1: I like your pants.<br />\nGirl #2: Thanks.<br />\nGirl #1: You don\'t happen to have any percocets in them?', '', 1139220049)
  ])
  ,new S('20th & Park', 40.73828, -73.98767, 13, [
    new Q('004795', 'Intelligent Designing 101', 'Guy #1: Damn that girl is <em>fine</em>. I\'d give my left nut to get her a night.<br />\nGuy #2: Dude, why your left nut?<br />\nGuy #1: Because it\'s attached directly to your heart.<br />\nGuy #2: Oh my god, what bio class have you been taking?', 'Kiuu SMith', 1144670410)
    ,new Q('004851', 'Wednesday One-liners by Storm Field', 'Hobo: This weather crazy. Father Nature caught Mother Nature cheatin\' on him, got mad, and dropped some damn snow on us!', '', 1143036031)
    ,new Q('004466', 'The Beauty That is Wednesday One-liners', 'Hobo: Hey, pretty lady...Congratulations! You\'re asshole of the year!', 'Jamie Stone', 1140076805)
    ,new Q('003346', 'How Was Your Halloween, New York?', 'Guy on cell: Trick or treat, <em>fucking witch</em>!', 'Pedro Lebron', 1130918410)
    ,new Q('003080', 'Looks Like the Bug-eyed Bronxite is Toast', 'Howard Dean: ...I think Ferrer can win--<br />\nMan: Mr. Dean! I would have voted for you, man!<br />\nHoward Dean: ...Thanks...<br />\nMan: I would have voted for you if you remove all the poison in your<br />\nbody!...I would have voted for you if you loved America! You would have been a great president, but only if you weren\'t so poisonous!<br />\nHoward Dean: ...Thanks...', 'Steve Gartland', 1129024814)
  ])
  ,new S('El Centrol, 54th & 9th', 40.76598, -73.98713, 14, [
    new Q('005300', 'Wednesday One-Liners, Boldface Names', 'Queer on cell: You wouldn\'t have sex with Elijah Wood?! You\'re not too big for me but you\'re too big for Elijah.', '', 1146664832)
  ])
  ,new S('37th & 7th', 40.75288, -73.98927, 17, [
    new Q('005805', 'It\'s a She, and She Would Like That', 'Big girl: Oh my goddd! Your doggy is soo adorable --  I just want to eat him!<br />\nDog owner: Umm -- Thanks, I guess. [To her friend] Is that the most endearing thing she could come up with?', 'Russ', 1150178432)
    ,new Q('004385', 'Call a Doctor, Wednesday One-liners!', 'Suit on cell: Yeah, I was about to smoke this joint, but I\'ve got a piss test in 26 minutes.', 'epsd101', 1139450418)
  ])
  ,new S('14th & 7th', 40.73855, -73.9997, 11, [
    new Q('004922', 'Wednesday One-liners Love Their Mommy', 'Woman on cell: Did you just walk in the room when he said, \"Mommy\"?...And did he run over to you?...God, you cannot buy that!', '', 1143662427)
    ,new Q('003560', 'Dr. King Must Have Been Dreaming', 'Crazy lady: Hey girls!...You have to be careful! I know what problem is! It is all the black people! Just look at these black people! Look at the street! <em>All black</em>! <em>Everywhere</em>! It just keeps getting worse, more are coming.', '', 1137405613)
    ,new Q('003686', 'Ju Calling', 'Eliza Dushku: How much for these two?<br />\nJewelry guy: $15.<br />\nEliza Dushku: Can I get them for ten?', 'Lily', 1135008036)
    ,new Q('003845', 'Overheard in the Headlines: The Strike', 'Hobo: Don\'t worry about the strike, we\'ll all fly to work! Flap our wings and fly!', '', 1134777631)
  ])
  ,new S('3rd Avenue & 10th Street', 40.73072, -73.98905, 1, [
    new Q('005632', 'She\'s Only Got 2800 Night Minutes Left This Month', 'Drunk girl:  I want to call my boyfriend so I can have sex.<br />\nRandom drunk guy:  Well, save yourself a call and have sex with me.<br />\nDrunk girl:  That makes sense.......ok!', '', 1148954432)
    ,new Q('004680', 'The Buddhist Guys Are Too Fat', 'Girl #1: You should date the Jew; he would take you out to dinner and then they bone you.<br />\nGirl #2: Oh, as opposed to the Catholic ones that we just bone and skip dinner altogether?', '', 1142740858)
    ,new Q('004702', 'Wednesday One-liners for Thanatos', 'Old woman: It\'s not a lifecycle, it\'s a deathcycle.', '', 1141869644)
    ,new Q('004311', 'Wednesday One-liners Like Bareback', 'Crazy guy: Come on you homosexuals, the revolution\'s happening without you!', '', 1138809630)
    ,new Q('003872', 'Or You Could Swallow a Twinkie', 'Guy #1: I don\'t know man, I thought when I had kids I would no longer want another woman. I thought it would end you?<br />\nGuy #2: Yeah yeah, it never ends.<br />\nGuy #1: If kids doesn\'t do it, how do you make it stop?<br />\nGuy #2: Cupcakes.', '', 1136260824)
    ,new Q('003897', 'In the Mood for Wednesday One-liners', 'Fratboy: Dude, I\'m gonna fuck your mom!', 'Cait O\'Connor', 1135238436)
    ,new Q('003497', 'Wednesday One-liners, Hosted by Casey Kasem', 'Guy: So what songs do you have on your iPod?', '', 1132135228)
  ])
  ,new S('20th between 8th & 9th', 40.74401, -74.00127499999999, 0, [
    new Q('005772', 'She\'s Got a Nice Pair of Assets', 'Guy: Did you hear back from the modeling agency?<br />\nGirl: Yeah, it was Foot Fetish Palace.  I have to call them back.<br />\nGuy: Oh my god you\'re in porn?!  This is why we\'re friends.', 'I\'m just trying to get to the theatre', 1149940832)
  ])
  ,new S('West 4th between Perry & Charles', 40.735195, -74.003255, 11, [
    new Q('004238', 'Straight from the Horse\'s Mouth', 'Sarah Jessica Parker: No honey, that\'s the litterbox. That\'s where the<br />\nkitty goes pee-pee and poo-poo.', '', 1138132826)
  ])
  ,new S('Williamsburg', 40.711060702048904, -73.96352291107178, -1, [
    new Q('004925', 'Wednesday One-liners Count Calories', 'Woman: The first time he paid me a lot of money to have sex with him and a friend. So the second night, we did it again. The third night, he asked me out to lunch.', '', 1143684023)
    ,new Q('004859', 'Wednesday One-liners Will Miss Greenspan', 'Girl: We\'re being listed through Mr. Vampire-man.', '', 1143079259)
    ,new Q('004494', '\"Here\'s your lunch, boss. No strings attached.\"', 'Chick: Did you know Craigslist is in like a billion cities but only employs nineteen people?<br />\nGuy: That\'s not that weird; what would people who work for Craigslist do?<br />\nChick: I dunno...Moderate. Get Craig burritos.', '', 1141646419)
    ,new Q('004564', 'Wednesday One-liners Miss St. Elsewhere', 'Girl: I coughed it up and everything was better.', 'Lovegreg', 1140674402)
    ,new Q('004416', 'Boxes and Boxes of Cocoa Puffs', 'Old woman: Have you seen Charlie?<br />\nGuy: No..he said he was gonna check himself into the hospital, and probably stay for a long time.<br />\nOld woman: Because I have some food for him...Now Patrick, have you seen Charlie? I have some food for him.<br />\nOld man: Charlie done checked hisself into the psycho ward for two months. <br />\nOld woman: I guess I gotta throw the food out then.', 'Heiny Kleist', 1140559251)
    ,new Q('004055', 'That\'s a 2000 Year Old Jewish Trick', 'Black guy: Hey, man, can you tell me how to get to all those buildings over there? <br />\nHipster guy: You mean Manhattan?<br />\nBlack guy: Yeah.<br />\nHipster guy: Um, you can\'t <em>walk</em> there from here...unless you can walk on water!', '', 1140267650)
    ,new Q('004381', 'The Wednesday One-liners Method Acting Method', 'Vendor guy: That\'s a good book, <em>Postcards From the Edge</em>. Yeah, Carrie Fisher is a beautiful writer, but I was in rehab with her for a couple days: total bitch!', 'Jeff Kaplon', 1139436042)
    ,new Q('004377', 'Wednesday One-liners Could Use Some Color', 'Bag lady: I am a 15 year old girl who collects cans. <em>Whitey</em>, go to Lord & Taylor, get a job, go to school and make something of yourself. <em>Quit following me</em>!', 'Heather Letzkus', 1139400006)
    ,new Q('004100', 'It\'s Like Being in Subway Purgatory', 'Girl: I went to Boston this weekend. Mostly just to avoid the L train.', '', 1138428044)
    ,new Q('004195', 'Women Have Needs, Wednesday One-liners', 'Guy: I should call her. She\'s probably taking off her pants right now.', 'Taryn Lee', 1137628851)
    ,new Q('003957', 'An Assault of Wednesday One-liners', 'Woman: Yeah, well, I\'m gonna <em>slap</em> the fuckin\' lesbian right out of her!', 'CocteauBoy', 1135836030)
    ,new Q('003901', 'Remember That Whole Strike Thing?', 'Hipster girl: I can\'t believe this. Even with the strike, I have to call in and pretend to be telecommuting.<br />\nHipster guy: Hey! I have to pretend to be academic.<br />\nHipster girl: I have to fake accounting numbers.<br />\nHipster guy: I have to feign interest in boring topics and then pretend I know enough about them to say something of interest.', '', 1135303233)
    ,new Q('003889', 'Wednesday One-liners for Chosen People', 'Guy: I feel like my mother\'s Jewish eyes are looking at me from every car.', 'Mary Frances', 1135188041)
    ,new Q('003596', '...Butt It\'s Wednesday One-liners!', 'Man on pay phone: <em>Egg fart</em>!...No, no, no, no! <em>Egg fart</em>!', 'Katelyn Brehony', 1132783228)
    ,new Q('003213', 'Holy Crap, Someone Please Tape That Call', 'Thug kid: When are you having that damn baby?<br />\nPreggers: I was due last week and I want a C-section but the doctor said we shouldn\'t do it yet.<br />\nThug kid: I\'ma call that doctor tomorrow and tell him to take that nigga out.', 'Anthony Amico', 1131062418)
    ,new Q('002889', 'She Believes in Helping Achieve Statehood', 'Girl #1: He wasn\'t even that cute. Like, not good-looking at all.<br />\nGirl #2: But you fucked him?<br />\nGirl #1: Of course, he was Puerto Rican.', 'Jim VB', 1129708831)
    ,new Q('003046', 'Stuy Has Nothing to Do with This Conversation', 'Guy: So...this is Bedford Avenue, right?<br />\nChick: Yeah...<br />\nGuy: So...are we in <em>Bedford-Stuyvesant</em>?', '', 1129651256)
    ,new Q('003095', 'Get to Atoning, New York', 'Lady: See? Maybe this will teach those Jews from building them so high.', '', 1129204841)
    ,new Q('002990', 'The Black Flag is at Half-mast', 'Drunk guy on cell: Dude, that\'s crap, you <em>gotta</em> live hardcore!', 'Kate Elizabeth', 1129212028)
    ,new Q('002964', 'He Was Distributed All Over the Tarmac', 'Chick #1: So, that girl from Japan is paying double rent, right? $1600 on her apartment here, and $1800 on the other apartment where she was living. I asked her how she could afford both places and she told me that her Mom and her sister died in a plane crash.<br />\nChick #2: Holy shit! Which plane crash?<br />\nChick #1: I don\'t know, one in Japan.<br />\nChick #2: So she\'s rich now, right?<br />\nChick #3: That\'s how my friend moved to Miami.', '', 1129060829)
  ])
  ,new S('23rd between 8th & 9th', 40.745875, -73.999915, 0, [
    new Q('004047', 'Wednesday One-liners\' Scenes from The City', 'Woman: I\'m not a racist! I live on the Upper West Side!', '', 1136426436)
  ])
  ,new S('Greene & Spring', 40.72378, -74.00038, 7, [
    new Q('003091', 'Wednesday One-liners Go On a Bender', 'Hipster girl: The reason why I\'ve looked so bad these past few days is because I\'ve been <em>drunk</em>.', '', 1129176037)
  ])
  ,new S('27th & 7th', 40.7466, -73.99383, 0, [
    new Q('004729', 'None of That Drag Queen Lassie Crap', 'Girl #1: What? What are you talking about? I\'m talking about the Johnny Cash song, <em>A Boy Named Sue</em>!<br />\nGirl #2: And I\'m talking about my dog being a cross-dresser.', '', 1143108029)
    ,new Q('004007', 'The Unicorns Stood for White Power', 'Girl #1: ...so, my professor started talking about <em>The Diary of Anne Frank</em>.<br />\nGirl #2: Oh, Anne Frank! I used to love her! I had the diary, the notebooks and the pencils and everything.<br />\nQueer: <em>What</em>?<br />\nGirl #1: I think she means Lisa Frank.', '', 1137794439)
    ,new Q('003706', 'Atlas Winced', 'Asian girl #1: Where is Ontario?<br />\nAsian girl #2: Um...I think it\'s in the Midwest.<br />\nAsian girl #1: Oh, really? Is it a state?<br />\nAsian girl #2: Hmm...I\'m not sure...', '', 1135036819)
    ,new Q('003572', 'Unlike Explosive Time Travel', 'Guy #1: You know if you went back in time and saw yourself the world would explode and collapse.<br />\nGuy #2: No way, man. Didn\'t you ever see <em>Back to the Future</em>?<br />\nGuy #1: <em>What</em>? That\'s not real!', 'Corey Cavagnolo', 1134064800)
  ])
  ,new S('56th & 7th', 40.76485, -73.98055, 16, [
    new Q('004998', 'Wednesday One-liners Need an Adapter', 'Guy: You are terrible with technology...and you\'re Asian!', 'Glowwbug', 1144303230)
    ,new Q('004258', 'Wednesday One-liners Fantasies', 'Dude: I wish I had a shyster lawyer!', '', 1138197631)
  ])
  ,new S('31st & 6th', 40.7479, -73.98916, 0, [
    new Q('006187', 'Wednesday One-Liners Aced Anatomy 101', 'Middle-aged man, to college girl in skirt: Excuse me, miss, you have very nice legs. Have you ever thought about doing voice-overs?', 'plo', 1153929600)
  ])
  ,new S('2nd & A', 40.72299, -73.98576, 1, [
    new Q('003357', 'Wednesday One-liners Are Pre-Med', 'Chick: ...and that\'s when I realized not everyone gets the shakes.', '', 1130976023)
    ,new Q('002990', 'The Black Flag is at Half-mast', 'Chick: Darryl doesn\'t even know what hardcore is, first off. He was all, \"What, is that like some kind of porn?\".', 'Kira', 1129212028)
  ])
  ,new S('40th between 6th & 7th', 40.75414, -73.986475, 17, [
    new Q('004700', 'Wednesday One-liners Engage in Carnality', 'Guy: I got laid 4 times, and I got 23 of the guys laid. I was like you, Blondie, go with him. You two dames over there, go with this guy...You know, Marv makes things happen.', 'Truckstop', 1141884051)
  ])
  ,new S('43rd & 5th', 40.75414, -73.9804, 16, [
    new Q('004344', 'Fashion Week Concludes on an iNote', 'Woman #1: Wow, everyone is wearing their iPod. I only wear mine to the gym. <br />\nWoman #2: Well, if you have a commute, it is good to take it with you.<br />\nWoman #1: Really, so it works underground?<br />\nWoman #2: Yea, it even works when you are wearing green.<br />\nWoman #1: Fuck you.', 'dave', 1139623246)
  ])
  ,new S('16th & 10th', 40.74346, -74.00725, 0, [
    new Q('004110', 'Wednesday One-liners Need to Know', 'Girl: \"Afghanistan\"? Isn\'t that just a place in Iraq?', 'oliver', 1137016850)
  ])
  ,new S('University between Waverly & 8th', 40.731139999999996, -73.995165, 12, [
    new Q('003955', 'Wednesday One-liners Get Paid for It', 'Suit on cell: Is it the pimpiest joint you know?', '', 1135792822)
  ])
  ,new S('70th between 2nd & 3rd', 40.767965000000004, -73.960465, 21, [
    new Q('003739', 'Walkin\' Talkin\' Wednesday One-liners', 'Mailman: Hey man, my shift just ended so I can start walking faster now.', '', 1133964050)
  ])
  ,new S('116th & Broadway', 40.80797, -73.96383, 20, [
    new Q('004572', 'Columbia Delenda Est', 'Guy #1: Cato worked his way into power through his ororatorical...ororitary...He talked good.<br />\nGuy #2: I think that was meta-irony.', '', 1141740005)
    ,new Q('004466', 'The Beauty That is Wednesday One-liners', 'Crazy guy: Will anyone trade a quarter for fifty cents? Will anyone trade a quarter for fifty cents...You should be a model...I\'m serious!', 'Fatty McFingers', 1140076805)
    ,new Q('004378', 'Wednesday One-liners for Fashion Week', 'Guy: Yeah, those SS uniforms were swank, really well-cut. Powerful, not like the fruity shit that the rest of the Nazis wore.', '', 1139421628)
    ,new Q('004259', 'Wednesday One-liners or Best Offer', 'Girl: Excuse me, are you selling Freud by any chance?', '', 1138204822)
    ,new Q('003517', 'Actually That\'s the Bad Definition', 'Girl: The Columbia Safe Van driver ran a red light and blindsided my cab yesterday!<br />\nGuy: I know it\'s hard to provide students with a good definition of irony, but honestly.', '', 1133445601)
    ,new Q('003658', 'Wednesday One-liners: The Pole', 'Chick: I don\'t have a penis, and I\'m not an American penis.', '', 1133395222)
    ,new Q('003657', 'Wednesday One-liners: The Hole', 'Girl: You\'re a Barnard woman, and it\'s for vaginas; I won\'t take \"no\" for an answer!', '', 1133388045)
    ,new Q('003404', 'I Thought \"She\" Was Terence Trent D\'Arby', 'Chick #1: You know, a year ago I didn\'t even know who Tracy Chapman was.<br />\nChick #2: Even I knew who she was, and I\'m not even black!<br />\nChick #1: Well, I\'m not black in the ways that count. I\'m not outwardly, identifiably black...Well, except for my skin color.', '', 1132588819)
    ,new Q('003014', 'It\'s All Brave New World Up in Here', 'Girl: Is your package big?<br />\nGuy: ...I don\'t know...depends on what my mom ordered.', 'Bowserhsu', 1129424438)
  ])
  ,new S('Gansevoort & Washington', 40.73937, -74.00806, 11, [
    new Q('005114', 'Wednesday One-liners for That Slither Lady', 'Guy: Her ass was so small, she was worthless.', 'nathalie', 1145476820)
  ])
  ,new S('51st & 8th', 40.76291, -73.98568, 16, [
    new Q('006286', 'Hi, My Name is Bill, and I\'m a Wednesday One-Liner', 'Ditzy girl: It\'s like...like the herbal tea of beers.', 'Just Trying to Watch the Game in Peace', 1153944000)
    ,new Q('006105', 'Wednesday One-Liners\' Excrement Adventure', 'Old man, to dog:  Shit already, damnit!  Do you hear me?! Shit already!', '', 1153324800)
    ,new Q('005844', 'Dude, It Was Medicinal', 'White guy #1: And to make matters worse, she stole my bag of weed!<br />\nWhite guy #2: She told you she had herpes, and you\'re worried about your weed?', '', 1150380032)
    ,new Q('005622', 'Just Get Him Sauced and Toss Him in the Broiler', 'Obnoxious white lawyer to his China doll date: We\'ll have unaju. I think unaju is eel from the sea, and unaji is eel from a river.<br />\nObnoxious white laywer to the Japanese sushi chef: We\'ll have unaju. Is it true that unaju is eel from the sea, and unaji is eel from a river?<br />\nJapanese sushi chef nods politely.<br />\nObnoxious white lawyer to his China doll date: Did you hear that? Unaju is eel from the sea, and unaji is eel from a river.', 'Asian American couple who had to deal with this all night long<br />', 1148882432)
    ,new Q('004275', 'He\'d Been to a Bris in the Afternoon', 'Guy #1: So are you go to Ian\'s birthday dinner later?<br />\nGuy #2: Well, I\'ve been trying to only eat one meal a day this past month, and I already ate one...so probably not.', '', 1139544051)
  ])
  ,new S('1st Ave', 40.75163, -73.96748, 15, [
    new Q('006295', 'Wednesday One-Liners Could Quit if They Wanted to', 'Guy: Okay, here\'s the plan: we paint your van, then you have sex with Susan, then I\'ll have sex with...someone else. Then we both smoke a <em>lot</em> of weed...', 'chris & daile', 1153936800)
  ])
  ,new S('34th & Park', 40.7471, -73.98142, 3, [
    new Q('004725', 'And Next Time, Stay There', 'Tourist lady #1: Excuse me, can you tell us how to get to the corner of Madison and Park?<br />\nMan: No such place. See, those streets run--<br />\nTourist lady #2: Oh, he doesn\'t know. We just came from there, so let\'s just go back the way we came.', 'Manhattman', 1143007244)
    ,new Q('004048', 'How Was Your Holiday, New York?', 'Chick: So, I figured we\'d ring in the new year with a three-way.', '', 1136462419)
  ])
  ,new S('38th & 8th', 40.7547, -73.99166, 17, [
    new Q('005443', 'At Sunset He Turns Back into a Mermaid', 'Hobo: Hey girl, wanna marry me?<br />\nGirl: [whispering] No, sorry.<br />\nHobo: YES OR NO? Damnit, I don\'t have forever.', '', 1147701632)
  ])
  ,new S('77th & Park', 40.77436, -73.96158, 21, [
    new Q('003869', 'The Father of the Year 2005 Nominees', 'Tween boy: Do I have a hole in my jacket?<br />\nDad: Probably, but I want to make sure your nuts are ok.', 'hiphippychick', 1136088036)
  ])
  ,new S('41st & 6th', 40.75416, -73.98461, 17, [
    new Q('004508', 'One Guess Where They\'re Staying', 'Grandma: Who is that? What\'s the commotion about?<br />\nTeen girl: It\'s Paris Hilton.<br />\nGrandma: Who is that?<br />\nTeen girl: She\'s a media blowjob, Nana. Let\'s get a move on, we\'re <br />\nlate and Daddy\'s waiting for us at the hotel.', 'Brian Otano', 1141344015)
    ,new Q('004001', 'Yeah, It\'s Called the Internet', 'Chick #1: So how was it?<br />\nChick #2: It was bitchfabulous.<br />\nChick #1: Awesome. So it was bitchtastic?<br />\nChick #2: Nice! I like that one. Yeah, it was bitchtastic.<br />\nChick #1: And the coffee?<br />\nChick #2: Bitchalicious.<br />\nChick #1: Hey, I just realized someone might hear us.', '', 1137340827)
  ])
  ,new S('Fort Greene', 40.68978255724047, -73.97704124450684, -1, [
    new Q('005061', 'It\'s Like Being in a Totally New State', 'Man #1: She fcks like a Puerto Rican<br />\nMan #2: Have you ever fcked a Puerto Rican?<br />\nMan #1: No. But I\'ve imagined it.', '', 1145073642)
    ,new Q('004848', 'Parve Wednesday One-liners', 'Guy: Well, what color was this Jew?', '', 1143021625)
    ,new Q('004701', 'Wednesday One-liners Believe in Holy Ghosts', 'Woman: He just wanted me to be, like, this Christian warrior that I just was <em>not</em>.', '', 1141862435)
    ,new Q('004552', 'No Turn on Redtarded', 'Girl #1: We have to turn right on this street.<br />\nGirl #2: But it\'s a one way...<br />\nGirl #1: Dude, we are walking!', 'pratt radio', 1141585229)
    ,new Q('003901', 'Remember That Whole Strike Thing?', 'Girl: So okay, it\'s a transit strike, there\'s gotta be some good that comes out of it. Like, they should use the time to get down there and<br />\nfix everything. And clean up the rats and the garbage.<br />\nGuy: ...Who do you think is gonna do that? Transit workers, right?<br />\nGirl: Yeah!...Oh.', '', 1135303233)
    ,new Q('003351', 'Come on Home, Wednesday One-liners', 'Guy: You stand there and say you love me, and I\'ll go home and think about what it\'s like to be selfish.', 'Noel Negron', 1130954441)
  ])
  ,new S('Bowery & Grand', 40.71846, -73.99481, 8, [
    new Q('004042', 'It\'s Lunch for Wednesday One-liners', 'Hobo: Hey, hey you, I\'ll trade you this hot dog for that bunny.', 'erica', 1136412028)
  ])
  ,new S('Lyric Diner, 22nd & 3rd', 40.73815, -73.98366, 2, [
    new Q('005205', 'It\'s Not You, It\'s Wednesday One-liners', 'Man on cell: You do not have a receptive bone in your fcking body!', '', 1146060032)
    ,new Q('005194', 'Bison Burger Up for Mr. Polanski', 'Waiter: Would you like to order now?<br />\nMan: No, I\'m waiting for my sister.<br />\nWaiter: You said before that you were waiting for your wife.<br />\nMan: No, I didn\'t. I said it was my sister.<br />\nWaiter: No, you didn\'t.<br />\nMan: Would you like to be in movies?<br />\nWaiter: No, why?<br />\nMan: You have a really nice speaking voice.  You should think about it.<br />\nWaiter: You really think so?<br />\nMan: Yeah. I make movies. You should give it a try.', '', 1145980832)
    ,new Q('003864', 'Clean Yet Dirty (NYC Short Stories)', 'Guy #1: Does she even shower?<br />\nGuy #2: That\'s what I asked him. But then he said, \"Not only does she shower, but then she licks my ass and jacks me off. It\'s fucking great!\"', 'Erin B', 1137168028)
    ,new Q('003314', 'Treats and Tricks (Happy Halloween)', 'Guy: I\'ve always loved this mask, it\'s so cool.<br />\nGirl: Yeah, I guess.<br />\nGuy: I mean, I guess I should, considering...<br />\nGirl: Right.<br />\nGuy: I mean, I was in the movie. <br />\nGirl: That was like a decade ago.<br />\nGuy: So?<br />\nGirl: Yeah, but you were a fucking extra. And you didn\'t even have a single line.', '', 1130760057)
  ])
  ,new S('Rockefeller Plaza', 40.75907, -73.97849, 16, [
    new Q('005293', 'Hygienic Wednesday One-Liners', 'Hobo:  So you say I\'m a douche?  A feminine cleaning product?  Well I fcked your mama and now she\'s cleaner inside than out.', '', 1147327232)
    ,new Q('004928', 'The NYC Sights of Wednesday One-liners', 'Tourist man on cell: Guess where I am?...Yup, Rockefeller Plaza, right in the heart of downtown Manhattan.', 'Brendan Rogak', 1143691230)
    ,new Q('003536', 'I\'m Guessing Someplace in Long Island', 'Chick #1: Hey, guess what I found out?<br />\nChick #2: What?<br />\nChick #1: Bugs Bunny is from Brooklyn!<br />\nChick #2: That\'s bullshit. Last time I checked, Bugs Bunny lived in a hole, not a brownstone.<br />\nChick #1: Ha, ha! I love you. I swear, you\'re so witty sometimes. I\'m not even kidding. <br />\nChick #2: I know, right? I don\'t know where I come up with this stuff.', '', 1133614854)
    ,new Q('003598', 'Wednesday One-liners Can\'t Dress Correctly', 'Tourist woman: What does the \"Rock\" in \"Top of the Rock\" stand for?', '', 1132797610)
    ,new Q('003590', 'Wednesday One-liners for Tomorrow', 'Tourist lady: Oh, that\'s the <em>Christmas</em> tree.', 'John Auld', 1132768812)
    ,new Q('003159', 'If You Drank It You Wouldn\'t Get Pregnant', 'Girl #1: I didn\'t know I was pregnant for, like, 4 weeks.<br />\nGirl #2: Seriously?<br />\nGirl #1: Yeah, and you <em>know</em> I drank a shitload in that time.', '', 1131962433)
  ])
  ,new S('Orchard & Broome', 40.71813, -73.99024, 8, [
    new Q('005410', 'Better Than as a Cherry', 'Girl #1: What\'s the weirdest thing you had to do for work?<br />\nGirl #2: Well, Moussa told me he once had to dress up as a strawberry.', '', 1147428032)
  ])
  ,new S('116th & Lexington', 40.7986, -73.9416, 23, [
    new Q('005079', 'Must Be an Existentialist', 'Guy #1: Man, what\'s wrong with your eye? It\'s all red. <br />\nGuy #2: Nah, man, I\'m just tired, that\'s all. <br />\nGuy #1: You\'re tired in one eye?', 'Sam J. Miller', 1145246426)
    ,new Q('003152', 'Well, Cajun Life at Least (Too Soon?)', 'Little girl: Mommy, I\'m getting wet! I don\'t want to get wet!<br />\nMommy: Yeah? Well, I\'m getting wet too, Samantha! That\'s <em>life</em>!', 'JMP', 1130536830)
  ])
  ,new S('5th & A', 40.72485, -73.9844, 1, [
    new Q('003352', 'Wednesday One-liners for English Class', 'Black guy on cell: Dog, when someone says \"interesting\" in response to something you say, it\'s usually means that they think you are really fucking stupid.', 'Chris Williamson', 1130997600)
  ])
  ,new S('97th & Broadway', 40.79528, -73.97121, 18, [
    new Q('005382', 'The Long Arm of Wednesday One-Liners', 'Woman on cell: I always knew they were penalties for not paying your taxes on time, but I never knew those applied to me', '', 1147298432)
    ,new Q('005100', 'Always Whining About Their Eggs', 'Guy #1: I stayed the night at her place and woke early. She was still asleep.<br />\nGuy #2: What did you do?<br />\nGuy #1: I got up and was going to make myself breakfast. But when I cracked the egg open it got away from me.<br />\nGuy #2: Where did it go?<br />\nGuy #1: It slid down a crack between the counter and the stove.<br />\nGuy #2: What did you do?<br />\nGuy #1: I put everything away and climbed back into bed.<br />\nGuy #2: You know that sht is going to stink!<br />\nGuy #1: Yeah, I\'m sure it will.', '', 1145390438)
    ,new Q('004957', 'God Will Never Fix Him Now', 'Crazy guy: I give you Jesus!<br />\nBlind man: Is that Mel Gibson? You nitwit!', '', 1144936808)
  ])
  ,new S('Cosi, 31st & Park', 40.74519, -73.98279, 3, [
    new Q('004396', 'The Woes of a Marcy Playground Groupie', 'Girl #1: I just don\'t think I\'m his type. He\'s very intellectual.<br />\nGirl #2: What do you mean?<br />\nGirl #1: He\'s all \"yada yada yada\" and I\'m very \"What\'s your favorite Starburst?\"', 'Clara', 1140343223)
    ,new Q('003492', '...With a Side Order of Wednesday One-liners', 'Yuppie guy: Dude, it\'s all about balance. I mean, you just can\'t gorge yourself on sex, drugs and rock & roll...and butter.', '', 1132185605)
  ])
  ,new S('6th between 55th & 56th', 40.763315, -73.97792, 16, [
    new Q('005567', 'Wednesday One-Liners Are Being Watched', 'Suit to other suit: They drive it through the city in milk trucks so that no one will know.', 'Ann M. Hetzel', 1149674432)
  ])
  ,new S('Payless, 225th & Broadway', 40.8746, -73.90969, -1, [
    new Q('005647', 'Lion Alert Level: Yellow', 'Little girl, loudly: ROAR!<br />\nLittle girl\'s dad: Leslie, stop it, you\'re scaring the people.<br />\nLittle girl, quietly: Roar...<br />\nLittle girl\'s dad: Very nice Les, scare them subtly.', 'NARS<br />', 1149055232)
  ])
  ,new S('Canal & Eldridge', 40.71534, -73.9934, 6, [
    new Q('004555', 'Wednesday Ob/gyn-liners', 'Latina: This guy eats me out so much he must think my name is Meatball.', '', 1140609625)
  ])
  ,new S('1st Ave between 11th & 12th', 40.729695, -73.98379, 1, [
    new Q('004378', 'Wednesday One-liners for Fashion Week', 'Hipster guy: So, this interview\'s gonna be all about Timmy\'s new sparkly belt?', 'da sarkastik ninja.', 1139421628)
  ])
  ,new S('Columbus Circle', 40.76848, -73.98187, 18, [
    new Q('005985', 'Are You Offering?', 'Guy: Yo, so did you do the AIDS walk thing?<br />\nGirl: No. I don\'t have AIDS.<br />\nHobo: Not yet she doesn\'t.', '', 1151373632)
    ,new Q('005710', 'Wednesday One-liners in Suits', 'Suit on cell: Hey, I found this guy I thought I\'d fix you up with, but I talked to Elliot and he said he wouldn\'t cross the street to piss on him, he\'s an ethical scumbag... Yeah, I <em>know</em> that\'s what everybody says about Elliott.', 'Ken', 1150322432)
    ,new Q('005656', 'Wednesday One-liners Should Stay on the Bus', 'Woman looking at statue: Did Columbus even make it to Manhattan?', '', 1149148832)
    ,new Q('004891', 'She Has Wretched Refuse on Her Wish List', 'Chick: Why doesn\'t anyone give monuments as gifts anymore?<br />\nTeen boy: ...Ha, ha, ha!<br />\nChick: No, you know what I mean, like the Statue of Liberty. <br />\nTeen boy: Wouldn\'t it be great to blindfold someone, telling them you\'ve got this great surprise for them, then take them to the Statue of Liberty, take the blindfold off and say: \"It\'s for <em>you</em>!\"', 'Chloe Amara', 1144432844)
    ,new Q('004925', 'Wednesday One-liners Count Calories', 'Chugger woman: Excuse me, would you like to sign a petition to reduce the cost of Swiss cheese?', 'bugkat', 1143684023)
    ,new Q('004269', 'Wednesday One-liners Assume', 'Guy on cell: I would definitely, like, you know, lick their anus.', '', 1138226429)
    ,new Q('004105', 'Wednesday One-liners Are a Dumb Idea', 'Guy on cell: Yeah, this is the stupidest thing ever! All that stuff I did before doesn\'t even seem stupid anymore.', 'Jason Evans', 1137002440)
    ,new Q('003891', 'Cigarettes & Alcohol Fuel Wednesday One-liners', 'Chick: But I can\'t, like...Can I.. ash, like, right here on the sidewalk?', 'djlindee', 1135202450)
  ])
  ,new S('Duane Reade, 49th & 9th', 40.76286, -73.98943, 14, [
    new Q('004299', 'He\'s Craving That Nicotine Again', 'Little boy: Mom? Can I have this gum? I haven\'t had this in <em>years</em>!<br />\nMom: \"Years\"? You\'re only 5!', '', 1139637621)
  ])
  ,new S('Subway, 57th & Lexington', 40.76091, -73.96914, 16, [
    new Q('003895', 'Hunger for Wednesday One-liners', 'Guy: I\'ll have a six inch veggie delight on wheat. I can\'t wait for the war to be over, so I can have meatball again.', 'Scott', 1135209646)
    ,new Q('003501', 'A Prescription of Wednesday One-liners', 'Cashier girl: Bye, sir! Thank you! And feel better...you look sick!', '', 1132178451)
    ,new Q('003323', 'It\'s Time for NYC Short Stories', 'Guy #1: What time is it?<br />\nGuy #2: One o\'clock.<br />\nGuy #1: <em>What</em>? How long has it been one?<br />\nGuy #2: Less than a minute?', '', 1132099241)
  ])
  ,new S('44th & 8th', 40.75852, -73.98887, 16, [
    new Q('006105', 'Wednesday One-Liners\' Excrement Adventure', 'Old man, to man who has just sneezed on him: Fuck you, you shithead! Ya goddamn farthole!', 'Jeremy Tortora', 1153324800)
    ,new Q('006099', 'Wednesday One-Liners Have a Price on Their Heads', 'Woman on cell: Hey, Jane*, in case I get thrown in jail tonight you have the money for bail, right?', '', 1152741600)
    ,new Q('005862', 'Color Me Beautiful Changed His Whole Worldview', 'Woman #1: What\'s he wear now?<br />\nWoman #2: He\'s completely switched. Now he likes to wear button-down shirts with cufflinks.<br />\nWoman #1: That probably looks much better. His face is way too brown to be goth.', 'Pete', 1150516832)
    ,new Q('005636', 'Fleet Week, Day 7', 'Drunk guy #1: Man, I gotta get <em>laid </em>tonight.<br />\nDrunk guy #2: I\'m sure there\'s a costume shop around here somewhere.  You\'d totally increase your chances if you wore a sailor outfit.<br />\nDrunk guy #1: Yeah... but I like pussy.', 'Peebs<br />', 1148983232)
  ])
  ,new S('Houston & Mercer', 40.72584, -73.99755, 7, [
    new Q('005545', 'So Then You Gave Him Money?', 'Guy:  So, anyway, the short of it is, he is the only guy I ever slept with who didn\'t end up giving me money. He was amazing.  <br />\nGirl:  Hmm-mm. I see.', 'Angela<br />', 1148443232)
  ])
  ,new S('8th & B', 40.72568, -73.98078, 1, [
    new Q('004859', 'Wednesday One-liners Will Miss Greenspan', 'Girl: I made a New Year\'s resolution to be less responsible, but it just didn\'t work.', 'Mr Smith', 1143079259)
    ,new Q('004849', 'Wednesday One-liners Rocket', 'Guy: Dude, if they ever ask you for a massage, don\'t get one. They strap this weird dildo thing on their hands and then rub it all over your face. Then it makes this <em>chuga chuga chuga </em>sound. It\'s ridiculous.', '', 1143028806)
    ,new Q('003832', 'Wednesday One-liners Aren\'t in the Best of Health', 'HS guy: You\'re the only person in the world with a tattoo that <em>leaks</em>! Why you gotta get a tattoo that leaks, son? You fakin\' it.', '', 1134612036)
  ])
  ,new S('Queens Blvd & 59th St, Queens', 40.76058, -73.96436, 26, [
    new Q('005474', 'Wednesday One-liners Think They Had Fun', 'Girl on cell: Apparently, I took my pants off.', 'Nina<br />', 1147924832)
  ])
  ,new S('44th & 5th', 40.75477, -73.97994, 16, [
    new Q('003354', 'The Womb of Wednesday One-liners', 'Guy on cell: I don\'t want your money, just the rights to your son.', '', 1130990446)
  ])
  ,new S('79th & Lexington', 40.77495, -73.95892, 21, [
    new Q('003691', 'Why Yell When You Can Think Louder?', 'Guy: I believe in telepathy. I know everything about psychology.<br />\nGirl: Telepathy is not an accepted kind of psychology. My dad\'s a prominent psychologist.<br />\nGuy: Psychologists are torn on telepathy. Take my word as truth...<em>it\'s real</em>!', 'Dave', 1134691255)
  ])
  ,new S('Madison between 55th & 56th', 40.76128, -73.97306, 16, [
    new Q('003048', 'Happy Imperialism Day, New York!', 'Suit #1: You know why this three day weekend is so great?<br />\nSuit #2: Because it\'s three days?<br />\nSuit #1: No, because the kids will be in school.<br />\nSuit #2: They don\'t give them Columbus Day?<br />\nSuit #1: Nope. I guess because they get off for the Jewlidays.<br />\nSuit #2: Must be a Jersey thing.', '', 1128938438)
  ])
  ,new S('Broadway', 40.7985, -73.9691, 18, [
    new Q('006120', 'M4M Wednesday One-Liners', 'Mom, to young son: It\'s not a matter of being gay or not, darling. I just won\'t let you participate in your school play.', '', 1153317600)
    ,new Q('005294', 'Wednesday One-Liners for Homeland Security', 'Little boy: Mom! New York City is being overtaken by taxis!', '', 1147255232)
  ])
  ,new S('Christopher & Bleecker', 40.73339, -74.0043, 11, [
    new Q('005901', 'Memories of the Meth Years', 'Black lesbian: I\'ve been in this neighborhood for so long.<br />\nBlack gay guy: Mhh-hmmmh.<br />\nBlack lesbian: Oh man!  See that brownstone?  <em>Years</em> ago I was invited to a wedding reception there.  It was awesome.  Beautiful.  I was sitting right up front and laughing and crying with the rest of the family, like,  I love you ladies! Damn, to this day, I still don\'t know how the hell I got there, or who those bitches were.', 'grrryphon', 1150761632)
    ,new Q('005594', 'It\'s So Sad About Her Gambling Problem', 'Guy #1:  I got a letter from Rosalyn & Jimmy Carter.<br />\nGuy #2:  Oh really?  How are they doing?<br />\nGuy #1:  Good, they want money.', 'Carl<br />', 1148680832)
    ,new Q('005253', 'His Dad Is Small Potatoes', 'Little boy: So far, this is the worst day of my life.<br />\nMom: Oh, no. You\'re still a small fry.<br />\nLittle boy: I am <em>not</em> a \"small fries!\" Why do you keep saying that?', 'Manhattman', 1146405632)
    ,new Q('003553', 'Take a Moment to Love New York', 'Hobo: Isn\'t that beautiful?', 'gizzard', 1134072040)
  ])
  ,new S('80th & 3rd', 40.77494, -73.95681, 21, [
    new Q('003255', 'Have You Checked the Trunk?', 'Chick #1: You know I wanna lose some weight, especially in my hips.<br />\nChick #2: I felt like that a while ago. I was dating this guy and when him and I broke up I wanted to be slimmer when I saw him again.  Girl, I took some weight loss pills and lost about 20 pounds. When I saw him again he said I looked sick. I had fucked around and lost my ass. I still haven\'t gotten it back yet.', 'Divine Essence', 1131480041)
  ])
  ,new S('19th & 8th', 40.74282, -74.00029, 0, [
    new Q('005293', 'Hygienic Wednesday One-Liners', 'Thug on cell: Yeah!  So now I gotta put powder on my balls....', 'Tony Zisa', 1147327232)
    ,new Q('004168', 'Maybe He Was Doing Her a Favor', 'Girl: I heard on CNN today that this woman in France just received the first successful face transplant after she was mauled by her Labrador. They replaced like her whole nose and lips and chin or something.<br />\nGuy: Whoa.<br />\nGirl: I know!<br />\nGuy: I mean, I thought Labradors were, like, really friendly.', 'Lara P', 1137571227)
  ])
  ,new S('14th & 4th', 40.73442, -73.98991, 1, [
    new Q('004856', 'Wednesday One-liners Still Like Jesse', 'Black man on cell: They are some racist f_ckers in there. They wouldn\'t help me because they are so racist. And you know what, that racist motherf_cker was a bin Laden bitch too!', '', 1143057654)
    ,new Q('004386', 'Wednesday One-liners Are Killer', 'Guy on cell: No, Grandma. No, <em>shut up</em>! <em>Grandma, I\'m going to fucking kill you</em>!', '', 1139457646)
    ,new Q('004385', 'Call a Doctor, Wednesday One-liners!', 'Woman on cell: April Fool\'s motherfucker, I ain\'t knocked up, April Fool\'s, but I still gotta get that blood test.', 'tim L', 1139450418)
    ,new Q('004385', 'Call a Doctor, Wednesday One-liners!', 'Woman on cell: Don\'t you know how to do CPR? Cardio...pul-something.  <br />\nYou know the thing to keep people from breathing?', 'Jarett Wieselman', 1139450418)
    ,new Q('003435', 'Relationship Problems? Try Wednesday One-liners', 'Guy on cell: I understand that, like, it\'s hard to be in that kind of place without me, but, like, you\'re an asshole. Bye.', 'ani', 1131573637)
    ,new Q('003430', 'Isn\'t That Rich, Wednesday One-liners?', 'Drunk charity guy: Help me feed the homeless, everybody! Help feed the homeless! I\'m sitting here all goddamn day waiting for you guys to help me, but you\'re too goddamn greedy! I bust my ass trying to help people while you\'re in there spending twenty fucking dollars on a cup of fucking coffee!', '', 1131559212)
    ,new Q('003261', 'She Was in Hysterics in the Operating Room', 'Mom: Now don\'t you get hit by a car crossing the street \'cause I will laugh at you both.<br />\nBoy: Mom!<br />\nMom: I\'m sorry but it\'s true.', 'BG', 1131400808)
  ])
  ,new S('KFC, 125th & 7th', 40.80893, -73.94825, 22, [
    new Q('004217', 'Nice is for France', 'Girl #1: I don\'t understand why they gotta say \"How you doin\'\" and \"Have a nice day.\"<br />\nGirl #2: They\'re trying to be nice, stupid.', 'Edwina P. Garza', 1139018443)
  ])
  ,new S('Liberty & Broadway', 40.70916, -74.01055, 5, [
    new Q('004339', 'That\'s Only if the BF is in Town', 'Guy #1: I wake up at a quarter to 5 every day.<br />\nGuy #2: Why?<br />\nGuy #1: I get up to pee.<br />\nGuy #2: Every day?<br />\nGuy #1: It\'s that, or I go in bed.', '', 1139990446)
  ])
  ,new S('Broadway & 33rd, Astoria', 40.74902, -73.98806, 0, [
    new Q('005567', 'Wednesday One-Liners Are Being Watched', 'Queer on cell: Sunday? Well, I hate to say this out loud on a cell phone where the authorities can hear, but. . . that\'s Tonys night.', 'lily carver', 1149674432)
    ,new Q('003426', '\"The L Word\" is Wednesday One-liners', 'Preacher man: Your country is nothing but homosexuality and lesbians!', 'dp', 1131537627)
  ])
  ,new S('AMC Empire 25, West 42nd Street', 40.75683120568008, -73.98950815200806, 17, [
    new Q('004897', 'They Were Seeing Red', 'Chick #1: There was too much talking in that movie and not enough action.<br />\nChick #2: Yeah. It was all like too much communism and sht.', 'Nico Westerdale', 1143442839)
    ,new Q('004681', 'Hence \"Latin America\"', 'Girl #1: What did she just say?<br />\nGirl #2: She said \"quesadilla\".<br />\nGirl #1: Huh?<br />\nGirl #2: It\'s Latin.', '', 1142762408)
    ,new Q('004304', 'Plus, Rosie Had the Most Ice Cream', 'Girl: Wait, why\'d she have a makeover?<br />\nGuy: Because she was ugly.<br />\nGirl: Then why\'d you go out with her?<br />\nGuy: Because I was gay.', 'JC', 1139695254)
    ,new Q('004184', 'Wednesday One-liners on Telemundo', 'Woman: I speak better Spanish after a shot of tequila.', 'katrina j.', 1137592840)
    ,new Q('004051', 'That Makes Brokeback Seem Gangsta', 'Guy #1: I\'m a gangsta. And gangsta people see gangsta movies. You go see that <em>Hong Kong</em>, <em>King Kong</em> or whatever.<br />\nGuy #2: What about <em>In The Mix</em>?', 'Nathaniel Taylor', 1136638821)
    ,new Q('003564', 'Overheard in New York: The Movie', 'Black chick #1: Girl, he so fine. <br />\nBlack chick #2: Mmm... <br />\nQueer: Yes, we <em>all know</em> he\'s fine, but shut the fuck up!', 'Scott Hoffman', 1134057606)
  ])
  ,new S('12th St. between 7th & 8th Ave, Park Slope', 40.73737, -74.00271000000001, 11, [
    new Q('005210', 'Wednesday One-liners: Not Ready for the Olympics', 'Parking garage attendant: I ain\'t even playin\'. This is not a game. I can eat the pussy for three hours. Straight.', '', 1146110432)
  ])
  ,new S('Merrill Lynch lobby, Broadway & Park Row', 40.81179, -73.96104, 20, [
    new Q('005492', 'Wednesday One-liners Teach Your Children Well', 'Parent: My son is only two years old, sittin\' at the bar, talkin\' \'bout \"old  school.\"  How you gon\' talk \'bout \"old school\" when you two years old?  I think my brother taught him that.', '', 1148464832)
  ])
  ,new S('10th & Hudson', 40.73373, -74.00629, 11, [
    new Q('002945', 'Ooh, the New Volkswagen!', 'Guy #1: Your car is totally Jewish.<br />\nGuy #2: My car is not Jewish. My car is a Jew hater.', '', 1129276806)
  ])
  ,new S('Taj Mahal, 6th St between 1st & 2nd', 40.7269, -73.987375, 1, [
    new Q('006182', 'Wednesday One-Liners Tie the Knot', 'Supportive friend: Well, they\'re past the murder-suicide part of their marriage, so that\'s good.', '', 1153972800)
    ,new Q('006271', 'Wednesday One-Liners Get Around', 'Dude: And after the party, everyone gets innoculated and takes the morning after pill.', 'lish', 1153375200)
  ])
  ,new S('38th & Park', 40.74962, -73.97957, 3, [
    new Q('004925', 'Wednesday One-liners Count Calories', 'Girl: I am the Velveeta heiress.', '', 1143684023)
  ])
  ,new S('Madison between 52nd & 53rd', 40.75942, -73.974445, 16, [
    new Q('003431', 'Wednesday One-liners Are #1!', 'Woman: So I went to that play and I had to pee so bad so I left and those bouncer guys wouldn\'t let me back in. I had to wait until half-time.', 'Becki', 1131602403)
  ])
  ,new S('25th & 3rd', 40.74011, -73.98223, 27, [
    new Q('005385', 'Politically Informed Wednesday One-Liners', 'Crazy old woman: It\'s the United States government, they did this -- ruined my hair, my skin, my nails.', 'nina', 1147932032)
    ,new Q('004623', 'Hair Today, Wednesday One-liners', 'Girl on cell: Your <em>do-rag</em> ain\'t <em>doin\' nuthin\'</em>! It\'s the <em>way</em> you comb yo <em>hair</em>!', '', 1141228829)
    ,new Q('004068', 'Don\'t Forget Blind Hurdling', 'Teen girl #1: You know, the Special Olympics?<br />\nTeen girl #2: Special Olympics?<br />\nTeen girl #1: Yeah, Olympics for the retarded people.<br />\nTeen girl #2: You mean the wheelchair people that fight with each other?', 'Alanna Higgins', 1138010458)
  ])
  ,new S('33rd & 3rd', 40.74506, -73.97863, 27, [
    new Q('005211', 'Wednesday One-liners Make Parenting Fast & Easy', 'Dad to crying son: Are you crying cause you\'re really hurt, or are you crying cause you\'re a baby?', 'Matt Stanley', 1146124832)
  ])
  ,new S('Ludlow between Stanton & Rivington', 40.720645000000005, -73.98807, 8, [
    new Q('005205', 'It\'s Not You, It\'s Wednesday One-liners', 'Hipster girl on cell: Can I just tell you how much I hope my manager gets hit by a car?', '', 1146060032)
  ])
  ,new S('19th & Irving', 40.73705, -73.98653, 2, [
    new Q('003276', 'Wednesday One-liners Need an Accountant', 'Chick on cell: Oh my lord, I am walking down the street wearing all black, talking on my cell, gesturing with my pumpkin spice latte, and freaking out about whether I want to marry my investment banker boyfriend. Kill me now. Shoot me and send me back to Mexico. Seriously. I think I need to go live with my grandmother and take care of the goats or something.', '', 1130349657)
  ])
  ,new S('Maiden & William', 40.70796, -74.008, 5, [
    new Q('006087', 'Wednesday One-Liners Need at Least a C Cup', 'Bag lady: Hey, those tits look great on you!', 'thanks, but they\'re not fake', 1152122400)
  ])
  ,new S('4th Street & 2nd Avenue', 40.72618, -73.98943, 1, [
    new Q('005932', 'Depends on the Face', 'Barfly: It was a term of endearment.\n<br />Bouncer: A term of endearment is not punching someone in the face.', 'Cait O\'Connor (and Foley)\n<br /> <span>Headline by: Dave Barnette <br /></span>', 1150999200)
    ,new Q('005114', 'Wednesday One-liners for That Slither Lady', 'Girl: Oh my god, she was like a size negative zero!', 'ak', 1145476820)
  ])
  ,new S('Lobby, 69th between 1st & York', 40.765375000000006, -73.956275, 21, [
    new Q('004385', 'Call a Doctor, Wednesday One-liners!', 'Doorman: I\'m gonna come back and give everybody a cold!', 'emily', 1139450418)
  ])
  ,new S('45th & 8th', 40.75915, -73.98841, 16, [
    new Q('004135', 'He\'s Crazy Because She\'s Totally a 7', 'Girl: One pack of Parliament Lights.<br />\nVendor guy: You 18?<br />\nGirl: Well, I\'m actually 22.<br />\nCrazy guy: Girly, you look like you are 10...but it\'s okay. I like that.', 'Ashley Graffeo', 1138312805)
    ,new Q('004112', 'Wednesday One-liners for Noah', 'Woman: I think Die Fledermaus <em>is</em> the bat!', '', 1137038418)
    ,new Q('003801', '\"The guy who publishes Overheard? Really?\"', 'Woman #1: Guess who I sat next to at dinner last night?<br />\nWoman #2: I have no clue. Jimmy Fallon?<br />\nWoman #1: No. <em>Denzel Washington</em>!<br />\nWoman #2: <em>Omigod</em>!<br />\nWoman #1: I know, I love him!<br />\nWoman #2: I loved him as God in <em>Bruce Almighty</em>. That was him, wasn\'t it?<br />\nWoman #1: No, that was Morgan Freeman, you dumb fuck.', '', 1135944013)
  ])
  ,new S('45th & 6th', 40.75675, -73.98273, 16, [
    new Q('005209', 'The Trailers Are the Best Part of Wednesday One-liners', 'Man talking to himself: Automated cartoon movie life. I don\'t want it.', 'Duncan Pflaster', 1146117632)
    ,new Q('004924', 'Wednesday One-liners Read Vogue', 'Vendor guy: Scarves! Get you a scarf! Keep that ass warm!', '', 1143676838)
  ])
  ,new S('34th & 10th', 40.75458, -73.99915, 0, [
    new Q('003272', 'Spooky Wednesday One-liners for Halloween', 'Guy on cell: Yeah man like...Red rum backwards is murder....yeah! I <br />\nswear!', 'keeley stalnaker', 1130320851)
  ])
  ,new S('W 10th & Greenwich', 40.73358, -74.00735, 11, [
    new Q('005918', 'That\'s the Idea', 'Girl #1: Ugh, I hate the teabag.<br />\nGirl #2: Oh, I love it! You\'ve got to embrace the teabag!', '', 1150869632)
  ])
  ,new S('Washington Square South & Macdougal', 40.73103, -73.99958, 12, [
    new Q('004047', 'Wednesday One-liners\' Scenes from The City', 'Teen girl: Is NYU a college, mom?', 'adam & Joanna', 1136426436)
  ])
  ,new S('13th & A', 40.72971, -73.98086, 1, [
    new Q('004443', 'Snuffy Ain\'t No Secret Anymore', 'Guy: We have to figure out a way to get rid of her bird. <br />\nGirl: I hate birds like that. They\'re full of secrets and dust. <br />\nGuy: And lice and opinions.', '', 1140847200)
    ,new Q('004374', 'Wednesday One-liners Press the Fontanelle', 'Man: Yeah, I love babies because they drink less and get wasted faster.', '', 1139407206)
  ])
  ,new S('57th & 9th', 40.7679, -73.98573, 14, [
    new Q('005294', 'Wednesday One-Liners for Homeland Security', 'Mother: Honey, don\'t do that. You\'ll look like a terrorist.', '', 1147255232)
    ,new Q('004920', 'Ego & Hubris & Wednesday One-liners', 'Queer: Then they said, \"I may have a woman\'s body, but underneath it all, I\'m a <em>prince</em>.\"', 'karyn regal', 1143648053)
  ])
  ,new S('57th between Park & Madison', 40.761905, -73.97151500000001, 16, [
    new Q('002992', 'It\'s All Downhill After Canal', 'Man: This is 57th and behind us is Madison and that\'s Park Avenue ahead, so 56th Street is to the right. <br />\nMatthew Perry: So it\'s set up like a grid?', 'joseph Caruso', 1129298411)
  ])
  ,new S('West Broadway between Duane & Reade', 40.71629, -74.008585, 4, [
    new Q('004108', 'The Shooting Death of Wednesday One-liners', 'Guy on cell: I\'m not <em>worried</em>, I just want to make sure he doesn\'t kill you.', 'Eve\'s droppings', 1137031250)
  ])
  ,new S('Elevator, Lexington between 31st & 32nd', 40.74479, -73.98089, 3, [
    new Q('002813', 'Tales From the Dork Continent', 'Guy: What language is that?<br />\nGirl #1: French.<br />\nGuy: Where are you girls from?<br />\nGirl #1: Morocco.<br />\nGuy: Oh, it\'s really beautiful there. Really wealthy too, right?<br />\nGirl #2: That\'s Monaco.', '', 1129572050)
  ])
  ,new S('72nd between Columbus & Amsterdam', 40.777995, -73.980225, 18, [
    new Q('005043', 'Thank You for Flying Wednesday One-liners', 'Girl on cell: Yeah, but it\'s illegal to take sand on a plane?', 'Samuel Hodak', 1144857618)
    ,new Q('003746', 'Wednesday One-liners: It\'s All About Location', 'Girl on cell: I\'m between 130 and 132, <em>where is it</em>?', '', 1134014456)
  ])
  ,new S('7th & Charles', 40.73506, -74.002, 11, [
    new Q('003414', 'Skinny Hatchet-faced People', 'Old lady: That\'s the brownstone where Matthew lives with Sarah Jessica Parker. She didn\'t grow up in the West Village, you know.<br />\nOld man: All that money they make, you think they\'d never settle for a house that\'s only 18 feet wide.<br />\nOld lady: Only skinny people can live there.', '', 1132624843)
  ])
  ,new S('West 66th between Amsterdam & West End', 40.775405000000006, -73.985825, 18, [
    new Q('005392', 'Wednesday One-Liners and Their Little Dogs, Too', 'Woman to terrier: Come on, Jazzy! Come on, Jazzercise!', 'Susan Volchok', 1147334432)
  ])
  ,new S('1st Avenue between 10th & 11th', 40.729074999999995, -73.984235, 1, [
    new Q('003954', 'Wednesday One-liners Are The Model Minority', 'Man: Just a few years ago, this area was so bad that the Asian <br />\ntourists used to come down here just to see how bad it was.', 'Patrick Ryss', 1135771241)
  ])
  ,new S('112th & Broadway', 40.8054, -73.96569, 20, [
    new Q('006107', 'Wednesday One-Liners Have Trouble Re-Folding the Map', 'Australian hipster: Could you tell me how to get back to Manhattan?', '', 1153332000)
    ,new Q('004779', 'Wednesday One-liners See No UHO Money', 'Hobo: Don\'t mess with me man, I\'ve smoked $5,000 worth of crack since September.', '', 1142467239)
    ,new Q('004697', 'Wednesday One-liners Wear Heatherette', 'Woman: Well, my hat guy is over there.', 'C. Marcus Carr', 1141848022)
    ,new Q('004256', 'You\'ve Seen One Imperialist You\'ve Seen \'Em All', 'Chick: I was in the Peace Corps down there.<br />\nWoman: Oh, I didn\'t know that.<br />\nChick: Oh, sorry, not the Peace Corps; Club Med.', '', 1140278410)
    ,new Q('003741', 'Wednesday One-liners for Pete Doherty', 'Guy on cell: Yeah, man. I\'m excited about this weed. I\'ve been wanting to smoke it forever, but I was waiting until after our honeymoon.', 'Jess Plu', 1133956815)
    ,new Q('003282', 'Wednesday One-liners Keep It in the Family', 'Girl on cell: My brother used to touch me...', '', 1130392823)
  ])
  ,new S('Manhattan Diner, 77th & Broadway', 40.7825, -73.98093, 18, [
    new Q('004125', 'If They\'re Gonna Clean, They\'re Gonna Clean Stool', 'Woman: I remember kindergarten. I got lots of candy and everyone wanted to play with me and I used to wet the bed a lot.<br />\nMan: You used to what?<br />\nWoman: I used to wet the bed. So they decided to move my bed farther away from the bathroom.', '', 1138644043)
  ])
  ,new S('Mott & Spring', 40.72161, -73.99547, 9, [
    new Q('004464', 'Wednesday One-liners Distrust the Monotremes', 'British guy: She said I looked like Tony the Tiger! <em>Grr</em>!', 'Jason Flahardy', 1140048006)
    ,new Q('003554', 'Stop Using Sex as a Weapon', 'Hipster guy: Wax makes my hair too sticky, I like the mud better.<br />\nHipster girl: I can\'t believe we have sex.', '', 1133805636)
    ,new Q('003443', 'Everyone Knows White Lies are the Best Kind', 'Hobo: Hey, can you guys spare some money?<br />\nChick: No, sorry.<br />\nHobo: That is a <em>white lie</em> from some <em>white</em> people!', '', 1132945250)
  ])
  ,new S('Broadway & Washington Place', 40.83534, -73.94408, 24, [
    new Q('004706', 'I See MTA Work in Your Future', 'Guy #1: <em>Hall of psychics</em>! <br />\nGuy #2: That says \"physics\".', 'mara', 1142913615)
  ])
  ,new S('49th & 5th', 40.7579, -73.97768, 16, [
    new Q('003833', 'Wednesday One-liners Hate Project Runway', 'Chick: Someone should tell him life is not like a suitcase.', '', 1134604824)
    ,new Q('002984', 'Wait Until They Get to \"Touch\"...and \"Taste\"', 'Girl: Look, Rocafella Plaza is right there!<br />\nGuy: Where? I don\'t see shit.<br />\nGirl: I hope you can see if you step in it<br />\nGuy: Actually I smell shit right now, do you smell that shit?<br />\nGirl: Yeah I do, but I bet you can\'t see it.', 'Christine Rinaldi', 1129075206)
  ])
  ,new S('5th & C', 40.72289, -73.97972, 1, [
    new Q('003435', 'Relationship Problems? Try Wednesday One-liners', 'Guy: So, I\'m on the phone with her last night and the bitch keeps on talking and talking. And I just wanna go to sleep, you know? And she wants to talk. So finally I\'m like, \"Bitch, stop talking, I wanna go to sleep.\" And then she starts fucking crying! And I\'m like, \"Yo bitch, stop fucking crying. I want to sleep!\"', 'Jenya', 1131573637)
  ])
  ,new S('Popeye\'s, 116th & Lenox', 40.80196, -73.94962, 22, [
    new Q('004984', 'Wednesday One-liners Use the Blue Parking', 'Man: Yeah, the problem is that I\'m standing in the...not the express line, what do you call the other one? Oh, yeah, the special people line.', 'Joaquin Tejada', 1144231202)
    ,new Q('004442', 'The Hearing Aid Went Out', 'Old woman: Did you hear what I said? <em>Did you hear me</em>?<br />\nOld man: I heard you, woman. But I can\'t hear you now!', '', 1140861637)
  ])
  ,new S('Calle Ocho, 81st & Columbus', 40.78324, -73.97456, 18, [
    new Q('006093', 'Wednesday One-Liners Aren\'t So Vanilla', 'Dude, to his female date: So, do you like to do anal? Come on, you can be honest. You\'ve already blown me.', 'Sara', 1152151200)
    ,new Q('003447', 'Tell Him New York Wants to Have a Talk', 'Crazy guy: Hey! How are you?<br />\nLady: Hello.<br />\nCrazy guy: This is my Ethiopian friend, we are going to get Osama!', '', 1132682443)
  ])
  ,new S('Central Park South between 5th & 6th', 40.76497500000001, -73.97464, 16, [
    new Q('004047', 'Wednesday One-liners\' Scenes from The City', 'Lady: It is so touristy here with the horses!', 'Lubes', 1136426436)
  ])
  ,new S('Sunglass Hut, Spring & W Broadway', 40.72454, -74.00193, 7, [
    new Q('005945', 'Both, Plus a Touch of LaToya Jackson', 'Guy: I\'m looking for something Onassis-like.<br />\nSalesgirl: Jackie or Ari?', 'Bette Davis Eyes', 1151121632)
    ,new Q('005638', 'It\'s Impossible to Keep Them All Straight', 'Girl #1: Oh my god. My boyfriend just cheated on me.<br />\nGirl #2: Holy sht! Which one?', 'striped shirt', 1149012032)
  ])
  ,new S('22nd & 11th', 40.74817, -74.00741, 0, [
    new Q('004369', 'Step Away from the Phantom Tollbooth', 'Chick: Wait, people are still inside. <br />\nProfessor lady: I should do a head count. 2, 4, 6...Wait, I don\'t know how many people we started with.', '', 1140228006)
  ])
  ,new S('55th & 5th', 40.76164, -73.97492, 16, [
    new Q('004692', 'Wednesday One-liners for Sprint Ambassadors', 'Woman: That\'s the problem with today, you never know if someone is crazy or if they have one of those headset things.', '', 1141812033)
  ])
  ,new S('13th & University', 40.73452, -73.99227, 12, [
    new Q('006384', 'Spare the Rod and Spoil the Wednesday One-Liners', '3-year-old girl: Daddy, does this helmet make me look crazy?', '', 1154534400)
    ,new Q('003578', 'Stranger Things Have Happened on Endor', 'Chick: What\'s with the Wookie-Ewok love?<br />\nGuy: Dude, that\'s harsh.', '', 1133870410)
  ])
  ,new S('Office, 42nd & 3rd', 40.75075, -73.97446, 15, [
    new Q('005384', 'Wednesday One-Liners Love Entertainment Weekly', 'One fiftyish guy to another: So, did you hear I won an Emmy?', 'Caroline McGraw', 1147284032)
    ,new Q('004773', 'Reach Out & Touch Wedneday One-liners', 'Girl on phone: Whatever, she could totally do it with one hand. There were two girls in my school with only one hand.', 'Noah Gallagher', 1142438449)
  ])
  ,new S('67th & 2nd', 40.7656, -73.96067, 21, [
    new Q('005840', 'Wednesday One-liners Don\'t Go There', 'White girl on cell:  I can\'t take the subway now, it\'s 10 o\'clock.  I\'m not black.', '', 1150884032)
  ])
  ,new S('1st Avenue & 9th Street', 40.72819, -73.9849, 1, [
    new Q('004660', '\"We were in Narnia; her wardrobe malfunctioned.\"', 'Guy #1: So, I had this dream about Janet Jackson last night.<br />\nGuy #2: Yeah?<br />\nGuy #1: She told me, \"Mitch, get your shit together\".', '', 1142524800)
    ,new Q('004456', 'Wednesday One-liners Tip the Scales', 'Chick: So then this huge fat lady with really bad teeth said, \"This is the most fabulous party I\'ve ever been to,\" so I left.', '', 1140012045)
    ,new Q('004171', 'Guys Like That Much More', 'Asian girl: I really like sleep sex.<br />\nWhite girl #1: What\'s that?<br />\nAsian girl: You know, when you\'re sleeping and you wake up and you\'re having sex. Sleep sex.<br />\nWhite girl #2: You mean getting raped?', '', 1138665638)
    ,new Q('004260', 'It\'s Not Looking Good, Wednesday One-liners', 'Girl: And every time she\'d yell at me for something I just wanted to be like, \"Shut up, you\'re ugly.\"', 'Park Slope', 1138190426)
    ,new Q('003358', 'Wednesday One-liners Are Not Quite PC', 'White woman: When I was a little girl my grandmother told me that I couldn\'t marry a black man cause she didn\'t want her grandbaby havin\' spots.', 'Dale Bookout', 1130983236)
    ,new Q('003072', 'The Secret Comedian Cells Spring Into Action', 'Suit #1: I know where we are.<br />\nSuit #2: Where?<br />\nSuit #1: On the corner!', 'Your Mom', 1129845600)
    ,new Q('002994', 'Haven\'t You Heard of This Midwest Place?', 'Guy: We could go to Coyote Ugly.<br />\nGirl: Or Cheap Shots!<br />\nGuy: Ugh.<br />\nGirl: Boo-yah! I bet that\'s the only place down here I could yell \"boo-yah\" and people would yell it with me. With sincerity.', '', 1129370454)
  ])
  ,new S('Bowery & 6th', 40.711, -73.96536, -1, [
    new Q('004377', 'Wednesday One-liners Could Use Some Color', 'Bike guy: Hey, vanilla and chocolate...Mmm, makes caramel!', 'sam', 1139400006)
  ])
  ,new S('Chambers & Church', 40.71491, -74.00795, 4, [
    new Q('004851', 'Wednesday One-liners by Storm Field', 'Asian girl: Whoa! It\'s raining ice!', 'David Liu', 1143036031)
    ,new Q('003658', 'Wednesday One-liners: The Pole', 'Old man on pay phone: If I see another nigger on this street, I\'m gonna rip his dick off and eat it!', '', 1133395222)
  ])
  ,new S('24th & 9th', 40.74714, -74.00085, 0, [
    new Q('003101', 'Especially on that Street Corner', 'Guy: Man it would suck to be homeless. I would just kill someone and go to prison where at least you get a nice warm place to sleep and some food and shit.<br />\nGirl: Or you could steal some stuff, that way if you don\'t get caught it\'s awesome and if you do you get to go to a nice warm prison.<br />\nGuy: Yeah, prison in the US is pretty sweet, I\'d bet--not like in other countries.<br />\nGirl: Except there is a lot of talk about ass-raping.', '', 1130061629)
  ])
  ,new S('Filene\'s Basement, 79th & Broadway', 40.7838, -73.97989, 18, [
    new Q('004900', 'Silence is the Old Golden', 'Woman #1: You know, black is the new pink...Did you hear me?<br />\nWoman #2: Yeah, I just chose not to respond.', 'lady cub', 1144620018)
    ,new Q('004841', 'How Was Your St. Paddy\'s Day, New York?', 'Guy: Man, I am wasted.<br />\nGirl: Dude, this is the anniversary of my nipple piercing...I just wanted to say that.', 'Aussie on Tour', 1142884801)
    ,new Q('003928', 'Angelina is Such a Trendsetter', 'Old Jewess: Where are you from originally?<br />\nPreggers: China.<br />\nOld Jewess: Oh that\'s good, because you know everyone wants an Asian baby now.', 'Barth', 1136692817)
    ,new Q('004047', 'Wednesday One-liners\' Scenes from The City', 'Guy on cell: Gross, gross; the East Side is gross.', 'Theo', 1136426436)
    ,new Q('003094', 'I\'m Hungee for Wednesday One-liners', 'Activist lady: \"Fish stinks in the head.\" Haven\'t you ever heard that expression?', 'S. K. & S.D.', 1129168856)
  ])
  ,new S('13 & Broadway', 40.705392, -74.013722, 5, [
    new Q('004466', 'The Beauty That is Wednesday One-liners', 'Guy: Yeah man, this girl was hot. It\'s not even questionable!', 'A. M.', 1140076805)
  ])
  ,new S('52nd & 5th', 40.75979, -73.9763, 16, [
    new Q('004560', 'Wednesday One-liners Like Cans of Beans', 'Hobo: Anybody want to take the day off and cuddle with me? It\'s kosher!', 'Jess Fjeld', 1140645642)
    ,new Q('004314', 'Wednesday One-liners Punch Pat Benatar', 'Guy on cell: I mean...I wasn\'t about to beat a bitch, but...', '', 1138788035)
    ,new Q('004114', 'Wednesday One-liners Rx', 'Santa: Hey, can you reach into my backpack and hand my my wig and the Zoloft?', '', 1137052824)
  ])
  ,new S('Houston & B', 40.72153, -73.98378, 1, [
    new Q('004590', 'She Wore the Kerchief for Him', 'Girl: I wish I hadn\'t eaten those pancakes for breakfast. I feel sick. Thanks a lot.<br />\nGuy: \"Thanks a lot\"? All you wanted to do this morning was eat pancakes!<br />\nGirl: What? I just wanted oatmeal. You are the one who woke up and said, \"Yay! Let\'s make pancakes!\" You are the one who wanted them!<br />\nGuy: That\'s because last night you said you wanted pancakes!<br />\nGirl: Oh. I was drunk.', 'alison', 1142035211)
  ])
  ,new S('Broadway between Grand & Howard', 40.720375000000004, -74.001045, 7, [
    new Q('004769', 'Howie Mandel in 5 Years', 'Girl #1: I don\'t understand why he\'s so popular.<br />\nGirl #2: It\'s obviously because he\'s a drug dealer.', '', 1143856858)
    ,new Q('004465', 'Wednesday One-liners See NYC', 'Man on cell: No, we\'re probably going to go to the Rocket Feller Center.', '', 1140055207)
  ])
  ,new S('181st & Broadway', 40.85017, -73.93576, 24, [
    new Q('004400', 'They Sure Carved Names for Themselves', 'Guy #1: How was that class for you? Was it like a war?<br />\nGuy #2: For me? It was more like walking through a preschool with a chainsaw.', '', 1140717655)
  ])
  ,new S('Washington Place & Mercer', 40.72939, -73.99456, 12, [
    new Q('004375', 'God Tells Wednesday One-liners to Kill People', 'Girl on cell: He carries around a fucking Bible in his bag! And when he isn\'t, you know, reading his Bible, he\'s talking about how he likes to stick his tongue in girls\' assholes!', '', 1139392849)
  ])
  ,new S('47th St & 21st Ave, Astoria', 40.7439, -73.94876, -1, [
    new Q('005753', 'Scalpel...Corkscrew...', 'Teen girl #1: Ew, foreskin, like why? Get circumcised. Clean it up.<br />\nTeen girl #2: Seriously. Right. Oh god I\'d never go down on a guy with foreskin, not even the guy I\'m marrying.<br />\nTeen girl #1: I\'d be like, take care of it and then talk to me.<br />\nTeen girl #2: Seriously.', 'Thankfully Circumcised', 1149796832)
  ])
  ,new S('7th & A', 40.72605, -73.98353, 1, [
    new Q('005573', 'Good Christian Wednesday One-liners', 'Girl to friends: Do either of you have a really nice picture of Jesus? I need to make an ashtray.', 'Ty!', 1149098432)
    ,new Q('004033', 'The Noid Has Gotten Much Subtler', 'Queer #1: What should I get? I\'ll have a falafel. Ha, ha!<br />\nQueer #2: I\'ll have one of these lamb slices.<br />\nPizza guy: Eggplant.<br />\nQueer #2: No, one of these.<br />\nPizza guy: That\'s eggplant.<br />\nQueer #2: Oh...Well, it looked like lamb.<br />\nQueer #1: I\'m gonna throw caution to the wind and get a cheese slice.<br />\nQueer #3: That\'s not lamb. Maybe you should ask for a duck confit slice.', 'Domi', 1138723216)
    ,new Q('003660', 'Heavenly Wednesday One-liners', 'Punk girl: I dunno man, either he\'s got a contract with Satan or a million guardian angels...', 'Michael Mulvey', 1133416812)
    ,new Q('003366', 'Come Back, Maple Syrup!', 'Woman: It might smell in here, and if it smells we are leaving.', 'Danielle', 1131019250)
  ])
  ,new S('Union Square W & 15th', 40.73587, -73.99121, 13, [
    new Q('005944', 'Now We Understand Her Choice of Boyfriends', 'Girl on cell: Oh my god, I\'ve been having the shittiest day today. No, it has nothing to do with our conversation this morning. Listen, believe it or not, I can have a shitty day that has nothing to do with you...Ugh, I have no idea why<br />\nI called you. [hangs up] My fucking dad. I can\'t even get a sympathy \"it\'s all rainbows and bunnies\" phone-hug from him!', 'someone who knows how she feels', 1151128832)
  ])
  ,new S('34th between 7th & 8th', 40.751575, -73.992055, 0, [
    new Q('004060', 'That\'s Because He Hadn\'t Found Jesus', 'Guy #1: What can I say? I\'m a sucker for orphan stories.<br />\nGuy #2: Or something.<br />\nGuy #1: Think about it: I loved Lemony Snicket, <em>Party of Five</em>, <em>Diff\'rent Strokes</em>, <em>Star Wars</em>.<br />\nGuy #2: Yeah. Wait. Luke wasn\'t an orphan.<br />\nGuy #1: Well, he sort of was, spiritually.', 'cityhick', 1138680058)
    ,new Q('003984', 'Attack of the iPod People (NYC Short Stories)', 'Guy #1: My iPod called me a homo this morning.<br />\nGuy #2: <em>What</em>?<br />\nGuy #1: I had it on shuffle and it played a nonstop string of <em>Rent</em>, <em>Oklahoma</em>, Barbara Streisand, Donna Summer and, best of all, <em>Annie: The Musical</em>. <br />\nGuy #2: Wow, you said, \"Best of all, <em>Annie</em>.\" That\'s amazingly gay.', '', 1137096000)
  ])
  ,new S('5th & B', 40.72387, -73.98207, 1, [
    new Q('004385', 'Call a Doctor, Wednesday One-liners!', 'Man: Oh yeah, he\'s a really nice guy. He\'s on dialysis.', 'A. Ward', 1139450418)
  ])
  ,new S('40th & 8th', 40.75594, -73.99076, 17, [
    new Q('004828', 'Yeah, It\'s Not Like We Know What We\'re Doing', 'Guy #1: Excuse me, sir, but do you know you\'re <em>white</em>?<br />\nGuy #2: Yes, I do know that. Now will you stop following me?', 'Suriya', 1143619200)
    ,new Q('004104', 'Wednesday One-liners Do It 9 to 5', 'Suit: So I told him, \"You might not be working on the work that you\'ve been working on, but you\'re definitely going to be working on work.\"', '', 1136980846)
  ])
  ,new S('Apartment building, 66th & West End', 40.77602, -73.98724, 18, [
    new Q('003151', 'Keep Holding the Rest of Us Up, You Dumb Farts', 'Old lady: Julian! Get in the elevator, we are holding it for you.<br />\nOld man: I am in the elevator, it\'s just my ass that was dragging behind.', 'Lubes', 1130551231)
  ])
  ,new S('The Strand', 40.73321007823572, -73.99113893508911, 12, [
    new Q('005111', 'Wednesday One-liners, Chronic Matriculators', 'Hippie guy: That\'s plagiarism; that\'s different than ripping someone off.', 'Charles A. L.', 1145462425)
    ,new Q('005112', 'Wednesday One-liners is Fundamental', 'Man: With this many books you are almost certain to make a mistake in your choice.', '', 1145469639)
    ,new Q('004784', 'Sentenced to One Hundred Years of Solitude', 'Girl: Come sign for this. I can\'t, I\'m not 21 yet.<br />\nGuy: It\'s a bookstore, nigga, not the Feds!', '', 1143489648)
    ,new Q('004473', 'Like a Big Blue Monster Sitting in Your Heart', 'Guy #1: Cookies!<br />\nGirl: I don\'t know if I want to bring in the cookies tomorrow; they\'re so heavy.  <br />\nGuy #2: You know what\'s heavier? The guilt you\'ll feel for disappointing us.', '', 1140958803)
    ,new Q('004175', 'She Went to Hell Twice', 'Guy #1: I bought my dad a Clint Eastwood biography for Christmas. I feel like that\'s a pretty solid bet for any dad. Clint, Frank Sinatra, maybe Brando.<br />\nGuy #2: What about James Dean?<br />\nGuy #1: Yeah, I guess. What about that Vin Diesel?<br />\nGuy #3: You are seriously obsessed, dude.<br />\nGuy #1: Don\'t hate on the Diesel. Ooh, you know who everyone loves?  That Anne Frank.<br />\nWoman: Anne Frank was a lesbo.', '', 1137729608)
    ,new Q('004128', 'The Literacy is 50% Off Too', 'Thereupon David Foster Wallace gave the thumbs up.', '', 1137506405)
  ])
  ,new S('Lobby, 26th between 11th & 12th', 40.751235, -74.00673499999999, 0, [
    new Q('004043', 'Wednesday One-liners Love Bathroom Humor', 'Security guy: Yeah, man. Dat shit is like dingleberries.', '', 1136419215)
  ])
  ,new S('165th & Broadway', 40.83913, -73.94107, 24, [
    new Q('003739', 'Walkin\' Talkin\' Wednesday One-liners', 'Chick on cell: I can\'t even walk to Duane Reade without tripping over five guys my friends have already fucked!', 'djlindee', 1133964050)
  ])
  ,new S('Macdougal between 3rd & Bleecker', 40.729789999999994, -74.00066, 12, [
    new Q('002993', 'I Guess She\'s Got a Big Cock, Then', 'Tipsy chick #1: Like, I kept drinking, but it really didn\'t taste like there was any alcohol in it. So I just kept drinking.<br />\nTipsy chick #2: You are a fratboy\'s <em>dream</em>.', 'djlindee', 1129456834)
  ])
  ,new S('42nd and 10th', 40.75961, -73.99549, 14, [
    new Q('006116', 'Wednesday One-Liners Are Potty Trained', 'Girl on cell: What?  What do you mean?  What do you mean your audition is gonna be in a bathroom?', 'dk', 1153958400)
  ])
  ,new S('55th & 3rd', 40.75895, -73.96848, 26, [
    new Q('004346', 'They Wore White to the Funeral', 'Girl #1: <em>Guess who my dad saw in an elevator yesterday</em>? Johnny Carson.<br />\nGirl #2: I\'m pretty sure he\'s dead. Don\'t you mean Johnny <em>Cash</em>?', '', 1139961601)
  ])
  ,new S('15th & 5th', 40.73667, -73.99312, 13, [
    new Q('004699', 'Wednesday One-liners for the Lookers', 'Chick: Why is that girl supposed to be pretty? I mean, why look at her at all?', 'Manhattman', 1141855214)
    ,new Q('003567', 'Maybe If You Shaved Her Balls?', 'Chick #1: I dunno, I\'d be scared to have kids with Todd.<br />\nChick #2: Why?<br />\nChick #1: I mean, he\'s an okay-looking guy and all, but can you imagine if a girl looked like him?', 'Manhattman', 1133690432)
  ])
  ,new S('Lincoln Center', 40.772465629092785, -73.98356437683105, 18, [
    new Q('005671', 'We\'ll Let You Know If We Hear Otherwise', 'Old Jewish lady #1: That\'s a gorgeous ring.  What is that, 5 carats?<br />\nOld Jewish lady #2:  Yes.  I\'m going to give it to my granddaughter when she turns 16.  Maybe 18.  As long as I know she\'s still a virgin.', 'Stephanie', 1149199232)
    ,new Q('005365', 'Shut Up, Dad!', 'Man: This is stupid...and incredibly boring.<br />\nDavid Blaine: Hey, I can <em>hear</em> you!', '', 1147176032)
    ,new Q('005362', 'Help Me David Blaine, You\'re My Only Hope', 'Security guard: Hands of the glass, sir.<br />\nGuy: It\'s okay, it\'s okay...I just wanna talk to him.<br />\nGuy and girl, putting both hands on glass: WAKE UP DAVID BLAINE!<br />\nSecurity guard: Exit! Exit!', 'Natasha Blank', 1147147232)
    ,new Q('005300', 'Wednesday One-Liners, Boldface Names', 'Teen girl: Let\'s talk about prom and Toni Morrison.', '', 1146664832)
    ,new Q('004557', 'Chuck Woolery\'s Wednesday One-liners', 'Guy: There are <em>none</em>! My ex-wife, I put the bitch through law school, and then she tells me--and I <em>quote</em>!--, \"I don\'t need you anymore!\" I found her at our safe deposit box, trying to empty everything and take it with her! There are no normal women in this city left to date. Sorry for my language.', 'Peter S', 1140624001)
    ,new Q('004111', 'Wednesday One-liners by Eve Ensler', 'Crazy guy: What\'s it like to go home and eat a bloody pussy? Sometimes that\'s the best kind of pussy there is! And some guys like to suck dick!', 'Phineas J Whoobie', 1137045607)
    ,new Q('003089', 'Wednesday One-liners Yearning to Breathe Free', 'Woman: Ellis Island is where all the immigrants came through. Not, like, the Pilgrims but during the Great Migration.', 'Brian', 1129190401)
    ,new Q('002955', 'Because Butterflies Wear T-shirts', 'Girl: Well, I don\'t know...She doesn\'t <em>look</em> very much like a butterfly.<br />\nGuy: What, would you rather have her wear a t-shirt with a <em>giant butterfly</em> on it?', '', 1128787230)
  ])
  ,new S('Beacon Theatre, 74th & Broadway', 40.78023, -73.98143, 18, [
    new Q('004955', 'Fairway: Your Source for Vintage Foods', 'Old woman: No! No! You need to cut from that side of the meat. Last week you gave me a cut from the right side. I want a cut from the left side! <i>Don\'t you know that I want a fresh cut of meat</i>?<br />\nDeli guy: Only way you gonna get a fresher cut of meat is if I take it from your wrinkly white ass.', '', 1144958407)
    ,new Q('004777', 'Wednesday One-liners Lunch Hour', 'Old man: Come on, I\'ll take you out for a nice dinner: I\'ll take you to the Russian Tea Room!', 'Susan Volchok', 1142460031)
    ,new Q('004562', 'Wednesday One-liners Get Baked', 'Hippie man: I am so glad we do drugs.', 'Talia', 1140660024)
    ,new Q('003585', '\"...And don\'t tell me you feel insecure. That\'s old.\"', 'Dude: Excuse me, do you work here?<br />\nSecurity guy: Not really, but what do you need?', '', 1135389602)
    ,new Q('003581', 'Maybe If You Shaved Your Balls?', 'Crazy woman: Get out of my way Andrea! <br />\nGuy: Wow, I didn\'t know my name was Andrea; maybe I should grow my hair out so I at least look the part.', '', 1133701231)
  ])
  ,new S('Spring & Mercer', 40.72341, -73.99965, 7, [
    new Q('003764', 'That Would Be the Queen of Clubs', 'Queer: Excuse me, ma\'am? <br />\nChick: Yes?<br />\nQueer: Um, girl, it\'s time for some new Uggs. I felt it was my gift to society to tell you. <br />\nChick: Dude, put your fag card down and start worrying about something else.', '', 1135274440)
    ,new Q('002996', 'It Means He Intends to Begin Courting', 'Hobo: I wanna tackle you! I\'m gonna tackle you girl! I\'m gonna tackle you girl! You hear me? I\'m gonna tackle you!<br />\nGirl #1: Did he just say he wants to tackle us?<br />\nGirl #2: Oh my god! What did he mean by that?', 'Spooner', 1129262429)
  ])
  ,new S('45th & 7th', 40.75793, -73.9855, 16, [
    new Q('004565', 'Wednesday One-liners Got Late Night Munchies', 'Flyer guy: Hey, you want a coupon for a Spicy Chicken? It comes with free fries! You know you want free fries! Hey, smile, it\'s good for your aura!', 'Manders K', 1140681647)
  ])
  ,new S('Jerome Green Hall, 116th & Amsterdam', 40.80681, -73.96107, 20, [
    new Q('004776', 'Wednesday One-liners Sport Beef Curtains', 'Chick: I just talked about rimming and clitoral stimulation on an academic panel. How do you <em>think</em> I feel?', '', 1142488809)
    ,new Q('004554', 'Wednesday One-liners Face It', 'Dude: Well, the other day she said, \"I want you to fuck me in the park.\" So we went to the park, went behind some bushes where there was a clearing and bam, bam, bam. Then I came on her face.', '', 1140602440)
  ])
  ,new S('51st between 9th & 10th', 40.764700000000005, -73.989935, 14, [
    new Q('005093', 'Chunky Chips Ahoy!', 'Teen boy #1: Fuck, these fucking Fig Newtons taste like shit. And what the fuck is a fig, anyway?<br />\nTeen boy #2: I don\'t know, but whatever the fuck it is, it looks like you\'re eating a shit cookie.', '', 1145340039)
  ])
  ,new S('Broadway & Waverly', 40.72957, -73.99325, 12, [
    new Q('005228', 'Not Personal Enough', 'Woman #1:  So, your vagina\'s open, right?<br />\nWoman #2:  ...yeah.<br />\nWoman #1:  And there\'s a smell.<br />\nWoman #2:  Um.<br />\nWoman #1:  And it\'s a <em>very</em> personal smell!', '', 1146232832)
    ,new Q('005211', 'Wednesday One-liners Make Parenting Fast & Easy', 'Gay son: Yes, mother, I\'m a fag because I want to break your heart.', 'Alexandra Higgins', 1146124832)
    ,new Q('005115', 'Wednesday One-liners Already Miss QAF', 'Queer: As soon as I met him, my gaydar exploded...and then I had to change my pants.', '', 1145484053)
    ,new Q('005048', 'She\'s Game&Watchinese', 'Guy: But you\'re <em>my</em> Asian...<br />\nGirl: I don\'t know. You haven\'t been feeding me lately.<br />\nGuy: You\'re not a Tamagatchi!<br />\nGirl: Maybe I am.', 'Dan O\'Connor', 1144980054)
    ,new Q('004989', 'Rapunzel\'s Wednesday One-liners', 'Girl on cell: Well, if you didn\'t shave your vagina, this wouldn\'t have happened. By they way, I\'m, like, walking down the street talking about your vagina.', 'Scott Peterson', 1144267226)
    ,new Q('003676', 'That\'s Always the Right Answer to Europe', 'Professor guy: You\'re missing one more kind of film genre present in this short...<br />\nChick: Um...Fellini?<br />\nProfessor guy: And what genre does Fellini\'s work fall into?<br />\nChick: Um, Europe?<br />\nProfessor guy: No.', '', 1134676820)
    ,new Q('003835', 'Barkers Hawk Wednesday One-liners', 'Flyers guy: Get a free cell phone and butt ring with a two year contract!', '', 1134633648)
    ,new Q('003479', 'Just Look--Indirectly--at Stephen Hawking', 'Girl #1: ...so he\'d just sit in the back of the room jerking off and nobody could say anything because he was special.<br />\nGirl #2: Let me get this straight: he couldn\'t control his motorized wheelchair but he could beat off?<br />\nGirl #1: Where there\'s a will there\'s a way.', 'D', 1133208026)
    ,new Q('003433', 'Wednesday One-liners Get to Work', 'Admin girl: Great, now I have to find a mandolin for the FBI.', 'Father Elliott', 1131595205)
    ,new Q('002988', 'No One Likes a Fecal Flinger', 'Hobo: Anyone spare a dollar? Any change?<br />\nGirl: No, sorry.<br />\nHobo: <em>Why do you hate me</em>?', '', 1129197653)
    ,new Q('002933', 'Absolut Hoboroadkill', 'Bag lady: This guy killed my boyfriend!<br />\nHobo: No, I didn\'t! Not directly!<br />\nBag lady: He gave him vodka so he fell into a bus!', '', 1128873657)
  ])
  ,new S('50th between 5th & 6th', 40.759209999999996, -73.978835, 16, [
    new Q('005866', 'Didn\'t You Get the Gift Basket?', 'Man: Hey! It\'s so great to run into you!  I haven\'t heard from you in so long!<br />\nWoman: Yeah, that\'s because you didn\'t call me after we slept together.', '', 1150538432)
  ])
  ,new S('69th & Broadway', 40.77632, -73.98226, 18, [
    new Q('004988', 'Wednesday One-liners Spell It \"Aminals\"', 'Man: I am gonna rip her cnt out then have a dog fck her in the ass.', 'Rex Banner', 1144260014)
  ])
  ,new S('Bryant Park', 40.75382416414897, -73.98367166519165, 17, [
    new Q('006231', 'Wednesday One-Liners Have a History of Violence', 'Guy on cell: Yes, I\'m interested in your sparring class...No, you see I want to hit somebody.', 'Braincurve', 1153360800)
    ,new Q('005934', 'They Usually Go Together', 'Girl: So yeah, my body is basically covered with bruises.<br />\nGuy: You mean because of the drinking, the performing, and the violent sex?<br />\nGirl: Yeah.', 'Richard<br />', 1151028032)
    ,new Q('005283', 'When Good Slang Goes Bad', 'Guy #1: Yo! She was sooo busted.<br />\nGuy #2: Kay, are we talking criminal record or cup size here?', '', 1146614432)
    ,new Q('004988', 'Wednesday One-liners Spell It \"Aminals\"', 'Guy on cell: Oh, by the way, your dog snores.', '', 1144260014)
    ,new Q('004850', 'Wednesday One-liners for Backdoor Beauties', 'Hobo: I wake up and he\'s got the KY jelly trying to put a Yodel in my ass.', 'Matt Haggerty', 1143043252)
    ,new Q('004251', 'Except for Sundays, That Old Lazy Bastard', 'Mom: It\'s not the holidays now.<br />\nLittle girl: Why?<br />\nMom: Holidays are only some of the time. The rest of the year, it\'s<br />\njust regular days.<br />\nLittle girl: Why?<br />\nMom: \'Cause that\'s how God made it.', 'Angry Atheist', 1139335200)
    ,new Q('003745', 'Tuesday One-liners...Psyche!', 'Crazy guy: You are all gonna die! You are all gonna die, in the cold! The electricity will be <em>shut down</em>!', 'miss n.', 1134028826)
    ,new Q('003286', 'Still More Natural Than God\'s Body and Blood', 'Catholic girl #1: It\'s a little more natural to have jizz in your mouth instead of pee.<br />\nCatholic girl #2: But the jizz has <em>shit</em> in it!', '', 1131652845)
  ])
  ,new S('19th & 5th', 40.73907, -73.99137, 13, [
    new Q('006044', 'Telltale Sign of a Bad Boob Job', 'Suit #1: It just feels...weird.<br />\nSuit #2: Spongy.<br />\nSuit #1: Yeah.', 'I don\'t even want to know', 1151798400)
    ,new Q('005677', 'You\'d Make a Good Desk Chair', 'Syccophant: Our desk chairs suck.<br />\nAmazon fashionista: I\'m happy.<br />\nSyccophant: And amazingly beautiful.', 'scarfaccio<br />', 1149249632)
    ,new Q('004694', 'Wednesday One-liners by Athletes, for Athletes', 'Flyer guy: Slim down, slim down. Stop fucking around.', 'Animal', 1141826404)
    ,new Q('003896', 'Wednesday One-liners for the Holidays', 'Old lady: I don\'t want no shit ass for Christmas.', 'Nander', 1135224025)
  ])
  ,new S('14th & A', 40.73041, -73.98036, 1, [
    new Q('005467', 'That\'s Why They Call Them Hobos', 'Scrubby girl: ...so he said I spent too much on bags, and I should sell some. But I<em> love</em> bags, and I get them all on sale!<br />\nProfessional girl: How much do you spend on bags a month?<br />\nScrubby girl: Around a thousand.<br />\nProfessional girl: And how much is your rent?<br />\nScrubby girl: Eight hundred.<br />\nProfessional girl: So sell some fcking bags. Jesus!', 'Corocet<br />', 1147852832)
    ,new Q('003832', 'Wednesday One-liners Aren\'t in the Best of Health', 'Girl on cell: Oh my god, I got blood all over me!', 'Yessica', 1134612036)
    ,new Q('003500', 'Wednesday One-liner Brought a Half Keg', 'Drunk guy: You guys, I want to puke tonight.', '', 1132200007)
  ])
  ,new S('Clearview Cinemas, 62nd & 1st', 40.76147, -73.9606, 21, [
    new Q('005724', 'Finishing Together Should Be Easy by Now', 'Very old lady to husband: You asshle!  YOU ASSHLE!  I hate you.<br />\nOld husband:  Wha?<br />\nOld lady: You didn\'t wait for me, you fcking asshle.', '', 1149573632)
  ])
  ,new S('12th & 8th', 40.73753, -74.00478, 11, [
    new Q('004632', 'Elsewhere: Wednesday One-liners', 'Crazy guy: There\'s no one left in this place. I\'ve killed everyone!<br />\nThere\'s not even any other planets until I get to England.', '', 1141279236)
  ])
  ,new S('Gay Street', 40.73371, -74.00034, 11, [
    new Q('004408', 'That\'s Social Darwinism', 'Guy #1: Communism is like anarchism. Everyone owns everything.<br />\nGuy #2: You dumbass, no one owns anything in anarchism.<br />\nGuy #1: So everyone\'s poor?<br />\nGuy #2: How are you not dead already?', '', 1140523251)
  ])
  ,new S('36th & 5th', 40.7497, -73.98363, 3, [
    new Q('003192', 'Wednesday One-liners Love Margot Kidder', 'Hobo: Hey man, it\'s not raining. It\'s just your imagination.', '', 1129730443)
  ])
  ,new S('88th & Amsterdam', 40.78897, -73.97408, 18, [
    new Q('004450', 'Still Not Ready to Make a Commitment', 'Girl: Why don\'t you just make a list of things I need to change about myself so I can be more like you?<br />\nGuy: Okay, let\'s start with your tooth brushing. How about rinsing off the toothbrush before you put it back into the cabinet so there is not old toothpaste and spit dripping off of it? And how about rinsing after you brush?<br />\nGirl: Anything else?<br />\nGuy: No, I think that\'s the only thing you need to change about yourself.', 'Bill', 1141012812)
  ])
  ,new S('31st & Broadway', 40.74754, -73.98834, 0, [
    new Q('004226', 'The Cobblepot Estate Was Never Probated', 'Umbrella guy #1: Get your umbrellas! Don\'t get wet, get your umbrellas here! <br />\nUmbrella guy #2: Don\'t listen to that asshole, get your better umbrellas here!', 'Dan & John', 1139227213)
  ])
  ,new S('Office, 46th & Madison', 40.75536, -73.97745, 16, [
    new Q('005177', 'It\'s Not Luck, It\'s Planning', 'Yuppie businessman on cell: I don\'t care who designed them, you\'re taking them back... You spent $600 on a paid of fcking shoes!?Unbelievable... Ok, whatever, I don\'t care, this conversation is over... Goodbye! [to friend] Can you believe this sht?.... Lucky for her she lets me fck her in the ass.', 'Douglas Quade', 1145865632)
    ,new Q('003492', '...With a Side Order of Wednesday One-liners', 'Irish guy: Is there any choclate up in this mofo?', '', 1132185605)
  ])
  ,new S('8th & Mercer', 40.73094, -73.99326, 12, [
    new Q('003958', 'Conflict Fuels Wednesday One-liners', 'Guy on cell: Number one: I\'m going back to Brooklyn now. Number two: I can\'t fucking stand you and I never want to see you again. Number three: Call me.', 'Andrew Smith', 1135843206)
  ])
  ,new S('8th Street & 5th Avenue', 40.73224, -73.99636, 12, [
    new Q('004563', 'Clothes Make the Wednesday One-liners', 'Woman: Then the models come in on drugs, still in their outfits, vomiting everywhere, and people are yelling, \"<em>What did they take</em>?\" That\'s what my Fashion Week is like.', 'e. FITZ', 1140667250)
  ])
  ,new S('12th & Bedford, Brooklyn', 40.72057, -73.95475, -1, [
    new Q('006106', 'Wednesday One-Liners Watch the Nature Channel', 'Keen observer: They\'re fuckin\' cowards, man! Mountain lions are cowards, too.', '', 1152734400)
  ])
  ,new S('28th & Broadway', 40.74528, -73.98872, 0, [
    new Q('003497', 'Wednesday One-liners, Hosted by Casey Kasem', 'Guy on cell: I put that Cream poster under the black light last night. It looks fuckin\' awesome.', '', 1132135228)
  ])
  ,new S('37th & Broadway', 40.75214, -73.98751, 17, [
    new Q('005088', 'How Were Your Holidays, New York?', 'Manager lady on phone: Hi, there.... Oh, I\'m just sitting at my desk eating matzoh and turkey, and I\'m just bitter. Just very, very bitter. What a stupid holiday! Anyway, how are you?', 'Jillynyc', 1145304034)
    ,new Q('004988', 'Wednesday One-liners Spell It \"Aminals\"', 'Guy: They have the most ghetto-ass aquarium ever. There\'s like, a twenty foot shark in a bathtub.', '', 1144260014)
    ,new Q('003660', 'Heavenly Wednesday One-liners', 'Hobo: You people are all evil...You are oppressors...You\'re gonna be up shit\'s creek when Moshiach comes!', '', 1133416812)
  ])
  ,new S('39th & 8th', 40.75532, -73.99121, 17, [
    new Q('005258', 'In LA, This Passes for a Threat', 'Thug #1:  ...and the next thing you know, you\'ll be doing <em>Miss Congeniality 3</em>.<br />\nThug #2:  Word.', '', 1146441632)
  ])
  ,new S('43rd between 8th & 9th', 40.7585, -73.99073, 14, [
    new Q('004320', 'Wednesday One-liners Watch VH1', 'Woman: Brian Wilson beat me right the hell up right there; right the hell up!', 'Ryan Duncan', 1138838409)
  ])
  ,new S('57th & 5th', 40.76295, -73.97399, 16, [
    new Q('005936', 'Because Real Blow-up Dolls Have Gotten So Expensive', 'Guy #1: Yo, did you just check out the vagina on that mannequin?<br />\nGuy #2: Yeah, is that weird?<br />\nGuy #1: Nah, I did too.', 'alex', 1151042432)
    ,new Q('004594', 'She Bought the DVD of The Morning After', 'Girl #1: I am just gonna risk it and pray I get my period.<br />\nGirl #2: Just a warning, I did that once and the consequences--I\'m not gonna lie--weren\'t fun but it only cost 15 dollars.', '', 1142064055)
    ,new Q('004543', 'The Riddler\'s a Cop Now', 'Mom: Excuse me officer, can you tell me where the Crown Building is located?<br />\nCop: Lady, if the building collapsed you would be crushed.', '', 1141689610)
    ,new Q('004561', 'Wednesday One-liners for Fuck Machines', 'Suit: Yeah, we\'ll fuck the fucker and we\'ll fuck him summarily.', 'Woody West', 1140652837)
    ,new Q('003746', 'Wednesday One-liners: It\'s All About Location', 'Guy on cell: Yo, I\'m at the snowflake! Where you at?', '', 1134014456)
  ])
  ,new S('75th & Columbus', 40.77935, -73.97737, 18, [
    new Q('004557', 'Chuck Woolery\'s Wednesday One-liners', 'Girl: He was really hot, wasn\'t he? I got his number but I\'m not going to call him for at least 3 days.', '', 1140624001)
    ,new Q('003476', 'Chelsea Takes a Trip North', 'Drunk guy: Let me ask you something...What are the chances that you\'ll let me take you home and blow you?<br />\nSober guy: Not very likely.<br />\nDrunk guy: See, it\'s just that my girlfriend is out of town and I really want to suck you off.<br />\nSober guy: Um. No.', '', 1133172031)
  ])
  ,new S('51st & 7th', 40.7617, -73.98283, 16, [
    new Q('005141', 'Wednesday One-liners Paging Hugh Laurie', 'Guy on cell: Yeah, everything seemed to have checked out okay, but when the doctor came back with my urine sample he said he was concerned about my pee being to dry.. .', 'Steven Roads', 1146052832)
    ,new Q('003994', 'Chinese Torture, Represent! Go Jiang!', 'Cheerleader girl #1: Terry, what are those people doing? Is that fake blood?<br />\nCheerleader girl #2: I think they\'re representing Chinese torture or something.', 'Alvin Cheung', 1137211220)
  ])
  ,new S('Old Slip & Water', 40.70402, -74.00888, 5, [
    new Q('004267', 'Wednesday One-liners Make Great Pets', 'Woman: She was happier than a pig having 50 orgasms!', '', 1138219229)
  ])
  ,new S('Lafayette & 4th', 40.72784, -73.99312, 12, [
    new Q('004917', 'Wednesday One-liners Flick the Clicker', 'Old lady on cell: Mom, I don\'t give a flying fck what Dr. Phil has to say about it!', 'Matthew Farah', 1143626433)
    ,new Q('003353', 'Long, Thin Wednesday One-liners', 'Man: Bet you girls never shared a nine inch cock before.', '', 1131004811)
  ])
  ,new S('8th & Greene', 40.73126, -73.99403, 12, [
    new Q('004195', 'Women Have Needs, Wednesday One-liners', 'Black chick: <em>And what is wrong with having a threesome with an Asian</em>?', '', 1137628851)
  ])
  ,new S('46th & 10th', 40.76216, -73.99363, 14, [
    new Q('005047', 'Wednesday One-liners Are Locked & Loaded', 'Drunk girl: \"Citizen\'s arrest!\" is the fastest way to get capped in New York.', 'Nick Salvato', 1144886401)
  ])
  ,new S('48th and 9th', 40.76223, -73.98989, 14, [
    new Q('006043', 'His mom will make you feel guilty about it tomorrow', 'Girl 1: I just saw, like, 3 cute Jewish-looking guys.<br />Girl 2: Yeah, that one in the window?<br />Girl 1: Yeah.<br />Girl 2: Wanna go touch his butt?', 'alexie<br /> <span>Headline by: lori <br /></span>', 1151604000)
    ,new Q('004379', 'Wednesday One-liners Could Use a Scrubbing', 'Driver guy on cell: Whaddo I have, fuckin\' dingleberries on my tongue?', '', 1139428849)
  ])
  ,new S('44th & 6th', 40.75613, -73.98318, 16, [
    new Q('005626', 'It\'s Called Jaws Unlocked', 'Older black gentleman in suit: Hey man, can you help me out?<br />\nArab guy in limo smiles and says nothing.<br />\nBlack man: I\'m, uh, I\'m lookin\' for someone to go home with tonight.  \'Cause I\'m a gay guy, see.  Well, I mean, I\'m kind of a swing guy.  I like to, uh... ascend to different levels.<br />\nHipster guy walking past: What is it, like, a video game?<br />\nBlack guy: Yeah!  Yeah, baby, it\'s a video game.  \'Cept when I win... I fck you.', 'Peebs<br />', 1148904032)
    ,new Q('004070', 'Haggling, Haggling Hobos', 'Hobo: Can you spare a hundred bucks?<br />\nGuy: A hundred bucks?<br />\nHobo: What the hell am I going to do with a quarter?', 'Patrick Grove', 1138060850)
  ])
  ,new S('Greenwich Ave & 12th St', 40.73765, -74.00176, 11, [
    new Q('005615', 'Let\'s Get Some Ice Cream and Give Him a Call', 'Girl: Oh my god. Don\'t even mention his name to me. I hate him so much.<br />\nGuy: You mean hate him like you\'d wanna set him on fire hate him?<br />\nGirl: I mean hate him like I wouldn\'t even sht on him if someone else set him on fire.<br />\nGuy: Uh... I believe the phrase is \"I wouldn\'t <em>piss</em> on him if he was on fire\".<br />\nGirl: Yeah, whatever. It\'s all the same when you\'re lactose-intolerant.', 'happy milk drinker<br />', 1148853632)
  ])
  ,new S('Petland Discounts, 104th & Broadway', 40.79972, -73.96812, 18, [
    new Q('005492', 'Wednesday One-liners Teach Your Children Well', 'Mom to 4-year-old: Stop crying and take a moment and think about how you feel.', '', 1148464832)
    ,new Q('004875', 'That\'s Their Term for Humility', 'Hobo: Man, can you spare some change so I can buy a slice of pizza?<br />\nBrit guy: I haven\'t got any pizza.', 'Ron Caldwell', 1144389618)
    ,new Q('004267', 'Wednesday One-liners Make Great Pets', 'Little girl: We used to have a bunny just like that one! Then we had to take it to the liquor store.', 'Julia Kite', 1138219229)
  ])
  ,new S('State Street Plaza', 40.70237, -74.01341, 5, [
    new Q('005046', 'Wednesday One-liners Are Hired', 'Cleaning lady: I woke up this morning, got on the train, and I asked, \"Why, God? Why was I born so poor?\"', '', 1144879252)
  ])
  ,new S('4th & Broadway', 40.7284, -73.99426, 12, [
    new Q('005868', 'It Could Be Worse (It Could Be Nerve)', 'Girl on cell: You have to just ask him. But you have to ask him to his face so you can see his reaction. Just look him in the eye and say, \"Dad, are you on Match.com?\" and see if he looks surprised. You just have to confront stuff like that.', 'uncle frank', 1150552832)
    ,new Q('005300', 'Wednesday One-Liners, Boldface Names', 'Guy to friend: Would you do Jessica Alba....if there was a 25% chance she was your sister?', 'Wallace John', 1146664832)
    ,new Q('004211', 'Too Good to Be True, Too Dumb to Be False', 'Chick #1: NYU is taking over the city. Soon they\'re gonna have to<br />\nstart calling it \"New York\" City.<br />\nChick #2: It\'s already called New York City!', 'Kelly Raz', 1139781610)
    ,new Q('003748', 'Wednesday One-liners Have Language Problems', 'Guy: Oh no, I don\'t speak it; I just have the acrylic alphabet memorized.', '', 1133992814)
    ,new Q('003750', 'Wednesday One-liners Are Stuffed', 'Woman on cell: The guy\'s like a hippie! I thought you\'d enjoy seeing him get eaten.', 'schroeder', 1134007215)
    ,new Q('003596', '...Butt It\'s Wednesday One-liners!', 'Guy on cell: Yeah, I\'m really nervous. And I\'m gassy as hell. I just can\'t stop farting...What?...Who cares what I\'m saying, nobody\'s listening.', '', 1132783228)
    ,new Q('003380', 'The Liberry Ain\'t What It Used to Be', 'Girl #1: I am so glad I bought those earrings. I am definitely going to find my baby\'s father tomorrow night.<br />\nGirl #2: It\'s not the kind of place to find your baby\'s father. You might find your baby\'s daddy, but not your baby\'s father.', 'angela chase', 1132405203)
    ,new Q('002949', 'Think of the Starving Baby Birds in Africa', 'Girl: I want to throw up. Like, I have some puke in the back of my throat.', 'Julia', 1129593628)
  ])
  ,new S('125th/Saint Nicholas station', 40.816541, -73.95001, 22, [
    new Q('002927', 'Then Goes Love--', 'Girl #1: ...sitting in a tree.<br />\nGirl #2: K. I. S. S. I. N. G.<br />\nGirl #1: First comes love--<br />\nGirl #2: Then comes the baby--', 'acq3', 1128776404)
  ])
  ,new S('55th & 1st', 40.75701, -73.96385, 26, [
    new Q('004268', 'Wednesday One-liners Wear Gross Sneakers', 'Hobo: Man, I told you I wanted a latte. Ain\'t nobody listens these days.', 'JMC', 1138240805)
  ])
  ,new S('Bowery & Stanton', 40.72279, -73.99301, 8, [
    new Q('003500', 'Wednesday One-liner Brought a Half Keg', 'Chick on cell: Mom! I know you\'re upset, but I couldn\'t go to church with you because I was still drunk.', '', 1132200007)
  ])
  ,new S('Stuyvesant & 3rd', 40.72986, -73.98968, 1, [
    new Q('003623', 'Nothing Says \"I Love You\" Like a Lat Spread', 'Girl #1: I never realized how nice his back was until we broke up.<br />\nGirl #2: As he was walking away from you?', 'katyunextraordinaire', 1134262823)
  ])
  ,new S('Essex & Rivington', 40.71982, -73.98753, 8, [
    new Q('005289', 'Wednesday One-Liners Like a Good Time', 'Girl on cell: Alice and I are going to dress up like cheerleaders and throw waterballoons full of beer at the crowd.', 'Russ LaChanse', 1146686432)
    ,new Q('004775', 'What\'s in a Name, Wednesday One-liners?', 'Asian girl: Yeah, he texted me and called me \"Buttsnatch\". I was like, \"That\'s not very nice.\"', 'Sal Paradise', 1142496033)
    ,new Q('004261', 'Come on Down, Wednesday One-liners', 'Guy on cell: Let\'s face it. I\'m pretty fabulous; I don\'t need you to come down.', '', 1138212014)
  ])
  ,new S('Doctor\'s office, 67th & Amsterdam', 40.77541, -73.98398, 18, [
    new Q('005659', 'Wednesday One-liners Seek Medical Attention', 'Guy: I need to see a doctor. I\'m not dying, but I have a leaking, stinking navel.', '', 1150941632)
    ,new Q('003045', 'Oh Crap, They\'re Seceding Again', 'HS girl: So how was your love life over the summer?<br />\nHS boy: I hooked up with the Prime Minister of Georgia\'s daughter.', '', 1129446040)
  ])
  ,new S('24th & Broadway', 40.74229, -73.98925, 2, [
    new Q('004850', 'Wednesday One-liners for Backdoor Beauties', 'Woman: Sure, she\'s fine now, but ask her again after she\'s had that steel rod up her butt for five or six days. See how she likes it then!', 'Manhattman', 1143043252)
  ])
  ,new S('22nd & 7th', 40.74342, -73.99614, 0, [
    new Q('005942', 'Actually, for Any Guy in Eyeliner', 'Straight guy #1: I love Queen.<br />\nStraight guy #2: Yeah, Queen is awesome.<br />\nStraight guy #3: I would totally go gay for Freddy Mercury. I\'m just throwing that out there.', 'Lolito', 1151078432)
    ,new Q('004927', 'The Wednesday One-liners K-Hole', 'Man on cell: The thing about Alberto is that he criticizes everybody\'s drug use except his own.', 'Mark M', 1143784837)
  ])
  ,new S('Smith & 9th Streets station', 40.67473, -73.99777, -1, [
    new Q('005414', 'That\'s Yiddish for \"Good Thinking\"', 'Girl on cell: It kinda stops being sexy when you can\'t breath.<br />\nLittle old lady: Oy Gevalt!', 'Braincurve<br />', 1147492832)
    ,new Q('004921', 'Wednesday One-liners Turn Up the Radio', 'MTA guy: I mean, James Brown couldn\'t sing worth a fuck, but he could dance. He had a damn good bag.', 'joshua sledge', 1143655252)
  ])
  ,new S('31st between 7th & 8th', 40.749695, -73.993465, 0, [
    new Q('003901', 'Remember That Whole Strike Thing?', 'Old lady: Can you put that cigarette out before you burn someone?<br />\nChick: No way, the transit strike isn\'t going to stop me from<br />\nsmoking...Can you believe her? Complaining just because she thought I was going to burn her fur coat. If anybody should have been complaining it should have been the woman in front of me whose face I just blew smoke in.', '', 1135303233)
  ])
  ,new S('Mary Ann\'s Restaurant, 2nd Avenue & 5th Street', 40.72678, -73.98899, 1, [
    new Q('005380', 'Wednesday One-Liners Read Body Language', 'Gangster into cell: Hold your hand up like a antenna, and maybe your budget-ass phone would work.', '', 1147291232)
    ,new Q('004318', 'Wednesday One-liners Move to the Big Apple', 'Guy: Fuck that shit, man. I still love New York better. Every single time people from Frisco compare cities with New York, you fools bring up your stupid burritos! Well I got news for you: our burritos are catching up.', 'DeathGrip', 1138845622)
    ,new Q('003944', 'He Was Riding a Young Buck Last Night', 'Girl #1: Did you like it?<br />\nGirl #2: Yeah. It was amazing.<br />\nGirl #1: What about Eric?<br />\nGirl #2: He wants to become a gay cowboy now.', 'Overly Attentive Diner', 1135656026)
  ])
  ,new S('52nd & Madison', 40.75911, -73.97467, 16, [
    new Q('005903', 'It Was Going to Be a Present for Someone Special', 'Tourist: Will you take $20 for that bag?<br />\nStreet vendor: Twenty? You\'ve got nerve. I\'ll pray for you.<br />\nTourist: Pray that someone is stupid enough to pay more than twenty bucks for that plastic piece of shit.', '', 1150776032)
  ])
  ,new S('Bodega, Amsterdam & 109th', 40.80235, -73.96431, 18, [
    new Q('005793', 'Pretty Much the Same but with More Wax', 'Man in elevator, to young boy: Como estas?<br />\nWife: That is Spanish. He is from Brazil.<br />\nMan: Of, course. So, how do you say \"how are you\" in Brazilian?<br />\nWife: Meh, they speak Portuguese in Brazil.<br />\nMan: Yes, I know that...<br />\nPause<br />\nMan: How <em>do</em> you say it in Brazilian?', '', 1150084832)
    ,new Q('004583', 'That\'s Like 7 in Dog Beers', 'Deli guy: Getting some beers?<br />\nCustomer guy: Yup. Three for me and one for my dog.', '', 1143187240)
  ])
  ,new S('73rd & Columbus', 40.77809, -73.97832, 18, [
    new Q('004375', 'God Tells Wednesday One-liners to Kill People', 'Lady: He\'s Catholic. They can\'t lie. Lying\'s a sin.', 'jen', 1139392849)
    ,new Q('003272', 'Spooky Wednesday One-liners for Halloween', 'Woman: I want someone to die on me. I wish I could be there right at that moment.', '', 1130320851)
  ])
  ,new S('Bodega, Houston & 6th', 40.72838, -74.00312, 7, [
    new Q('003301', 'Ladies, Fabulous People Don\'t Need Roommates', 'Girl #1: Dude, that apartment was so ridiculousy small. No fat people would be able to walk in our hallway.<br />\nGirl #2: Like we\'re friends with anyone who\'s fat.', '', 1131688827)
    ,new Q('003105', 'This Medal Smells Funny', 'Guy: What flavor should I get?<br />\nDrunk girl: I\'d get butter pecan but I\'m lactose intolerant and it\'d make me shit like a champ.', '', 1130137208)
  ])
  ,new S('21st between 6th & 7th', 40.74219, -73.99517, 0, [
    new Q('004697', 'Wednesday One-liners Wear Heatherette', 'Guy: I didn\'t really see this on your resume, but, you managed to find time to cheat on a guy for over a year, but you don\'t have 2 hours to go suit shopping?', '', 1141848022)
  ])
  ,new S('54th & 5th', 40.76103, -73.97538, 16, [
    new Q('004319', 'Wednesday One-liners Are All Over the Map', 'Asian girl: Did you know that there are Jehovah\'s Witnesses in Japan? Japanese people don\'t speak good English but these fools do!', '', 1138831202)
    ,new Q('003492', '...With a Side Order of Wednesday One-liners', 'Crazy guy: Did you know that chocolate is a conspiracy? You see, the Swiss put their names on chocolate, but chocolate is from Africa. The Swiss don\'t live in Africa; they live in Swissland.', 'r', 1132185605)
    ,new Q('003283', 'Wednesday One-liners Can Be So Rude', 'Guy: Where the fuck is this bitch?...Oh, sorry \'bout the language ladies. I wasn\'t talking about you, I was talking about my girlfriend.', '', 1130400040)
  ])
  ,new S('Sephora, Broadway between 43rd & 44th', 40.756915, -73.98601, 16, [
    new Q('004466', 'The Beauty That is Wednesday One-liners', 'Teen girl: I\'m looking for a lipstick? It\'s really pretty and it\'s in all the magazines? Do you know the one?', 'charliw', 1140076805)
    ,new Q('004062', 'We Also Carry Real New York Beatings', 'Woman #2: That\'s her! That\'s her! That\'s the New Yorker who cursed at me and threatened me!<br />\nWoman #3: It\'s like seeing one in their natural habitat! I can\'t wait to tell everyone a <em>real</em> New Yorker threatened you!<br />\nWoman #2: I know! It\'s awesome!', 'Non-Bitchy New Yorker', 1137751245)
  ])
  ,new S('126th & Lenox', 40.80842, -73.94494, 22, [
    new Q('004776', 'Wednesday One-liners Sport Beef Curtains', 'Chick: Did you see that person with the strap-on vagina?', 'M.S.H.', 1142488809)
  ])
  ,new S('62nd & Columbus', 40.7711, -73.98342, 18, [
    new Q('004631', 'Wednesday One-liners Flip Channels', 'Woman: Who the hell is Paris Hilton, and why should I give a damn about her?', '', 1141272056)
  ])
  ,new S('Washington & West 11th', 40.7355, -74.00838, 11, [
    new Q('003652', 'Wednesday One-liners Go to the Health Club', 'Hipster girl: I think it\'s time now for me to open my own spa. And after years of working at Bliss I know what to call it: No Cunts Allowed.', 'Trey Desolay', 1133366429)
  ])
  ,new S('50th & 6th', 40.75989, -73.98044, 16, [
    new Q('005620', 'She Only Cheated on You with Two Contractors', 'Wife: l\'ll just be two minutes.<br />\nHusband: Don\'t lie to me.<br />\nWife: Two minutes.<br />\nHusband: Don\'t lie to me<br />\nWife: Three minutes.<br />\nHusband: Yeah, that\'s what I thought.', 'Don Willmott<br />', 1148824832)
    ,new Q('005503', 'She Can\'t Even Go Near a Mel Gibson Movie', 'Girl #1: I can\'t believe you\'re about to get your culo waxed.<br />\nGirl #2: I can\'t believe you <em>didn\'t</em> get your culo waxed!<br />\nGirl #1: You know I have an asshle phobia, for Christ\'s sake!', '', 1148112032)
    ,new Q('004320', 'Wednesday One-liners Watch VH1', 'Paralegal lady on phone: And I thought to myself, \"She looks so familiar, who is she?\" Queen Latifah\'s mother!...No, mangos.', '', 1138838409)
    ,new Q('003669', 'The Actors Received a Promotion', 'Girl #1: I don\'t watch <em>CSI</em>, I watch <em>Law and Order</em>.<br />\nCop #1 & #2: <em>Yes</em>!<br />\nGirl #2: Can you get us tickets?<br />\nCop #1: Yeah, if you give us $100 each.<br />\nGirl #2: How long have you been cops?<br />\nCop #2: 2 years.<br />\nGirl #1: Damn, the police on <em>SVU</em> are way more experienced. That show\'s been running, like, 9 years.<br />\nCop #1: Yes, but the cops on <em>SVU</em> are <em>detectives</em>.', 'Emma Marie', 1133467210)
    ,new Q('003504', 'Then Stop Showing Us Your Hymen', 'Tween girl #1: Oh my god, is it wrong that I want him inside me?<br />\nTween girl #2: Uh, yeah, especially since you\'re like 13 and a virgin.<br />\nTween girl #1: Oh my god, shut up! I don\'t want all these New Yorkers to know I\'m a virgin!', '', 1133272804)
    ,new Q('003436', 'Wednesday One-liners Wander New York', 'Hobo: Electricity is fucking cool.', 'C Money', 1131580830)
    ,new Q('003283', 'Wednesday One-liners Can Be So Rude', 'Guy: What a pussy-ass bitch. What could possibly be so important in New York these days to make anybody run like that?', '', 1130400040)
  ])
];
