using BookingAPI.Interfaces;
using BookingAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookingAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors("ReactCors")]
    public class OtherTravellersController : ControllerBase
    {
        private readonly IRepo<OtherTravellers, int> _travellerRepo;
        private readonly IManageBooking _manageService;

        public OtherTravellersController(IRepo<OtherTravellers,int> travellerRepo,IManageBooking manageService)
        {
            _travellerRepo = travellerRepo;
            _manageService = manageService;
        }
        [HttpPost]
        [ProducesResponseType(typeof(OtherTravellers), StatusCodes.Status201Created)]//Success Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]//Failure Response
        public async Task<ActionResult<OtherTravellers?>> Addpassenger(OtherTravellers item)
        {
            try
            {
                var passenger = await _travellerRepo.Add(item);
                if (passenger != null)
                {
                    return Created("Added!", passenger);
                }
                return BadRequest("Unable to add");
            }
            catch (Exception)
            {
                return BadRequest("Backend error :(");
            }
        }
        [HttpGet]
        [ProducesResponseType(typeof(List<OtherTravellers>), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<ICollection<OtherTravellers>>> GetAllPassengers()
        {
            try
            {
                var passenger = await _travellerRepo.GetAll();
                if (passenger != null)
                {
                    return Ok(passenger);
                }
                return BadRequest("No extra travellers available :(");
            }
            catch (Exception)
            {
                return BadRequest("Database error");
            }
        }

        [HttpGet]
        [ProducesResponseType(typeof(OtherTravellers), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<OtherTravellers>> GetPassenger(int id)
        {
            try
            {
                var passenger = await _travellerRepo.Get(id);
                if (passenger != null)
                {
                    return Ok(passenger);
                }
                return BadRequest("No passenger found :(");
            }
            catch (Exception)
            {
                return BadRequest("Database error");
            }
        }

        [HttpDelete]
        [ProducesResponseType(typeof(OtherTravellers), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<OtherTravellers>> DeletePassenger(int id)
        {
            try
            {
                var passenger = await _travellerRepo.Delete(id);
                if (passenger != null)
                {
                    return Ok(passenger);
                }
                return BadRequest("Not deleted");
            }
            catch (Exception)
            {
                return BadRequest("Backend error");
            }
        }
        [HttpPut]
        [ProducesResponseType(typeof(OtherTravellers), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<OtherTravellers>> UpdatePassengers(OtherTravellers item)
        {
            try
            {
                var passenger = await _travellerRepo.Update(item);
                if (passenger != null)
                {
                    return Ok(passenger);
                }
                return BadRequest("Not updated");
            }
            catch (Exception)
            {
                return BadRequest("Backend error");
            }
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<OtherTravellers>), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<ICollection<OtherTravellers>>> GetGuestsbyTraveller(string id)
        {
            try
            {
                var passenger = await _manageService.GetGuestsByTravellerEmail(id);
                if (passenger != null)
                {
                    return Ok(passenger);
                }
                return BadRequest("No passengers available :(");
            }
            catch (Exception)
            {
                return BadRequest("Database error");
            }
        }

    }
}


    