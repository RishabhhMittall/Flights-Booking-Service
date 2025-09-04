const cron = require('node-cron');


function scheduleCrons() {
    const  BookingService  = require('../../services/booking-service');
    cron.schedule('*/10 * * * * *', async () => {
        await BookingService.cancelOldBookings();
    });
}

module.exports = scheduleCrons;