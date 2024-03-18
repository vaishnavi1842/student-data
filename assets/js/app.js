const cl=console.log;

const stdform=document.getElementById("stdform");
const fnameControl=document.getElementById("fname");
const lnameControl=document.getElementById("lname");
const emailControl=document.getElementById("email");
const contactControl=document.getElementById("contact");
const stdTable=document.getElementById("stdTable");
const noStdInfo=document.getElementById("noStdInfo");
const stdContainer=document.getElementById("stdContainer");



const stdArr=[];

const stdTemplating=(arr)=>{
	let result=``;
	
	arr.forEach((std,i)=>{
		result+=`
		      <tr>
				  <td>${i+1}</td>	
				  <td>${std.fname}</td>
				  <td>${std.lname}</td>
				  <td>${std.email}</td>
				  <td>${std.contact}</td>
			 </tr>
		`;
	})
	stdContainer.innerHTML=result;
}


const handleStdCountState=()=>{	
   if(stdArr.length > 0 ){
	   stdTable.classList.remove("d-none");
	   noStdInfo.classList.add("d-none");
   }else{
	   stdTable.classList.add("d-none");
	   noStdInfo.classList.remove("d-none");
   }
}
   handleStdCountState();

const onStdAddhandler=(eve)=>{
	eve.preventDefault();
	let newstd={
		fname:fnameControl.value,	
		lname:lnameControl.value,
		email:emailControl.value,
		contact:contactControl.value,
	}
	stdArr.push(newstd);
	handleStdCountState(); 
	cl(stdArr);
	
	stdTemplating(stdArr)
	Swal.fire({
		title:`${newstd.fname} ${newstd.lname} added as a student succesfully`,
		timer:2500,
		icon:'success'
	});
	eve.target.reset();
	
	
}

stdform.addEventListener("submit",onStdAddhandler);	