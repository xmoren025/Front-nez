/**
 * FAIR Catalog API Service
 * Service for communicating with the containerized FAIR catalog search API
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:20506';

// Debug logging
console.log('🔍 Environment variable NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);
console.log('🔍 Final API_BASE_URL:', API_BASE_URL);

class CatalogAPIService {
  /**
   * Search catalogs using the FAIR API
   */
  static async searchCatalogs(searchTerm = '*', filters = {}, limit = 50, offset = 0) {
    try {
      const params = new URLSearchParams({
        q: searchTerm,
        limit: limit.toString(),
        offset: offset.toString(),
        format: 'json'
      });

      // Add filters to params
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
          params.append(key, value);
        }
      });

      const url = `${API_BASE_URL}/uriegas-search_catalogs.php?${params}`;
      console.log('🌐 Attempting to fetch from URL:', url);
      console.log('🔧 API_BASE_URL:', API_BASE_URL);
      
      const response = await fetch(url);

      console.log('📡 Response status:', response.status);
      console.log('📡 Response ok:', response.ok);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Search failed');
      }

      return {
        catalogs: data.results?.catalogs || [],
        totalResults: data.search_metadata?.total_results || 0,
        statistics: data.repository_statistics || {},
        searchMetadata: data.search_metadata || {},
        fairCompliant: data.fair_compliant
      };
    } catch (error) {
      console.error('🚨 Catalog search error:', error);
      console.error('🚨 Error name:', error.name);
      console.error('🚨 Error message:', error.message);
      console.error('🚨 Error stack:', error.stack);
      
      // Re-throw with more context for debugging
      const enhancedError = new Error(`Failed to fetch catalogs: ${error.message}`);
      enhancedError.originalError = error;
      throw enhancedError;
    }
  }

  /**
   * Get available usernames from the API
   */
  static async getAvailableUsernames(searchTerm = '') {
    try {
      const params = new URLSearchParams({
        action: 'get_usernames',
        q: searchTerm
      });

      const url = `${API_BASE_URL}/uriegas-search_catalogs.php?${params}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data.usernames || [];
    } catch (error) {
      console.error('Get usernames error:', error);
      throw error;
    }
  }

  /**
   * Check API health and DoS protection status
   */
  static async checkAPIHealth() {
    try {
      const url = `${API_BASE_URL}/uriegas-search_catalogs.php?action=dos_status`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API health check error:', error);
      throw error;
    }
  }

  /**
   * Test database connectivity
   */
  static async testDatabaseConnection() {
    try {
      const url = `${API_BASE_URL}/uriegas-search_catalogs.php?action=test_databases`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Database test error:', error);
      throw error;
    }
  }
}

export default CatalogAPIService;