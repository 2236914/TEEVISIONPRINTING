package com.teevision.ecommerce_backend.entities.tag;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TagService {

  private final JpaTagRepository jpaTagRepository;

  @Transactional
  public void saveAllProductTags(Long productId, List<String> tags, boolean isUpdate) {
    if (isUpdate) {
      jpaTagRepository.deleteTagsByProductId(productId);
    }

    tags.forEach(tag -> {
      Long tagId;
      Optional<Tag> existingTag = jpaTagRepository.findByTagName(tag);
      if (existingTag.isEmpty()) {
        Tag newTag = new Tag();
        newTag.setTagName(tag);
        tagId = jpaTagRepository.save(newTag).getId();
      } else {
        tagId = existingTag.get().getId();
      }

      jpaTagRepository.insertIntoTagProduct(tagId, productId);
    });
  }

  @Transactional
  public void saveAllColorTags(Long colorId, List<String> tags, boolean isUpdate) {
    if (isUpdate) {
      jpaTagRepository.deleteTagsByColorId(colorId);
    }

    tags.forEach(tag -> {
      Long tagId;
      Optional<Tag> existingTag = jpaTagRepository.findByTagName(tag);
      if (existingTag.isEmpty()) {
        Tag newTag = new Tag();
        newTag.setTagName(tag);
        tagId = jpaTagRepository.save(newTag).getId();
      } else {
        tagId = existingTag.get().getId();
      }

      jpaTagRepository.insertIntoTagColor(tagId, colorId);
    });
  }
}
