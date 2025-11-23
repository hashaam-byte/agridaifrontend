'use client'
import React, { useState } from 'react';
import { 
  CreditCard, Check, Zap, Crown, Package, Calendar,
  Download, Receipt, AlertCircle, ChevronRight, Star,
  Users, TrendingUp, Shield, X, Sparkles
} from 'lucide-react';

export default function BillingPage() {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' or 'annual'
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const currentPlan = {
    name: 'Free',
    price: 0,
    billingDate: 'N/A',
    nextBilling: 'N/A',
    status: 'active'
  };

  const plans = [
    {
      id: 'free',
      name: 'Free',
      icon: Package,
      price: { monthly: 0, annual: 0 },
      color: 'gray',
      popular: false,
      features: [
        'Basic weather forecasts',
        'Up to 3 crop tracking',
        'AI assistant (10 queries/day)',
        'Community access',
        'Basic pest detector',
        'Market price alerts'
      ],
      limitations: [
        'Limited historical data',
        'Standard support'
      ]
    },
    {
      id: 'pro',
      name: 'Professional',
      icon: Zap,
      price: { monthly: 4900, annual: 49000 },
      color: 'emerald',
      popular: true,
      features: [
        'Advanced weather analytics',
        'Unlimited crop tracking',
        'AI assistant (unlimited)',
        'Priority community features',
        'Advanced pest detector',
        'Real-time market insights',
        'Financial analytics',
        'Crop calendar & reminders',
        'Email support (24h response)'
      ],
      limitations: []
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Crown,
      price: { monthly: 9900, annual: 99000 },
      color: 'purple',
      popular: false,
      features: [
        'Everything in Professional',
        'Custom integrations',
        'API access',
        'Multi-farm management',
        'Dedicated account manager',
        'Custom training',
        'Advanced analytics & reports',
        'White-label options',
        'Priority phone support',
        'SLA guarantee'
      ],
      limitations: []
    }
  ];

  const billingHistory = [
    { id: 1, date: '2025-10-23', description: 'Professional Plan - Annual', amount: 49000, status: 'paid', invoice: 'INV-2025-001' },
    { id: 2, date: '2024-10-23', description: 'Professional Plan - Annual', amount: 49000, status: 'paid', invoice: 'INV-2024-001' }
  ];

  const paymentMethods = [
    { id: 1, type: 'card', last4: '4242', brand: 'Visa', expiry: '12/26', default: true },
    { id: 2, type: 'card', last4: '5555', brand: 'Mastercard', expiry: '08/25', default: false }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getSavings = (monthlyPrice) => {
    const annualTotal = monthlyPrice * 12;
    const savings = annualTotal - (monthlyPrice * 10);
    return savings;
  };

  const PlanCard = ({ plan }) => {
    const PlanIcon = plan.icon;
    const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual;
    const monthlyEquivalent = billingCycle === 'annual' ? plan.price.annual / 12 : plan.price.monthly;

    return (
      <div className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border p-8 ${
        plan.popular ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/20' : 'border-white/10'
      } ${currentPlan.name === plan.name ? 'ring-2 ring-emerald-500' : ''}`}>
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full">
            <span className="text-white text-sm font-bold flex items-center gap-1">
              <Star className="w-4 h-4 fill-current" />
              Most Popular
            </span>
          </div>
        )}

        <div className="text-center mb-6">
          <div className={`inline-flex p-4 rounded-2xl bg-${plan.color}-500/20 mb-4`}>
            <PlanIcon className={`w-8 h-8 text-${plan.color}-400`} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-4xl font-bold text-white">{formatPrice(price)}</span>
            {price > 0 && (
              <span className="text-gray-400 text-lg mb-1">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
            )}
          </div>
          {billingCycle === 'annual' && price > 0 && (
            <p className="text-emerald-400 text-sm">
              {formatPrice(monthlyEquivalent)}/month • Save {formatPrice(getSavings(plan.price.monthly))}
            </p>
          )}
        </div>

        <div className="space-y-3 mb-6">
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {currentPlan.name === plan.name ? (
          <button className="w-full py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 font-semibold flex items-center justify-center gap-2">
            <Check className="w-5 h-5" />
            Current Plan
          </button>
        ) : (
          <button
            onClick={() => {
              setSelectedPlan(plan);
              setShowUpgradeModal(true);
            }}
            className={`w-full py-3 rounded-xl font-semibold transition-all ${
              plan.popular
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600'
                : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
            }`}
          >
            {plan.price.monthly > currentPlan.price ? 'Upgrade' : 'Downgrade'}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Billing & Subscription</h1>
        <p className="text-gray-400">Manage your subscription and billing information</p>
      </div>

      {/* Current Plan Status */}
      <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-500/20 rounded-2xl">
              <Crown className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">{currentPlan.name} Plan</h2>
              <p className="text-gray-300">Active subscription</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all font-medium">
              Manage Plan
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white hover:from-emerald-600 hover:to-teal-600 transition-all font-semibold">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>

      {/* Billing Cycle Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex bg-white/10 rounded-xl p-1 border border-white/10">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              billingCycle === 'monthly'
                ? 'bg-emerald-500 text-white'
                : 'text-gray-400'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-6 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
              billingCycle === 'annual'
                ? 'bg-emerald-500 text-white'
                : 'text-gray-400'
            }`}
          >
            Annual
            <span className="px-2 py-0.5 bg-emerald-400/20 text-emerald-400 rounded text-xs font-bold">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {plans.map(plan => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* Payment Methods */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Payment Methods</h2>
          <button className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 hover:bg-emerald-500/30 transition-all font-medium text-sm">
            + Add Payment Method
          </button>
        </div>

        <div className="space-y-4">
          {paymentMethods.map(method => (
            <div key={method.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <CreditCard className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-white font-semibold">{method.brand} •••• {method.last4}</p>
                      {method.default && (
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-xs font-medium">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">Expires {method.expiry}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {!method.default && (
                    <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all text-sm">
                      Set as default
                    </button>
                  )}
                  <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-red-400 transition-all">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Billing History</h2>
          <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all font-medium text-sm flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export All
          </button>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Date</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Description</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Amount</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Status</th>
                <th className="text-right py-4 px-6 text-gray-400 font-medium text-sm">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map(item => (
                <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 text-white text-sm">{new Date(item.date).toLocaleDateString()}</td>
                  <td className="py-4 px-6 text-gray-300 text-sm">{item.description}</td>
                  <td className="py-4 px-6 text-white font-semibold text-sm">{formatPrice(item.amount)}</td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg text-xs font-medium">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-1 ml-auto">
                      <Receipt className="w-4 h-4" />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upgrade Modal */}
      {showUpgradeModal && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
             onClick={() => setShowUpgradeModal(false)}>
          <div className="bg-gray-900 rounded-2xl border border-white/10 max-w-md w-full"
               onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Confirm Upgrade</h2>
              <button onClick={() => setShowUpgradeModal(false)} className="p-2 rounded-lg hover:bg-white/10 text-gray-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="text-center">
                <Sparkles className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Upgrade to {selectedPlan.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  You'll be charged {formatPrice(billingCycle === 'monthly' ? selectedPlan.price.monthly : selectedPlan.price.annual)} {billingCycle === 'monthly' ? 'per month' : 'per year'}
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Plan</span>
                  <span className="text-white font-semibold">{selectedPlan.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Billing</span>
                  <span className="text-white font-semibold capitalize">{billingCycle}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-white font-semibold">Total Due</span>
                  <span className="text-emerald-400 text-xl font-bold">
                    {formatPrice(billingCycle === 'monthly' ? selectedPlan.price.monthly : selectedPlan.price.annual)}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowUpgradeModal(false)}
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:bg-white/10 transition-all"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white hover:from-emerald-600 hover:to-teal-600 transition-all font-semibold">
                  Confirm Upgrade
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}