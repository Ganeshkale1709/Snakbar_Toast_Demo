let toastBox = document.getElementById('toastBox');

let successMsg = '<i class="fa fa-check-circle"></i>  Succrssfully Submited';
let errorMsg = '<i class="fa fa-times-circle"></i> Please Fix the error';
let invalidMsg = '<i class="fa fa-exclamation"></i> Invalid input , Try Again';


function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    
    if(msg.includes('error'))
    {
        toast.classList.add('error');
    }
    if(msg.includes('Invalid'))
    {
        toast.classList.add('Invalid');
    }

    //settime out
    setTimeout(()=>{
        toast.remove();

    },4000);

}
// showToast();

