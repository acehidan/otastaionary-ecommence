import React, { useState } from "react";
import {
  ArrowLeft,
  CreditCard,
  Truck,
  Shield,
  Check,
  MapPin,
  User,
  Mail,
  Phone,
} from "lucide-react";
import { CartItem } from "./CartSidebar";

interface CheckoutPageProps {
  cartItems: CartItem[];
  onClose: () => void;
  onOrderComplete: () => void;
}

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface PaymentInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  cartItems,
  onClose,
  onOrderComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleCustomerInfoChange = (
    field: keyof CustomerInfo,
    value: string
  ) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handlePaymentInfoChange = (field: keyof PaymentInfo, value: string) => {
    setPaymentInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsProcessing(false);
    setOrderPlaced(true);
    setTimeout(() => {
      onOrderComplete();
    }, 2000);
  };

  const isStepValid = (step: number) => {
    if (step === 1) {
      return (
        customerInfo.firstName &&
        customerInfo.lastName &&
        customerInfo.email &&
        customerInfo.address &&
        customerInfo.city &&
        customerInfo.state &&
        customerInfo.zipCode
      );
    }
    if (step === 2) {
      return (
        paymentInfo.cardNumber &&
        paymentInfo.expiryDate &&
        paymentInfo.cvv &&
        paymentInfo.cardName
      );
    }
    return true;
  };

  if (orderPlaced) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md mx-auto p-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Order Confirmed!</h1>
          <p className="text-gray-600">
            Thank you for your purchase. Your order has been successfully placed
            and will be processed shortly.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              Order Total:{" "}
              <span className="font-bold text-amber-600">
                ${total.toFixed(2)}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Estimated delivery: 3-5 business days
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-50 z-50 overflow-y-auto">
      <div className="min-h-screen">
        {/* Header */}
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={onClose}
                className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Cart</span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GT</span>
                </div>
                <span className="font-bold text-xl text-gray-800">
                  Checkout
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Progress Steps */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                          currentStep >= step
                            ? "bg-amber-600 text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {step}
                      </div>
                      <span
                        className={`ml-3 font-medium ${
                          currentStep >= step
                            ? "text-amber-600"
                            : "text-gray-500"
                        }`}
                      >
                        {step === 1
                          ? "Shipping"
                          : step === 2
                          ? "Payment"
                          : "Review"}
                      </span>
                      {step < 3 && (
                        <div className="w-16 h-0.5 bg-gray-200 ml-4" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step 1: Shipping Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                      <Truck className="h-6 w-6 mr-2 text-amber-600" />
                      Shipping Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={customerInfo.firstName}
                          onChange={(e) =>
                            handleCustomerInfoChange(
                              "firstName",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={customerInfo.lastName}
                          onChange={(e) =>
                            handleCustomerInfoChange("lastName", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={customerInfo.email}
                          onChange={(e) =>
                            handleCustomerInfoChange("email", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={customerInfo.phone}
                          onChange={(e) =>
                            handleCustomerInfoChange("phone", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        value={customerInfo.address}
                        onChange={(e) =>
                          handleCustomerInfoChange("address", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="123 Main Street"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          value={customerInfo.city}
                          onChange={(e) =>
                            handleCustomerInfoChange("city", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          value={customerInfo.state}
                          onChange={(e) =>
                            handleCustomerInfoChange("state", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="NY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          value={customerInfo.zipCode}
                          onChange={(e) =>
                            handleCustomerInfoChange("zipCode", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="10001"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Payment Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                      <CreditCard className="h-6 w-6 mr-2 text-amber-600" />
                      Payment Information
                    </h2>

                    <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-700">
                        Your payment information is secure and encrypted
                      </span>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={paymentInfo.cardNumber}
                        onChange={(e) =>
                          handlePaymentInfoChange("cardNumber", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          value={paymentInfo.expiryDate}
                          onChange={(e) =>
                            handlePaymentInfoChange(
                              "expiryDate",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          value={paymentInfo.cvv}
                          onChange={(e) =>
                            handlePaymentInfoChange("cvv", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="123"
                          maxLength={4}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        value={paymentInfo.cardName}
                        onChange={(e) =>
                          handlePaymentInfoChange("cardName", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Review Order */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                      Review Your Order
                    </h2>

                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          Shipping Address
                        </h3>
                        <p className="text-gray-600">
                          {customerInfo.firstName} {customerInfo.lastName}
                          <br />
                          {customerInfo.address}
                          <br />
                          {customerInfo.city}, {customerInfo.state}{" "}
                          {customerInfo.zipCode}
                        </p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Payment Method
                        </h3>
                        <p className="text-gray-600">
                          **** **** **** {paymentInfo.cardNumber.slice(-4)}
                          <br />
                          {paymentInfo.cardName}
                        </p>
                      </div>
                    </div>

                    {isProcessing && (
                      <div className="text-center py-8">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
                        <p className="mt-4 text-gray-600">
                          Processing your order...
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 border-t border-gray-200">
                  {currentStep > 1 && (
                    <button
                      onClick={() => setCurrentStep((prev) => prev - 1)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Previous
                    </button>
                  )}

                  <div className="ml-auto">
                    {currentStep < 3 ? (
                      <button
                        onClick={() => setCurrentStep((prev) => prev + 1)}
                        disabled={!isStepValid(currentStep)}
                        className="px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        Continue
                      </button>
                    ) : (
                      <button
                        onClick={handlePlaceOrder}
                        disabled={isProcessing}
                        className="px-8 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        {isProcessing ? "Processing..." : "Place Order"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-800 truncate">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <span className="font-semibold text-gray-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-800 border-t border-gray-200 pt-3">
                    <span>Total</span>
                    <span className="text-amber-600">${total.toFixed(2)}</span>
                  </div>
                </div>

                {shipping === 0 && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">
                      🎉 You qualify for free shipping!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
