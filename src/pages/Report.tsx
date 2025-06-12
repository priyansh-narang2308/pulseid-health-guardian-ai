
import React from 'react';
import { 
  FileText, 
  Download, 
  Share2, 
  Calendar, 
  User, 
  Heart, 
  Pill, 
  AlertTriangle,
  Brain,
  Clock,
  Droplets
} from 'lucide-react';
import Layout from '../components/Layout';

const Report = () => {
  // Mock data
  const reportData = {
    generatedDate: 'June 12, 2025',
    generatedTime: '7:45 PM',
    profile: {
      name: 'Priyansh Narang',
      age: 22,
      gender: 'Male',
      bloodGroup: 'A+',
      conditions: 'Diabetes, Asthma',
      medications: 'Metformin, Albuterol',
      allergies: 'Penicillin',
      symptoms: 'Chest pain, fatigue',
      emergencyContact: 'Dr. Arora (+91-9876543210)'
    },
    riskAssessment: {
      level: 'HIGH',
      analysisDate: 'June 12, 2025 – 7:45 PM',
      summary: 'Combination of diabetes and asthma with reported chest pain and fatigue indicates elevated cardiac risk. Immediate ECG and BP monitoring advised.',
      guidelines: [
        'Avoid NSAIDs due to risk of renal issues with diabetes',
        'Keep oxygen support nearby due to asthma complications',
        'Alert cardiologist on arrival for chest pain evaluation',
        'Monitor blood glucose levels during treatment',
        'Have alternative antibiotics ready (penicillin allergy)'
      ]
    }
  };

  const handleDownloadPDF = () => {
    // Mock PDF download
    console.log('Downloading PDF report...');
    alert('PDF download would start here in a real application');
  };

  const handleShareLink = async () => {
    const shareData = {
      title: 'PulseID Health Report',
      text: `Health report for ${reportData.profile.name}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback - copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Report link copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800">Health Report</h1>
          </div>
          <p className="text-lg text-slate-600">
            Comprehensive medical profile and risk assessment summary
          </p>
        </div>

        {/* Report Metadata */}
        <div className="medical-card mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-emerald-600" />
              <div>
                <p className="font-semibold text-slate-800">Report Generated</p>
                <p className="text-sm text-slate-600">{reportData.generatedDate} at {reportData.generatedTime}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">Report ID</p>
              <p className="font-mono text-sm text-slate-800">RPT-2025-0612-001</p>
            </div>
          </div>
        </div>

        {/* Profile Overview */}
        <div className="medical-card mb-6">
          <div className="flex items-center space-x-2 mb-6">
            <User className="w-6 h-6 text-slate-500" />
            <h2 className="text-2xl font-bold text-slate-800">Profile Overview</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                <User className="w-5 h-5 text-slate-500" />
                <div>
                  <p className="text-sm text-slate-600">Name</p>
                  <p className="font-semibold text-slate-800">{reportData.profile.name}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                <Calendar className="w-5 h-5 text-slate-500" />
                <div>
                  <p className="text-sm text-slate-600">Age</p>
                  <p className="font-semibold text-slate-800">{reportData.profile.age} years</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                <Droplets className="w-5 h-5 text-red-500" />
                <div>
                  <p className="text-sm text-slate-600">Blood Group</p>
                  <p className="font-semibold text-slate-800">{reportData.profile.bloodGroup}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                <Heart className="w-5 h-5 text-slate-500" />
                <div>
                  <p className="text-sm text-slate-600">Gender</p>
                  <p className="font-semibold text-slate-800">{reportData.profile.gender}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <div>
                  <p className="text-sm text-yellow-700">Allergies</p>
                  <p className="font-semibold text-yellow-800">{reportData.profile.allergies}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <Pill className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-blue-700">Medications</p>
                  <p className="font-semibold text-blue-800">{reportData.profile.medications}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Medical Info */}
          <div className="grid sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-200">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Medical Conditions</h4>
              <p className="text-red-700">{reportData.profile.conditions}</p>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-2">Current Symptoms</h4>
              <p className="text-orange-700">{reportData.profile.symptoms}</p>
            </div>
          </div>
        </div>

        {/* RiskAI Results */}
        <div className="medical-card mb-6">
          <div className="flex items-center space-x-2 mb-6">
            <Brain className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-slate-800">🧠 RiskAI Assessment</h2>
          </div>
          
          {/* Risk Level */}
          <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border border-red-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Risk Level</h3>
                <span className="risk-badge-high">🛑 {reportData.riskAssessment.level} RISK</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <Clock className="w-4 h-4" />
                <span>{reportData.riskAssessment.analysisDate}</span>
              </div>
            </div>
          </div>
          
          {/* AI Summary */}
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-slate-800 mb-3">AI Analysis Summary</h4>
            <p className="text-slate-700 leading-relaxed">{reportData.riskAssessment.summary}</p>
          </div>
          
          {/* Emergency Guidelines */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Emergency Treatment Guidelines</h4>
            <div className="space-y-3">
              {reportData.riskAssessment.guidelines.map((guideline, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div className="flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full text-white text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-emerald-800">{guideline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="medical-card">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Report Actions</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center justify-center space-x-2 medical-button-primary flex-1"
            >
              <Download className="w-5 h-5" />
              <span>Download as PDF</span>
            </button>
            
            <button
              onClick={handleShareLink}
              className="flex items-center justify-center space-x-2 medical-button-secondary flex-1"
            >
              <Share2 className="w-5 h-5" />
              <span>Share Link</span>
            </button>
            
            <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors flex-1">
              <FileText className="w-5 h-5" />
              <span>Print Report</span>
            </button>
          </div>
          
          <div className="mt-4 p-3 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-600">
              <strong>Note:</strong> This report contains sensitive medical information. 
              Please ensure it's shared only with authorized healthcare providers or emergency personnel.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Report;
