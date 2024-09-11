
function createCalendar(year, month) {
    const calendar = [];
    const firstDayOfMonth = new Date(year, month, 1).getDay(); 
    const daysInMonth = new Date(year, month + 1, 0).getDate(); 
    
    // console.log(firstDayOfMonth)
    
}


module.exports.home = (req,res)=>{
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const monthsName = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
    const calander = createCalendar(year, month);
    
    
    
    res.render('month', { calendar, year, month : monthsName[month] });
}

// Route to display the calendar