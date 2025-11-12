"use client";

import { useState, useEffect } from "react";

// material
import { 
  Box, 
  Typography, 
  CircularProgress, 
  Alert, 
  Chip, 
  Tooltip,
  Card,
  CardContent
} from "@mui/material";

// component
import InfoTable from "@/components/infoTable";
import NavBar from "@/components/navBar";
import AdvancedSearchFilters from "@/components/AdvancedSearchFilters";
import EditButton from "@/components/buttons/editButton";
import DeleteButton from "@/components/buttons/deleteButton";
import ActionButton from "@/components/buttons/actionButton";

// services
import CatalogAPIService from "@/services/catalogAPI";

// style
import "@/styles/globals.css";

export default function Catalogs() {
  const [catalogs, setCatalogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [statistics, setStatistics] = useState({});
  const [apiHealthy, setApiHealthy] = useState(false);

  // Simple test function to debug fetch issues
  const testDirectFetch = async () => {
    try {
      console.log('🧪 Testing direct fetch...');
      const testUrl = 'http://localhost:20506/uriegas-search_catalogs.php?health=check';
      console.log('🧪 Test URL:', testUrl);
      
      const response = await fetch(testUrl);
      console.log('🧪 Response received:', response.status, response.ok);
      
      const data = await response.json();
      console.log('🧪 Data received:', data);
      
      return data;
    } catch (error) {
      console.error('🧪 Direct fetch test failed:', error);
      throw error;
    }
  };

  // Fetch catalogs from your FAIR API
  const fetchCatalogs = async (query = '', filters = {}) => {
    try {
      setLoading(true);
      setError(null);
      
      // First, try a simple test
      console.log('🚀 Starting fetchCatalogs...');
      await testDirectFetch();
      console.log('✅ Direct fetch test passed, proceeding with API service...');
      
      const result = await CatalogAPIService.searchCatalogs(query || '*', filters, 50, 0);
      
      setCatalogs(result.catalogs);
      setTotalResults(result.totalResults);
      setStatistics(result.statistics);
      setApiHealthy(result.fairCompliant);
      
    } catch (err) {
      setError(`Failed to fetch catalogs: ${err.message}`);
      setCatalogs([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle search and filters
  const handleSearchWithFilters = (query, filters) => {
    setSearchTerm(query);
    fetchCatalogs(query, filters);
  };

  // Check API health
  const checkHealth = async () => {
    try {
      const health = await CatalogAPIService.checkAPIHealth();
      setApiHealthy(health.success);
    } catch (err) {
      setApiHealthy(false);
    }
  };

  // Load initial data and check health
  useEffect(() => {
    checkHealth();
    fetchCatalogs();
  }, []);

  // Format catalog data for the table
  const formatCatalogData = (catalogs) => {
    return catalogs.map(catalog => ({
      ...catalog,
      id: catalog.namecatalog, // Use catalog name as ID
      encryption_display: catalog.encryption ? "Yes" : "No",
      created_display: new Date(catalog.created_at).toLocaleDateString(),
      file_count_display: catalog.file_count || 0,
      privacy_display: catalog.isprivate ? "Private" : "Public"
    }));
  };

  return (
    <Box>
      <NavBar />
      <Box className="contentSpace">
        {/* Header */}
        <Box display="flex" justifyContent="flex-start" alignItems="center" mb={2}>
          <Typography className="title" variant="h4" gutterBottom paddingTop={5}>
            Catalog Repository
          </Typography>
        </Box>

        {/* Statistics Cards */}
        {statistics.total_catalogs && (
          <Box display="flex" gap={2} mb={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">{statistics.total_catalogs}</Typography>
                <Typography variant="body2">Total Catalogs</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h6">{statistics.public_catalogs}</Typography>
                <Typography variant="body2">Public Catalogs</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h6">{statistics.encrypted_catalogs}</Typography>
                <Typography variant="body2">Encrypted</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h6">{statistics.unencrypted_catalogs}</Typography>
                <Typography variant="body2">Unencrypted</Typography>
              </CardContent>
            </Card>
          </Box>
        )}
        
        <AdvancedSearchFilters 
          onSearch={handleSearchWithFilters}
          showAdvanced={showFilters}
          setShowAdvanced={setShowFilters}
        />

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {loading ? (
          <Box display="flex" justifyContent="center" my={4}>
            <CircularProgress />
            <Typography ml={2}>Loading FAIR catalogs...</Typography>
          </Box>
        ) : (
          <InfoTable
            title={`Found ${totalResults} catalogs (showing ${catalogs.length})`}
            columns={[
              { id: "namecatalog", label: "Catalog Name" },
              { id: "owner_username", label: "Owner" },
              { id: "created_display", label: "Created" },
              { id: "privacy_display", label: "Privacy" },
              { id: "encryption_display", label: "Encrypted" },
              { id: "file_count_display", label: "Files" },
              { id: "actions", label: "Actions" },
            ]}
            data={formatCatalogData(catalogs)}
            onFilterToggle={() => setShowFilters(!showFilters)}
            showFilters={showFilters}
            renderActions={(row) => (
              <>
                <Tooltip title="View catalog details">
                  <EditButton onClick={() => console.log("View catalog", row)} />
                </Tooltip>
                <Tooltip title="Delete catalog">
                  <DeleteButton onClick={() => console.log("Delete catalog", row)} />
                </Tooltip>
                <ActionButton
                  text="Share"
                  variant="contained"
                  onClick={() => console.log("Share catalog", row)}
                  sx={{ borderRadius: 1 }}
                />
              </>
            )}
          />
        )}
      </Box>
    </Box>
  );
}
