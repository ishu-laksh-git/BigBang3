using BookingAPI.Models;
using BookingAPI.Models.DTO;

namespace BookingAPI.Interfaces
{
    public interface IAvailableRepo
    {
        public Task<Available?> Add(Available item);
        public Task<Available?> Update(availableDTO item);
        public Task<Available?> Delete(int id);
        public Task<Available?> Get(int id);
        public Task<ICollection<Available>?> GetAll();
    }
}
