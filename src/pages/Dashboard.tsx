
import React, { useState } from 'react';
import { 
  User, 
  Calendar, 
  Droplets, 
  Heart, 
  Pill, 
  AlertTriangle, 
  Stethoscope,
  Phone,
  Save,
  Edit3
} from 'lucide-react';
import Layout from '../components/Layout';

const Dashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Priyansh Narang',
    age: '22',
    gender: 'Male',
    bloodGroup: 'A+',
    conditions: 'Diabetes, Asthma',
    medications: 'Metformin, Albuterol',
    allergies: 'Penicillin',
    symptoms: 'Chest pain, fatigue',
    emergencyContactName: 'Dr. Arora',
    emergencyContactNumber: '+91-9876543210'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Mock save functionality
    console.log('Profile saved:', formData);
  };

  const formFields = [
    { name: 'name', label: 'Full Name', icon: User, type: 'text' },
    { name: 'age', label: 'Age', icon: Calendar, type: 'number' },
    { name: 'gender', label: 'Gender', icon: User, type: 'select', options: ['Male', 'Female', 'Other'] },
    { name: 'bloodGroup', label: 'Blood Group', icon: Droplets, type: 'select', options: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
    { name: 'conditions', label: 'Existing Conditions', icon: Heart, type: 'text' },
    { name: 'medications', label: 'Current Medications', icon: Pill, type: 'text' },
    { name: 'allergies', label: 'Allergies', icon: AlertTriangle, type: 'text' },
    { name: 'symptoms', label: 'Current Symptoms', icon: Stethoscope, type: 'text' },
    { name: 'emergencyContactName', label: 'Emergency Contact Name', icon: User, type: 'text' },
    { name: 'emergencyContactNumber', label: 'Emergency Contact Number', icon: Phone, type: 'tel' }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Greeting Section */}
        <div className="medical-card mb-8 bg-gradient-to-r from-sky-50 to-emerald-50 border-sky-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">
                Welcome back, {formData.name.split(' ')[0]}! 👋
              </h1>
              <p className="text-slate-600">
                Keep your medical profile up to date for emergency situations
              </p>
            </div>
            <div className="hidden sm:flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Medical Profile</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              isEditing 
                ? 'bg-gray-500 text-white hover:bg-gray-600' 
                : 'medical-button-primary'
            }`}
          >
            <Edit3 className="w-4 h-4" />
            <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
          </button>
        </div>

        {/* Profile Form */}
        <div className="medical-card">
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {formFields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-slate-700">
                    <field.icon className="w-4 h-4 text-slate-500" />
                    <span>{field.label}</span>
                  </label>
                  
                  {field.type === 'select' ? (
                    <select
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`medical-input ${!isEditing ? 'bg-slate-50 cursor-not-allowed' : ''}`}
                    >
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`medical-input ${!isEditing ? 'bg-slate-50 cursor-not-allowed' : ''}`}
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                    />
                  )}
                </div>
              ))}
            </div>

            {isEditing && (
              <div className="flex justify-end space-x-4 pt-6 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="flex items-center space-x-2 medical-button-primary"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Profile</span>
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Quick Stats */}
        {!isEditing && (
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="medical-card text-center bg-gradient-to-br from-sky-50 to-sky-100 border-sky-200">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800">Profile Complete</h3>
              <p className="text-2xl font-bold text-sky-600">100%</p>
            </div>

            <div className="medical-card text-center bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800">Blood Type</h3>
              <p className="text-2xl font-bold text-emerald-600">{formData.bloodGroup}</p>
            </div>

            <div className="medical-card text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800">Conditions</h3>
              <p className="text-sm font-medium text-purple-600">2 Active</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
