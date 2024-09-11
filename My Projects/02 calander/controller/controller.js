const appointmentSchema = require('../model/Appointment')
function createMonth(year, month) {
    const thisMonth = [];
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // Date 1 which day ?
    // console.log('First Day :',firstDayOfMonth)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in the month
    // console.log('Total Days :',daysInMonth)
    const prevMonth = new Date(year, month, 0).getDate();
    // console.log(prevMonth)

    let week = new Array(7); // Create an null aray
    let day = 1;

    for(let i = 0; i < firstDayOfMonth;i++){
        week[i] = (prevMonth - firstDayOfMonth)+i+1
    }
    // first week
    for (let i = firstDayOfMonth; i <= 6; i++) {
        week[i] = day++;
    }
    thisMonth.push(week); // Add thisMonth to first week

    // remain week
    let endMonth = false;

    while (day <= daysInMonth) {
        week = new Array(7);
        nextMonth = 1;
        for (let i = 0; i <= 6 && endMonth !== true; i++) {
            if(day <= daysInMonth){
                week[i] = day;
            }
            if(day > daysInMonth){
                week[i] = nextMonth++
                i === 6 ? endMonth = true : endMonth = false;
            }
            day++;
        }
        thisMonth.push(week);
    }

    // console.log(thisMonth)
    return thisMonth;
}

module.exports.month = (req,res)=>{
    
}

module.exports.home = (req,res)=>{
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const monthsName = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
    const thisMonth = createMonth(year, month);    
    
    res.render('month', { thisMonth, year, month : monthsName[month],monthNumber : month });
}

module.exports.addAppoitment = async (req, res)=>{
    try{
        const isAdd = await appointmentSchema.create(req.body)
        isAdd ? res.redirect('/') : console.log('Data Not Add Properly');
    } catch(err){
        console.log(err);
    }
} 