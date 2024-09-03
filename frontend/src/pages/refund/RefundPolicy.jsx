/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './RefundPolicy.css';
import { Link } from "react-router-dom";

const RefundPolicy = () => {
  const [sections, setSections] = useState({
    eligibility: true,
    nonRefundable: false,
    requestRefund: false,
    processingTime: false,
    exceptions: false,
  });

  const toggleSection = (section) => {
    setSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="refund-policy-container">
      <div className="refund-policy-header">
        <h1>Refund Policy</h1>
        <p>Your satisfaction is our priority. Please review our refund policy below.</p>
      </div>

      <div className="refund-policy-content">
        <section>
          <h2 onClick={() => toggleSection('eligibility')} className="toggle-header">
            Eligibility for Refund
          </h2>
          {sections.eligibility && (
            <p>
              To be eligible for a refund, you must request it within 30 days of your purchase. The course must be less
              than 50% completed, and the request should include a valid reason for dissatisfaction.
            </p>
          )}
        </section>

        <section>
          <h2 onClick={() => toggleSection('nonRefundable')} className="toggle-header">
            Non-Refundable Items
          </h2>
          {sections.nonRefundable && (
            <ul>
              <li>Completed courses</li>
              <li>Downloaded content</li>
              <li>Subscription fees after the trial period</li>
            </ul>
          )}
        </section>

        <section>
          <h2 onClick={() => toggleSection('requestRefund')} className="toggle-header">
            How to Request a Refund
          </h2>
          {sections.requestRefund && (
            <div>
              <p>
                To initiate a refund, please contact our support team via email at sahilh3600@gmail.com. Include your
                order number, the course name, and the reason for the refund request.
              </p>
             <Link to="/contact">
             <button className="pulse1">Contact Support</button>
             </Link>
              
            </div>
          )}
        </section>

        <section>
          <h2 onClick={() => toggleSection('processingTime')} className="toggle-header">
            Processing Time
          </h2>
          {sections.processingTime && (
            <p>
              Refunds are processed within 7-10 business days after your request has been approved. You will receive a
              confirmation email once the refund is processed.
            </p>
          )}
        </section>

        <section>
          <h2 onClick={() => toggleSection('exceptions')} className="toggle-header">
            Exceptions
          </h2>
          {sections.exceptions && (
            <p>We reserve the right to refuse a refund if we find evidence of abuse or violation of our terms of service.</p>
          )}
        </section>
      </div>

      <div className="refund-policy-footer">
        <p>If you have any questions regarding our refund policy, feel free to contact us at any time.</p>
      </div>
    </div>
  );
};

export default RefundPolicy;
