
import React, { useState } from 'react';
import { QrCode, Download, Share2, Eye, Shield, Copy, Check } from 'lucide-react';
import Layout from '../components/Layout';

const QRCodePage = () => {
  const [isCopied, setIsCopied] = useState(false);
  
  // Mock QR code data
  const profileLink = 'https://pulseid.app/profile/uid123';
  const qrCodeImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2ZmZmZmZiIvPgogIDxnIGZpbGw9IiMwMDAwMDAiPgogICAgPCEtLSBTaW1wbGUgUVIgY29kZSBwYXR0ZXJuIC0tPgogICAgPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz4KICAgIDxyZWN0IHg9IjE0MCIgeT0iMTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIvPgogICAgPHJlY3QgeD0iMTAiIHk9IjE0MCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIi8+CiAgICA8IS0tIERhdGEgcGF0dGVybiAtLT4KICAgIDxyZWN0IHg9IjMwIiB5PSIzMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIi8+CiAgICA8cmVjdCB4PSI1MCIgeT0iMzAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIvPgogICAgPHJlY3QgeD0iNzAiIHk9IjMwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiLz4KICAgIDxyZWN0IHg9IjkwIiB5PSIzMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIi8+CiAgICA8cmVjdCB4PSIxMTAiIHk9IjMwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiLz4KICAgIDxyZWN0IHg9IjMwIiB5PSI1MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIi8+CiAgICA8cmVjdCB4PSI3MCIgeT0iNTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIvPgogICAgPHJlY3QgeD0iMTEwIiB5PSI1MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIi8+CiAgICA8cmVjdCB4PSIzMCIgeT0iNzAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIvPgogICAgPHJlY3QgeD0iNTAiIHk9IjcwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiLz4KICAgIDxyZWN0IHg9IjkwIiB5PSI3MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIi8+CiAgICA8cmVjdCB4PSIzMCIgeT0iOTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIvPgogICAgPHJlY3QgeD0iNzAiIHk9IjkwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiLz4KICAgIDxyZWN0IHg9IjExMCIgeT0iOTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIvPgogICAgPHJlY3QgeD0iNTAiIHk9IjExMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIi8+CiAgICA8cmVjdCB4PSI5MCIgeT0iMTEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiLz4KICA8L2c+Cjwvc3ZnPgo=';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(profileLink);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleDownloadQR = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = qrCodeImage;
    link.download = 'pulseid-emergency-qr.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'PulseID Emergency Medical Profile',
          text: 'My emergency medical information',
          url: profileLink,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      handleCopyLink();
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
              <QrCode className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800">Your Emergency QR Code</h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Share this QR code with emergency responders for instant access to your medical information
          </p>
        </div>

        {/* Info Box */}
        <div className="medical-card mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">How it works</h3>
              <p className="text-slate-700 mb-3">
                Scan this QR code to view a public, read-only version of your medical profile. 
                This ensures emergency responders can quickly access critical information like 
                allergies, medications, and emergency contacts.
              </p>
              <div className="flex items-center space-x-2 text-sm text-blue-700">
                <Eye className="w-4 h-4" />
                <span>Only essential medical information is shared</span>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Display */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* QR Code Card */}
          <div className="flex-1">
            <div className="medical-card text-center max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Emergency QR Code</h3>
              
              {/* QR Code Image */}
              <div className="bg-white p-6 rounded-lg border-2 border-slate-200 mb-6 inline-block">
                <img 
                  src={qrCodeImage} 
                  alt="Emergency Medical QR Code" 
                  className="w-48 h-48 mx-auto"
                />
              </div>
              
              {/* Instructions */}
              <div className="bg-slate-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-600 mb-2">
                  <strong>For Emergency Responders:</strong>
                </p>
                <p className="text-sm text-slate-600">
                  Scan this code with any QR reader to access critical medical information including 
                  allergies, medications, blood type, and emergency contacts.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleDownloadQR}
                  className="w-full flex items-center justify-center space-x-2 medical-button-primary"
                >
                  <Download className="w-5 h-5" />
                  <span>Download QR Code</span>
                </button>
                
                <button
                  onClick={handleShare}
                  className="w-full flex items-center justify-center space-x-2 medical-button-secondary"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share QR Code</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Profile Link & Info */}
          <div className="flex-1 space-y-6">
            {/* Public Profile Link */}
            <div className="medical-card">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Public Profile Link</h3>
              <p className="text-sm text-slate-600 mb-4">
                This is the direct link to your public medical profile. Anyone with this link can view your emergency medical information.
              </p>
              
              <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-lg border">
                <input
                  type="text"
                  value={profileLink}
                  readOnly
                  className="flex-1 bg-transparent text-sm text-slate-700 focus:outline-none"
                />
                <button
                  onClick={handleCopyLink}
                  className="flex items-center space-x-1 px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded text-sm text-slate-700 transition-colors"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            
            {/* What's Included */}
            <div className="medical-card">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">What's Included in Your QR Profile</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Basic Information (Name, Age, Blood Type)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Medical Conditions & Current Symptoms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Current Medications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Known Allergies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Emergency Contact Information</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Latest Risk Assessment (if available)</span>
                </div>
              </div>
            </div>
            
            {/* Security Notice */}
            <div className="medical-card bg-yellow-50 border-yellow-200">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">Privacy & Security</h4>
                  <p className="text-sm text-yellow-700">
                    Your QR code contains only essential medical information for emergencies. 
                    Personal details like full contact information and detailed medical history 
                    are kept private and secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QRCodePage;
