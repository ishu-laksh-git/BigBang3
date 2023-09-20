using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TourPackagesAPI.Interfaces;
using TourPackagesAPI.Models;
using TourPackagesAPI.Services;

namespace TourPackagesAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors("ReactCors")]

    public class ItenaryController : ControllerBase
    {
        private readonly IRepo<itenary, int> _itenaryRepo;
        private readonly IService _service;
        public ItenaryController(IRepo<itenary,int> itenaryRepo,IService service)
        {
            _itenaryRepo = itenaryRepo;
            _service = service;
        }
        [HttpPost]
        [ProducesResponseType(typeof(itenary), StatusCodes.Status201Created)]//Success Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]//Failure Response
        public async Task<ActionResult<itenary?>> AddItenary(itenary item)
        {
            try
            {
                var itenaryItem = await _itenaryRepo.Add(item);
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
        [ProducesResponseType(typeof(List<itenary>), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<ICollection<itenary>>> GetAllItenaries()
        {
            try
            {
                var itenaryItem = await _itenaryRepo.GetAll();
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
        [ProducesResponseType(typeof(itenary), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<itenary>> GetItenary(int id)
        {
            try
            {
                var itenaryItem = await _itenaryRepo.Get(id);
                if (itenaryItem != null)
                {
                    return Ok(itenaryItem);
                }
                return BadRequest("No itenary found :(");
            }
            catch (Exception)
            {
                return BadRequest("Database error");
            }
        }

        [HttpDelete]
        [ProducesResponseType(typeof(itenary), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<itenary>> DeleteItenary(int id)
        {
            try
            {
                var review = await _itenaryRepo.Delete(id);
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
        [ProducesResponseType(typeof(itenary), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<itenary>> UpdateItenary(itenary item)
        {
            try
            {
                var itenaryItem = await _itenaryRepo.Update(item);
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
        [ProducesResponseType(typeof(List<itenary>), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<ICollection<itenary>>> GetItenariesByPackage(int id)
        {
            try
            {
                var itenaryItem = await _service.GetItenaryByPackage(id);
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

    }
}

