package com.projetospringreact.dsmeta.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projetospringreact.dsmeta.entities.Sale;
import com.projetospringreact.dsmeta.repositories.SaleRepository;
@Service
public class SaleService {
	@Autowired
	private SaleRepository repository;
	
	public List<Sale> findSales() {
		 return repository.findAll();
	}

}
