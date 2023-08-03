using BookingAPI.Interfaces;
using BookingAPI.Models;
using BookingAPI.Models.DTO;
using BookingAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookingAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class bookingController : ControllerBase
    {
        private readonly IRepo<Reservation, int> _reservationRepo;
        private readonly IManageBooking _bookingService;

        public bookingController(IRepo<Reservation,int> reservationRepo,IManageBooking bookingService)
        {
            _reservationRepo = reservationRepo;
            _bookingService = bookingService;
        }
        [HttpPost]
        [ProducesResponseType(typeof(Reservation), StatusCodes.Status201Created)]//Success Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]//Failure Response
        public async Task<ActionResult<Reservation?>> AddReservation(Reservation item)
        {
            try
            {
                var reservation = _reservationRepo.Add(item);
                if(reservation != null) {
                    return Created("Added :)", reservation);
                }
                return BadRequest("Unable to add");
            }
            catch (Exception)
            {
                return BadRequest("Backend error :(");
            }
        }

        [HttpPut]
        [ProducesResponseType(typeof(Reservation), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<Reservation>> UpdateReservation(Reservation item)
        {
            try
            {
                var available = await _reservationRepo.Update(item);
                if (available != null)
                {
                    return Ok(available);
                }
                return BadRequest("Not updated");
            }
            catch (Exception)
            {
                return BadRequest("Backend error");
            }
        }

        [HttpGet]
        [ProducesResponseType(typeof(Reservation), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<Reservation>> GetReservation(int id)
        {
            try
            {
                var availableItem = await _reservationRepo.Get(id);
                if (availableItem != null)
                {
                    return Ok(availableItem);
                }
                return BadRequest("No available found :(");
            }
            catch (Exception)
            {
                return BadRequest("Database error");
            }
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<Reservation>), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<ICollection<Reservation>>> GetAllReservations()
        {
            try
            {
                var itenaryItem = await _reservationRepo.GetAll();
                if (itenaryItem != null)
                {
                    return Ok(itenaryItem);
                }
                return BadRequest("No itenary available :(");
            }
            catch (Exception)
            {
                return BadRequest("Database error");
            }
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<Reservation>), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<ICollection<Reservation>>> GetReservationsByTraveller(int id)
        {
            try
            {
                var itenaryItem = await _bookingService.GetGuestsByTravellerid(id);
                if (itenaryItem != null)
                {
                    return Ok(itenaryItem);
                }
                return BadRequest("No tour available :(");
            }
            catch (Exception)
            {
                return BadRequest("Database error");
            }
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<Reservation>), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<ICollection<Reservation>>> GetReservationsByPackage(int id)
        {
            try
            {
                var itenaryItem = await _bookingService.GetAvailableByPackageId(id);
                if (itenaryItem != null)
                {
                    return Ok(itenaryItem);
                }
                return BadRequest("No tour available :(");
            }
            catch (Exception)
            {
                return BadRequest("Database error");
            }
        }
    }
}
