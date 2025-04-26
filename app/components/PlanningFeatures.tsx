import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DollarSign,
  MapPin,
  Star,
  Clock,
  Sun,
  Sunset,
  Moon,
  Cloud,
  Calendar,
  Phone,
  Info,
  ArrowRight,
  Car,
  Image as ImageIcon,
  Baby,
  Dog,
  ChevronLeft,
  ChevronRight,

  Check,
  X
} from 'lucide-react';

interface PlanningFeaturesProps {
  activityId: number;
  title: string;
  cost: string;
  location: string;
  bestTime: string;
}

interface TimeSlot {
  id: string;
  label: string;
  time: string;
  icon: any;
  color: string;
  description: string;
  weather: {
    temp: string;
    condition: string;
  };
  crowdLevel: {
    level: 'Low' | 'Moderate' | 'High';
    color: string;
  };
  image: string;
}

interface ParkingInfo {
  type: string;
  availability: 'High' | 'Medium' | 'Low';
  distance: string;
  cost: string;
  description: string;
}

export default function PlanningFeatures({ 
  activityId, 
  title, 
  cost, 
  location,
  bestTime
}: PlanningFeaturesProps) {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Parking information
  const parkingOptions: ParkingInfo[] = [
    {
      type: 'Main Parking',
      availability: 'High',
      distance: '1 min walk',
      cost: '$5/hour',
      description: 'Covered parking with security'
    },
    {
      type: 'Street Parking',
      availability: 'Medium',
      distance: '3-5 min walk',
      cost: '$2/hour',
      description: 'Metered parking available'
    },
    {
      type: 'VIP Parking',
      availability: 'High',
      distance: 'Direct access',
      cost: '$10/hour',
      description: 'Reserved spots with valet service'
    }
  ];

  // Time slots for the day
  const timeSlots: TimeSlot[] = [
    { 
      id: 'morning', 
      label: 'Morning', 
      time: '9:00 AM', 
      icon: Sun, 
      color: 'bg-gradient-to-br from-amber-100 to-orange-100 border-amber-200',
      description: 'Perfect for early birds',
      weather: {
        temp: '68°F',
        condition: 'Sunny'
      },
      crowdLevel: {
        level: 'Low',
        color: 'bg-green-100 text-green-800'
      },
      image: 'https://example.com/morning-view.jpg'
    },
    { 
      id: 'afternoon', 
      label: 'Afternoon', 
      time: '2:00 PM', 
      icon: Sun, 
      color: 'bg-gradient-to-br from-sky-100 to-blue-100 border-sky-200',
      description: 'Ideal for lunch and activities',
      weather: {
        temp: '75°F',
        condition: 'Partly Cloudy'
      },
      crowdLevel: {
        level: 'Moderate',
        color: 'bg-yellow-100 text-yellow-800'
      },
      image: 'https://example.com/afternoon-view.jpg'
    },
    { 
      id: 'evening', 
      label: 'Evening', 
      time: '7:00 PM', 
      icon: Sunset, 
      color: 'bg-gradient-to-br from-purple-100 to-indigo-100 border-purple-200',
      description: 'Great for dinner and relaxation',
      weather: {
        temp: '70°F',
        condition: 'Clear'
      },
      crowdLevel: {
        level: 'High',
        color: 'bg-red-100 text-red-800'
      },
      image: 'https://example.com/evening-view.jpg'
    },
    { 
      id: 'night', 
      label: 'Night', 
      time: '10:00 PM', 
      icon: Moon, 
      color: 'bg-gradient-to-br from-indigo-100 to-slate-100 border-indigo-200',
      description: 'Perfect for night owls',
      weather: {
        temp: '65°F',
        condition: 'Clear'
      },
      crowdLevel: {
        level: 'Low',
        color: 'bg-green-100 text-green-800'
      },
      image: 'https://example.com/night-view.jpg'
    },
  ];

  // Get current time slot
  const getCurrentTimeSlot = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 17) return 'afternoon';
    if (hour >= 17 && hour < 21) return 'evening';
    return 'night';
  };

  // Get recommended time slot based on bestTime
  const getRecommendedTimeSlot = () => {
    const timeStr = bestTime.toLowerCase();
    if (timeStr.includes('am') || timeStr.includes('morning')) return 'morning';
    if (timeStr.includes('pm') && (timeStr.includes('12') || timeStr.includes('1') || timeStr.includes('2') || timeStr.includes('3') || timeStr.includes('4'))) return 'afternoon';
    if (timeStr.includes('pm') && (timeStr.includes('5') || timeStr.includes('6') || timeStr.includes('7') || timeStr.includes('8'))) return 'evening';
    if (timeStr.includes('pm') && (timeStr.includes('9') || timeStr.includes('10') || timeStr.includes('11')) || timeStr.includes('night')) return 'night';
    return 'morning';
  };

  const currentTimeSlot = getCurrentTimeSlot();
  const recommendedTimeSlot = getRecommendedTimeSlot();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % timeSlots.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + timeSlots.length) % timeSlots.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex flex-col space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span>{cost}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Indicators */}
          <div className="mb-6 p-4 bg-gray-50 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Venue Policies</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <Baby className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Family Friendly</p>
                  <p className="text-sm text-gray-700">Kids welcome</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <Dog className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Pet Friendly</p>
                  <p className="text-sm text-gray-700">Leashed pets allowed</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <div>
                  <p className="font-medium text-gray-900">Accessible</p>
                  <p className="text-sm text-gray-700">Wheelchair access</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <Check className="w-5 h-5 text-teal-600" />
                <div>
                  <p className="font-medium text-gray-900">Child Care</p>
                  <p className="text-sm text-gray-700">Available on-site</p>
                </div>
              </div>
            </div>
          </div>

          {/* Time-specific Photos */}
          <div className="mb-6 relative">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">View by Time of Day</h4>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
              <img
                src={timeSlots[currentImageIndex].image}
                alt={`${timeSlots[currentImageIndex].label} view`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-medium text-lg">{timeSlots[currentImageIndex].label} View</p>
                <p className="text-white/90 text-sm">{timeSlots[currentImageIndex].time}</p>
              </div>
              <button
                onClick={previousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-md"
              >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-md"
              >
                <ChevronRight className="w-5 h-5 text-gray-800" />
              </button>
            </div>
          </div>

          {/* Parking Information */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Parking Options</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {parkingOptions.map((option) => (
                <div key={option.type} className="p-4 bg-gray-50 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Car className="w-5 h-5 text-gray-800" />
                    <h5 className="font-medium text-gray-900">{option.type}</h5>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">Availability:</span>
                      <span className={`
                        px-2 py-1 rounded-full text-xs font-medium
                        ${option.availability === 'High' ? 'bg-green-100 text-green-800' : ''}
                        ${option.availability === 'Medium' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${option.availability === 'Low' ? 'bg-red-100 text-red-800' : ''}
                      `}>
                        {option.availability}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">Distance:</span>
                      <span className="text-gray-900 font-medium">{option.distance}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">Cost:</span>
                      <span className="text-gray-900 font-medium">{option.cost}</span>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Slots Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Best Times to Visit</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-700">Low Traffic</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-gray-700">Moderate</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-gray-700">High Traffic</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {timeSlots.map((slot) => (
                <div
                  key={slot.id}
                  onClick={() => setSelectedTimeSlot(slot.id)}
                  className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer
                    ${slot.color}
                    ${slot.id === recommendedTimeSlot ? 'ring-2 ring-yellow-500' : ''}
                    ${slot.id === currentTimeSlot ? 'ring-2 ring-blue-500' : ''}
                    ${slot.id === selectedTimeSlot ? 'ring-2 ring-purple-500' : ''}
                    hover:shadow-md`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <slot.icon className="w-5 h-5 text-gray-800" />
                      <span className="font-medium text-gray-900">{slot.label}</span>
                    </div>
                    <div className="flex gap-2">
                      {slot.id === recommendedTimeSlot && (
                        <Star className="w-4 h-4 text-yellow-600" />
                      )}
                      {slot.id === currentTimeSlot && (
                        <Clock className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-800 mb-2">{slot.time}</p>
                  <p className="text-sm text-gray-700 mb-3">{slot.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-gray-700" />
                      <span className="text-gray-800">{slot.weather.temp}, {slot.weather.condition}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${slot.crowdLevel.color}`}>
                      {slot.crowdLevel.level} Traffic
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Booking Section */}
          {selectedTimeSlot && (
            <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Quick Booking</h4>
                  <p className="text-sm text-gray-700">
                    Selected time: {timeSlots.find(slot => slot.id === selectedTimeSlot)?.time}
                  </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Additional Information */}
          <div className="mt-8 flex items-center gap-2 text-sm text-gray-700">
            <Info className="w-4 h-4" />
            <p>Prices may vary based on the time of visit.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 