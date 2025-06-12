
import React, { useState } from 'react';
import { 
  Brain, 
  AlertTriangle, 
  CheckCircle, 
  User, 
  Heart, 
  Pill, 
  Activity,
  Clock,
  Zap,
  Shield
} from 'lucide-react';
import Layout from '../components/Layout';

const RiskAI = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Mock profile data
  const profileData = {
    name: 'Priyansh Narang',
    age: 22,
    gender: 'Male',
    bloodGroup: 'A+',
    conditions: 'Diabetes, Asthma',
    medications: 'Metformin, Albuterol',
    allergies: 'Penicillin',
    symptoms: 'Chest pain, fatigue'
  };

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const emergencyGuidelines = [
    'Avoid NSAIDs due to risk of renal issues with diabetes',
    'Keep oxygen support nearby due to asthma complications',
    'Alert cardiologist on arrival for chest pain evaluation',
    'Monitor blood glucose levels during treatment',
    'Have alternative antibiotics ready (penicillin allergy)'
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800">RiskAI Health Analysis</h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Advanced AI-powered health risk assessment using your medical profile data
          </p>
        </div>

        {/* Current Profile Summary */}
        <div className="medical-card mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <User className="w-5 h-5 text-slate-500" />
            <h2 className="text-xl font-semibold text-slate-800">Current Profile Summary</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Name:</span>
                <span className="font-medium text-slate-800">{profileData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Age:</span>
                <span className="font-medium text-slate-800">{profileData.age} years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Gender:</span>
                <span className="font-medium text-slate-800">{profileData.gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Blood Type:</span>
                <span className="font-medium text-slate-800">{profileData.bloodGroup}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <span className="text-slate-600">Conditions:</span>
                <p className="font-medium text-slate-800">{profileData.conditions}</p>
              </div>
              <div>
                <span className="text-slate-600">Medications:</span>
                <p className="font-medium text-slate-800">{profileData.medications}</p>
              </div>
              <div>
                <span className="text-slate-600">Allergies:</span>
                <p className="font-medium text-slate-800">{profileData.allergies}</p>
              </div>
              <div>
                <span className="text-slate-600">Symptoms:</span>
                <p className="font-medium text-slate-800">{profileData.symptoms}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Run Analysis Button */}
        {!showResults && (
          <div className="text-center mb-8">
            <button
              onClick={handleRunAnalysis}
              disabled={isAnalyzing}
              className={`flex items-center space-x-3 mx-auto px-8 py-4 rounded-xl font-medium text-lg transition-all duration-200 ${
                isAnalyzing
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:scale-105'
              }`}
            >
              <Brain className="w-6 h-6" />
              <span>
                {isAnalyzing ? 'Analyzing with Gemini AI...' : 'Run Risk Analysis with Gemini AI'}
              </span>
              {isAnalyzing && (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              )}
            </button>
            
            {isAnalyzing && (
              <div className="mt-4">
                <div className="w-64 mx-auto bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
                </div>
                <p className="text-sm text-slate-600 mt-2">Processing medical data...</p>
              </div>
            )}
          </div>
        )}

        {/* Analysis Results */}
        {showResults && (
          <div className="space-y-6 animate-fade-in">
            {/* Risk Level Card */}
            <div className="medical-card border-l-4 border-red-500 bg-gradient-to-r from-red-50 to-red-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Risk Assessment</h3>
                  <span className="risk-badge-high">🛑 HIGH RISK</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span className="text-sm text-slate-600">Analysis completed: June 12, 2025 – 7:45 PM</span>
                </div>
                <p className="text-slate-700 font-medium">
                  Elevated cardiovascular and respiratory risk detected based on current symptoms and medical history.
                </p>
              </div>
            </div>

            {/* Gemini AI Analysis */}
            <div className="medical-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">🧠 Gemini AI Summary</h3>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                <p className="text-slate-800 leading-relaxed mb-4">
                  <strong>Analysis:</strong> The combination of diabetes and asthma with reported chest pain and fatigue indicates an elevated cardiac risk profile. The patient's young age (22) is typically protective, but the constellation of symptoms warrants immediate medical attention.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Activity className="w-5 h-5 text-red-500" />
                      <span className="font-semibold text-slate-800">Primary Concerns</span>
                    </div>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Cardiovascular complications from diabetes</li>
                      <li>• Respiratory distress risk (asthma)</li>
                      <li>• Drug interaction potential</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-5 h-5 text-orange-500" />
                      <span className="font-semibold text-slate-800">Immediate Actions</span>
                    </div>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• ECG and BP monitoring advised</li>
                      <li>• Blood glucose level check</li>
                      <li>• Pulmonary function assessment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Guidelines */}
            <div className="medical-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">✔️ Emergency Guidelines</h3>
              </div>
              
              <div className="space-y-3">
                {emergencyGuidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full text-white text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-slate-700">{guideline}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowResults(false)}
                className="medical-button-primary"
              >
                Run New Analysis
              </button>
              <button className="medical-button-secondary">
                Save Report
              </button>
              <button className="px-6 py-3 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
                Share with Doctor
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default RiskAI;
