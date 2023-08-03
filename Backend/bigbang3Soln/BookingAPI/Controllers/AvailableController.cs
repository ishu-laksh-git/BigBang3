using BookingAPI.Interfaces;
using BookingAPI.Models;
using BookingAPI.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookingAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AvailableController : ControllerBase
    {
        private readonly IAvailableRepo _availableRepo;
        private readonly IManageBooking _managebooking;
        public AvailableController(IAvailableRepo availableRepo,IManageBooking manageBooking)
        {
            _availableRepo = availableRepo;
            _managebooking = manageBooking;
        }

        [HttpPost]
        [ProducesResponseType(typeof(Available), StatusCodes.Status201Created)]//Success Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]//Failure Response
        public async Task<ActionResult<Available?>> AddAvailable(Available item)
        {
            try
            {
                var availability = await _availableRepo.Add(item);
                if (availability != null)
                {
                    return Created("Added!", availability);
                }
                return BadRequest("Unable to add");
            }
            catch (Exception)
            {   
                return BadRequest("Backend error :(");
            }
        }

        [HttpPut]
        [ProducesResponseType(typeof(Available), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<Available>> UpdateAvailable(availableDTO item)
        {
            try
            {
                var available = await _availableRepo.Update(item);
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
        [ProducesResponseType(typeof(Available), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<Available>> GetAvailable(int id)
        {
            try
            {
                var availableItem = await _availableRepo.Get(id);
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
        [ProducesResponseType(typeof(Available), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<Available>> GetAvailableByPackage(int id)
        {
            try
            {
                var availableItem = await _managebooking.GetAvailableByPackageId(id);
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


    }
}
