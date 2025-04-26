export type UserPreference = {
  preferredCategories: string[];
  preferredDays: string[];
  budget: {
    min: number;
    max: number;
  };
  interests: string[];
  availableTime: string[];
};

export type ChecklistItem = {
  id: string;
  text: string;
  isCompleted: boolean;
  category: string;
};

export type PointOfInterest = {
  id: string;
  name: string;
  type: 'restaurant' | 'parking' | 'transport' | 'shopping' | 'attraction';
  location: {
    lat: number;
    lng: number;
  };
  rating: number;
  distance: number;
  description: string;
  openHours: string;
};

export type GroupPlan = {
  id: string;
  activityId: number;
  date: string;
  participants: {
    id: string;
    name: string;
    status: 'pending' | 'accepted' | 'declined';
    preferences?: {
      time?: string;
      transportation?: string;
      budget?: number;
    };
  }[];
  budget: {
    perPerson: number;
    total: number;
    expenses: {
      category: string;
      amount: number;
      paidBy: string;
    }[];
  };
  checklist: ChecklistItem[];
  notes: string;
};

export type CalendarEvent = {
  id: string;
  activityId: number;
  title: string;
  start: string;
  end: string;
  type: 'personal' | 'group';
  groupId?: string;
  reminder: boolean;
  notes?: string;
};

export type RecommendationScore = {
  activityId: number;
  score: number;
  factors: {
    category: number;
    budget: number;
    time: number;
    weather: number;
    popularity: number;
    userPreference: number;
  };
}; 