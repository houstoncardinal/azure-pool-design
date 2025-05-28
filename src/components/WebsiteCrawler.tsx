
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { ContentExtractor } from '@/utils/ContentExtractor';
import { Download, Key, Globe, FileText, Copy } from 'lucide-react';

export const WebsiteCrawler = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState(FirecrawlService.getApiKey() || '');
  const [url, setUrl] = useState('https://www.blutouchpools.com');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [extractedContent, setExtractedContent] = useState<string>('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(!FirecrawlService.getApiKey());

  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid API key",
        variant: "destructive",
      });
      return;
    }

    FirecrawlService.saveApiKey(apiKey);
    setShowApiKeyInput(false);
    toast({
      title: "Success",
      description: "API key saved successfully",
    });
  };

  const handleCrawl = async () => {
    if (!FirecrawlService.getApiKey()) {
      toast({
        title: "Error",
        description: "Please set your Firecrawl API key first",
        variant: "destructive",
      });
      setShowApiKeyInput(true);
      return;
    }

    setIsLoading(true);
    setProgress(10);
    setExtractedContent('');
    
    try {
      console.log('Starting crawl for:', url);
      setProgress(30);
      
      const result = await FirecrawlService.crawlWebsite(url);
      setProgress(60);
      
      if (result.success && result.data) {
        console.log('Crawl successful, extracting content...');
        setProgress(80);
        
        const extractedData = ContentExtractor.extractAndFormat(result.data);
        const jsonOutput = ContentExtractor.generateCMSJSON(extractedData);
        
        setExtractedContent(jsonOutput);
        setProgress(100);
        
        toast({
          title: "Success",
          description: "Website content extracted successfully!",
        });
      } else {
        throw new Error(result.error || 'Failed to crawl website');
      }
    } catch (error) {
      console.error('Error during crawl:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to crawl website",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(extractedContent);
    toast({
      title: "Copied",
      description: "Content copied to clipboard",
    });
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([extractedContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'blutouch-pools-content.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded",
      description: "JSON file downloaded successfully",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 to-platinum-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-ocean-900 mb-4">
            Website Content Extractor
          </h1>
          <p className="text-xl text-platinum-600">
            Extract and format website content for CMS integration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Controls */}
          <div className="space-y-6">
            {/* API Key Section */}
            {showApiKeyInput && (
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-800">
                    <Key className="w-5 h-5 mr-2" />
                    Firecrawl API Key Required
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-orange-700">
                    You need a Firecrawl API key to scrape websites. Get one at{' '}
                    <a href="https://firecrawl.dev" target="_blank" rel="noopener noreferrer" className="underline">
                      firecrawl.dev
                    </a>
                  </p>
                  <div className="flex gap-2">
                    <Input
                      type="password"
                      placeholder="Enter your Firecrawl API key"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={handleSaveApiKey} variant="outline">
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Crawl Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Website Crawler
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="url" className="text-sm font-medium text-gray-700 block mb-2">
                    Website URL
                  </label>
                  <Input
                    id="url"
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://www.blutouchpools.com"
                    disabled={isLoading}
                  />
                </div>
                
                {isLoading && (
                  <div className="space-y-2">
                    <Progress value={progress} className="w-full" />
                    <p className="text-sm text-gray-600 text-center">
                      {progress < 30 ? 'Initializing...' : 
                       progress < 60 ? 'Crawling website...' :
                       progress < 80 ? 'Processing content...' : 'Finalizing...'}
                    </p>
                  </div>
                )}
                
                <Button
                  onClick={handleCrawl}
                  disabled={isLoading || !url}
                  className="w-full bg-ocean-600 hover:bg-ocean-700"
                >
                  {isLoading ? "Crawling..." : "Extract Content"}
                </Button>

                {!showApiKeyInput && (
                  <Button
                    onClick={() => setShowApiKeyInput(true)}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Change API Key
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  How it works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                <p>• Scrapes the website and extracts key content</p>
                <p>• Organizes content into pages (Home, About, Services, etc.)</p>
                <p>• Formats everything into a clean JSON structure</p>
                <p>• Replaces images with placeholder URLs</p>
                <p>• Removes duplicate and irrelevant content</p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            <Card className="h-[600px]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Extracted Content (JSON)
                  </CardTitle>
                  {extractedContent && (
                    <div className="flex gap-2">
                      <Button
                        onClick={handleCopyToClipboard}
                        variant="outline"
                        size="sm"
                      >
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </Button>
                      <Button
                        onClick={handleDownloadJSON}
                        variant="outline"
                        size="sm"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="h-[500px]">
                <Textarea
                  value={extractedContent || 'No content extracted yet. Click "Extract Content" to begin.'}
                  readOnly
                  className="w-full h-full font-mono text-xs resize-none"
                  placeholder="Extracted content will appear here..."
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
