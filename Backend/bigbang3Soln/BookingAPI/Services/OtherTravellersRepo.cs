using BookingAPI.Interfaces;
using BookingAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BookingAPI.Services
{
    public class OtherTravellersRepo : IRepo<OtherTravellers, int>
    {
        private readonly Context _context;
        public OtherTravellersRepo(Context context)
        {
            _context = context;
        }
        public async Task<OtherTravellers?> Add(OtherTravellers item)
        {
            var user = _context.Tour_Travellers.SingleOrDefault(u => u.OtherTravellerId == item.OtherTravellerId);
            if (user == null)
            {
                try
                {
                    _context.Tour_Travellers.Add(item);
                    await _context.SaveChangesAsync();
                    return item;
                }
                catch (Exception)
                {
                    throw new Exception();
                }
            }
            return null;
        }

        public async Task<OtherTravellers?> Delete(int id)
        {
            try
            {
                var user = await Get(id);
                if (user != null)
                {
                    _context.Tour_Travellers.Remove(user);
                    await _context.SaveChangesAsync();
                    return user;
                }
                return null;

            }
            catch (Exception)
            {
                throw new Exception();
            }
        }

        public async Task<OtherTravellers?> Get(int id)
        {
            try
            {
                var user = await _context.Tour_Travellers.SingleOrDefaultAsync(u => u.OtherTravellerId == id);
                if (user == null)
                {
                    return null;
                }
                return user;
            }
            catch (Exception)
            {
                throw new Exception();
            }
        }

        public async Task<ICollection<OtherTravellers>?> GetAll()
        {
            try
            {
                var users = await _context.Tour_Travellers.ToListAsync();
                if (users != null)
                {
                    return users;
                }
                return null;
            }
            catch (Exception)
            {
                throw new Exception();
            }
        }

        public async Task<OtherTravellers?> Update(OtherTravellers item)
        {
            var user = _context.Tour_Travellers.SingleOrDefault(u => u.OtherTravellerId == item.OtherTravellerId);
            if (user != null)
            {
                try
                {
                    user.Name = item.Name;
                    user.age = item.age;
                    user.packageId = item.packageId;
                    user.travellerEmail = item.travellerEmail;
                    await _context.SaveChangesAsync();
                    return user;
                }
                catch (Exception)
                {
                    throw new Exception();
                }
            }
            return null;
        }
    }


}
