let schoolNameEl = document.getElementById("schoolName");
let schoolAddressEl=document.getElementById("address");
let schoolPhoneEl = document.getElementById("phone");
let divisionEl  =document.getElementById("division");
let nameEl=document.getElementById("name");
let fatherNameEl=document.getElementById("father");
let motherNameEl=document.getElementById("mother");
let dobEl =document.getElementById("dob");
let rollNumberEl=document.getElementById("rollnumber");
let percEl =document.getElementById("percentage");
let gradeEl=document.getElementById("grade");
let schoolEmail=document.getElementById("email");
let attendEl = document.getElementById("attendence");


async function getStudentData(){
    const url="http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521";
    let response = await fetch(url)
    let studentData = await response.json()
    const {Response} = studentData;
    console.log(Response)
   // console.log(Response.ProgressList.lstStudentInfo);
    const studentPersonalData = Response.ProgressList.lstStudentInfo
    console.log(studentPersonalData)
   // const attendenceData = studentPersonalData[0].Attandence;
   // console.log(attendenceData)
    // let sumTotal = 0;
    // attendenceData.forEach((eachMonth)=>{
    //     sumTotal +=eachMonth.MonthPresence
    // })
    //console.log(sumTotal)
    console.log(studentPersonalData.length)
    if(studentPersonalData.length!==0){
        schoolNameEl.textContent=studentPersonalData[0].SchoolName;
    schoolAddressEl.textContent=studentPersonalData[0].SchoolAddress;
    schoolPhoneEl.textContent=studentPersonalData[0].SchoolPhoneNumber;
    divisionEl.textContent=studentPersonalData[0].ClassName +" "+studentPersonalData[0].SectionName;
    nameEl.textContent=studentPersonalData[0].Name;
    fatherNameEl.textContent=studentPersonalData[0].FatherName;
    motherNameEl.textContent=studentPersonalData[0].MotherName;
    dobEl.textContent=studentPersonalData[0].DOB;
    rollNumberEl.textContent=studentPersonalData[0].RollNumber;
    percEl.textContent=studentPersonalData[0].Totalper+"%";
    gradeEl.textContent=studentPersonalData[0].Grade;
    schoolEmail.textContent=studentPersonalData[0].SchoolEmail;
    attendEl.textContent=sumTotal;
    }
     else{
//this is hardcore if api returns 0 values
        schoolNameEl.textContent="MAHARAJA INTERNATIONAL SCHOOL";
        schoolAddressEl.textContent="Near Abhilasha Colony,Dewas Road,Affiliated to CBSE,AffiliationNo:10313257";
        schoolPhoneEl.textContent="987456789";
        divisionEl.textContent="Nursery-A";
        nameEl.textContent="Nehal Vishnu Bodana"
        fatherNameEl.textContent="Vishnu Bodana";
        motherNameEl.textContent="BHAVANA BODANA";
        dobEl.textContent="10-1UG-2008";
        rollNumberEl.textContent="2";
       //percEl.textContent="63";
    // gradeEl.textContent="B2";
    // schoolEmail.textContent=studentPersonalData[0].SchoolEmail;
    attendEl.textContent="131";
     }

    let htmlContentR1='<tr><th>ENGLISH</th><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td></tr>'
    let htmlContentR2='<tr>     <th>HINDI</th><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td></tr>'
    let htmlR3='<tr>     <th>MATHS</th><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td></tr>'
    let htmlR4='<tr>     <th>Total</th><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td></tr>'

    let r1='<tr colspan="9"> <th colspan="3" class="personal-info-data status-info">Result:PASS</th> <th colspan="3" class="personal-info-data status-info">Percentage:63%'
    let r2='</th> <th colspan="3" class="personal-info-data status-info">Grade : B2</th> </tr> <tr> <th colspan="3" class="status-info">Parents </th> '
    let r3='<th colspan="3" class="status-info">Class Teacher</th> <th colspan="3" class="status-info">Principal</th> </tr> <tr style="height:60px"> <th colspan="3" class="status-info"></th> <th '
    let r4='colspan="3" class="status-info"></th> <th colspan="3" class="status-info"></th> </tr>'
    
    let finalHTMLContent = htmlContentR1+htmlContentR2+htmlR3+htmlR4+r1+r2+r3+r4
    console.log(finalHTMLContent)
    document.getElementById("tablebody").innerHTML=finalHTMLContent;
    console.log("After appending")
   
}
getStudentData()
