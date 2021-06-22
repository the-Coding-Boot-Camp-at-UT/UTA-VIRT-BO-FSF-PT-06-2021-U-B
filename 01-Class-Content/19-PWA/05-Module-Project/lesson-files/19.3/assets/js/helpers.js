const dateConverter = function(UNIX_timestamp){
  const a = new Date(UNIX_timestamp);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const result =  month + ' ' + date + ', ' + year 
  return result;
}

const createLoremIpsum = function(numWords = 50) {
  const loremIpsum = "Lorem ipsum dolor amet tousled brooklyn meditation, polaroid offal kale chips raw denim tumblr succulents jianbing listicle. Man braid godard VHS freegan bespoke fixie XOXO ramps lo-fi edison bulb prism gochujang photo booth. Messenger bag bicycle rights trust fund franzen street art mixtape helvetica, sriracha dreamcatcher live-edge microdosing. Whatever cliche neutra iceland chambray, beard narwhal pop-up health goth readymade palo santo forage live-edge 3 wolf moon echo park edison bulb, viral iceland bicycle rights post-ironic celiac typewriter kinfolk mumblecore tilde palo santo. Dreamcatcher cred cliche, keffiyeh intelligentsia forage vice locavore aesthetic yr. Vexillologist shabby chic fixie, air plant helvetica health goth kickstarter four loko jean shorts tote bag green juice street art beard farm-to-table. Enamel pin jianbing photo booth, YOLO pour-over bushwick next level fingerstache vice retro disrupt cloud bread. Gastropub umami distillery chia food truck adaptogen. Forage hexagon helvetica kogi squid. Crucifix health goth bespoke typewriter fam hexagon helvetica, vice dreamcatcher chillwave tumeric. Keffiyeh aesthetic XOXO venmo live-edge kale chips mlkshk wolf williamsburg hella yr locavore. Tumblr unicorn chillwave, edison bulb occupy offal sartorial gastropub kickstarter. Bitters swag chartreuse single-origin coffee PBR&B post-ironic migas activated charcoal before they sold out iPhone seitan lumbersexual tofu tumeric selvage. Shoreditch hashtag literally, af intelligentsia crucifix sustainable +1 chambray adaptogen. Crucifix retro fixie knausgaard. Photo booth asymmetrical seitan, pug marfa tattooed roof party tacos gochujang woke kale chips vice organic. Street art mumblecore trust fund, normcore single-origin coffee meggings neutra tacos fam. Woke chia asymmetrical try-hard cloud bread hexagon leggings kogi taiyaki. Seitan humblebrag tote bag keytar YOLO art party. Semiotics cliche schlitz shaman, waistcoat chartreuse activated charcoal XOXO post-ironic helvetica messenger bag air plant vape sartorial. Typewriter thundercats direct trade edison bulb lomo la croix trust fund. Tote bag tofu lo-fi blue bottle. Drinking vinegar lyft messenger bag, leggings tofu 90's bitters four loko mustache sriracha pabst shabby chic humblebrag glossier. Meh skateboard yuccie tattooed adaptogen gastropub post-ironic put a bird on it green juice la croix hot chicken ennui cray dreamcatcher neutra. Chia semiotics art party fixie shaman echo park palo santo flexitarian. Letterpress retro chillwave, williamsburg palo santo fashion axe raclette lumbersexual keytar yr plaid ugh. Godard everyday carry twee, roof party affogato williamsburg photo booth. Irony lumbersexual letterpress, trust fund raclette wayfarers art party. Flannel bushwick yr tattooed."
  
  const result = loremIpsum.split(/\s+/).slice(0,numWords).join(" ");
  return result;

}

module.exports = {
  dateConverter,
  createLoremIpsum
}