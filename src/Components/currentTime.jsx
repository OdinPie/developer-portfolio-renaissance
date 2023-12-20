const currentdate = new Date();

export default function currentTime(){
    const date = currentdate.getDate();
    const monthe = currentdate.getMonth();
    var months = [ "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December" ];
    let month = months[monthe];
    return [date,month];
}