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
      onSearch(searchTerm, filters);
    }
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onFiltersChange) {
      onFiltersChange(newFilters);
    }
  };

  const clearFilters = () => {
    const emptyFilters = {
      sort_by: 'created_at_desc',
      privacy: '',
      encryption: '',
      processed: '',
      username: '',
      date_from: '',
      date_to: '',
      file_type: ''
    };
    setFilters(emptyFilters);
    setUsernameQuery('');
    setShowUsernameDropdown(false);
    if (onFiltersChange) {
      onFiltersChange(emptyFilters);
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
            <Box mt={2}>
              <Grid container spacing={2}>
                {/* Sort By Filter */}
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    select
                    fullWidth
                    label="Sort By"
                    value={filters.sort_by || 'created_at_desc'}
                    onChange={(e) => handleFilterChange('sort_by', e.target.value)}
                    variant="outlined"
                    sx={{ 
                      backgroundColor: 'background.paper',
                      '& .MuiOutlinedInput-root': {
                        minHeight: '56px'
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
                
                {/* Privacy Filter */}
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    select
                    fullWidth
                    label="Privacy Level"
                    value={filters.privacy}
                    onChange={(e) => handleFilterChange('privacy', e.target.value)}
                    variant="outlined"
                    sx={{ 
                      backgroundColor: 'background.paper',
                      '& .MuiOutlinedInput-root': {
                        minHeight: '56px'
                      }
                    }}
                  >
                    <MenuItem value="">
                      <em>All Privacy Levels</em>
                    </MenuItem>
                    <MenuItem value="public">Public Catalogs</MenuItem>
                    <MenuItem value="private">Private Catalogs</MenuItem>
                  </TextField>
                </Grid>

                {/* Encryption Filter */}
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    select
                    fullWidth
                    label="Encryption Status"
                    value={filters.encryption}
                    onChange={(e) => handleFilterChange('encryption', e.target.value)}
                    variant="outlined"
                    sx={{ 
                      backgroundColor: 'background.paper',
                      '& .MuiOutlinedInput-root': {
                        minHeight: '56px'
                      }
                    }}
                  >
                    <MenuItem value="">
                      <em>All Encryption Types</em>
                    </MenuItem>
                    <MenuItem value="encrypted">Encrypted</MenuItem>
                    <MenuItem value="unencrypted">Unencrypted</MenuItem>
                  </TextField>
                </Grid>

                {/* Processing Status Filter */}
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    select
                    fullWidth
                    label="Processing Status"
                    value={filters.processed}
                    onChange={(e) => handleFilterChange('processed', e.target.value)}
                    variant="outlined"
                    sx={{ 
                      backgroundColor: 'background.paper',
                      '& .MuiOutlinedInput-root': {
                        minHeight: '56px'
                      }
                    }}
                  >
                    <MenuItem value="">
                      <em>All Processing States</em>
                    </MenuItem>
                    <MenuItem value="processed">Processed</MenuItem>
                    <MenuItem value="unprocessed">Unprocessed</MenuItem>
                  </TextField>
                </Grid>

                {/* Username Filter with Autocomplete */}
                <Grid item xs={12} sm={6} md={3}>
                  <Box position="relative">
                    <TextField
                      fullWidth
                      label="Filter by Username"
                      placeholder="Type to search usernames..."
                      value={usernameQuery}
                      variant="outlined"
                      sx={{ 
                        backgroundColor: 'background.paper',
                        '& .MuiOutlinedInput-root': {
                          minHeight: '56px' // Match Select height
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
                          borderRadius: 1,
                          maxHeight: 200,
                          overflowY: 'auto',
                          zIndex: 1000,
                          boxShadow: 3
                        }}
                      >
                        {availableUsers
                          .filter(user => user.toLowerCase().includes(usernameQuery.toLowerCase()))
                          .map((user) => (
                            <Box
                              key={user}
                              sx={{
                                padding: 1.5,
                                cursor: 'pointer',
                                borderBottom: '1px solid #f0f0f0',
                                '&:hover': { backgroundColor: 'action.hover' },
                                '&:last-child': { borderBottom: 'none' }
                              }}
                              onClick={() => {
                                setUsernameQuery(user);
                                handleFilterChange('username', user);
                                setShowUsernameDropdown(false);
                              }}
                            >
                              {user}
                            </Box>
                          ))}
                        {availableUsers.filter(user => user.toLowerCase().includes(usernameQuery.toLowerCase())).length === 0 && (
                          <Box sx={{ padding: 1.5, color: 'text.secondary', fontStyle: 'italic' }}>
                            No users found
                          </Box>
                        )}
                      </Box>
                    )}
                  </Box>
                </Grid>

                {/* File Type Filter */}
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="File Type"
                    placeholder="e.g., pdf, dcm, txt"
                    value={filters.file_type}
                    variant="outlined"
                    sx={{ 
                      backgroundColor: 'background.paper',
                      '& .MuiOutlinedInput-root': {
                        minHeight: '56px' // Match Select height
                      }
                    }}
                    onChange={(e) => handleFilterChange('file_type', e.target.value)}
                  />
                </Grid>

                {/* Date From */}
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Created From"
                    type="date"
                    value={filters.date_from}
                    variant="outlined"
                    sx={{ 
                      backgroundColor: 'background.paper',
                      '& .MuiOutlinedInput-root': {
                        minHeight: '56px' // Match Select height
                      }
                    }}
                    onChange={(e) => handleFilterChange('date_from', e.target.value)}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>

                {/* Date To */}
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Created To"
                    type="date"
                    value={filters.date_to}
                    variant="outlined"
                    sx={{ 
                      backgroundColor: 'background.paper',
                      '& .MuiOutlinedInput-root': {
                        minHeight: '56px' // Match Select height
                      }
                    }}
                    onChange={(e) => handleFilterChange('date_to', e.target.value)}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              </Grid>

              {/* Filter Actions */}
              <Box display="flex" gap={2} mt={3} justifyContent="flex-end">
                <Button 
                  variant="outlined" 
                  onClick={clearFilters}
                  sx={{ 
                    minWidth: 120,
                    borderColor: 'error.main',
                    color: 'error.main',
                    '&:hover': {
                      borderColor: 'error.dark',
                      backgroundColor: 'error.light',
                      color: 'error.dark'
                    }
                  }}
                >
                  Clear All
                </Button>
                <Button 
                  variant="contained" 
                  onClick={handleSearch}
                  sx={{ 
                    minWidth: 120,
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.dark'
                    }
                  }}
                >
                  Apply Filters
                </Button>
              </Box>
            </Box>
          </Collapse>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AdvancedSearchFilters;