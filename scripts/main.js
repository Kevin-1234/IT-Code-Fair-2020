
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
        `<div class="chip">
          ${tags[i]}
        </div>`);
    }

    

    for(let i=0; i<availabilityFilteredData.length; i++){
      let personName = availabilityFilteredData[i].name;
      let image = availabilityFilteredData[i].image;
      let phone = availabilityFilteredData[i].phone;
      let email = availabilityFilteredData[i].email;
      let individualTages = [];
      let matchRate = 0;
      
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
      
      matchRate = Math.floor((individualTages.length / tags.length) * 100);
      console.log("individualTages: " + individualTages.length);
      console.log();
      console.log("individualTages: " + individualTages);

      // append items to the result list
      $('.resultsList').append(`<li>
      <div class="collapsible-header row" style='height:58px; align-items:center;'>
      <img src=${image} alt="" style='height:48px; width: 68px;'class="circle col s3 pull-s2">
      <div class="col s5 pull-s3 valign-wrapper">${personName}</div>         
    </div>
    <div class="collapsible-body" style="padding:12px;">
      <P>Match Rate: ${matchRate + "%"}</P>
      <div class="individualTags${i}"></div>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      
      <div style="margin-top:20px;">
      <a class="waves-effect waves-light btn-small">More Info</a>
      <a class="waves-effect waves-light btn-small">Save</a>
      </div>
    </div>
  </li>`);

      individualTages.forEach(tag => {
        $(`.individualTags${i}`).append(
          `<div class="chip green lighten-1 ">
            ${tag}
          </div>`);

      })

    }
    
    $(".home").animate({left: 0 - windowWidth}, 800);
    $(".searchResults").show();
    //$(".searchResults").css("display","block");
    $(".searchResults").animate({left: 0}, 500);
    $(".home").hide();
  });
  
}

);
