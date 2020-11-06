
//get the device window size to decide the distance to move for each component
var windowWidth = $(window).width();

// initialize materialize form and collapasible card
$(document).ready(function(){
  $('select').formSelect();
  $('.collapsible').collapsible();
});

// initial position of each component
$(".home").animate({left: '0px'});
$(".searchResults").animate({left: windowWidth});
$(".moreInfo").animate({left: windowWidth});


$('.header').append(`<h6 class="title">Select Area</h6>`)
// show different set of skills based on the discipline selected
$('select').on('change', function (e) {
    $('.skills').empty();
    if( e.target.value === "IT"){
     
      $('.disciplines').append(`<div class="skills" style="margin-top: 50px;">
      <label style="font-size: 18px; font-weight: 600;">Skills</label>
      <p>
        <label style="margin-right: 8px;">
          <input type="checkbox" name="skills" value="Python" class="filled-in"  />
          <span>Python</span>
        </label>
        <label style="margin-right: 8px;">
          <input type="checkbox" name="skills" value="JavaScript" class="filled-in"  />
          <span>JavaScript</span>
        </label style="margin-right: 8px;">
        <label>
          <input type="checkbox" name="skills" value="Network Engineering" class="filled-in"  />
          <span>Network Engineering</span>
        </label>
      </p>
      <p>
        <label style="margin-right: 8px;">
          <input type="checkbox" name="skills" value="C" class="filled-in"  />
          <span>C</span>
        </label>
        <label style="margin-right: 8px;">
          <input type="checkbox" name="skills" value="Cyber Security" class="filled-in"  />
          <span>Cyber Security</span>
        </label style="margin-right: 8px;">
        <label>
          <input type="checkbox" name="skills" value="SQL" class="filled-in"  />
          <span>SQL</span>
        </label>
      </p>
      <p>
        <label style="margin-right: 8px;">
          <input type="checkbox" name="skills" value="UX Design" class="filled-in"  />
          <span>UX Design</span>
        </label>
        <label style="margin-right: 8px;">
          <input type="checkbox"  name="skills" value="AI" class="filled-in"  />
          <span>AI</span>
        </label style="margin-right: 8px;">
        <label>
          <input type="checkbox" name="skills" value="Neural Networks" class="filled-in"  />
          <span>Neural Networks</span>
        </label>
      </p>
      <p>
        <label style="margin-right: 8px;">
          <input type="checkbox" name="skills" value="Blockchain" class="filled-in"  />
          <span>Blockchain</span>
        </label>
        <label style="margin-right: 8px;">
          <input type="checkbox" name="skills" value="R" class="filled-in"  />
          <span>R</span>
        </label style="margin-right: 8px;">
        <label>
          <input type="checkbox" name="skills" value="HTML" class="filled-in"  />
          <span>HTML</span>
        </label>
      </p>
    </div>`);
    $('.skills').hide().fadeIn();

    }else if( e.target.value === "Engineering"){
     
      $('.disciplines').append(`<div class="skills"  margin-top: 50px; ">
      <label style="font-size: 18px; font-weight: 600;">Skills</label>
      <p>
        <label style="margin-right: 8px;">
          <input type="checkbox" name="skills" value="Electrical Engineering" class="filled-in"  />
          <span>Electrical Engineering</span>
        </label>
        <label style="margin-right: 8px;">
          <input type="checkbox" name="skills" value="Chemical Engineering" class="filled-in"  />
          <span>Chemical Engineering</span>
        </label style="margin-right: 8px;">
        <label>
          <input type="checkbox" name="skills" value="Steel Engineering" class="filled-in"  />
          <span>Steel Engineering</span>
        </label>
      </p>
      <p>
        <label style="margin-right: 8px;">
          <input type="checkbox" name="skills" value="Statics" class="filled-in"  />
          <span>Statics</span>
        </label>
        <label style="margin-right: 8px;">
          <input type="checkbox" name="skills" value="Concrete Structures" class="filled-in"  />
          <span>Concrete Structures</span>
        </label style="margin-right: 8px;">
        <label>
          <input type="checkbox" name="skills" value="Mechanical Engineering" class="filled-in"  />
          <span>Mechanical Engineering</span>
        </label>
      </p>
      
    </div>`);
    $('.skills').hide().fadeIn();

    }else if( e.target.value === "Environment"){
      $('.disciplines').append(`<div class="skills" style="margin-top: 50px;">
      <label style="font-size: 18px; font-weight: 600;">Skills</label>
      <p>
        <label style="margin-right: 8px;">
          <input type="checkbox" name="skills" value="Turtles" class="filled-in"  />
          <span>Turtles</span>
        </label>
        <label style="margin-right: 8px;">
          <input type="checkbox" name="skills" value="Ecosystems" class="filled-in"  />
          <span>Ecosystems</span>
        </label style="margin-right: 8px;">
        <label>
          <input type="checkbox" name="skills" value="Microbiology" class="filled-in"  />
          <span>Microbiology</span>
        </label>
      </p>
      <p>
        <label style="margin-right: 8px;">
          <input type="checkbox"  name="skills" value="Spatial Data" class="filled-in"  />
          <span>Spatial Data</span>
        </label>
        <label style="margin-right: 8px;">
          <input type="checkbox" name="skills" value="Conservation" class="filled-in"  />
          <span>Conservation</span>
        </label style="margin-right: 8px;">
        <label>
          <input type="checkbox" name="skills" value="Fire Ecology" class="filled-in"  />
          <span>Fire Ecology</span>
        </label>
      </p>  
    </div>`);
    $('.skills').hide().fadeIn();

    }  
  });

// when click search button
$('#searchBtn').click((evt) => {
  evt.preventDefault();
  screenTrack = "Search Result";
  $('h6').remove();
  $('.header').append(`<h6 class="title">Search Results</h6>`);
  var area = $('select').val();
  var skills = $('input[name="skills"]:checked');
  var nTWW = $('input[name="NTWW"]:checked').val();
  var organisationalSkills = $('input[name="organisationalSkills"]:checked');
  var communicationMethods = $('input[name="communicationMethods"]:checked');
  var availability = $('input[name="availability"]:checked');
  
  
  // get data from the data json file
  $.get("data.json", (data) => {
 
    var areaFilteredData = [];
    var skillFilteredData = [];
    var nTWWFilteredData = [];
    var oSFilteredData = [];
    var cMFilteredData = [];
    var availabilityFilteredData = [];
    // keep all the selected creterias
    var tags = [];
    // stores each person's match rate for sorting
    var matchRates = [];
    // match rates and individule tages with indexes
    var mRsAndITagsWithIndexes = [];
    


    // find people with selected area
    areaFilteredData = data.filter(person => person.area === area.toLowerCase());
    tags.push(area);

    // look for people with selected Number of Teams Worked With from the array of people with selected area 
    nTWWFilteredData = areaFilteredData.filter(person => person.teams === nTWW);
    tags.push(nTWW);
    // if no one was found, assign the array of people with selected area to the NTWW people array 
    if(nTWWFilteredData.length === 0 ){
      nTWWFilteredData = areaFilteredData;
    }

    for(let i=0; i<skills.length;i++){
      tags.push(skills[i].value);
      nTWWFilteredData.forEach(person => {
      if(person.skills.includes( skills[i].value.toLowerCase())){
        if(!skillFilteredData.includes(person)){
          skillFilteredData.push(person);
        }
        
      }
    });  
    }

    if(skillFilteredData.length === 0 ){
      skillFilteredData = nTWWFilteredData;
    }

    for(let i=0; i<organisationalSkills.length;i++){
      tags.push(organisationalSkills[i].value);
      skillFilteredData.forEach(person =>{
        if(person.organisationalskills.includes( organisationalSkills[i].value.toLowerCase())){
          if(!oSFilteredData.includes(person)){
            oSFilteredData.push(person);
          }
          
        }
      });  
    }

    if(oSFilteredData.length === 0 ){
      oSFilteredData = skillFilteredData;
    }
    console.log("oSFilteredData: "+ oSFilteredData);

    for(let i=0; i<communicationMethods.length;i++){
      tags.push(communicationMethods[i].value);
      oSFilteredData.forEach(person =>{
        if(person.communication.includes( communicationMethods[i].value.toLowerCase())){
          if(!cMFilteredData.includes(person)){
            cMFilteredData.push(person);
          }
          
        }
      });
      
    }

    if(cMFilteredData.length === 0 ){
      cMFilteredData = oSFilteredData;
    }
    console.log("cMFilteredData: "+ cMFilteredData);
    
    for(let i=0; i<availability.length;i++){
      tags.push(availability[i].value);
      cMFilteredData.forEach(person =>{
        if(person.availability.includes( availability[i].value.toLowerCase())){
          if(!availabilityFilteredData.includes(person)){
            availabilityFilteredData.push(person);
          }
          
        }
      });  
    }

    if(availabilityFilteredData.length === 0 ){
      availabilityFilteredData = cMFilteredData;
    }
    console.log("availabilityFilteredData", availabilityFilteredData);

    // append selected creterias
    for(let i=0; i<tags.length; i++){
      $('.selectedCriterias').append(
        `<div class="chip selectedTags" style="font-weight: bolder;">
          ${tags[i]}
        </div>`);
    }


    for(let i=0; i<availabilityFilteredData.length; i++){
      
      let individualTages = [];
      let matchRate = 0;
      let mRsAndITagsWithIndex={
        matchRate: 0, 
        index:0,
        individualTages:[],

      }
        
      //save matched tags of each individual
      tags.forEach(tag => {
        if (availabilityFilteredData[i].area === tag){
          individualTages.push(tag);
        }else if(availabilityFilteredData[i].skills.includes(tag.toLowerCase())){
          individualTages.push(tag);
        }else if(availabilityFilteredData[i].teams === tag){
          individualTages.push(tag);
        }else if(availabilityFilteredData[i].organisationalskills.includes(tag.toLowerCase())){
          individualTages.push(tag);
        }else if(availabilityFilteredData[i].communication.includes(tag.toLowerCase())){
          individualTages.push(tag);
        }else if(availabilityFilteredData[i].availability.includes(tag.toLowerCase())){
          individualTages.push(tag);
        }

      })
      
      //calculate the match rate of each individule
      matchRate = Math.floor((individualTages.length / tags.length) * 100);
      //keep the individual tags and match rate of each individule with this person's index in the filtered data
      mRsAndITagsWithIndex.matchRate = matchRate;
      mRsAndITagsWithIndex.index = i;
      mRsAndITagsWithIndex.individualTages = individualTages;
      mRsAndITagsWithIndexes.push(mRsAndITagsWithIndex);
    }

    console.log("mRsAndITagsWithIndexes: " + mRsAndITagsWithIndexes);
    console.log("mRsAndITagsWithIndexes: " + mRsAndITagsWithIndexes[0].matchRate);
    mRsAndITagsWithIndexes.forEach(element => matchRates.push(element.matchRate));


    // var largestMatchRates = [];
    // largestMatchRates = matchRates.forEach(rate => {
    //   if(rate === Math.max(matchRates)){
    //     largestMatchRates.push
    //   }
    // }
    //sort match rates from the lowest to the largest
    var sortedMatchRates = matchRates.sort((a,b) => {
      return a - b;
    });
    
    // generate a card for each person based on the match rate from high to low
    for (let i=sortedMatchRates.length; i >= 0; i--){
          let personName = '';
          let image = '';
          let imageLarge = '';
          let phone = '';
          let email = '';
          let area = '';
          let teams = '';
          let organisationalskills = [];
          let skills = [];
          let communication = [];

          let personIndex = -1;
          let individualTages = [];
          let matchRate = 0;

      for(let x=0;x< mRsAndITagsWithIndexes.length;x++){
        if (mRsAndITagsWithIndexes[x].matchRate === sortedMatchRates[i]){
          console.log("object.matchRate:" + mRsAndITagsWithIndexes[x].matchRate);
          console.log("sortedMatchRates[i]:" + sortedMatchRates[i]);
         personName = availabilityFilteredData[mRsAndITagsWithIndexes[x].index].name;
         image = availabilityFilteredData[mRsAndITagsWithIndexes[x].index].image;
         imageLarge = availabilityFilteredData[mRsAndITagsWithIndexes[x].index].imageLarge;
         phone = availabilityFilteredData[mRsAndITagsWithIndexes[x].index].phone;
         email = availabilityFilteredData[mRsAndITagsWithIndexes[x].index].email;
         area = availabilityFilteredData[mRsAndITagsWithIndexes[x].index].area;
         teams = availabilityFilteredData[mRsAndITagsWithIndexes[x].index].teams;
         organisationalskills = availabilityFilteredData[mRsAndITagsWithIndexes[x].index].organisationalskills;
         skills = availabilityFilteredData[mRsAndITagsWithIndexes[x].index].skills;
         communication = availabilityFilteredData[mRsAndITagsWithIndexes[x].index].communication;

         individualTages = mRsAndITagsWithIndexes[x].individualTages;
         matchRate = mRsAndITagsWithIndexes[x].matchRate;
         personIndex = mRsAndITagsWithIndexes[x].index;
         mRsAndITagsWithIndexes.splice(x,1);
         break;
      }
      }
      
        if(personIndex !== -1){
          console.log("personIndex is not -1");
        // append items to the result list
        $('.resultsList').append(`<li>
        <div class="collapsible-header" style="height:68px; 
        align-items:center;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 900;">
          <img src=${image} alt="" class="circle" style="height:42px; width: 42px;">
          <div class="valign-wrapper">${personName}</div> 
          <div class="bestMatchContainer" style="height: 52px;">
      
            <div class="material-icons star${personIndex}" style="opacity: 0;
            font-size: 0px;
            font-weight: 900;
            color: rgb(255, 153, 0);
            position: relative;
            top:40px;
            left: 30%;">military_tech</div>
      
            <div class="bestMatch${personIndex}" style="font-size: 0px;
            font-weight: 900;
            display: block;
            position: relative;
            top:20px;
            opacity: 0;">Best Match</div> 
      
          
          </div>
          <div class="gauge-container" 
          style="display: inline-block;
          position:relative;
          width: 62px;
          height: 62px;">
            <svg class="gauge" viewBox="0 0 150 150" style="position: relative;
            display: block;">
              <circle transform="rotate(-90 75 75)"  class="progress${personIndex}" r="65"  cx="75" cy="75" pathLength="1000" 
              style=" fill: rgba(250, 121, 0, 0.7);
              stroke: rgb(250, 121, 0);
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation-fill-mode: forwards;
              animation: pulse${personIndex} 2s linear;
              stroke-width:18;" >
              </circle>
            </svg>
            <span class="center percentage" 
            style="display: inline-block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-weight: 900;
            color: rgb(27, 31, 31);">
              <span class="value${personIndex}" style="font-size: 14px;">0</span>
              <span class="percentSymbol" style="font-size: 9px;">%</span>
            </span>
          </div>        
        </div>
      <div class="collapsible-body" style="padding:12px;">
        
        <div class="individualTags${personIndex}">
          <P>Matched Criterias: </P>
        </div>
        <div class="personalInfo">
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        </div>
        <div style="margin-top:20px;">
        <a class="waves-effect waves-light btn-small moreInfoBtn${personIndex}"><i class="material-icons left">read_more</i>More</a>
        <a class="waves-effect waves-light btn-small"><i class="material-icons left">bookmark</i>Save</a>
        </div>
      </div>
      </li>`);

      $('head').append(`<style class="matchRateKeyFrames${personIndex}"></style>`);
          
        var largestMatchRate = sortedMatchRates[sortedMatchRates.length - 1];
        console.log("largestMatchRate: " + largestMatchRate);
        //animate the match rate number
        animateMatchRate(`.value${personIndex}`,0,matchRate,2000, largestMatchRate, personIndex);
      
        
            // append tags for each individual
            individualTages.forEach(tag => {
              $(`.individualTags${personIndex}`).append(
                `<div class="chip green lighten-1 individualTag" style="font-weight: bolder;">
                  ${tag}
                </div>`);
      
            })

        }

        $(`.moreInfoBtn${personIndex}`).click((evt) => {
          evt.preventDefault();
          $(".moreInfo").animate({left: 0}, 500);
          $(".searchResults").hide();
          $(".searchResults").animate({left: 0 - windowWidth}, 800);
          $(".moreInfo").show();

          $('h6').remove();
          $('.header').append(`<h6 class="title">Profile</h6>`);
          $('.profileHeader').append(
            `<img src="${imageLarge}" class="circle" style="height:50%; width: 50%;">
          <h6 style="font-weight: 900;">${personName}</h6>`
          );
          $('.profileBody').append(
            `<p>Area: ${area}</p>
            <p>Teams: ${teams}</p>
            <p>Organisationalskills: ${organisationalskills}</p>
            <p>Communication: ${communication}</p>
            <p>Skills: ${skills}</p>
            <p>Phone: ${phone}</p>
            <p>Email: ${email}</p>
            <a class="waves-effect waves-light btn-small"><i class="material-icons left">bookmark</i>Save</a>`
          );

          
        });
        
    }
    
    
    $(".home").animate({left: 0 - windowWidth}, 800);
    $(".searchResults").show();
    $(".searchResults").animate({left: 0}, 500);
    $(".home").hide();
    $(".searchForm")[0].reset();

    
  });
  
}
  );

$(".backWard").click((evt) => {
  evt.preventDefault();
  let title = document.querySelectorAll('.title');
  console.log("title:"+title[0].innerHTML);
  if(title[0].innerHTML === 'Search Results'){
    $('h6').remove('.title');
    $('.header').append(`<h6 class="title">Select Area</h6>`);
    $(".home").show();
    $(".home").animate({left: 0}, 250);
    $(".searchResults").animate({left: windowWidth}, 300, () => {
      $(".selectedTags").remove();
      $(".resultsList").empty();
      $(".searchResults").hide();
    });
    

  }else if(title[0].innerHTML === 'Profile'){
    $('h6').remove('.title');
    $('.header').append(`<h6 class="title">Search Results</h6>`);
    // $(".searchResults").css("z-index", '1');
    // $(".moreInfo").css("z-index", '0');
    $(".searchResults").show();
    $(".searchResults").animate({left: 0}, 250);
    
    $(".moreInfo").animate({left: windowWidth}, 300, ()=> {
      $('.profileHeader').empty();
      $('.profileBody').empty();
      $(".moreInfo").hide();
    });
   
    
  }
 
  
});




function animateMatchRate(element, start, end, duration, largestMatchRate,personIndex) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.querySelector(element);
  var timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
  
  //define colors to animate
  var g = 500 * (end / 100);
  var r = 250;
  if(g > 250){
    r = g - 250;
    g = 250;
  }

  console.log("largestMatchRate: " + largestMatchRate);
  if(end === largestMatchRate){
    console.log("this is the largest");
    $(`.progress${personIndex}`).animate({strokeDashoffset: 1000 - end * 10},2000,"linear", ()=> {
    $(`.star${personIndex}`).animate({top: '5px', fontSize: '20px', opacity:1},200,"linear", () => {
      $(`.bestMatch${personIndex}`).animate({top: '2px', fontSize: '10px', opacity:1},200,"linear")
    });
  });
  }else{
    $(`.progress${personIndex}`).animate({strokeDashoffset: 1000 - end * 10},2000,"linear");
  }
  
  
  
  $(`.progress${personIndex}`).css({"fill": `rgba(${r}, ${g}, 0, 0.7)`, "stroke": `rgb(${r}, ${g-50}, 0)`});
  $(`.matchRateKeyFrames${personIndex}`).append(` @keyframes pulse${personIndex} {
    0% {
      fill: rgb(${r}, 0, 0, 0);
      stroke: rgb(255, 0, 0);
    }
    85%{
      fill: rgb(${r}, 0, 0, 0);

    }
    100% {
      fill:rgba(${r}, ${g}, 0, 0.7);
      stroke: rgb(${r}, ${g-50}, 0);
  }

}`);

  
  
    

}

  
 
