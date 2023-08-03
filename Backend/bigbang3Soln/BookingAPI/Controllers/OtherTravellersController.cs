using BookingAPI.Interfaces;
using BookingAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookingAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
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
                var itenaryItem = await _travellerRepo.Add(item);
                if (itenaryItem != null)
                {
                    return Created("Added!", itenaryItem);
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

        public async Task<ActionResult<ICollection<OtherTravellers>>> GetAllItenaries()
        {
            try
            {
                var itenaryItem = await _travellerRepo.GetAll();
                if (itenaryItem != null)
                {
                    return Ok(itenaryItem);
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

        public async Task<ActionResult<OtherTravellers>> GetTravellers(int id)
        {
            try
            {
                var itenaryItem = await _travellerRepo.Get(id);
                if (itenaryItem != null)
                {
                    return Ok(itenaryItem);
                }
                return BadRequest("No extra passenger found :(");
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

        public async Task<ActionResult<OtherTravellers>> DeleteItenary(int id)
        {
            try
            {
                var review = await _travellerRepo.Delete(id);
                if (review != null)
                {
                    return Ok(review);
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

        public async Task<ActionResult<OtherTravellers>> UpdateItenary(OtherTravellers item)
        {
            try
            {
                var itenaryItem = await _travellerRepo.Update(item);
                if (itenaryItem != null)
                {
                    return Ok(itenaryItem);
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

        public async Task<ActionResult<ICollection<OtherTravellers>>> GetGuestsbyTraveller(int id)
        {
            try
            {
                var itenaryItem = await _manageService.GetGuestsByTravellerid(id);
                if (itenaryItem != null)
                {
                    return Ok(itenaryItem);
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


    