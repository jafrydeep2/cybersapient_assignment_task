export interface User {
  id: string;
  name: string;
  avatar: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  rewardPoints: number;
  totalPoints: number;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  isClaimed: boolean;
  expiresAt?: string;
  discount?: string;
}

export interface RewardData {
  currentPoints: number;
  totalPoints: number;
  nextMilestone: number;
  milestones: Array<{
    points: number;
    reward: string;
    achieved: boolean;
  }>;
}

export const mockUser: User = {
  id: '1',
  name: 'Alex Johnson',
  avatar: '/api/placeholder/60/60',
  level: 8,
  xp: 2450,
  xpToNextLevel: 3000,
  rewardPoints: 1250,
  totalPoints: 8500,
};

export const mockBenefits: Benefit[] = [
  {
    id: '1',
    title: 'Premium Coffee Discount',
    description: 'Get 50% off on your next coffee purchase at any partner cafe',
    icon: '☕',
    category: 'Food & Beverage',
    isClaimed: false,
    expiresAt: '2024-02-15',
    discount: '50% OFF',
  },
  {
    id: '2',
    title: 'Movie Ticket Voucher',
    description: 'Free movie ticket for any show at partner theaters',
    icon: '🎬',
    category: 'Entertainment',
    isClaimed: false,
    expiresAt: '2024-02-20',
  },
  {
    id: '3',
    title: 'Shopping Spree',
    description: 'Extra 20% off on fashion items at premium stores',
    icon: '🛍️',
    category: 'Shopping',
    isClaimed: true,
    expiresAt: '2024-02-10',
    discount: '20% OFF',
  },
  {
    id: '4',
    title: 'Fitness Pass',
    description: 'One month free access to premium gym facilities',
    icon: '💪',
    category: 'Health & Fitness',
    isClaimed: false,
    expiresAt: '2024-03-01',
  },
  {
    id: '5',
    title: 'Travel Credit',
    description: '₹500 off on your next flight booking',
    icon: '✈️',
    category: 'Travel',
    isClaimed: false,
    expiresAt: '2024-02-25',
    discount: '₹500 OFF',
  },
  {
    id: '6',
    title: 'Tech Gadget Discount',
    description: 'Special pricing on latest smartphones and laptops',
    icon: '📱',
    category: 'Technology',
    isClaimed: false,
    expiresAt: '2024-02-28',
    discount: '15% OFF',
  },
];

export const mockRewardData: RewardData = {
  currentPoints: 1250,
  totalPoints: 8500,
  nextMilestone: 1500,
  milestones: [
    { points: 500, reward: '₹100 Cashback', achieved: true },
    { points: 1000, reward: 'Free Delivery Pass', achieved: true },
    { points: 1500, reward: 'Premium Support', achieved: false },
    { points: 2500, reward: 'VIP Lounge Access', achieved: false },
    { points: 5000, reward: 'Exclusive Events', achieved: false },
  ],
}; 