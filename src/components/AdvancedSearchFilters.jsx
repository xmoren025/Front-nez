"use client";

import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Collapse,
  IconButton
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

import CatalogAPIService from "@/services/catalogAPI";

function AdvancedSearchFilters({ onSearch, onFiltersChange, showAdvanced, setShowAdvanced }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    sort_by: 'created_at_desc',
    privacy: '',
    encryption: '',
    processed: '',
    username: '',
    date_from: '',
    date_to: '',
    file_type: ''
  });
  const [availableUsers, setAvailableUsers] = useState([]);
  const [usernameQuery, setUsernameQuery] = useState('');
  const [showUsernameDropdown, setShowUsernameDropdown] = useState(false);

  // Load available usernames
  useEffect(() => {
    const loadUsernames = async () => {
      try {
        const users = await CatalogAPIService.getAvailableUsernames();
        setAvailableUsers(users);
      } catch (error) {
        console.error('Failed to load usernames:', error);
      }
    };
    loadUsernames();
  }, []);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleFilterChange = (filterName, value) => {
    const newFilters = { ...filters, [filterName]: value };
    setFilters(newFilters);
    
    if (filterName === 'username') {
      setUsernameQuery(value);
    }
    
    // Auto-trigger search when filter changes
    if (onFiltersChange) {
      onFiltersChange(newFilters);
    }
    if (onSearch) {
      onSearch(searchTerm, newFilters);
    }
  };

  const clearFilters = () => {
    const resetFilters = {
      sort_by: 'created_at_desc',
      privacy: '',
      encryption: '',
      processed: '',
      username: '',
      date_from: '',
      date_to: '',
      file_type: ''
    };
    setFilters(resetFilters);
    setUsernameQuery('');
    
    if (onFiltersChange) {
      onFiltersChange(resetFilters);
    }
    if (onSearch) {
      onSearch(searchTerm, resetFilters);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: 'background.default', pb: 2 }}>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          {/* Basic Search */}
          <Box display="flex" gap={2} alignItems="center" mb={2}>
            <TextField
              fullWidth
              label="Search catalogs"
              placeholder="Enter catalog name, description, or use * for all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              variant="outlined"
            />
            <Button 
              variant="contained" 
              onClick={handleSearch}
              sx={{ minWidth: 120 }}
            >
              Search
            </Button>
          </Box>

          {/* Advanced Filters */}
          <Collapse in={showAdvanced}>
            <Box mt={3}>
              <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary', mb: 2 }}>
                Advanced Search Options
              </Typography>
              
              {/* Primary Filters Row - Most commonly used */}
              <Box mb={3}>
                <Typography variant="subtitle2" sx={{ mb: 1.5, color: 'primary.main', fontWeight: 600 }}>
                  Primary Filters
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      select
                      fullWidth
                      label="Sort By"
                      value={filters.sort_by || 'created_at_desc'}
                      onChange={(e) => handleFilterChange('sort_by', e.target.value)}
                      variant="outlined"
                      size="medium"
                      sx={{ 
                        backgroundColor: 'background.paper',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    >
                      <MenuItem value="created_at_desc">Newest First</MenuItem>
                      <MenuItem value="created_at_asc">Oldest First</MenuItem>
                      <MenuItem value="namecatalog_asc">Name (A-Z)</MenuItem>
                      <MenuItem value="namecatalog_desc">Name (Z-A)</MenuItem>
                      <MenuItem value="dispersemode_asc">Disperse Mode</MenuItem>
                    </TextField>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      select
                      fullWidth
                      label="Privacy Level"
                      value={filters.privacy}
                      onChange={(e) => handleFilterChange('privacy', e.target.value)}
                      variant="outlined"
                      size="medium"
                      SelectProps={{
                        native: true,
                      }}
                      sx={{ 
                        backgroundColor: 'background.paper',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    >
                      <option value="public">Public Catalogs</option>
                      <option value="private">Private Catalogs</option>
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Box position="relative">
                      <TextField
                        fullWidth
                        label="Filter by Username"
                        placeholder="Type to search usernames..."
                        value={usernameQuery}
                        variant="outlined"
                        size="medium"
                        sx={{ 
                          backgroundColor: 'background.paper',
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2
                          }
                        }}
                        onChange={(e) => {
                          setUsernameQuery(e.target.value);
                          setShowUsernameDropdown(e.target.value.length > 0);
                        }}
                        onFocus={() => {
                          if (usernameQuery.length > 0) {
                            setShowUsernameDropdown(true);
                          }
                        }}
                        onBlur={() => {
                          setTimeout(() => setShowUsernameDropdown(false), 200);
                        }}
                      />
                      {showUsernameDropdown && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: 'white',
                            border: 1,
                            borderColor: 'divider',
                            borderRadius: 2,
                            boxShadow: 2,
                            zIndex: 1000,
                            maxHeight: 200,
                            overflowY: 'auto'
                          }}
                        >
                          {availableUsers
                            .filter(user => user.toLowerCase().includes(usernameQuery.toLowerCase()))
                            .slice(0, 10)
                            .map((user, index) => (
                              <Box
                                key={index}
                                sx={{
                                  p: 1.5,
                                  cursor: 'pointer',
                                  '&:hover': {
                                    backgroundColor: 'action.hover'
                                  },
                                  borderBottom: index < 9 ? 1 : 0,
                                  borderColor: 'divider'
                                }}
                                onClick={() => {
                                  setUsernameQuery(user);
                                  handleFilterChange('username', user);
                                  setShowUsernameDropdown(false);
                                }}
                              >
                                {user}
                              </Box>
                            ))
                          }
                        </Box>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              {/* Secondary Filters Row - Technical options */}
              <Box mb={3}>
                <Typography variant="subtitle2" sx={{ mb: 1.5, color: 'primary.main', fontWeight: 600 }}>
                  Technical Filters
                </Typography>
                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      select
                      fullWidth
                      label="Encryption Status"
                      value={filters.encryption}
                      onChange={(e) => handleFilterChange('encryption', e.target.value)}
                      variant="outlined"
                      size="medium"
                      SelectProps={{
                        native: true,
                      }}
                      sx={{ 
                        backgroundColor: 'background.paper',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    >
                      <option value="encrypted">Encrypted</option>
                      <option value="unencrypted">Unencrypted</option>
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      select
                      fullWidth
                      label="Processing Status"
                      value={filters.processed}
                      onChange={(e) => handleFilterChange('processed', e.target.value)}
                      variant="outlined"
                      size="medium"
                      SelectProps={{
                        native: true,
                      }}
                      sx={{ 
                        backgroundColor: 'background.paper',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    >
                      <option value="processed">Processed</option>
                      <option value="unprocessed">Unprocessed</option>
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      fullWidth
                      label="File Type"
                      placeholder="e.g., pdf, csv, json"
                      value={filters.file_type}
                      onChange={(e) => handleFilterChange('file_type', e.target.value)}
                      variant="outlined"
                      size="medium"
                      sx={{ 
                        backgroundColor: 'background.paper',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Date Range Filter Row */}
              <Box mb={3}>
                <Typography variant="subtitle2" sx={{ mb: 1.5, color: 'info.main', fontWeight: 600 }}>
                  Date Range
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="From Date"
                      type="date"
                      value={filters.date_from}
                      onChange={(e) => handleFilterChange('date_from', e.target.value)}
                      variant="outlined"
                      size="medium"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{ 
                        backgroundColor: 'background.paper',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="To Date"
                      type="date"
                      value={filters.date_to}
                      onChange={(e) => handleFilterChange('date_to', e.target.value)}
                      variant="outlined"
                      size="medium"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{ 
                        backgroundColor: 'background.paper',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Action Buttons Row */}
              <Box mb={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Button
                      variant="outlined"
                      color="error"
                      fullWidth
                      onClick={clearFilters}
                      sx={{ 
                        height: '40px',
                        borderRadius: 2,
                        textTransform: 'none'
                      }}
                    >
                      Clear Filters
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Collapse>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AdvancedSearchFilters;